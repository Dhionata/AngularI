import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioUpdateComponent } from './tipoUsuario-update.component';

describe('TipoUsuarioUpdateComponent', () => {
  let component: TipoUsuarioUpdateComponent;
  let fixture: ComponentFixture<TipoUsuarioUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoUsuarioUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
