import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecettesCreateComponent } from './recette-create.component';




describe('RecetteCreateComponent', () => {
  let component: RecettesCreateComponent;
  let fixture: ComponentFixture<RecettesCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecettesCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecettesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
