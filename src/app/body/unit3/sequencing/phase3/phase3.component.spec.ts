import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { Phase3Component } from './phase3.component';

describe('Phase3Component', () => {
  let component: Phase3Component;
  let fixture: ComponentFixture<Phase3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Phase3Component],
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(Phase3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
