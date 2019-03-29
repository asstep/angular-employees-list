import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeesListComponent } from './emplyees-list.component';

describe('EmplyeesListComponent', () => {
  let component: EmplyeesListComponent;
  let fixture: ComponentFixture<EmplyeesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
