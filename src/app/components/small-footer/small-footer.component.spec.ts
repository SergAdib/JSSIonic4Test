import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { SmallFooterComponent } from './small-footer.component';

describe('SmallFooterComponent', () => {
  let component: SmallFooterComponent;
  let fixture: ComponentFixture<SmallFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ SmallFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
