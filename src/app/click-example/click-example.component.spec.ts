import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickExampleComponent } from './click-example.component';

describe('ClickExampleComponent', () => {
  let component: ClickExampleComponent;
  let fixture: ComponentFixture<ClickExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
