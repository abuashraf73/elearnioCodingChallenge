import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculationComponent } from './calculation.component';

describe('CalculationComponent', () => {
  let component: CalculationComponent;
  let fixture: ComponentFixture<CalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculationComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should calculate the expression',() => {
    let expression = "5 8 *";
    expect(component.calculate(expression)).toBe(40);
  });
});
