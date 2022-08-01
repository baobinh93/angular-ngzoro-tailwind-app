import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AntdModule } from './antd/antd.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AntdModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
