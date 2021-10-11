import { ComponentFixture, TestBed } from '@angular/core/testing';

import { clienteDeleteComponent } from './cliente-delete.component';

describe('clienteDeleteComponent', () => {
  let component: clienteDeleteComponent;
  let fixture: ComponentFixture<clienteDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ clienteDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(clienteDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
