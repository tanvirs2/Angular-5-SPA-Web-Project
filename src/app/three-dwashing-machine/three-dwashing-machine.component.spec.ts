import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDwashingMachineComponent } from './three-dwashing-machine.component';

describe('ThreeDwashingMachineComponent', () => {
  let component: ThreeDwashingMachineComponent;
  let fixture: ComponentFixture<ThreeDwashingMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDwashingMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDwashingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
