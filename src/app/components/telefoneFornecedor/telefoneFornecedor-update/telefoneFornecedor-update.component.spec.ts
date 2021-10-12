import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneFornecedorUpdateComponent } from './telefoneFornecedor-update.component';

describe('TelefoneFornecedorUpdateComponent', () => {
  let component: TelefoneFornecedorUpdateComponent;
  let fixture: ComponentFixture<TelefoneFornecedorUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneFornecedorUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneFornecedorUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
