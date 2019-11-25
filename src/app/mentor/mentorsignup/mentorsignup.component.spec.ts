import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsignupComponent } from './mentorsignup.component';

describe('MentorsignupComponent', () => {
  let component: MentorsignupComponent;
  let fixture: ComponentFixture<MentorsignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
