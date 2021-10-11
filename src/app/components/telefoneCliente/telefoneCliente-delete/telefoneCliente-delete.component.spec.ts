import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneClienteDeleteComponent } from './telefoneCliente-delete.component';

describe('TelefoneClienteDeleteComponent', () => {
  let component: TelefoneClienteDeleteComponent;
  let fixture: ComponentFixture<TelefoneClienteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneClienteDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneClienteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
