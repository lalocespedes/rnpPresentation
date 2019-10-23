import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VigaComponent } from './viga.component';

describe('VigaComponent', () => {
  let component: VigaComponent;
  let fixture: ComponentFixture<VigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
