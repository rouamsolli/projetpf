import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeworkflowsComponent } from './listeworkflows.component';

describe('ListeworkflowsComponent', () => {
  let component: ListeworkflowsComponent;
  let fixture: ComponentFixture<ListeworkflowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeworkflowsComponent]
    });
    fixture = TestBed.createComponent(ListeworkflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
