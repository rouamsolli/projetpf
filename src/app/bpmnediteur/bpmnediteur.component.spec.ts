import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpmnediteurComponent } from './bpmnediteur.component';

describe('BpmnediteurComponent', () => {
  let component: BpmnediteurComponent;
  let fixture: ComponentFixture<BpmnediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpmnediteurComponent]
    });
    fixture = TestBed.createComponent(BpmnediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
