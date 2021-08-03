import React from "react";
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DataGrid, { Editing, Column, Lookup } from "devextreme-react/data-grid";
import { customers, employees } from "./data";

function App(props) {
  function onEditorPreparing(e) {
    if (e.parentType === "dataRow" && e.dataField === "CustomerID") {
      e.editorOptions.onValueChanged = function (ev) {
        let selectedItem = ev.component.option("selectedItem");
        e.setValue(selectedItem);
      };
    }
  }

  function setCellValue(rowData, value) {
    rowData.CustomerID = value.CustomerID;
    rowData.Address = value.Address;
    rowData.Phone = value.Phone;
  }

  return (
    <div>
      <DataGrid
        dataSource={employees}
        onEditorPreparing={onEditorPreparing}>
          <Editing 
            allowUpdating={true}
            allowAdding={true} />

          <Column
            caption="Name"
            dataField="CustomerID"
            setCellValue={setCellValue}>
            <Lookup
              dataSource={customers}
              valueExpr="CustomerID"
              displayExpr="CustomerName" />
          </Column>
          <Column dataField="Address" />
          <Column dataField="Phone" />
      </DataGrid>
    </div>
  );
}

export default App;
