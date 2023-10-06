import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypestructuresComponent } from './typestructures.component';

describe('TypestructuresComponent', () => {
  let component: TypestructuresComponent;
  let fixture: ComponentFixture<TypestructuresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypestructuresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypestructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
