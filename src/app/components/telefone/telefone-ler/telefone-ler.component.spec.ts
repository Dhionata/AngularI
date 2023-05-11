import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneLerComponent } from './telefone-ler.component';

describe('TelefoneLerComponent', () => {
  let component: TelefoneLerComponent;
  let fixture: ComponentFixture<TelefoneLerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefoneLerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneLerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
