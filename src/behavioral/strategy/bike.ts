import Vehicle from "./vehicle";

export default class Bike extends Vehicle {
  constructor(name: string, fare: number) {
    super(name, fare);
  }
}
