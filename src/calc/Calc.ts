export default class Calc {
  /**
   * Simple calculation function.
   * @param operation - Calc operation.
   * @return Returns result of calculation.
   */
  public calc(operation: string): number {
    return eval(operation);
  }
}
