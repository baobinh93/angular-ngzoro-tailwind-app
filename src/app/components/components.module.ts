import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { AntdModule } from '../antd/antd.module';
import { FooterComponent } from './footer/footer.component';
import { FormGuestInfoComponent } from './footer/form-guest-info/form-guest-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AntdModule, ReactiveFormsModule],
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    FormGuestInfoComponent,
  ],
  exports: [HeaderComponent, FooterComponent, FormGuestInfoComponent],
})
export class ComponentsModule {}
