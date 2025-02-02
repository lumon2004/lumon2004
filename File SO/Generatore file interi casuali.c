#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argv, char* argc[]) {
    int numero_righe = 100; // Numero di righe desiderato
    const char *nome_file = "numeri_casuali.txt"; // Nome del file di output

    // Inizializza il generatore di numeri casuali con un seme basato sul tempo
    srand((int) time(NULL));

    // Apri il file in modalità scrittura
    FILE *file = fopen(nome_file, "w");

    if (file == NULL) {
        perror("Errore nell'apertura del file");
        return 1; // Indica un errore
    } else {
        // Scrivi i numeri casuali nel file, uno per riga
        for (int i = 0; i < numero_righe; i++) {
            int numero_casuale = rand() % 101; // Genera numeri casuali tra 0 e 100
            fprintf(file, "%d\n", numero_casuale);
        }
        // Chiudi il file
        fclose(file);
        printf("File '%s' generato con successo.\n", nome_file);
    }

    return 0; // Indica successo
}