import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPlanetasComponent } from './vista-planetas.component';

describe('VistaPlanetasComponent', () => {
  let component: VistaPlanetasComponent;
  let fixture: ComponentFixture<VistaPlanetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaPlanetasComponent]
    });
    fixture = TestBed.createComponent(VistaPlanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
