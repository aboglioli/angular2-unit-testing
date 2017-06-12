import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MultiplesComponent } from './multiples.component';
import { SubComponent } from './sub/sub.component';

describe('MultiplesComponent', () => {
  let component: MultiplesComponent;
  let fixture: ComponentFixture<MultiplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MultiplesComponent,
        SubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list element', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.query(By.css('.list'));
    expect(de.nativeElement).toBeDefined();
  });

  it('should have 3 list items by default', () => {
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.list-item'));
    expect(de.length).toBe(3);
    expect(de[0].nativeElement.textContent).toContain('Item 1');
    expect(de[1].nativeElement.textContent).toContain('Item 2');
    expect(de[2].nativeElement.textContent).toContain('Item 3');
  });

  it('should show a new list item', () => {
    component.items.push('Item 4');
    fixture.detectChanges();
    const de = fixture.debugElement.queryAll(By.css('.list-item'));
    expect(de.length).toBe(4);
    expect(de[3].nativeElement.textContent).toContain('Item 4');
  });
});
