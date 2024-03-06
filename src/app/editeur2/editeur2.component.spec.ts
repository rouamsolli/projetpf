import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editeur2Component } from './editeur2.component';

describe('Editeur2Component', () => {
  let component: Editeur2Component;
  let fixture: ComponentFixture<Editeur2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Editeur2Component]
    });
    fixture = TestBed.createComponent(Editeur2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
