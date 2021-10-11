import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecolerComponent } from './endereco-ler.component';

describe('EnderecoLerComponent', () => {
  let component: EnderecolerComponent;
  let fixture: ComponentFixture<EnderecolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnderecolerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
