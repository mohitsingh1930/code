import Vehicle from "./vehicle";

export default class car extends Vehicle {
  constructor(name: string, fare: number) {
    super(name, fare);
  }
}
