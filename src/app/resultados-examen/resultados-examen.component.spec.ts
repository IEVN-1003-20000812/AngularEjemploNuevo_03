import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosExamenComponent } from './resultados-examen.component';

describe('ResultadosExamenComponent', () => {
  let component: ResultadosExamenComponent;
  let fixture: ComponentFixture<ResultadosExamenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosExamenComponent]
    });
    fixture = TestBed.createComponent(ResultadosExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
