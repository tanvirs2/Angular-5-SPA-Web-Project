import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoDsweetDreamsComponent } from './two-dsweet-dreams.component';

describe('TwoDsweetDreamsComponent', () => {
  let component: TwoDsweetDreamsComponent;
  let fixture: ComponentFixture<TwoDsweetDreamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoDsweetDreamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoDsweetDreamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
