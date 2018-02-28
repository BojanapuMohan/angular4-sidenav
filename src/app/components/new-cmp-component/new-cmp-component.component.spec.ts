import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmpComponentComponent } from './new-cmp-component.component';

describe('NewCmpComponentComponent', () => {
  let component: NewCmpComponentComponent;
  let fixture: ComponentFixture<NewCmpComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCmpComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCmpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
