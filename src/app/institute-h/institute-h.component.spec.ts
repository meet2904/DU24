import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstituteHComponent } from './institute-h.component';

describe('InstituteHComponent', () => {
  let component: InstituteHComponent;
  let fixture: ComponentFixture<InstituteHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstituteHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstituteHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
