import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypelitComponent } from './new-typelit.component';

describe('NewTypelitComponent', () => {
  let component: NewTypelitComponent;
  let fixture: ComponentFixture<NewTypelitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTypelitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTypelitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
