import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ExecutionInputFormComponent } from './execution-input-form.component';

describe('ExecutionInputFormComponent', () => {
  let component: ExecutionInputFormComponent;
  let fixture: ComponentFixture<ExecutionInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionInputFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ExecutionInputFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.container h2')?.textContent).toContain('Limit and Retention Input');
  });

  it('two inputs, a button and a select', () => {
    const fixture = TestBed.createComponent(ExecutionInputFormComponent);
    fixture.detectChanges();
    const formElement =fixture.debugElement.nativeElement.querySelector('#formdata')
    const inputs = formElement.querySelectorAll('input')
    expect(inputs.length).toBe(2)
    const select = formElement.querySelectorAll('select')
    expect(select.length).toBe(1)
    const button = formElement.querySelectorAll('button')
    expect(button.length).toBe(1)
  });
});
