import { Component, OnInit, Input } from '@angular/core';
import { ILimitRetentionCalculations } from '../Interfaces/ILimitRetentionCalculations';

@Component({
  selector: 'app-execution-output-table',
  templateUrl: './execution-output-table.component.html',
  styleUrls: ['./execution-output-table.component.css']
})
export class ExecutionOutputTableComponent implements OnInit {

  @Input() tableData: ILimitRetentionCalculations[] = [];
  public showOfRecords = 5;
  public dropDownRecords = [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  submit(formData: any){
    this.showOfRecords = formData.value
  }

  ngOnInit(): void {
  }

}
