import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CircleX, Eye, LucideAngularModule, Mail } from 'lucide-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EmployeerfuncPipe } from './home/pipes/employeerfunc.pipe';
import { ActionTableComponent } from './home/components/action-table/action-table.component';
import { ActionDialogComponent } from './home/components/action-dialog/action-dialog.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    EmployeerfuncPipe,
    ActionTableComponent,
    ActionDialogComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    LucideAngularModule.pick({ Eye, Mail, CircleX }),
    ReactiveFormsModule,
  ],
})
export class FeaturesModule {}
