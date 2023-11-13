import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';  

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent {
  preguntas = [
    {
      enunciado: '¿Cuánto es 2 + 2?',
      opciones: [
        { letra: 'a', texto: '3' },
        { letra: 'b', texto: '4' },
        { letra: 'c', texto: '8' },
        { letra: 'd', texto: '1' }
      ],
      respuestaCorrecta: 'b',
      respuesta: ''
    },
    {
      enunciado: '¿Cuánto es 2 - 1',
      opciones: [
        { letra: 'a', texto: '1' },
        { letra: 'b', texto: '10' },
        { letra: 'c', texto: '21' },
        { letra: 'd', texto: '3' }
      ],
      respuestaCorrecta: 'a',
      respuesta: ''
    },
    {
      enunciado: '¿Cuánto es 2 * 5?',
      opciones: [
        { letra: 'a', texto: '7' },
        { letra: 'b', texto: '15' },
        { letra: 'c', texto: '10' },
        { letra: 'd', texto: '20' }
      ],
      respuestaCorrecta: 'c',
      respuesta: ''
    },
    {
      enunciado: '¿Cuánto es 10 / 2?',
      opciones: [
        { letra: 'a', texto: '3' },
        { letra: 'b', texto: '10' },
        { letra: 'c', texto: '5' },
        { letra: 'd', texto: '8' }
      ],
      respuestaCorrecta: 'c',
      respuesta: ''
    },
    {
      enunciado: '¿Cuánto es 4 al cuadrado?',
      opciones: [
        { letra: 'a', texto: '28' },
        { letra: 'b', texto: '14' },
        { letra: 'c', texto: '12' },
        { letra: 'd', texto: '16' }
      ],
      respuestaCorrecta: 'd',
      respuesta: ''
    },
    
  ];

  constructor(private router: Router, private dataService: DataService) {}

  verPuntuacion() {
    // Calcular la puntuación y enviarla al componente de resultados-examen
    const puntuacion = this.calcularPuntuacion();
    this.dataService.setPuntuacion(puntuacion);
    this.router.navigate(['/resultados-examen']);
  }
  
  private calcularPuntuacion(): number {
    let aciertos = 0;
  
    for (const pregunta of this.preguntas) {
      if (pregunta.respuesta === pregunta.respuestaCorrecta) {
        aciertos++;
      }
    }
  
    return aciertos;
  }

}
