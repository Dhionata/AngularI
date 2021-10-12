import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonelerComponent } from './telefone-ler.component';

describe('TelefoneLerComponent', () => {
  let component: TelefonelerComponent;
  let fixture: ComponentFixture<TelefonelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelefonelerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
