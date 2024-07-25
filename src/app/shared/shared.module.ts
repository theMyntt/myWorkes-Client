import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [CapitalizePipe, DropdownComponent],
  imports: [CommonModule, LucideAngularModule.pick({ ChevronDown })],
  exports: [CapitalizePipe, DropdownComponent],
})
export class SharedModule {}
