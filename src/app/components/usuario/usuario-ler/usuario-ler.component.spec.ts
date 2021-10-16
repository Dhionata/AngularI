import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuariolerComponent } from './usuario-ler.component';

describe('UsuariolerComponent', () => {
  let component: UsuariolerComponent;
  let fixture: ComponentFixture<UsuariolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsuariolerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
