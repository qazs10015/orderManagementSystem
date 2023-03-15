import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const mat = [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  LayoutModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...mat
  ],
  exports: [
    ...mat
  ]
})
export class ShareModule { }
