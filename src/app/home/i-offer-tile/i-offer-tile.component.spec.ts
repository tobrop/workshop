import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOfferTileComponent } from './i-offer-tile.component';

describe('IOfferTileComponent', () => {
  let component: IOfferTileComponent;
  let fixture: ComponentFixture<IOfferTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOfferTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOfferTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
