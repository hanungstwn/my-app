import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallDetailsPage } from './call-details.page';

describe('CallDetailsPage', () => {
  let component: CallDetailsPage;
  let fixture: ComponentFixture<CallDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CallDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
