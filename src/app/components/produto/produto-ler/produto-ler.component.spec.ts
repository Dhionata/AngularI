import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutolerComponent } from './produto-ler.component';

describe('ProdutoLerComponent', () => {
  let component: ProdutolerComponent;
  let fixture: ComponentFixture<ProdutolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutolerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
