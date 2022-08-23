export class IntegerCalculations{
  public getRandomInt() : number{
    var min = 1;
    var max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
