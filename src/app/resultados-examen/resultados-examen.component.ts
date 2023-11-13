import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultados-examen',
  templateUrl: './resultados-examen.component.html',
  styleUrls: ['./resultados-examen.component.css']
})
export class ResultadosExamenComponent implements OnInit {
  nombreCompleto: string = '';
  edad: number = 0;
  signoChino: string = '';
  imagenSignoChino: string = '';
  puntuacion: number = 0;

  signosChinos = {
    Rata: [2020, 2008, 1996, 1984, 1972, 1960,],
    Búfalo: [2021, 2009, 1997, 1985, 1973, 1961],
    Tigre: [2022, 2010, 1998, 1986, 1974, 1962,1950],
    Conejo: [2023, 2011, 1999, 1987, 1975, 1963,1951],
    Dragón: [2024, 2012, 2000, 1988, 1976, 1964,1952],
    Serpiente: [2025, 2013, 2001, 1989, 1977, 1965,1953],
    Caballo: [2026, 2014, 2002, 1990, 1978, 1966,1954],
    Cabra: [2027, 2015, 2003, 1991, 1979, 1967,1955],
    Mono: [2028, 2016, 2004, 1992, 1980, 1968,1956],
    Gallo: [2029, 2017, 2005, 1993, 1981, 1969,1957],
    Perro: [2030, 2018, 2006, 1994, 1982, 1970,1958],
    Cerdo: [2031, 2019, 2007, 1995, 1983, 1971,1959]
  };

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    const formData = this.dataService.getFormData();
    this.nombreCompleto = `${formData.nombre} ${formData.apaterno} ${formData.amaterno}`;
    this.edad = new Date().getFullYear() - parseInt(formData.ano, 10);
    this.signoChino = this.calcularSignoChino(parseInt(formData.ano, 10));
    this.imagenSignoChino = this.obtenerImagenSignoChino(this.signoChino);
    this.puntuacion = this.dataService.getPuntuacion();
  }

  private calcularSignoChino(year: number): string {
    for (const signo in this.signosChinos) {
      if (this.signosChinos[signo as keyof typeof this.signosChinos].includes(year)) {
        return signo;
      }
    }
    return 'Desconocido';
  }

  irAInicio() {
    this.router.navigate(['/formulario']);
  }

  private obtenerImagenSignoChino(signo: string): string {
    switch (signo) {
      case 'Rata':
        return 'https://www.clarin.com/img/westernastrology/rata.svg';
      case 'Búfalo':
        return 'https://www.clarin.com/img/westernastrology/bufalo.svg';
      case 'Tigre':
        return 'https://www.clarin.com/img/westernastrology/tigre.svg';
      case 'Conejo':
        return 'https://www.clarin.com/img/westernastrology/conejo.svg';
      case 'Dragón':
        return 'https://www.clarin.com/img/westernastrology/dragon.svg';
      case 'Serpiente':
        return 'https://www.clarin.com/img/westernastrology/serpiente.svg';
      case 'Caballo':
        return 'https://www.clarin.com/img/westernastrology/caballo.svg';
      case 'Cabra':
        return 'https://www.clarin.com/img/westernastrology/cabra.svg';
      case 'Mono':
        return 'https://www.clarin.com/img/westernastrology/mono.svg';
      case 'Gallo':
        return 'https://www.clarin.com/img/westernastrology/gallo.svg';
      case 'Perro':
        return 'https://www.clarin.com/img/westernastrology/perro.svg';
      case 'Cerdo':
        return 'https://www.clarin.com/img/westernastrology/chancho.svg';
      default:
        return 'https://w7.pngwing.com/pngs/63/418/png-transparent-forbidden-interdiction-prohibition-prohibited-no-don-t-do-not-ban-warning-banned.png';
    }
  }
}
