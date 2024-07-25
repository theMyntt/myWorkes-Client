import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [HeaderComponent, CardComponent],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, CardComponent],
})
export class CoreModule {}
