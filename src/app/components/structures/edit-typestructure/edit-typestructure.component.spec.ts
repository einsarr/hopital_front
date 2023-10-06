import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypestructureComponent } from './edit-typestructure.component';

describe('EditTypestructureComponent', () => {
  let component: EditTypestructureComponent;
  let fixture: ComponentFixture<EditTypestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypestructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTypestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
