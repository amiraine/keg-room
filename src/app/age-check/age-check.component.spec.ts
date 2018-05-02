import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeCheckComponent } from './age-check.component';

describe('AgeCheckComponent', () => {
  let component: AgeCheckComponent;
  let fixture: ComponentFixture<AgeCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgeCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
