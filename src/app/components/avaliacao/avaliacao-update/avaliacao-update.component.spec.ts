import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoUpdateComponent } from './avaliacao-update.component';

describe('AvaliacaoUpdateComponent', () => {
  let component: AvaliacaoUpdateComponent;
  let fixture: ComponentFixture<AvaliacaoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaliacaoUpdateComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
