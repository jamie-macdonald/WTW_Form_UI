import { DatesWriter } from './DatesWriter';

describe('DateWriter', function() {

  it('has the formate characters', function() {
    let datesWriter = new DatesWriter;
    var prettydate = datesWriter.prettyDate(new Date)
    expect(prettydate.length).toBe(11);
  });

  it('not outside the relms of a date', function() {
    let datesWriter = new DatesWriter;
    var prettydate = datesWriter.prettyDate(new Date)
    var getdate = 0;
    try {
      getdate= Number(prettydate.substring(0,2))
    } catch (error) {
      fail("error converting to number.")
    }
    expect(getdate).toBeLessThan(31);
  });
});


