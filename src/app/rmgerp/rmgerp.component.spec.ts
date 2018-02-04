import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmgerpComponent } from './rmgerp.component';

describe('RmgerpComponent', () => {
  let component: RmgerpComponent;
  let fixture: ComponentFixture<RmgerpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmgerpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmgerpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
