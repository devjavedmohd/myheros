import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { SoftwareComponent } from './software/software.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'dashboard',   component: DashboardComponent},
    {path: 'about',       component: AboutComponent},
    {path: 'blog',        component: BlogComponent},
    {path: 'software',    component: SoftwareComponent},
    {path: 'portfolio',   component: PortfolioComponent},
    {path: 'contact',     component: ContactComponent},
    {path: 'heroes',      component: HeroesComponent},
    {path: 'detail/:id',  component: HeroDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
