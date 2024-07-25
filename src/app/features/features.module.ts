import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { Eye, LucideAngularModule, Mail } from 'lucide-angular';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    LucideAngularModule.pick({ Eye, Mail }),
  ],
})
export class FeaturesModule {}
