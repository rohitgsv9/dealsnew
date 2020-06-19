// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { AdminIndexComponent } from './admin-index/admin-index.component';
// import { AddBlogComponent } from './add-blog/add-blog.component';
// import { AddDealComponent } from './add-deal/add-deal.component';
// import { UpdateBlogComponent } from './update-blog/update-blog.component';
// import { UpdateDealComponent } from './update-deal/update-deal.component';
// import { AdminLoginComponent } from './admin-login/admin-login.component';
// import { AddDealByLinkComponent } from './add-deal-by-link/add-deal-by-link.component';
// import { AddCaroComponent } from './add-caro/add-caro.component';
// import { UpdateCaroComponent } from './update-caro/update-caro.component';



// const routes: Routes = [
//   {
//     path: 'admin',
//     component: AdminLoginComponent,
//     children: [
//       {
//       path: '',
//       component: AdminIndexComponent,
//       children: [
//         { path: 'blogs', component: AddBlogComponent },
//         { path: 'deal', component: AddDealComponent },
//         { path: 'updateBlog', component: UpdateBlogComponent },
//         { path: '', component: AdminIndexComponent }
//       ],
//     }
//   ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AdminRoutingModule { }