import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleQPaperComponent } from './sample-q-paper.component';

describe('SampleQPaperComponent', () => {
  let component: SampleQPaperComponent;
  let fixture: ComponentFixture<SampleQPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleQPaperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleQPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
