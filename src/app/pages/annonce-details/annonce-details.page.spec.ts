import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnonceDetailsPage } from './annonce-details.page';

describe('AnnonceDetailsPage', () => {
  let component: AnnonceDetailsPage;
  let fixture: ComponentFixture<AnnonceDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnonceDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
