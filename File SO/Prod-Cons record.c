/*Un file su disco ha il seguente formato:
<numero_record><record 1><record 2>…

dove:

-        <numero_record> è un intero rappresentante il numero di record attualmente presenti all’interno del file

-        <record1><record2>, …, sono ognuno un numero intero.

Il file è acceduto da due thread: un produttore ed un consumatore, ed è gestito come se fosse una pila: i nuovi elementi vengono accodati al termine del file, e la lettura (con contestuale rimozione) degli elementi avviene dall’ultimo elemento del file. Il file non deve contenere più di 10 record oltre all’indicatore iniziale del numero di record presenti.

I due thread, produttore e consumatore, hanno il seguente comportamento:

1)     Il produttore, in un ciclo infinito:

Deve attendere una quantità di tempo casuale inferiore al secondo
Una volta scaduta l’attesa, se la pila contenuta nel file è piena, deve attendere che qualche elemento venga rimosso dal consumatore
Quando si libera dello spazio nella pila, deve inserire un numero casuale di elementi (senza andare in overflow rispetto alle dimensioni della pila) ed aggiornare il contatore all’inizio del file
2)     Il consumatore, in un ciclo infinito:

Deve attendere una quantità di tempo casuale inferiore al secondo
Una volta scaduta l’attesa, se la pila è vuota, deve attendere che qualche elemento venga inserito dal produttore
Quando la pila non è vuota, deve leggere un numero casuale di elementi (inferiore o uguale al numero di elementi presenti nello stack), sostituirne il valore con il numero 0 ed aggiornare il valore all’inizio del file.
 

Suggerimento

Quando si esegue una read() o una write() su un file, viene spostato un cursore in avanti del numero di byte letti o scritti sul file. Ad esempio, se un file contenesse la stringa “ciaopino” e venisse effettuata una read() di 4 byte, questa leggerebbe “ciao”. Un’eventuale seconda read() di 4 byte leggerebbe invece “pino”. Allo stesso modo, se si eseguisse una prima lettura di 4 byte e successivamente una scrittura di 4 byte della stringa “anno”, il file conterrebbe la stringa “ciaoanno” al termine dell’esecuzione delle read() e delle write().
E’ possibile spostare il cursore anche senza necessariamente effettuare una read() o una write(), utilizzando la funzione lseek() – usa il manuale per scoprire come usare lseek().
*/


#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <time.h>
#include <fcntl.h>
#include <unistd.h>

#define SIZE 10
const char *file="stack.txt";
int fd;
int numvalori=0;
int num;
int zero=0;
pthread_mutex_t lock=PTHREAD_MUTEX_INITIALIZER;

void *produttore(void *arg){
	while(1){
		usleep(rand()%1000000);
		pthread_mutex_lock(&lock);
		lseek(fd,0,SEEK_SET);
		read(fd,&numvalori,sizeof(int));

		num=rand()%10;
		lseek(fd,(1+numvalori)*sizeof(int),SEEK_SET);
		for (int i = 0; i < num; ++i)
		{
			if (numvalori>=SIZE)
			{
				break;
			}else{
				int val=rand()%100;
				printf("scrivo %d\n",val);
				write(fd,&val,sizeof(int));
				numvalori++;
			}
		}
		lseek(fd,0,SEEK_SET);
		write(fd,&numvalori,sizeof(int));
		pthread_mutex_unlock(&lock);
	}
	return 0;
	
}

void *consumatore(void *arg){
	while(1){
		usleep(rand()%1000000);
		pthread_mutex_lock(&lock);
		lseek(fd,0,SEEK_SET);
		read(fd,&numvalori,sizeof(int));

		num=rand()%10;
		for (int i = 0; i < num; ++i)
		{
			if (numvalori<=0)
			{
				break;
			}else{
				int val;
				lseek(fd,numvalori*sizeof(int),SEEK_SET);
				read(fd,&val,sizeof(int));
				lseek(fd,numvalori*sizeof(int),SEEK_SET);
				write(fd,&zero,sizeof(int));
				printf("leggo %d\n",val );
				numvalori--;
			}
		}
		
		
		lseek(fd,0,SEEK_SET);
		write(fd,&numvalori,sizeof(int));
		pthread_mutex_unlock(&lock);
	}
	
}


int main(int argc, char const *argv[])
{
	srand(time(NULL));
	fd=open(file,O_TRUNC|O_CREAT|O_RDWR,0700);
	write(fd,&zero,sizeof(int));

	pthread_t prod,cons;

	pthread_create(&prod,NULL,produttore,NULL);
	pthread_create(&cons,NULL,consumatore,NULL);

	pthread_join(prod,NULL);
	pthread_join(cons,NULL);

	return 0;
}

