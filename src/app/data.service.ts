import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private formData: any = {};
  private puntuacion: number = 0;

  constructor() {}

  setFormData(data: any) {
    this.formData = data;
  }

  getFormData() {
    return this.formData;
  }
  
  setPuntuacion(puntuacion: number) {
    this.puntuacion = puntuacion;
  }

  getPuntuacion(): number {
    return this.puntuacion;
  }
}
