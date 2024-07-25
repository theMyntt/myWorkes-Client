import { forwardRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { EntryComponent } from './components/entry/entry.component';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    CapitalizePipe,
    DropdownComponent,
    EntryComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronDown }),
    ReactiveFormsModule,
  ],
  exports: [CapitalizePipe, DropdownComponent, EntryComponent, ButtonComponent],
})
export class SharedModule {}
