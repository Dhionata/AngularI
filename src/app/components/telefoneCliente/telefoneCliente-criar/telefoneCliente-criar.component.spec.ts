import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneClienteCreateComponent } from './telefoneCliente-criar.component';

describe('TelefoneClienteCreateComponent', () => {
  let component: TelefoneClienteCreateComponent;
  let fixture: ComponentFixture<TelefoneClienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneClienteCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
