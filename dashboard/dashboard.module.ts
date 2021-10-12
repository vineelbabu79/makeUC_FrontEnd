import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { HomeComponent } from '../views/home/home.component';
import { DashComponentComponent } from './dash-component/dash-component.component';
import { ChatbotComponent } from '../chatbot/chatbot.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashComponentComponent,
    ChatbotComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
