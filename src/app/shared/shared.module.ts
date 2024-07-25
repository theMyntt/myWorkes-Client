import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ChevronDown, LucideAngularModule } from 'lucide-angular';
import { EntryComponent } from './components/entry/entry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormComponent } from './components/base-form/base-form.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    CapitalizePipe,
    DropdownComponent,
    EntryComponent,
    BaseFormComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronDown }),
    ReactiveFormsModule,
  ],
  exports: [
    CapitalizePipe,
    DropdownComponent,
    EntryComponent,
    BaseFormComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
