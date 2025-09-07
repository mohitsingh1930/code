import FareCalculationStrategy from "./fare_calculation_strategy";
import Vehicle from "./vehicle";

export default class FixedFareStrategy implements FareCalculationStrategy {
  private fare: number;

  constructor(fare: number) {
    this.fare = fare;
  }

  calculateFare(distance: number): number {
    return this.fare * distance;
  }
}
