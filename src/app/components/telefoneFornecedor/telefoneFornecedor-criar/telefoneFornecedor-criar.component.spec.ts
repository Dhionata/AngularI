import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneFornecedorCreateComponent } from './telefoneFornecedor-criar.component';

describe('TelefoneFornecedorCreateComponent', () => {
  let component: TelefoneFornecedorCreateComponent;
  let fixture: ComponentFixture<TelefoneFornecedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneFornecedorCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneFornecedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
