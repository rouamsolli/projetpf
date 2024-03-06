import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauWorkflowComponent } from './nouveau-workflow.component';

describe('NouveauWorkflowComponent', () => {
  let component: NouveauWorkflowComponent;
  let fixture: ComponentFixture<NouveauWorkflowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouveauWorkflowComponent]
    });
    fixture = TestBed.createComponent(NouveauWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
