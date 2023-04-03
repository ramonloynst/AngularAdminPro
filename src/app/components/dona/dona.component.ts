import { Component, Input } from '@angular/core';
import { MultiDataSet, Label, Color  } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  //styleUrls: ['./dona.component.css']
})
export class DonaComponent {

 @Input ('titulo') title: string = "Sin Titulo";

 @Input ('labels') public doughnutChartLabels: Label[] = [ 'Label 1', 'Label 2', 'Label 3' ];
 
 @Input ('data') public doughnutChartData: MultiDataSet = [ [100, 100, 100] ];

 @Input ('colors') public colors: Color [] = [{ backgroundColor: ['#0089E1','#00A0E1','#1464FA']}];
 
    
}
