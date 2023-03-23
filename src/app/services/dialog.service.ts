import { inject, Injectable, Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  dialog = inject(MatDialog);

  constructor() { }

  openDialog(dialogComponent: any, config?: MatDialogConfig) {
    const dialogConfig: MatDialogConfig = {
      disableClose: true,

      ...config
    };

    return this.dialog.open(dialogComponent, dialogConfig);
  }
}
