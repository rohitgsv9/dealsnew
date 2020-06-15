import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCaroComponent } from './update-caro.component';

describe('UpdateCaroComponent', () => {
  let component: UpdateCaroComponent;
  let fixture: ComponentFixture<UpdateCaroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCaroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCaroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
