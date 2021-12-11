import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorlerComponent } from './fornecedor-ler.component';

describe('fornecedorlerComponent', () => {
  let component: FornecedorlerComponent;
  let fixture: ComponentFixture<FornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
