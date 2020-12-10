$(function() {
    $("#gridContainer").dxDataGrid({
        keyExpr: "ID",
        dataSource:  employees,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            mode: "row"
        },
        columns: [
            { 
                caption: "Name",
                dataField: "CustomerID",
                setCellValue: function(rowData, value) {
                    rowData.CustomerID = value.CustomerID
                    rowData.Address = value.Address;
                    rowData.Phone = value.Phone;
                },
                lookup: {
                    dataSource: lookupData,
                    valueExpr: "CustomerID",
                    displayExpr: "CustomerName"
                }
            },
            "Address", "Phone"
        ],
        onEditorPreparing: function(e){
            if(e.parentType === "dataRow" && e.dataField === "CustomerID"){
                e.editorOptions.onValueChanged = function(ev){
                    let selectedItem = ev.component.option('selectedItem'); 
                    e.setValue(selectedItem);  
                }
            }
        }
    });
});
