import Vehicle from "./vehicle";

export default class Bus extends Vehicle {
  constructor(name: string, fare: number) {
    super(name, fare);
  }
}
