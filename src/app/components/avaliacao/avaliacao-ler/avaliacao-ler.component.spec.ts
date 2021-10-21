import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaolerComponent } from './avaliacao-ler.component';

describe('AvaliacaolerComponent', () => {
  let component: AvaliacaolerComponent;
  let fixture: ComponentFixture<AvaliacaolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaliacaolerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
