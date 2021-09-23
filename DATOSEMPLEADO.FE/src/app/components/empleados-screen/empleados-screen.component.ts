import { Component, OnInit } from '@angular/core';
import { Colaborador } from '../../interfaces/colaboradores';
import { EmpleadosService } from '../../services/empleados.service';
import Swal from 'sweetalert2';
import "animate.css"


const ELEMENT_DATA: Colaborador[] = [
  //{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //{position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
];

@Component({
  selector: 'app-empleados-screen',
  templateUrl: './empleados-screen.component.html',
  styleUrls: ['./empleados-screen.component.css']
})
export class EmpleadosScreenComponent implements OnInit {

  displayedColumns: string[] = ['idcolaborador','nombre', 'apellido', 'direccion', 'edad', 'profesion', 'estadoCivil', 'nivel'];
  dataSource = ELEMENT_DATA;

  colaboradores:Colaborador[]=[];


  constructor(private empleadoService:EmpleadosService) { }

  ngOnInit(): void {
  }

  getColaboradores() {
    this.empleadoService.getColaboradores().subscribe(
      res =>{

        if( res ){
          let aux = res;
          this.colaboradores = aux['data'];
        
          this.dataSource = this.colaboradores;
          // console.log(this.dataSource);

          Swal.fire(
            'Success',
            'Datos de empleados cargados correctamente',
            'success'
          )

        }
        
      },
      err =>{
        console.error(err);
        Swal.fire(
          'Error',
          'Hubo un error al cargar los datos',
          'error'
        )
        
      }
    )
  }

  verRiesgo(id:number){
    console.log(id);
    let level = '';

    this.colaboradores.forEach(e => {
      if(e.idcolaborador == id){
        // console.log('edad',e.edad);
        level = this.getRiesgoporEdad(Number(e.edad))
      }
      
    });


    Swal.fire({
      title: `${ level }`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }


  getRiesgoporEdad(edad:number){

    if(edad >= 18 && edad <= 25 ){
      return 'FUERA DE PELIGRO';
    }else if(edad >= 26 && edad <= 50){
      return 'TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENCIÓN';
    }else if(edad >= 51 ){
      return 'POR FAVOR QUEDARSE EN CASA';
    }else{
      return 'Its a baby';
    }

  }

}
