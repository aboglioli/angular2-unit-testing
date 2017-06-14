import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
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

  it('should show the input property', () => {
    component.input = 'hello';
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('p'));
    expect(de.nativeElement.textContent).toContain('hello');
  });

  it('should emit a change when the button is clicked', (done) => {
    component.input = 'hello';
    fixture.detectChanges();

    component.output.subscribe(value => {
      expect(value).toBe('hello!');
      done();
    });

    const de = fixture.debugElement.query(By.css('button'));
    de.nativeElement.click();
  });
});
