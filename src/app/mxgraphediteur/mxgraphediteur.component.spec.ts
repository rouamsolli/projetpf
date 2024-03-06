import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxgraphediteurComponent } from './mxgraphediteur.component';

describe('MxgraphediteurComponent', () => {
  let component: MxgraphediteurComponent;
  let fixture: ComponentFixture<MxgraphediteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MxgraphediteurComponent]
    });
    fixture = TestBed.createComponent(MxgraphediteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
