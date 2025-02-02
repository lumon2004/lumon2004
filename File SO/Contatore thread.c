/* Scrivi un programma che crea un numero specifico di thread. Ogni thread deve incrementare un contatore condiviso (protetto da un mutex) e stampare il proprio ID */

#include <stdio.h>
#include <pthread.h>

typedef struct contatore {
    int count;
    pthread_mutex_t mutex;
} Contatore;

Contatore c;

#define LIMITE 5

void* stampa(void* arg) {
    int id = *(int*) arg;
    pthread_mutex_lock(&c.mutex);
    c.count++;
    printf("Thread %d: %d\n", id, c.count);
    pthread_mutex_unlock(&c.mutex);
    return NULL;
}

int main(int argv, char* argc[]) {
    pthread_mutex_init(&c.mutex, NULL);
    pthread_t thread[3];
    int k = 0;
    while (k < LIMITE) {
        for (int i=0; i<3; i++) {
            pthread_create(&thread[i], NULL, stampa, &i);
        }
        k++;
    }
    for (int i=0; i<3; i++) {
        pthread_join(thread[i], NULL);
    }
    pthread_mutex_destroy(&c.mutex);
    return 0;
}