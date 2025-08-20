import Car from "./car";
import Bike from "./bike";
import Bus from "./bus";
import FareCalculator from "./fare_calculator";
import VehicleBasedFareStrategy from "./vehicleBasedFareStrategy";

function main() {
  const bike = new Bike("Mountain Bike", 50);
  const car = new Car("Sedan", 100);
  const bus = new Bus("City Bus", 200);

  const carFareCalculator = new FareCalculator(car);
  const bikeFareCalculator = new FareCalculator(bike);
  const busFareCalculator = new FareCalculator(bus);

  console.log(`Car fare for 10 km: $${carFareCalculator.calculateFare(100, 10)}`);
  console.log(`Bike fare for 10 km: $${bikeFareCalculator.calculateFare(100, 10)}`);
  console.log(`Bus fare for 10 km: $${busFareCalculator.calculateFare(100, 10)}`);

  // using proper strategy to calculate fare
  const vehicleBasedFareStrategy = new VehicleBasedFareStrategy(car);
  carFareCalculator.setStrategy(vehicleBasedFareStrategy);
  console.log(`Car fare with strategy for 10 km: $${carFareCalculator.calculateFareWithStrategy(10)}`); 

  bikeFareCalculator.setStrategy(new VehicleBasedFareStrategy(bike));
  console.log(`Bike fare with strategy for 10 km: $${bikeFareCalculator.calculateFareWithStrategy(10)}`);

  busFareCalculator.setStrategy(new VehicleBasedFareStrategy(bus));
  console.log(`Bus fare with strategy for 10 km: $${busFareCalculator.calculateFareWithStrategy(10)}`);

}

// Note: Benefits of using strategy pattern:
// 1. Open/Closed Principle: New fare calculation strategies can be added without modifying
//    existing code.
// 2. Flexibility: Different strategies can be applied at runtime based on the scenario.
// 3. Maintainability: Code is cleaner and adheres to single responsibility principle.
main();
