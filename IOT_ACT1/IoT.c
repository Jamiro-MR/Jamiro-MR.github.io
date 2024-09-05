/*
Fecha de elaboración: Miércoles 14 de agosto de 2024
Desarrollado por: Gutierrez BEjarano Braulio Roberto

Este programa calcula la Raíz Cuadrática Media (RMS) para un conjunto de datos dado.
*/

#include <stdio.h>
#include <math.h> // Para usar la función sqrt

int main() {
    // Conjunto de datos proporcionado del documento de EXCEL
    double datos[] = {35.1162579629031, 68.8830178257162, 100.002641943528, 127.279220613579, 149.664530214458, 
                      166.298315852032, 176.541350472581, 180, 176.541350472581, 166.298315852032, 149.664530214458,
                      127.279220613579, 100.002641943528, 68.8830178257162, 35.1162579629032, 0.0000000000001019797,
                      -35.116257962903, -68.8830178257161, -100.002641943528, -127.279220613578, -149.664530214458,
                      -166.298315852032, -176.541350472581, -180, -176.541350472582, -166.298315852032, -149.664530214458,
                      -127.279220613579, -100.002641943529, -68.8830178257163, -35.1162579629033, -0.0000000000002039594
                     };
    int N = sizeof(datos) / sizeof(datos[0]); // Número de elementos en el conjunto de datos

    double suma = 0.0;

    // Calcular la suma de los cuadrados de los elementos
    for(int i = 0; i < N; i++) {
        suma += pow(datos[i], 2); // Sumar los cuadrados de los elementos
    }

    // Calcular la media cuadrática (RMS)
    double rms = sqrt(suma / N);

    // Mostrar el resultado
    printf("La Raíz Cuadrática Media (RMS) es: %.12f\n", rms);

    return 0;
}