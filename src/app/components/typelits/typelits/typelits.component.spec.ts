import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypelitsComponent } from './typelits.component';

describe('TypelitsComponent', () => {
  let component: TypelitsComponent;
  let fixture: ComponentFixture<TypelitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypelitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypelitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
