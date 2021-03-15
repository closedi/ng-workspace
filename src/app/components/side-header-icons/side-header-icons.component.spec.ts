import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHeaderIconsComponent } from './side-header-icons.component';

describe('SideHeaderIconsComponent', () => {
  let component: SideHeaderIconsComponent;
  let fixture: ComponentFixture<SideHeaderIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideHeaderIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideHeaderIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
