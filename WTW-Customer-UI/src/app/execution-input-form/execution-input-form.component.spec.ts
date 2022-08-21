import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExecutionInputFormComponent } from './execution-input-form.component';

describe('ExecutionInputFormComponent', () => {
  let component: ExecutionInputFormComponent;
  let fixture: ComponentFixture<ExecutionInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
