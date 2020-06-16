import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDealByLinkComponent } from './add-deal-by-link.component';

describe('AddDealByLinkComponent', () => {
  let component: AddDealByLinkComponent;
  let fixture: ComponentFixture<AddDealByLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDealByLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealByLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
