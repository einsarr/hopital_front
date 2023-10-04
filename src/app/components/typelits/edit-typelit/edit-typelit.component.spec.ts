import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypelitComponent } from './edit-typelit.component';

describe('EditTypelitComponent', () => {
  let component: EditTypelitComponent;
  let fixture: ComponentFixture<EditTypelitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypelitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypelitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
