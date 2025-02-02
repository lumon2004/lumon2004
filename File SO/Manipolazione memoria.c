#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

int main(int argv, char *argc[]) {
    int dimensione;
    printf("Quanto è lunga la tua sequenza? ");
    scanf("%d", &dimensione);
    int* array = (int*) malloc(dimensione * sizeof(int));
    for (int i=0; i<dimensione; i++) {
        array[i] = i+1;
    }
    int* yarra = (int*) malloc(dimensione * sizeof(int));
    for (int i = 0; i < dimensione / 2; i++) {
        int temp = array[i];
        yarra[i] = array[dimensione - i - 1];
        yarra[dimensione - i - 1] = temp;
    }
    printf("Ecco il tuo array iniziale: [");
    for (int i=0; i<dimensione; i++) {
        if (i == dimensione-1) {
            printf("%d]\n", array[i]);
            break;
        }
        printf("%d ", array[i]);
    }
    printf("Eseguo memset()…\n");
    memset(array, 0, dimensione * sizeof(int));
    sleep(2);
    printf("Ecco il tuo nuovo array: [");
    for (int i=0; i<dimensione; i++) {
        if (i == dimensione-1) {
            printf("%d]\n", array[i]);
            break;
        }
        printf("%d ", array[i]);
    }
    
    printf("Questo è yarra invece: [");
    for (int i=0; i<dimensione; i++) {
        if (i == dimensione-1) {
            printf("%d]\n", yarra[i]);
            break;
        }
        printf("%d ", yarra[i]);
    }
    
    printf("Eseguo memcpy()…\n");
    memcpy(array, yarra, dimensione * sizeof(int));
    sleep(2);
    
    printf("Ecco il tuo nuovo array: [");
    for (int i=0; i<dimensione; i++) {
        if (i == dimensione-1) {
            printf("%d]\n", array[i]);
            break;
        }
        printf("%d ", array[i]);
    }
    
    printf("Pulisco la memoria…\n");
    free(array);
    free(yarra);
    sleep(2);
    printf("Fatto!\n");
}
