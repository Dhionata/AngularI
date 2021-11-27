import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioLerComponent } from './tipoUsuario-ler.component';

describe('TipoUsuarioLerComponent', () => {
  let component: TipoUsuarioLerComponent;
  let fixture: ComponentFixture<TipoUsuarioLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoUsuarioLerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
