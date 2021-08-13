<template>
  <DxDataGrid 
    :data-source="employees"
    @editor-preparing="onEditorPreparing">
    <DxEditing
      :allow-updating="true"
      :allow-adding="true" />

    <DxColumn
      caption="Name"
      data-field="CustomerID"
      :set-cell-value="setCellValue">
      <DxLookup 
        :data-source="customers"
        value-expr="CustomerID"
        display-expr="CustomerName" />
    </DxColumn>
    <DxColumn data-field="Address" />
    <DxColumn data-field="Phone" />
  </DxDataGrid>
</template>

<script>
import DxDataGrid, {
  DxEditing,
  DxColumn,
  DxLookup,
} from "devextreme-vue/data-grid";
import { customers, employees } from "./data";

export default {
  name: "App",
  components: {
    DxDataGrid,
    DxEditing,
    DxColumn,
    DxLookup,
  },
  data() {
    return {
      customers: customers,
      employees: employees
    };
  },
  methods: {
    onEditorPreparing(e) {
      if (e.parentType === "dataRow" && e.dataField === "CustomerID") {
        e.editorOptions.onValueChanged = function (ev) {
          let selectedItem = ev.component.option("selectedItem");
          e.setValue(selectedItem);
        };
      }
    },
    setCellValue(rowData, value) {
      rowData.CustomerID = value.CustomerID;
      rowData.Address = value.Address;
      rowData.Phone = value.Phone;
    },
  },
};
</script>

<style>
</style>
