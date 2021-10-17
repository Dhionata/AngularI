import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fornecedorlerComponent } from './fornecedor-ler.component';

describe('fornecedorlerComponent', () => {
  let component: fornecedorlerComponent;
  let fixture: ComponentFixture<fornecedorlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [fornecedorlerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(fornecedorlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
