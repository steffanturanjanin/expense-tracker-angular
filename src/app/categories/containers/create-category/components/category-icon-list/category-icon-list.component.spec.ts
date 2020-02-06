import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryIconListComponent } from './category-icon-list.component';

describe('CategoryIconListComponent', () => {
  let component: CategoryIconListComponent;
  let fixture: ComponentFixture<CategoryIconListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryIconListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryIconListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
