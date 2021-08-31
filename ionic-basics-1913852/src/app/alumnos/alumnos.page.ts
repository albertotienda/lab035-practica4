import { AlumnosService } from './alumnos.service';
import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[];
  constructor(private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnoService.getAlumnos();
    this.alumnoService.getPersonajes().subscribe((response: any)=>{
      console.log(response);
    });
  }

  ionViewWillEnter(){
    this.alumnos = this.alumnoService.getAlumnos();
  }

}
