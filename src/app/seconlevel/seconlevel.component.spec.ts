import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeconlevelComponent } from './seconlevel.component';

describe('SeconlevelComponent', () => {
  let component: SeconlevelComponent;
  let fixture: ComponentFixture<SeconlevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeconlevelComponent]
    });
    fixture = TestBed.createComponent(SeconlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
