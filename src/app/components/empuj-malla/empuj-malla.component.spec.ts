import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpujMallaComponent } from './empuj-malla.component';

describe('EmpujMallaComponent', () => {
  let component: EmpujMallaComponent;
  let fixture: ComponentFixture<EmpujMallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpujMallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpujMallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
