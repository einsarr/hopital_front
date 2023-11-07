import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitsdisponibleComponent } from './litsdisponible.component';

describe('LitsdisponibleComponent', () => {
  let component: LitsdisponibleComponent;
  let fixture: ComponentFixture<LitsdisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitsdisponibleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitsdisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
