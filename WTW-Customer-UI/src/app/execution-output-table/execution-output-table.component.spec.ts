import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionOutputTableComponent } from './execution-output-table.component';

describe('ExecutionOutputTableComponent', () => {
  let component: ExecutionOutputTableComponent;
  let fixture: ComponentFixture<ExecutionOutputTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionOutputTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionOutputTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
