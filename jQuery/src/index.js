$(() => {
  $('#gridContainer').dxDataGrid({
    keyExpr: 'ID',
    dataSource: employees,
    editing: {
      allowUpdating: true,
      allowAdding: true,
      mode: 'row',
    },
    columns: [
      {
        caption: 'Name',
        dataField: 'CustomerID',
        setCellValue: (rowData, value) => {
          if (!rowData || !value) return;

          rowData.CustomerID = value.CustomerID;
          rowData.Address = value.Address;
          rowData.Phone = value.Phone;
        },
        lookup: {
          dataSource: customers,
          valueExpr: 'CustomerID',
          displayExpr: 'CustomerName',
        },
      },
      'Address',
      'Phone',
    ],
    onEditorPreparing: (e) => {
      if (e.parentType === 'dataRow' && e.dataField === 'CustomerID') {
        e.editorOptions.onValueChanged = (ev) => {
          const selectedItem = ev.component.option('selectedItem');
          if (!selectedItem || !e.setValue) return;

          e.setValue(selectedItem);
        };
      }
    },
  });
});
