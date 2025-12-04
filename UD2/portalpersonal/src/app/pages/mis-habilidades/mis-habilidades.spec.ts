import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisHabilidades } from './mis-habilidades';

describe('MisHabilidades', () => {
  let component: MisHabilidades;
  let fixture: ComponentFixture<MisHabilidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisHabilidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisHabilidades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
