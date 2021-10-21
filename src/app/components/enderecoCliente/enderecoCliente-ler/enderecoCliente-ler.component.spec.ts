import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoClientelerComponent } from './enderecoCliente-ler.component';

describe('EnderecoClientelerComponent', () => {
  let component: EnderecoClientelerComponent;
  let fixture: ComponentFixture<EnderecoClientelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecoClientelerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoClientelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
