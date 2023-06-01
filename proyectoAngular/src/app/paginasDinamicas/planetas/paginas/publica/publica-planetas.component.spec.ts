import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicaPlanetasComponent } from './publica-planetas.component';

describe('PublicaPlanetasComponent', () => {
  let component: PublicaPlanetasComponent;
  let fixture: ComponentFixture<PublicaPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicaPlanetasComponent]
    });
    fixture = TestBed.createComponent(PublicaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
