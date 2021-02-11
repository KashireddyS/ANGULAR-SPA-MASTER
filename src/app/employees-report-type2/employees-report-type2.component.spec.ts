import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesReportType2Component } from './employees-report-type2.component';
describe('EmployeesReportType2Component', () => {
  let component: EmployeesReportType2Component;
  let fixture: ComponentFixture<EmployeesReportType2Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesReportType2Component ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesReportType2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});