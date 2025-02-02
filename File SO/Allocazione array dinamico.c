#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char* argv[]) {
    int dimensione;
    int *array;
    printf("Inserisci la dimensione dell'array: ");
    scanf("%d", &dimensione);
    
    if (dimensione < 0) {
        perror("Dimensione non valida\n");
        exit(1);
    }
    
    array = (int *) malloc(dimensione * sizeof(int));
    if (array == NULL) {
        perror("Allocazione dinamica di memoria fallita\n");
        exit(1);
    }
    
    srand((int) time(NULL));
    printf("Array generato: ");
    for (int i=0; i<dimensione; i++) {
        array[i] = rand() % 100;
        printf("%d ", array[i]);
    }
    printf("\n");
    free(array);
    array = NULL;
    printf("Memoria liberata.\n");
    return 0;
}
