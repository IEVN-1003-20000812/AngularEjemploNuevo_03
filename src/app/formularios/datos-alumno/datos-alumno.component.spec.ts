import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosAlumnoComponent } from './datos-alumno.component';

describe('DatosAlumnoComponent', () => {
  let component: DatosAlumnoComponent;
  let fixture: ComponentFixture<DatosAlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatosAlumnoComponent]
    });
    fixture = TestBed.createComponent(DatosAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
