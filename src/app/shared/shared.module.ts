import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { EntryComponent } from './components/entry/entry.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CapitalizePipe, DropdownComponent, EntryComponent],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronDown }),
    ReactiveFormsModule,
  ],
  exports: [CapitalizePipe, DropdownComponent, EntryComponent],
})
export class SharedModule {}
