import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponentComponent } from './dash-component.component';

describe('DashComponentComponent', () => {
  let component: DashComponentComponent;
  let fixture: ComponentFixture<DashComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
