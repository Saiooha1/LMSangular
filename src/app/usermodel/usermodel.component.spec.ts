import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermodelComponent } from './usermodel.component';

describe('UsermodelComponent', () => {
  let component: UsermodelComponent;
  let fixture: ComponentFixture<UsermodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsermodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
