import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-custom-info',
  templateUrl: './custom-info.component.html',
  styleUrls: ['./custom-info.component.scss']
})
export class CustomInfoComponent implements AfterViewInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;

  expanded = false;

  title = '';

  private data = inject(MAT_DIALOG_DATA);

  constructor() {

  }
  ngAfterViewInit(): void {

    // 預設打開全部
    this.toggleExpansionPanel();
  }

  ngOnInit(): void {
    this.title = this.data.data.id;
  }

  toggleExpansionPanel() {
    this.expanded = !this.expanded;
    if (this.expanded) this.accordion.openAll();
    else this.accordion.closeAll();
  }


  execute() {

  }
}
