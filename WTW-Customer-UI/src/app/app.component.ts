import { Component } from '@angular/core';
import { ILimitRetentionCalculations } from './Interfaces/ILimitRetentionCalculations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'WTW-Customer-UI';
  results: ILimitRetentionCalculations[] = [];

  onBookAdded(eventData: { updatingResults: ILimitRetentionCalculations[] }) {
    this.results = eventData.updatingResults
    alert(this.results.length)
  }
}
