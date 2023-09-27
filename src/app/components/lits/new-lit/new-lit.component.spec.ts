import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLitComponent } from './new-lit.component';

describe('NewLitComponent', () => {
  let component: NewLitComponent;
  let fixture: ComponentFixture<NewLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
