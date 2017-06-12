import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicComponent } from './basic.component';

describe('BasicComponent', () => {
  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    expect(component.title).toBe('Componente básico');
  });

  it('should show the default title in <h1>', () => {
    fixture.detectChanges();
    // obtener elemento HTML nativo directamente
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toBe('Componente básico');
  });

  it('should show new title in <h1>', () => {
    component.title = 'Nuevo título';
    fixture.detectChanges();
    // obtener elemento HTML nativo a través del framework
    const de: DebugElement = fixture.debugElement.query(By.css('h1'));
    const el: HTMLElement = de.nativeElement;
    expect(el.textContent).toBe('Nuevo título');
  });
});
