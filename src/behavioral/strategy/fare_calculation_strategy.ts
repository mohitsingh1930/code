export default interface FareCalculationStrategy {
  calculateFare(distance: number): number;
}
