import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirnosComponent } from './elegirnos.component';

describe('ElegirnosComponent', () => {
  let component: ElegirnosComponent;
  let fixture: ComponentFixture<ElegirnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
