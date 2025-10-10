<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import { DxDataGrid, DxColumn, DxEditing, DxLookup } from 'devextreme-vue/data-grid';
import type { DxDataGridTypes } from 'devextreme-vue/data-grid';
import type { ValueChangedEvent } from 'devextreme/ui/lookup';
import type { Customer, Employee } from '../types';
import { customers, employees } from '../data';

const onEditorPreparing = (e: DxDataGridTypes.EditorPreparingEvent<Employee, number>): void => {
  if (e.parentType === 'dataRow' && e.dataField === 'CustomerID') {
    e.editorOptions.onValueChanged = function(ev: ValueChangedEvent): void {
      const selectedItem = ev.component.option('selectedItem') as Customer;
      if (!selectedItem || !e.setValue) return;
      e.setValue(selectedItem);
    };
  }
};

const setCellValue = (rowData: Employee, value: Customer): void => {
  if (!rowData || !value) return;
  rowData.CustomerID = value.CustomerID;
  rowData.Address = value.Address;
  rowData.Phone = value.Phone;
};
</script>

<template>
  <DxDataGrid
    :data-source="employees"
    @editor-preparing="onEditorPreparing"
  >
    <DxEditing
      :allow-updating="true"
      :allow-adding="true"
    />
    <DxColumn
      caption="Name"
      data-field="CustomerID"
      :set-cell-value="setCellValue"
    >
      <DxLookup
        :data-source="customers"
        value-expr="CustomerID"
        display-expr="CustomerName"
      />
    </DxColumn>
    <DxColumn data-field="Address"/>
    <DxColumn data-field="Phone"/>
  </DxDataGrid>
</template>
