import { Component } from '@angular/core';
import { Egreso } from './egreso/egreso.model';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso [] = []
  egresos: Egreso [] = []

  constructor(private ingresoService: IngresoService, 
              private egresoService: EgresoService){
                this.ingresos = this.ingresoService.ingresos
                this.egresos = this.egresoService.egresos
              }

  getIngresoTotal():number{
    let ingresoTotal:number = 0
    this.ingresos.forEach( i => {
      ingresoTotal += i.valor
    })
    return ingresoTotal
  }

  getEgresoTotal():number{
    let egresoTotal:number = 0
    this.egresos.forEach(e=>{
      egresoTotal += e.valor
    })
    return egresoTotal
  }

  getPorcentajeTotal():number{
    return this.getEgresoTotal()/this.getIngresoTotal()
  }

  getPresupuestoTotal():number{
    return Math.round(this.getIngresoTotal() - this.getEgresoTotal())
  }
  
}
