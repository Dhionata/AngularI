import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneClientelerComponent } from './telefoneCliente-ler.component';

describe('TelefoneClienteLerComponent', () => {
  let component: TelefoneClientelerComponent;
  let fixture: ComponentFixture<TelefoneClientelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneClientelerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneClientelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
