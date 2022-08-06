import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('./pages/page-layout/page-layout.module').then(
        (m) => m.PageLayoutModule
      );
    },
  },
];
// let routes: Routes = [
//   {
//     path: '',
//     component: PageLayoutComponent,
//     children: [
//       {
//         path: '',
//         component: PageHomeComponent,
//         loadChildren: () =>
//           import('./pages/page-home/page-home.module').then(
//             (m) => m.PageHomeModule
//           ),
//       },
//       {
//         path: '**',
//         redirectTo: '',
//       },
//     ],
//   },
// ];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
