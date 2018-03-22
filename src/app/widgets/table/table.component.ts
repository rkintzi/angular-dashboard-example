import { Component, OnInit, Input } from '@angular/core';

export interface TableConfig {
    table: string;
}

@Component({
  selector: 'table-widget',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() config: TableConfig;

  constructor() { }

  ngOnInit() {
  }

}
