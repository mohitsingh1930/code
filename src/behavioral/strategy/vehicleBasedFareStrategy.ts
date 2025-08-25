import FareCalculationStrategy from "./fare_calculation_strategy";
import Vehicle from "./vehicle";

export default class VehicleBasedFareStrategy implements FareCalculationStrategy {
  private vehicle: Vehicle;

  constructor(vehicle: Vehicle) {
    this.vehicle = vehicle;
  }

  calculateFare(distance: number): number {
    return this.vehicle.fare * distance;
  }
}
