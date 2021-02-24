import React from "react";
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DataGrid, { Editing, Column, Lookup } from "devextreme-react/data-grid";
import { customers, employees } from "./data";

class App extends React.Component {
  onEditorPreparing(e) {
    if (e.parentType === "dataRow" && e.dataField === "CustomerID") {
      e.editorOptions.onValueChanged = function (ev) {
        let selectedItem = ev.component.option("selectedItem");
        e.setValue(selectedItem);
      };
    }
  }

  setCellValue(rowData, value) {
    rowData.CustomerID = value.CustomerID;
    rowData.Address = value.Address;
    rowData.Phone = value.Phone;
  }

  render() {
    return (
      <div>
        <DataGrid
          dataSource={employees}
          onEditorPreparing={this.onEditorPreparing}>
            <Editing 
              allowUpdating={true}
              allowAdding={true} />

            <Column
              caption="Name"
              dataField="CustomerID"
              setCellValue={this.setCellValue}>
              <Lookup
                dataSource={customers}
                valueExpr="CustomerID"
                displayExpr="CustomerName" />
            </Column>
            <Column dataField="Address" />
            <Column dataField="Phone" />
        </DataGrid>
      </div>
    )
  }
}

export default App;
