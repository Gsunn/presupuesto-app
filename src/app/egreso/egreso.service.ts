import { Egreso } from "./egreso.model";

export class EgresoService{
    egresos: Egreso [] = [
        new Egreso("Renta depto", 900),
        new Egreso("Ropa", 200)
    ]

    eliminar(egreso:Egreso){
        const indice = this.egresos.indexOf(egreso)
        this.egresos.splice(indice, 1)
    }
}