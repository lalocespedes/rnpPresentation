import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfNeumComponent } from './perf-neum.component';

describe('PerfNeumComponent', () => {
  let component: PerfNeumComponent;
  let fixture: ComponentFixture<PerfNeumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfNeumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfNeumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
