import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../views/home/home.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';
import { DashComponentComponent } from './dash-component/dash-component.component';

const routes: Routes = [
  {
    path: 'dashboard', component: HomeComponent
  },{
    path:'assistant', component: ChatbotComponent
  },{
    path:'home', component: DashComponentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
