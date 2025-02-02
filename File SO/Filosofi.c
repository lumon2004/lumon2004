#include <stdio.h>
#include <pthread.h>
#include <stdlib.h>
#include <unistd.h>

#define NUM_FILOSOFI 5
#define NUM_FORCHETTE NUM_FILOSOFI

// Struttura per le forchette
pthread_mutex_t forchette[NUM_FORCHETTE];

// Funzione per simulare il pensiero di un filosofo
void pensa(int id) {
    printf("Filosofo %d sta pensando...\n", id);
    sleep(rand() % 3); // Pensa per un tempo casuale
}

// Funzione per simulare il mangiare di un filosofo
void mangia(int id) {
    printf("Filosofo %d sta mangiando...\n", id);
    sleep(rand() % 3); // Mangia per un tempo casuale
}

// Funzione che rappresenta il comportamento di un filosofo
void *filosofo(void *arg) {
    int id = *(int *)arg;
    int forchetta_sx = id;
    int forchetta_dx = (id + 1) % NUM_FORCHETTE;

    while (1) {
        pensa(id);

        // Tenta di prendere le forchette (con gestione del deadlock)
        pthread_mutex_lock(&forchette[forchetta_sx]);
        printf("Filosofo %d ha preso la forchetta %d\n", id, forchetta_sx);

        // Verifica se la forchetta destra è disponibile
        if (pthread_mutex_trylock(&forchette[forchetta_dx]) == 0) {
            printf("Filosofo %d ha preso la forchetta %d\n", id, forchetta_dx);
            mangia(id);
            pthread_mutex_unlock(&forchette[forchetta_dx]);
            printf("Filosofo %d ha rilasciato la forchetta %d\n", id, forchetta_dx);
        } else {
            pthread_mutex_unlock(&forchette[forchetta_sx]);
            printf("Filosofo %d ha rilasciato la forchetta %d (forchetta %d non disponibile)\n", id, forchetta_sx, forchetta_dx);
            continue; // Torna a pensare e riprova
        }

        pthread_mutex_unlock(&forchette[forchetta_sx]);
        printf("Filosofo %d ha rilasciato la forchetta %d\n", id, forchetta_sx);
    }

    return NULL;
}

int main(int argv, char* argc[]) {
    pthread_t filosofi_thread[NUM_FILOSOFI];
    int filosofi_id[NUM_FILOSOFI];

    // Inizializza i mutex per le forchette
    for (int i=0; i<NUM_FORCHETTE; i++) {
        pthread_mutex_init(&forchette[i], NULL);
    }

    // Crea i thread per i filosofi
    for (int i=0; i<NUM_FILOSOFI; i++) {
        filosofi_id[i] = i;
        pthread_create(&filosofi_thread[i], NULL, filosofo, &filosofi_id[i]);
    }

    // Aspetta che i thread terminino (non succederà in questo caso, perché i filosofi "mangiano" e "pensano" all'infinito)
    for (int i=0; i<NUM_FILOSOFI; i++) {
        pthread_join(filosofi_thread[i], NULL);
    }

    // Distruggi i mutex
    for (int i=0; i<NUM_FORCHETTE; i++) {
        pthread_mutex_destroy(&forchette[i]);
    }

    return 0;
}