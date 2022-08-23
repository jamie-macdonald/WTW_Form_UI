import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILimitRetentionCalculations } from '../Interfaces/ILimitRetentionCalculations';
import {FormValidation} from '../Core/FormValidation';
import {DatesWriter} from '../Core/DatesWriter';
import {IntegerCalculations} from '../Core/IntegerCalculations';

@Component({
  selector: 'app-execution-input-form',
  templateUrl: './execution-input-form.component.html',
  styleUrls: ['./execution-input-form.component.css']
})

export class ExecutionInputFormComponent implements OnInit {
  @Output() collectedResults = new EventEmitter<{ updatingResults: ILimitRetentionCalculations[]}>()

  public inSaveMode = false;
  public formValidation = new FormValidation();
  private datesWriter = new DatesWriter();
  private integerCalculations = new IntegerCalculations();
  private results: ILimitRetentionCalculations[] = [];

  async submit(formData: any){
    this.inSaveMode = true;
    var mainLimit = formData.form.controls.mainLimit.value;
    var mainRetention = formData.form.controls.mainRetention.value;
    var typeOfExecution = formData.form.controls.typeOfExecution.value;

    //reset validation
    this.formValidation.validationMessages = [];
    // validating here becuase, you never know some naughty individual could be playing with html.
    // still needs server side validation
    var isMainLimitValid = this.formValidation.validatePositives(mainLimit, "Main limit");
    var isMainRetentionValid = this.formValidation.validatePositives(mainRetention, "Main retention");
    var isTypeOfExecution = this.formValidation.validateNotEmpty(typeOfExecution, "Type of execution");
    if (isMainLimitValid && isMainRetentionValid && isTypeOfExecution) {
        //fake loading time
        await new Promise(f => setTimeout(f, 3000));
        this.calculateRetentionLimit(mainLimit, mainRetention, typeOfExecution)
        formData.resetForm({typeOfExecution:''});
    }
    this.inSaveMode = false;
  }

  private calculateRetentionLimit(mainLimit: string, mainRetention: string, typeOfExecution: string){
    // calculation would happen here with params
    const formattedDate = this.datesWriter.prettyDate(new Date);
    let result = { referenceDate: formattedDate, benchMarkOne: this.integerCalculations.getRandomInt(), benchMarkTwo: this.integerCalculations.getRandomInt() };
    this.results.push(result)
    this.collectedResults.emit({ updatingResults: this.results });
  }

  ngOnInit(): void {
  }

}
