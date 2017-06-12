import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOComponent } from './io.component';

describe('IoComponent', () => {
  let component: IOComponent;
  let fixture: ComponentFixture<IOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
