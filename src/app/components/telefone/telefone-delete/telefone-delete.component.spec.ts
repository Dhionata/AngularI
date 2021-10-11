import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneDeleteComponent } from './telefone-delete.component';

describe('TelefoneDeleteComponent', () => {
  let component: TelefoneDeleteComponent;
  let fixture: ComponentFixture<TelefoneDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
