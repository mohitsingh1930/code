import { VehicleType } from "./defined_types";

export default abstract class Vehicle {
  public name: string;
  public fare: number;

  constructor(name: string, fare: number) {
    this.name = name;
    this.fare = fare;
  }
}
