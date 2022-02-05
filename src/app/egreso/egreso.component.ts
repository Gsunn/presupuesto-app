import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  @Input() ingresoTotal: number

  egresos: Egreso[] = []

  constructor(private egresoService: EgresoService) { }

  ngOnInit(): void {
    this.egresos = this.egresoService.egresos
  }

  eliminarRegistro(egreso: Egreso){
    this.egresoService.eliminar(egreso)
  }

  calcularPorcentaje(egreso:number):number{
    return egreso / this.ingresoTotal 
  }

}
