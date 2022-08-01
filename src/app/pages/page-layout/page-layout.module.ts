import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from '../page-home/page-home.component';
import { ComponentsModule } from 'src/app/components/components.module';

let router: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: 'home',
        component: PageHomeComponent,
        loadChildren: () =>
          import('./../page-home/page-home.module').then(
            (m) => m.PageHomeModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(router), ComponentsModule],
  declarations: [PageLayoutComponent],
  exports: [PageLayoutComponent],
})
export class PageLayoutModule {}
