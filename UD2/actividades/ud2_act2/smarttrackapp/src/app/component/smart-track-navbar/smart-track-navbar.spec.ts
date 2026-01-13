import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SmartTrackNavbar } from './smart-track-navbar';

describe('SmartTrackNavbar', () => {
  let component: SmartTrackNavbar;
  let fixture: ComponentFixture<SmartTrackNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartTrackNavbar, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmartTrackNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
