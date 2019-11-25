import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentordashComponent } from './mentordash.component';

describe('MentordashComponent', () => {
  let component: MentordashComponent;
  let fixture: ComponentFixture<MentordashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentordashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
