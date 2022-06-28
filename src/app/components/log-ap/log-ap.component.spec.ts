import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogAPComponent } from './log-ap.component';

describe('LogAPComponent', () => {
  let component: LogAPComponent;
  let fixture: ComponentFixture<LogAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
