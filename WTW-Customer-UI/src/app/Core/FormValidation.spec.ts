import { FormValidation } from './FormValidation';

describe('FormValidation', function() {

  it('happy as has value', function() {
    let formValidation = new FormValidation;
    var notEmpty = formValidation.validateNotEmpty("LifeIsLike", "Box of Chocolates")
    expect(notEmpty).toBe(true);
  });

  it('unhappy as has no value', function() {
    let formValidation = new FormValidation;
    var notEmpty = formValidation.validateNotEmpty("", "Box of Chocolates")
    expect(formValidation.validationMessages).toContain("Box of Chocolates is a mandatory.")
    expect(notEmpty).toBe(false)
  });

  it('unhappy as has no lenngth', function() {
    let formValidation = new FormValidation;
    var notEmpty = formValidation.validatePositives("", "Box of Chocolates")
    expect(formValidation.validationMessages).toContain("Box of Chocolates is a mandatory.")
    expect(notEmpty).toBe(false)
  });

  it('unhappy its not a number', function() {
    let formValidation = new FormValidation;
    var notANumber = formValidation.validatePositives("potatoes", "Box of Chocolates")
    expect(formValidation.validationMessages).toContain("Box of Chocolates must be a number.")
    expect(notANumber).toBe(false)
  });

  it('number is zero or less', function() {
    let formValidation = new FormValidation;
    var InvalidNumber1 = formValidation.validatePositives("0", "Box of Chocolates")
    var InvalidNumber2 = formValidation.validatePositives("-1", "Box of Chocolates")
    expect(formValidation.validationMessages).toContain("Box of Chocolates must be greater than zero.")
    expect(InvalidNumber2).toBe(false)
    expect(InvalidNumber1).toBe(false)
  });
});


