import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaroComponent } from './add-caro.component';

describe('AddCaroComponent', () => {
  let component: AddCaroComponent;
  let fixture: ComponentFixture<AddCaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
