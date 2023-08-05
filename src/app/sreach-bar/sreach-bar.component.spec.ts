import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SreachBarComponent } from './sreach-bar.component';

describe('SreachBarComponent', () => {
  let component: SreachBarComponent;
  let fixture: ComponentFixture<SreachBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SreachBarComponent]
    });
    fixture = TestBed.createComponent(SreachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
