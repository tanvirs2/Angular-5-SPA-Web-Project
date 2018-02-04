import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDsolarSystemComponent } from './three-dsolar-system.component';

describe('ThreeDsolarSystemComponent', () => {
  let component: ThreeDsolarSystemComponent;
  let fixture: ComponentFixture<ThreeDsolarSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDsolarSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDsolarSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
