using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using ASP_NET_Core.Models;

namespace ASP_NET_Core.Controllers;

public class CustomersController : Controller {
    [HttpGet]
    public object GetCustomers(DataSourceLoadOptions loadOptions) {
        return DataSourceLoader.Load(CustomersData.Customers, loadOptions);
    }
}
