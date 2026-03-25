import { useCallback } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import DataGrid, {
  Editing,
  Column,
  Lookup,
} from 'devextreme-react/data-grid';
import type { DataGridTypes } from 'devextreme-react/data-grid';
import type { Customer, Employee } from './types';
import { customers, employees } from './data';

function App(): JSX.Element {
  const onEditorPreparing = useCallback((e: DataGridTypes.EditorPreparingEvent<Employee, number>): void => {
    if (e.parentType === 'dataRow' && e.dataField === 'CustomerID') {
      e.editorOptions.onValueChanged = function(event: { component: { option: (_key: string) => Customer } }): void {
        const selectedItem = event.component.option('selectedItem');
        if (e.setValue) {
          e.setValue(selectedItem);
        }
      };
    }
  }, []);

  const setCellValue = useCallback((rowData: Employee, value: Customer): void => {
    rowData.CustomerID = value.CustomerID;
    rowData.Address = value.Address;
    rowData.Phone = value.Phone;
  }, []);

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
