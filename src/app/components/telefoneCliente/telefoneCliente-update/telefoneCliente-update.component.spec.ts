import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneClienteUpdateComponent } from './telefoneCliente-update.component';

describe('TelefoneClienteUpdateComponent', () => {
  let component: TelefoneClienteUpdateComponent;
  let fixture: ComponentFixture<TelefoneClienteUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneClienteUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneClienteUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
