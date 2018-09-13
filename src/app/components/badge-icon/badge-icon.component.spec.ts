import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { BadgeIconComponent } from './badge-icon.component';

describe('BadgeIconComponent', () => {
  let component: BadgeIconComponent;
  let fixture: ComponentFixture<BadgeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ BadgeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
