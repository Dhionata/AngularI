import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelerComponent } from './cliente-ler.component';

describe('ClientelerComponent', () => {
  let component: ClientelerComponent;
  let fixture: ComponentFixture<ClientelerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientelerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
