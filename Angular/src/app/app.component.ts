import { Component, OnInit, ViewChild } from '@angular/core';
import type { Customer, Employee } from './types';
import { DxDataGridComponent, type DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import type { ValueChangedEvent } from 'devextreme/ui/lookup';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(DxDataGridComponent) dataGrid!: DxDataGridComponent<Employee, number>;
  employees: Employee[] = [];
  customers: Customer[] = [];

  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.employees = this.service.getEmployees();
    this.customers = this.service.getCustomers();
  }

  onEditorPreparing(e: DxDataGridTypes.EditorPreparingEvent<Employee, number>): void {
    if (e.parentType === 'dataRow' && e.dataField === 'CustomerID') {
      e.editorOptions.onValueChanged = (ev: ValueChangedEvent): void => {
        const selectedItem = ev.component.option('selectedItem') as Customer;
        if (!selectedItem || !e.setValue) return;
        e.setValue(selectedItem);
      };
    }
  }

  setCellValue(rowData: Employee, value: Customer): void {
    if (!rowData || !value) return;
    rowData.CustomerID = value.CustomerID;
    rowData.Address = value.Address;
    rowData.Phone = value.Phone;
  }
}
