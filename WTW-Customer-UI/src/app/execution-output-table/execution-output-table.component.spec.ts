import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ILimitRetentionCalculations } from '../Interfaces/ILimitRetentionCalculations';

import { ExecutionOutputTableComponent } from './execution-output-table.component';

describe('ExecutionOutputTableComponent', () => {
  let component: ExecutionOutputTableComponent;
  let fixture: ComponentFixture<ExecutionOutputTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionOutputTableComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionOutputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('add data and check table count', () => {
    const fixture = TestBed.createComponent(ExecutionOutputTableComponent);
    fixture.detectChanges();
    let comp: ExecutionOutputTableComponent = fixture.componentInstance;
    let results: ILimitRetentionCalculations[] = [];
    let firstResult: ILimitRetentionCalculations = { referenceDate: "10 Jan 2020", benchMarkOne: 99, benchMarkTwo: 95 };
    let secondResult: ILimitRetentionCalculations = { referenceDate: "10 Jan 2020", benchMarkOne: 69, benchMarkTwo: 100 };
    let thirdResult: ILimitRetentionCalculations = { referenceDate: "10 Jan 2020", benchMarkOne: 91, benchMarkTwo: 85 };
    results.push(firstResult, secondResult, thirdResult)
    comp.tableData = results;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    // four including the header row
    expect(compiled.querySelectorAll('tr').length).toBe(4);
  });

});
