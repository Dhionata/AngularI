import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoUsuarioDeleteComponent } from './tipoUsuario-delete.component';

describe('TipoUsuarioDeleteComponent', () => {
  let component: TipoUsuarioDeleteComponent;
  let fixture: ComponentFixture<TipoUsuarioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TipoUsuarioDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoUsuarioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
