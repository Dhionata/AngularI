import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedorCreateComponent } from './fornecedor-criar.component';

describe('FornecedorCreateComponent', () => {
  let component: FornecedorCreateComponent;
  let fixture: ComponentFixture<FornecedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FornecedorCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
