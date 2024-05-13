/*
Clases fuertes y las clases debiles
1.Clase fuerte: Animal
2.Clase debil: Oviparos, viviparos
------------------------------------>
¿Encuentras alguna redundancia en los atributos y metodos de las clases fuertes con respecto a las clases debiles?
Sí. Las débiles o clases derivadas están creando nuevamente tanto las propiedades/estados como los comportamientos/métodos
Estás clases ya heredan lo anteriormente mencionado, de tal modo que, anexamos los métodos y propiedades neuvas especificas
de cada clase.
Ejemplo:
-------------------------------------- 
+ Animal - nombre,edad - Hacer ruido +
--------------------------------------
--------------------------------------------
+ Oviparos - tipo de huevo - Incubar huevo +
--------------------------------------------
------------------------------------
+ Viviparos - placenta - Amamantar +
------------------------------------
La clase principal "Animal", ya ofrece propiedades y métodos comunes a las demás clases/ hijos. Cada una tiene 
propiedades y métodos únicos. Sin embargo, tienen a disposición las propiedades y los métodos de su padre (Herencia)

CREACIÓN DE ENTIDADES ------------------->
ENTIDADES 
1.Animales
2.AnimalesNadadores
3.AnimalesConPlacentas
4.AnimalesAmamantadores
5.AnimalesIncubadoresHuevos
6.Ave
7.Pez
8.Felino
9.Paquidermo
-------------------->
- Polimorfismo
----------------------------->
PARTE 2-------------->
Código-


 */
