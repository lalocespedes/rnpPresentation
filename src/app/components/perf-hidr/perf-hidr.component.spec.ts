import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfHidrComponent } from './perf-hidr.component';

describe('PerfHidrComponent', () => {
  let component: PerfHidrComponent;
  let fixture: ComponentFixture<PerfHidrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfHidrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfHidrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
