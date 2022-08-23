import { Component } from '@angular/core';
import { ILimitRetentionCalculations } from './Interfaces/ILimitRetentionCalculations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'WTW: Perspective that moves you | Risk, Broking, HR, Benefits - WTW';
  results: ILimitRetentionCalculations[] = [];

  // add to results to pass to output table component
  onBookAdded(eventData: { updatingResults: ILimitRetentionCalculations[] }) {
    this.results = eventData.updatingResults
  }
}
