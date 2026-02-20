import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilStatsPage } from './perfil-stats.page';

describe('PerfilStatsPage', () => {
  let component: PerfilStatsPage;
  let fixture: ComponentFixture<PerfilStatsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
