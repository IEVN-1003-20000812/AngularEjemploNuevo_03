import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';

  dias: string[] = Array.from({ length: 31 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  meses: string[] = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  anos: string[] = Array.from({ length: 73 }, (_, i) => (1950 + i).toString());

  dia: string = this.dias[0];
  mes: string = this.meses[0];
  ano: string = this.anos[0];

  sexo: string = '';

  limpiar() {
    location.reload();
  }

  constructor(private router: Router, private dataService: DataService) {}

  siguiente() {

    if (!this.nombre || !this.apaterno || !this.amaterno || !this.dia || !this.mes || !this.ano || !this.sexo) {
      alert('Por favor, complete todos los campos antes de continuar.');
      return;
    }

    const formData = {
      nombre: this.nombre,
      apaterno: this.apaterno,
      amaterno: this.amaterno,
      dia: this.dia,
      mes: this.mes,
      ano: this.ano,
      sexo: this.sexo
    };

    this.dataService.setFormData(formData);

    this.router.navigate(['/examen']);

  }
}
