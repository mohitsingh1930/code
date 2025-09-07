import Vehicle from "./vehicle";
import FareCalculationStrategy from "./fare_calculation_strategy";

export default class FareCalculator {
  private vehicle: Vehicle;
  private strategy: FareCalculationStrategy;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  /**
   * Normal fixed fare calculation based on the distance traveled irrespective of vehicle type.
   * but whatif we have multiple fare calculation strategies based on different scenarios
   * then we have to edit this code which will violate the Open/Closed Principle.
   */
  public calculateFare(fare: number, distance: number): number {
    return fare * distance;
  }

  /**
   * Here we can implement different fare calculation strategies.
   */
  public setStrategy(strategy: FareCalculationStrategy): void {
    this.strategy = strategy;
  }

  public calculateFareWithStrategy(distance: number): number {
    if (!this.strategy) {
      throw new Error("No fare calculation strategy set.");
    }
    return this.strategy.calculateFare(distance);
  }
}
