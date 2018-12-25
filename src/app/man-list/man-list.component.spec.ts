import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManListComponent } from './man-list.component';

describe('ManListComponent', () => {
  let component: ManListComponent;
  let fixture: ComponentFixture<ManListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
