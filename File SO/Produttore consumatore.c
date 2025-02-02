#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <unistd.h>

#define SIZE 10

typedef struct stack {
    int* array;
    int capacita;
    int occupati;
} stack;

stack pila;
pthread_mutex_t lock = PTHREAD_MUTEX_INITIALIZER;

void init(void) {
    pila.array = (int *) calloc(SIZE, sizeof(int));
    pila.capacita = SIZE;
    pila.occupati = 0;
}

void push(int v) {
    if (pila.occupati < pila.capacita) {
        pila.array[pila.occupati] = v;
        pila.occupati++;
    }
}

int pop(void) {
    int ret = -1;
    if (pila.occupati > 0) {
        ret = pila.array[pila.occupati-1];
        pila.occupati--;
    }
    return ret;
}

void* produttore(void* arg) {
    while (1) {
        usleep(random() % (int) 1e6);
        pthread_mutex_lock(&lock);
        if (pila.occupati < pila.capacita) {
            int elementi = random() % (pila.capacita - pila.occupati);
            for (int i=0; i<elementi; i++) {
                int v = (int) random() % 10;
                push(v);
                printf("[Produttore] Inserito %d\n", v);
            }
        }
        pthread_mutex_unlock(&lock);
    }
}

void* consumatore(void* arg) {
    while(1) {
        usleep(random() % (int) 1e6);
        pthread_mutex_lock(&lock);
        if (pila.occupati > 0) {
            int elementi = random() % (pila.occupati);
            for (int i=0; i<elementi; i++) {
                int v = pop();
                printf("[Consumatore] Letto %d\n", v);
            }
        }
        pthread_mutex_unlock(&lock);
    }
}

int main(int argv, char *argc[]) {
    init();
    pthread_t prod, cons;
    
    pthread_create(&prod, NULL, produttore, NULL);
    pthread_create(&cons, NULL, consumatore, NULL);
    
    pthread_join(prod, NULL);
    pthread_join(cons, NULL);
}
