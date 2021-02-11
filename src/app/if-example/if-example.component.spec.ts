import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IfExampleComponent } from './if-example.component';

describe('IfExampleComponent', () => {
  let component: IfExampleComponent;
  let fixture: ComponentFixture<IfExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IfExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IfExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
