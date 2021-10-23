import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidoDeleteComponent } from './pedido-delete.component';

describe('pedidoDeleteComponent', () => {
  let component: pedidoDeleteComponent;
  let fixture: ComponentFixture<pedidoDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pedidoDeleteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidoDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
