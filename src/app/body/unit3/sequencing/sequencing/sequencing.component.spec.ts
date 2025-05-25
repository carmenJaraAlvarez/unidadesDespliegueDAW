import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { SequencingComponent } from './sequencing.component';

describe('SequencingComponent', () => {
  let component: SequencingComponent;
  let fixture: ComponentFixture<SequencingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SequencingComponent],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(SequencingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
