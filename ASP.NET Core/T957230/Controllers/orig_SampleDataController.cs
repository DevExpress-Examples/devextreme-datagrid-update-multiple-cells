using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using T957230.Models;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.IO;
using System.Text;
using Microsoft.AspNetCore.Http;

namespace T957230.Controllers {

    [Route("api/[controller]/[action]")]
    public class SampleDataController : Controller {

        [HttpGet]
        public object GetEmployees(DataSourceLoadOptions loadOptions) {
            return DataSourceLoader.Load(SampleData.Employees, loadOptions);
        }

        [HttpPost]
        public IActionResult InsertEmployee(string values) {
            var newEmployee = new Employee();
            JsonConvert.PopulateObject(values, newEmployee);

            SampleData.Employees.Add(newEmployee);

            return Ok(newEmployee);
        }

        [HttpPut]
        public IActionResult UpdateEmployee(int key, string values) {
            var employee = SampleData.Employees.First(e => e.ID == key);
            JsonConvert.PopulateObject(values, employee);

            return Ok(employee);
        }

        [HttpGet]
        public object GetLookupData(DataSourceLoadOptions loadOptions)
        {
            return DataSourceLoader.Load(SampleData.Customers, loadOptions);
        }
    }
}