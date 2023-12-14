import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormCommentsPage } from './form-comments.page';

describe('FormCommentsPage', () => {
  let component: FormCommentsPage;
  let fixture: ComponentFixture<FormCommentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormCommentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
