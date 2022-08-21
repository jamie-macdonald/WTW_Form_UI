export class FormValidation{

  public validationMessages: string[] = [];

  public validateNotEmpty(underTest: string, prettyName: string): boolean {
    if(underTest == "") {
      this.validationMessages.push(prettyName + " is a mandatory.")
      return false;
    }
    return true;
  }

  public validatePositives(UnderTest: string, prettyName: string): boolean {
    if(UnderTest.length == 0){
      this.validationMessages.push(prettyName + " is a mandtory.")
      return false;
    }
    var numberUnderTest = Number(UnderTest);
    if(numberUnderTest == NaN){
      this.validationMessages.push(prettyName + " must be a number.")
      return false;
    }
    if(numberUnderTest <= 0){
      this.validationMessages.push(prettyName + " must be greater than zero")
      return false;
    }
    return true;
  }
}
