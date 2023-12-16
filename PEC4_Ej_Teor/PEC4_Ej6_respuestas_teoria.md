# Ejercicio 6 – Teoría de componentes.

## 1. ¿Cuáles son los style encapsulation de los componentes? Pon un ejemplo de uso de cada uno de ellos.
* ShadowDom: Sirve para ocultar los componentes del dom. 
@Component({
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <h2>Shadow DOM</h2>
    <div class="shadow-message">Shadow DOM encapsulation</div>
    <app-emulated-encapsulation></app-emulated-encapsulation>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .shadow-message { color: blue; }'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowDomEncapsulationComponent { }

* Emulated: Nos permite cambiar el estilo del componente específico sobre el que estamos trabajando sin afectar a otros elementos. 
@Component({
  selector: 'app-emulated-encapsulation',
  template: `
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation</div>
    <app-no-encapsulation></app-no-encapsulation>
  `,
  styles: ['h2, .emulated-message { color: green; }'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EmulatedEncapsulationComponent { }

* None: Incluye los estilos directamente en nuestra aplicación, como si los pasáramos por el HTML.



    @Component({
      selector: 'app-no-encapsulation',
      template: `<h2>None</h2><div class="none-message">No encapsulation</div>`,
      styles: ['h2, .none-message { color: red; }'],
      encapsulation: ViewEncapsulation.None,
    })
    export class NoEncapsulationComponent { }


## 2. ¿Qué es el shadow DOM?
El shadow DOM es una API que nos permite mantener separadas la estructura, el comportamiento y las vistas (los estilos) de nuestro proyecto para mejorar el rendimiento a la hora de ejecutarse y también para evitar posibles conflictos de nuestro código. 

## 3. ¿Qué es el changeDetection?
changeDetection es una herramienta que incorpora Angular para actualizar la vista de la página al detectar los cambios en el código. 

## 4. ¿Qué diferencias existen entre las estrategias Default y OnPush? ¿Cuándo debes usar una y otra? Ventajas e inconvenientes.
La estrategia de detección de cambios predeterminada (Default) de Angular realiza la detección de cambios en todos los componentes después de cualquier evento del navegador o de los controles del usuarios. Por otra parte, la estrategia OnPush se aplica a componentes específicos y solo realiza la detección de cambios sobre los componentes en los cuales se detectan los cambios.

La estrategia Default tiene la ventaja de ser automática, por lo que es más sencilla de usar. Pero al hacerse todo el tiempo puede afectar al rendimiento, por lo que resulta más adecuada para aplicaciones pequeñas, que tienen un número limitado de componentes. 
Por otra parte, la estrategia OnPush reduce la frecuencia de detección de cambios, por lo que el rendimiento es mejor en este caso, al no tener que operar sobre toda la aplicación. No onstante también resulta más compleja de usar, ya que no se actualiza automáticamente. 

## 5. Explica con detalle el ciclo de vida de los componentes. Haz hincapié en cuándo se disparan los hooks OnChanges, OnInit, AfterViewInit y OnDestroy, puesto que son los más utilizados. 

El ciclo de vida de los componentes de Angular va desde que se crea la instancia del componente hasta que Angular destruye la instancia del componente y elimina su plantilla renderizada del DOM. Entre estos dos puntos se llevan a cabo diferentes procesos, como la creación de las vistas o la actualización de la instancia siempre que se produzcan cambios. 

* ngOnChanges(): Este hook se activa cuando las propiedades de entrada vinculadas a datos se establecen o se reinician. Recibe un objeto SimpleChanges que contiene los valores actuales y anteriores de las propiedades.

* ngOnInit(): Se ejecuta después de que Angular haya mostrado las propiedades vinculadas a los datos y haya establecido las propiedades de entrada del componente.

* ngAfterViewInit(): Este hook se activa después de que Angular haya inicializado las vistas. Sirve para llevar a cabo acciones que requieran acceso a la vista, como por ejemplo, modificaciones en el DOM. 

* ngOnDestroy(): Se dispara justo antes de que Angular destruya el componente. Sirve para limpiar los recursos que no se van a usar. 