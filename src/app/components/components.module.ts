import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from './header/header.component';
import { AntdModule } from '../antd/antd.module';

@NgModule({
  imports: [CommonModule, AntdModule],
  declarations: [ComponentsComponent, HeaderComponent],
  exports: [HeaderComponent],
})
export class ComponentsModule {}
