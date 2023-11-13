import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ExamenComponent } from './examen/examen.component';
import { ResultadosExamenComponent } from './resultados-examen/resultados-examen.component';

const routes:Routes=[
    { path: '', redirectTo: '/formulario', pathMatch: 'full' },
    { path: 'formulario', component: FormularioComponent },
    { path: 'examen', component: ExamenComponent },
    { path: 'resultados-examen', component: ResultadosExamenComponent, data: { nombreCompleto: 'John Doe', fechaNacimiento: '2000-01-01', puntuacion: 5 } }
];


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}