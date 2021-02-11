import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './_guards/auth.guard';
import { UnsavedChangesGuard } from './_guards/unsaved-changes.guard';

const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent, canActivate: [AuthGuard] },
  { path: 'departments/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'feedback', component: FeedbackComponent, canDeactivate: [ UnsavedChangesGuard] },
  { path: '**', component: PageNotFoundComponent }
];

export const routingComponents = [
  DepartmentListComponent,
  EmployeeListComponent,
  FeedbackComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
