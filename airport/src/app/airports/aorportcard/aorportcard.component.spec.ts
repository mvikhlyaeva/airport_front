import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AorportcardComponent } from './aorportcard.component';

describe('AorportcardComponent', () => {
  let component: AorportcardComponent;
  let fixture: ComponentFixture<AorportcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AorportcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AorportcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
