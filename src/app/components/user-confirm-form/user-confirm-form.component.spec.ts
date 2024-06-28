import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConfirmFormComponent } from './user-confirm-form.component';

describe('UserConfirmFormComponent', () => {
  let component: UserConfirmFormComponent;
  let fixture: ComponentFixture<UserConfirmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserConfirmFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConfirmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
