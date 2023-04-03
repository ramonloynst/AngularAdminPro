import { Component } from '@angular/core';
import { MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  title1 : string = "Ventas";
  title2 : string = "Compras";
  title3 : string = "Clientes";
  title4 : string = "Empleados";

  lb1 : string[] = [ 'Enero', 'Febrero', 'Marzo' ];
  lb2 : string[] = [ 'Enero', 'Febrero', 'Marzo' ];
  lb3 : string[] = [ 'Febrero', 'Marzo', 'Abril' ];
  lb4 : string[] = [ 'Marzo', 'Abril', 'Mayo' ];

  datos1: MultiDataSet = [ [50, 100, 100] ];
  datos2: MultiDataSet = [ [150, 100, 100] ];
  datos3: MultiDataSet = [ [30, 100, 100] ];
  datos4: MultiDataSet = [ [200, 100, 100] ];
  
}
