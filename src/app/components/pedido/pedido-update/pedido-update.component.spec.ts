import { ComponentFixture, TestBed } from '@angular/core/testing';

import { pedidoUpdateComponent } from './pedido-update.component';

describe('pedidoUpdateComponent', () => {
  let component: pedidoUpdateComponent;
  let fixture: ComponentFixture<pedidoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [pedidoUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(pedidoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
