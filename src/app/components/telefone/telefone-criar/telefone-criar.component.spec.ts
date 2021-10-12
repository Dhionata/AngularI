import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneCreateComponent } from './telefone-criar.component';

describe('TelefoneCreateComponent', () => {
  let component: TelefoneCreateComponent;
  let fixture: ComponentFixture<TelefoneCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneCreateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
