import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidoCreateComponent } from './pedido-criar.component';

describe('pedidoCreateComponent', () => {
  let component: pedidoCreateComponent;
  let fixture: ComponentFixture<pedidoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pedidoCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
