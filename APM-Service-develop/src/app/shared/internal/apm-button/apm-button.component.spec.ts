import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmButtonComponent } from './apm-button.component';

describe('ApmButtonComponent', () => {
  let component: ApmButtonComponent;
  let fixture: ComponentFixture<ApmButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApmButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
