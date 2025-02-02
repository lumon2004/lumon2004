/* Scrivi un programma che legge una serie di numeri interi da un file di testo (un numero per riga), li somma e scrive il risultato in un nuovo file, sempre in formato testo. */

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MAX_NUMERI 100 // Definisce una costante per la dimensione massima dell'array

int main(int argv, char* argc[]) {
    srand((int) time(NULL)); // Inizializza il generatore di numeri casuali

    const char *nome_file_input = "numeri_casuali.txt";
    const char *nome_file_output = "somma.txt";
    int numeri[MAX_NUMERI];
    int numero_letti = 0;
    int somma = 0;

    // Apertura file input
    FILE *file_input = fopen(nome_file_input, "r");
    if (file_input == NULL) {
        perror("Errore apertura file input");
        return 1;
    } else {
        // Lettura numeri dal file
        while (numero_letti < 4 && fscanf(file_input, "%d", &numeri[numero_letti]) == 1) {
            numero_letti++;
        }
        fclose(file_input); // Importante chiudere il file!
    }

    // Apertura file output
    FILE *file_output = fopen(nome_file_output, "w");
    if (file_output == NULL) {
        perror("Errore apertura file output");
        return 1;
    } else {
        // Calcolo della somma e scrittura nel file
        for (int i = 0; i < numero_letti; i++) {
            somma += numeri[i];
        }
        fprintf(file_output, "%d\n", somma); // Aggiunto un newline per formattazione
        fclose(file_output); // Chiudi anche il file di output
        printf("Somma calcolata e scritta nel file %s\n", nome_file_output);
    }

    return 0;
}