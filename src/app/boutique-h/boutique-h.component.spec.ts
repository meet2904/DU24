import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueHComponent } from './boutique-h.component';

describe('BoutiqueHComponent', () => {
  let component: BoutiqueHComponent;
  let fixture: ComponentFixture<BoutiqueHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoutiqueHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoutiqueHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
