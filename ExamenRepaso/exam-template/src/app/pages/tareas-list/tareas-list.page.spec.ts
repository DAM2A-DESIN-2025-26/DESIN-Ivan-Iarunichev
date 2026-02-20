import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasListPage } from './tareas-list.page';

describe('TareasListPage', () => {
  let component: TareasListPage;
  let fixture: ComponentFixture<TareasListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TareasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
