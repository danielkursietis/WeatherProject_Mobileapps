import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GweatherPage } from './gweather.page';

describe('GweatherPage', () => {
  let component: GweatherPage;
  let fixture: ComponentFixture<GweatherPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GweatherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
