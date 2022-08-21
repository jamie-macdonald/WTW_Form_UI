import { formatDate } from "@angular/common"

export class DatesWriter{
  public prettyDate(currentDate: Date){
    const format = 'dd MMM yyyy';
    const locale = 'en-UK';
    return formatDate(currentDate, format, locale)
  }
}
