import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitsearchComponent } from './litsearch.component';

describe('LitsearchComponent', () => {
  let component: LitsearchComponent;
  let fixture: ComponentFixture<LitsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitsearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LitsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
