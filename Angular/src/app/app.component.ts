import { Component } from '@angular/core';
import { Employee, Customer, Service } from "./app.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent {
  employees: Employee[];
  customers: Customer[];
  constructor(service: Service) {
    this.employees = service.getEmployees();
    this.customers = service.getCustomers();
  }

  onEditorPreparing = (e) => {
    if (e.parentType === "dataRow" && e.dataField === "CustomerID") {
      e.editorOptions.onValueChanged = function (ev) {
        let selectedItem = ev.component.option("selectedItem");
        e.setValue(selectedItem);
      };
    }
  };

  setCellValue = (rowData, value) => {
    rowData.CustomerID = value.CustomerID;
    rowData.Address = value.Address;
    rowData.Phone = value.Phone;
  };
}
