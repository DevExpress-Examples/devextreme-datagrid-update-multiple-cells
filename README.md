# DataGrid - Update multiple values in a row after selecting an item in a lookup column editor

This example demonstrates how to update adjacent values on selecting an item in the editor.

The main steps are:

- Define [onEditorPreparing](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onEditorPreparing) to override the built-in `onValueChanged` event handler for a lookup column editor.
- Call the `setValue` method with the `selectItem` option as a parameter to pass changes to the grid.  
- Define the [setCellValue](https://js.devexpress.com/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#setCellValue) callback function in a lookup column and use the `newData` parameter to update adjacent cells. The `value` parameter will represent an item you selected.


In this particular example, you can select a new value in the "Name" column and see that "Address" and "Phone" columns become changed as well.
