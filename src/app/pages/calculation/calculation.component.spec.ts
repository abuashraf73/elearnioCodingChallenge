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
  
  it('should correctly evaluate a complex expression', () => {
    let expression = "5 8 + 3 -";
    expect(component.calculate(expression)).toBe(10);
  });

  it('should correctly handle decimal numbers', () => {
    let expression = "5.5 2.5 +";
    expect(component.calculate(expression)).toBe(8);
  });

  it('should correctly handle order of operations', () => {
    let expression = "5 2 * 3 +";
    expect(component.calculate(expression)).toBe(11);
  });

  it('should return NaN for an invalid expression', () => {
    let expression = "5 2 + *";
    expect(component.calculate(expression)).toBeNaN();
  });
});
