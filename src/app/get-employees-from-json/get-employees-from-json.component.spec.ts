import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeesFromJsonComponent } from './get-employees-from-json.component';

describe('GetEmployeesFromJsonComponent', () => {
  let component: GetEmployeesFromJsonComponent;
  let fixture: ComponentFixture<GetEmployeesFromJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeesFromJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeesFromJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
