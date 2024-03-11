import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() columnMapping: { [key: string]: string } = {};
}
