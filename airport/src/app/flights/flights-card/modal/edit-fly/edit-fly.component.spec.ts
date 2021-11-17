import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlyComponent } from './edit-fly.component';

describe('EditFlyComponent', () => {
  let component: EditFlyComponent;
  let fixture: ComponentFixture<EditFlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
