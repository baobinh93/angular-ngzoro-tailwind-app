import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from '../page-home/page-home.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AntdModule } from 'src/app/antd/antd.module';

let routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: '',
        component: PageHomeComponent,
        loadChildren: () =>
          import('./../page-home/page-home.module').then(
            (m) => m.PageHomeModule
          ),
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AntdModule,
  ],
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
