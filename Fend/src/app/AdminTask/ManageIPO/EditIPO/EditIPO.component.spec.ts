/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditIPOComponent } from './EditIPO.component';

describe('EditIPOComponent', () => {
  let component: EditIPOComponent;
  let fixture: ComponentFixture<EditIPOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditIPOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditIPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
