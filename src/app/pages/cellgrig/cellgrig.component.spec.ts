import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellgrigComponent } from './cellgrig.component';

describe('CellgrigComponent', () => {
  let component: CellgrigComponent;
  let fixture: ComponentFixture<CellgrigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellgrigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellgrigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
