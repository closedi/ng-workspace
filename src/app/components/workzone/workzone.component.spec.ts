import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkzoneComponent } from './workzone.component';

describe('WorkzoneComponent', () => {
  let component: WorkzoneComponent;
  let fixture: ComponentFixture<WorkzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
