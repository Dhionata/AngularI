import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneUpdateComponent } from './telefone-update.component';

describe('TelefoneUpdateComponent', () => {
  let component: TelefoneUpdateComponent;
  let fixture: ComponentFixture<TelefoneUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelefoneUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
