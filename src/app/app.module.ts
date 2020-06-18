import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps'
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

import { HeaderComponent } from './header/header.component';
import { MenuMainComponent } from './header/menu-main/menu-main.component';
import { SliderComponent } from './slider/slider.component';
import { SlideComponent } from './slider/slide/slide.component';
import { DetailsAdComponent } from './details-ad/details-ad.component';
import { DescriptionAdComponent } from './details-ad/description-ad/description-ad.component';
import { InformationsAdComponent } from './details-ad/informations-ad/informations-ad.component';
import { CommentsAdComponent } from './details-ad/comments-ad/comments-ad.component';
import { ForecastAdComponent } from './details-ad/forecast-ad/forecast-ad.component';
import { HomeAdComponent } from './details-ad/home-ad/home-ad.component';
import { HuntAdComponent } from './details-ad/hunt-ad/hunt-ad.component';
import { ActionsAdComponent } from './actions-ad/actions-ad.component';
import { OwnerAdComponent } from './actions-ad/owner-ad/owner-ad.component';
import { OptionsAdComponent } from './actions-ad/options-ad/options-ad.component';
import { ReassuranceAdComponent } from './actions-ad/reassurance-ad/reassurance-ad.component';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuMainComponent,
    SliderComponent,
    SlideComponent,
    DetailsAdComponent,
    DescriptionAdComponent,
    InformationsAdComponent,
    CommentsAdComponent,
    ForecastAdComponent,
    HomeAdComponent,
    HuntAdComponent,
    ActionsAdComponent,
    OwnerAdComponent,
    OptionsAdComponent,
    ReassuranceAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GoogleMapsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzCarouselModule,
    NzTagModule,
    NzCollapseModule,
    NzSelectModule,
    NzCommentModule,
    NzRateModule,
    NzTypographyModule,
    NzAffixModule,
    NzAvatarModule
  ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }],
  bootstrap: [AppComponent]
})
export class AppModule { }


