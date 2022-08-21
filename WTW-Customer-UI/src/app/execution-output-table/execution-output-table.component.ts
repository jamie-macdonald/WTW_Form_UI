import { Component, OnInit, Input } from '@angular/core';
import { ILimitRetentionCalculations } from '../Interfaces/ILimitRetentionCalculations';

@Component({
  selector: 'app-execution-output-table',
  templateUrl: './execution-output-table.component.html',
  styleUrls: ['./execution-output-table.component.css']
})
export class ExecutionOutputTableComponent implements OnInit {

  @Input() tableData: ILimitRetentionCalculations[] = [];
  public showOfRecords = 0;

  submit(formData: any){
    this.showOfRecords = formData.value
  }

  ngOnInit(): void {
  }

}
