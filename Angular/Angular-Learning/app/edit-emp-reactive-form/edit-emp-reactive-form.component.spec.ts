import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpReactiveFormComponent } from './edit-emp-reactive-form.component';

describe('EditEmpReactiveFormComponent', () => {
  let component: EditEmpReactiveFormComponent;
  let fixture: ComponentFixture<EditEmpReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmpReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
