import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLitComponent } from './edit-lit.component';

describe('EditLitComponent', () => {
  let component: EditLitComponent;
  let fixture: ComponentFixture<EditLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
