import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCreateComponent } from './cliente-criar.component';

describe('ClienteCreateComponent', () => {
  let component: ClienteCreateComponent;
  let fixture: ComponentFixture<ClienteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
