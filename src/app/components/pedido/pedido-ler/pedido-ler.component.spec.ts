import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidoLerComponent } from './pedido-ler.component';

describe('pedidoLerComponent', () => {
  let component: pedidoLerComponent;
  let fixture: ComponentFixture<pedidoLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pedidoLerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidoLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
