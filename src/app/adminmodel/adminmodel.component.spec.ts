import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmodelComponent } from './adminmodel.component';

describe('AdminmodelComponent', () => {
  let component: AdminmodelComponent;
  let fixture: ComponentFixture<AdminmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
