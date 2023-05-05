import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowersDetailsComponent } from './towers-details.component';

describe('TowersDetailsComponent', () => {
  let component: TowersDetailsComponent;
  let fixture: ComponentFixture<TowersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowersDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
