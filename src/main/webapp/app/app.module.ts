import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Segurameil2SharedModule } from 'app/shared/shared.module';
import { Segurameil2CoreModule } from 'app/core/core.module';
import { Segurameil2AppRoutingModule } from './app-routing.module';
import { Segurameil2HomeModule } from './home/home.module';
import { Segurameil2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Segurameil2SharedModule,
    Segurameil2CoreModule,
    Segurameil2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Segurameil2EntityModule,
    Segurameil2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Segurameil2AppModule {}
