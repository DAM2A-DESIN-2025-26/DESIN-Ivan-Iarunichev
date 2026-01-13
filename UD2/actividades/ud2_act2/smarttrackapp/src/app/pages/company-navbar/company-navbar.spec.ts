import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNavbar } from './company-navbar';

describe('CompanyNavbar', () => {
  let component: CompanyNavbar;
  let fixture: ComponentFixture<CompanyNavbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyNavbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyNavbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
