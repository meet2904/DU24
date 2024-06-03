import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHComponent } from './admin-h.component';

describe('AdminHComponent', () => {
  let component: AdminHComponent;
  let fixture: ComponentFixture<AdminHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
