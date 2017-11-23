import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighstockChartComponent } from './highstock-chart.component';

describe('HighstockChartComponent', () => {
  let component: HighstockChartComponent;
  let fixture: ComponentFixture<HighstockChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighstockChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighstockChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
