import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypestructureComponent } from './new-typestructure.component';

describe('NewTypestructureComponent', () => {
  let component: NewTypestructureComponent;
  let fixture: ComponentFixture<NewTypestructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTypestructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTypestructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
