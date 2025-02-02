#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/mman.h>
#include <string.h>

#define MIN_ALLOC_SIZE 16

typedef struct block_meta {
    size_t size;                            // dimensione del blocco (inclusa la metadata)
    int free;                               // flag per indicare se il blocco è libero o allocato
    struct block_meta *next;                // puntatore al blocco successivo nella lista
} block_meta;

static block_meta *head = NULL;             // puntatore alla testa della lista di blocchi

void *my_malloc(size_t size) {
    if (size == 0) {
        return NULL;
    }
    
    /* aggiungi la dimensione della metadata */
    size_t total_size = size + sizeof(block_meta);
    
    /* allinea la dimensione a un multiplo di MIN_ALLOC_SIZE per evitare frammentazione interna */
    if (total_size < MIN_ALLOC_SIZE) {
        total_size = MIN_ALLOC_SIZE;
    }
    
    /* cerca un blocco libero sufficientemente grande */
    block_meta *block = head;
    while (block != NULL) {
        if (block->free && block->size >= total_size) {
            block->free = 0;
            return (void*) (block+1);
        }
        block = block->next;
    }
    
    /* Nessun blocco libero trovato, alloca nuova memoria con mmap() */
    block = mmap(NULL, total_size, PROT_READ | PROT_WRITE, MAP_PRIVATE | MAP_ANONYMOUS, -1, 0);
    if (block == MAP_FAILED) {
        perror("mmap() failed.\n");
        return NULL;
    }
    
    block->size = total_size;
    block->free = 0;
    block->next = head;
    head = block;
    
    return (void*) (block+1);
}

void my_free(void *ptr) {
    if (ptr == NULL) {
        return;
    }
    block_meta *block = (block_meta*)ptr - 1;
    block->free = 1;
    
    /* Coalescing (fusione) con blocchi adiacenti liberi (ottimizzazione) */
    block_meta *current = head;
    while (current != NULL) {
        if (current->free && current->next && current->next->free) {
            current->size += current->next->size;
            current->next = current->next->next;
        }
        current = current->next;
    }
}

int main(int argv, char* argc[]) {
    int* numbers = (int*) my_malloc(5*sizeof(int));
    if (numbers == NULL) {
        return 1;
    }
    
    for (int i=0; i<5; i++) {
        numbers[i] = i*10;
    }
    
    for (int i=0; i<5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\n");
    
    my_free(numbers);
    
    char *stringa = (char*) my_malloc(10);
    if (stringa == NULL) {
        return 1;
    }
    strcpy(stringa, "Ciao");
    printf("%s\n", stringa);
    my_free(stringa);
    
    return 0;
}