import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneFornecedorDeleteComponent } from './telefoneFornecedor-delete.component';

describe('TelefoneFornecedorDeleteComponent', () => {
  let component: TelefoneFornecedorDeleteComponent;
  let fixture: ComponentFixture<TelefoneFornecedorDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneFornecedorDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneFornecedorDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
