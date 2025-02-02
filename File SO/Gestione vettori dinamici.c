#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

typedef struct {
    int *data;
    int size;
    int capacity;
} VettoreDinamico;

void print(VettoreDinamico* array) {
    if (array->size > 0) {
        printf("Vettore dinamico: [");
        for (int i=0; i<array->size; i++) {
            if (i == array->size-1) {
                printf("%d]\n", array->data[i]);
                break;
            }
            printf("%d ", array->data[i]);
        }
    }
}

void add(VettoreDinamico* array, int value) {
    if (array->size == array->capacity) {
        array->capacity *= 2;       // raddoppio la capacità del vettore dinamico
        array->data = (int*) realloc(array->data, array->capacity * sizeof(int));
        if (array->data == NULL) {
            perror("Reallocazione di memoria fallita.\n");
            exit(-2);
        }
    }
    array->data[array->size] = value;
    array->size++;
}

void removeElement(VettoreDinamico* array, int index) {
    if (index < 0 || index == array->size) {
        perror("Indice non valido\n");
        exit(-1);
    }
    
    int removingValue = array->data[index];
    for (int i=index; i<array->size; i++) {
        array->data[i] = array->data[i+1];
    }
    
    array->size--;
    printf("Elemento {%d} rimosso.\n", removingValue);
    print(array);
}

int main(int argc, char* argv[]) {
    /* CONFIGURAZIONE INIZIALE DEL VETTORE DINAMICO */
    VettoreDinamico *array = (VettoreDinamico*) malloc(sizeof(VettoreDinamico));
    
    if (array == NULL) {
        perror("Allocazione di memoria fallita.\n");
        exit(-1);
    }
    
    int initial;
    printf("Indica la capacità iniziale del tuo vettore: ");
    scanf("%d", &initial);
    array->data = (int*) malloc(initial * sizeof(int));
    
    if (array->data == NULL) {
        perror("Allocazione di memoria fallita.\n");
        free(array);
        exit(-1);
    }
    
    array->size = 0;
    array->capacity = initial;
    
    /* INSERIMENTO VALORI */
    int dimensione;
    printf("Quanti elementi vuoi inserire nel tuo vettore? ");
    scanf("%d", &dimensione);
    for (int i=1; i<=dimensione; i++) {
        add(array, i);
    }
    print(array);
    
    /* RIMOZIONE ELEMENTO */
    int answer;
    printf("Vuoi rimuovere un elemento? [0=no, 1=si] ");
    scanf("%d", &answer);
    if (answer) {
        int index;
        printf("Quale? ");
        scanf("%d", &index);
        index -= 1;         // correzione dovuta alla notazione
        removeElement(array, index);
        while (answer) {
            printf("Vuoi rimuovere un altro elemento? [0=no, 1=si] ");
            scanf("%d", &answer);
            if (answer) {
                printf("Quale? ");
                scanf("%d", &index);
                index -= 1;         // correzione dovuta alla notazione
                removeElement(array, index);
            } else {
                break;
            }
        }
    }
    
    /* FREE MEMORY */
    printf("Pulisco la memoria…\n");
    sleep(2);
    free(array->data);
    free(array);
    printf("Memoria pulita!\n");
}
