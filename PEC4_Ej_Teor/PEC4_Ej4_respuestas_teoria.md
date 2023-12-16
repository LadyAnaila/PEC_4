# Ejercicio 4 – Directivas de atributo y directivas estructurales

## 1. Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:
ngFor es una directiva estructural en Angular que se utiliza para realizar la iteración sobre elementos en una colección, como un array o una lista. Lo hacemos mediante las siguientes variables: 
* index: Es el índice del elemento actual en la iteración. Para operar sobre él utilizamos la letra i. 
* even: Será verdadera cuando el índice del elemento sobre el que estamos iterando tiene un valor par. 
* odd: Será verdadera cuando el índice del elemento sobre el que estamos iterando tiene un valor impar. 
* first: Será verdadera cuando el elemento sobre el que estamos iterando sea el primero de la iteración. 
* last: Será verdadera cuando el elemento sobre el que estamos iterando sea el últimmo de la iteración. 

## 2. ¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.
Esta opción nos sirve para poder usar funciones para modificar la iteración sobre el array de items. No lo itera como tal, sino que solo lo modifica según los cambios indicados, por lo tanto mejora el rendimiento de nuestra aplicación.
Ejemplo:
<ng-template ngFor let-item [ngForOf]="items" let-i="index" [ngForTrackBy]="trackByItems">
({{i}}) {{item.name}}

Y en nuestro TS indicamos: 
trackByItems(index:number, item:any): number{return item.id};


## 3. ¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es

No, Angular no permite que ejecutemos dos directivcas estructurales simultáneamente. Esto sucede porque al hacerlo estamos modificando el DOM. Si se crearan dos a la vez podrían darse situaciones de contradicción en la construcción del DOM, por lo que se deben ejecutar en orden. 

