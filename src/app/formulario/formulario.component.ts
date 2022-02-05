import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egreso/egreso.model';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoService } from '../ingreso/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  tipo:string = 'ingreso'
  descripcionForm:string
  valorForm:number

  constructor(private ingresoService: IngresoService,
              private egresoService: EgresoService) { }

  ngOnInit(): void {
  }

  tipoOperacion(operacion:string):void{
    this.tipo = operacion
  }

  agregarValor(e:Event):void{
    e.preventDefault()
    if(this.descripcionForm === '' || this.valorForm === undefined ) {
      console.log('Campos vacios');
      return
    }

    if(this.tipo === 'ingreso'){
      const ing: Ingreso = new Ingreso(this.descripcionForm, this.valorForm)
      this.ingresoService.ingresos.push(ing)
    }else{
      const egr: Egreso = new Egreso(this.descripcionForm, this.valorForm)
      this.egresoService.egresos.push(egr)
    }
  }

}
