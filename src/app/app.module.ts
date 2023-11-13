import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ExamenComponent } from './examen/examen.component';
import { ResultadosExamenComponent } from './resultados-examen/resultados-examen.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ExamenComponent,
    ResultadosExamenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    DataService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
