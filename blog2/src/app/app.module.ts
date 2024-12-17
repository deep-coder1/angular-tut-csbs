import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Ui 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button'
import { MatBadgeModule } from '@angular/material/badge';
import { ChildComponent } from './child/child.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Child2Component } from './child2/child2.component'

// Two-way binding Vid 31
import { FormsModule } from '@angular/forms';
import { UsdInrPipe } from './pipes/usd-inr.pipe'

// Reactive Form in Angular Vid 39
import { ReactiveFormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoPageComponent } from './no-page/no-page.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    UserDetailsComponent,
    Child2Component,
    UsdInrPipe,
    RedElDirective,
    UserComponent,
    HomeComponent,
    AboutComponent,
    NoPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBadgeModule,

    // Two-way binding Vid 31
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
