import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandusersComponent } from './randusers.component';

describe('RandusersComponent', () => {
  let component: RandusersComponent;
  let fixture: ComponentFixture<RandusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandusersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
