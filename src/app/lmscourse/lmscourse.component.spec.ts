import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmscourseComponent } from './lmscourse.component';

describe('LmscourseComponent', () => {
  let component: LmscourseComponent;
  let fixture: ComponentFixture<LmscourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmscourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmscourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
