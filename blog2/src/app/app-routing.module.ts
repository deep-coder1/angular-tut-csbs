import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Start with Routing Vid 41
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

// 404 Page (Wild Card 404 Page Routing)
import { NoPageComponent } from './no-page/no-page.component';


// Child Route (Child Routing) Vid 44
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    component:AboutComponent,
    path:'about',
    children:[
      {path:'company', component:AboutCompanyComponent},
      {path:'me', component:AboutMeComponent},
    ]
  },
  {
    // path:'user/:no',
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  
  // 404 Page (Wild Card 404 Page Routing)
  {
    path:'**',
    component:NoPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
