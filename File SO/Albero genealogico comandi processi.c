/* Scrivi un programma che crea un processo figlio utilizzando fork. Il processo padre deve attendere la terminazione del figlio utilizzando wait e stampare il codice di uscita. */
/* Modifica il programma precedente per creare più processi figli. Ogni figlio deve eseguire un comando diverso (ad esempio ls, pwd, date) */ 

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main(int argv, char* argc[]) {
    int a = fork();
    if (a < 0) {
        perror("fork(0) failed\n");
        return 1;
    } else if (a == 0) {
        /* processo figlio */
        execlp("date", "date", "+%Y-%m-%d", NULL); // Aggiunto NULL
        perror("execlp date failed\n"); // Gestione errore execlp
        exit(1); // Importante: il figlio deve uscire in caso di errore
    } else {
        wait(NULL);
        int b = fork();
        if (b < 0) {
            perror("fork(1) failed\n");
            return 1;
        } else if (b == 0) {
            /* processo nipote */
            execlp("pwd", "pwd", NULL);
            perror("execlp pwd failed\n"); // Gestione errore execlp
            exit(1); // Importante: il figlio deve uscire in caso di errore
        } else {
            wait(NULL);
            int c = fork();
            if (c < 0) {
                perror("fork(2) failed\n");
                return 1;
            } else if (c == 0) {
                /* processo pro-nipote */
                execlp("ls", "ls", NULL);
                perror("execlp ls failed\n"); // Gestione errore execlp
                exit(1); // Importante: il figlio deve uscire in caso di errore
            } else {
                wait(NULL);
            }
        }
    }
    wait(NULL);
    printf("Processo padre\n");
    return 0;
}