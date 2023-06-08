import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaComponent } from './vista-episodios.component';

describe('VistaComponent', () => {
  let component: VistaComponent;
  let fixture: ComponentFixture<VistaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VistaComponent]
    });
    fixture = TestBed.createComponent(VistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
