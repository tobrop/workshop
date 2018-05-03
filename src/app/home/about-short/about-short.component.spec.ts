import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutShortComponent } from './about-short.component';

describe('AboutShortComponent', () => {
  let component: AboutShortComponent;
  let fixture: ComponentFixture<AboutShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
