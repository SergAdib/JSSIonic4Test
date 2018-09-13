import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JssModule } from '@sitecore-jss/sitecore-jss-angular';
import { TopBannerComponent } from './top-banner.component';

describe('TopBannerComponent', () => {
  let component: TopBannerComponent;
  let fixture: ComponentFixture<TopBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ JssModule.forRoot() ],
      declarations: [ TopBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
