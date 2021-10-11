import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneFornecedorlerComponent } from './telefoneFornecedor-ler.component';

describe('TelefoneFornecedorLerComponent', () => {
  let component: TelefoneFornecedorlerComponent;
  let fixture: ComponentFixture<TelefoneFornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneFornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneFornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
