using System.Linq;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using ASP_NET_Core.Models;
using System.Text.Json;

namespace ASP_NET_Core.Controllers {
    public class EmployeesController: Controller {
        [HttpGet]
        public object GetEmployees(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(EmployeesData.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult InsertEmployee(string values) {
            var newItem = JsonSerializer.Deserialize<Employee>(values);
            if(newItem == null) return BadRequest();

            var nextId = EmployeesData.Employees.Any() ? EmployeesData.Employees.Max(e => e.ID) + 1 : 1;
            newItem.ID = nextId;
            EmployeesData.Employees.Add(newItem);

            return Ok(new { ID = newItem.ID });
        }

        [HttpPut]
        public IActionResult UpdateEmployee(int key, string values) {
            var item = EmployeesData.Employees.FirstOrDefault(e => e.ID == key);
            if(item == null) return NotFound();

            var updated = JsonSerializer.Deserialize<Employee>(values);
            if(updated == null) return BadRequest();

            item.CustomerID = updated.CustomerID;
            item.Address = updated.Address;
            item.Phone = updated.Phone;

            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteEmployee(int key) {
            var item = EmployeesData.Employees.FirstOrDefault(e => e.ID == key);
            if(item == null) return NotFound();

            EmployeesData.Employees.Remove(item);
            return Ok();
        }

        [HttpGet]
        public object GetCustomers(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(CustomersData.Customers, loadOptions);
        }
    }
}
