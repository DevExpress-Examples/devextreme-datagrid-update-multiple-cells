import { Injectable } from "@angular/core";

export class Employee {
  ID: number;
  CustomerID: number;
  Address: string;
  Phone: string;
}

export class Customer {
  CustomerID: number;
  CustomerName: string;
  Address: string;
  Phone: string;
}

let employees: Employee[] = [
  { ID: 1, CustomerID: 1, Address: "Markušica", Phone: "+385 674 958 1641" },
  { ID: 2, CustomerID: 2, Address: "Itaberaí", Phone: "+55 491 329 4084" },
  { ID: 3, CustomerID: 3, Address: "Volgograd", Phone: "+7 745 619 7799" },
  { ID: 4, CustomerID: 4, Address: "Shuiyin", Phone: "+86 774 746 9874" },
  { ID: 5, CustomerID: 5, Address: "Baturaden", Phone: "+62 113 149 9397" },
  { ID: 6, CustomerID: 6, Address: "New York City", Phone: "+1 917 528 7751" },
  {
    ID: 7,
    CustomerID: 7,
    Address: "Adolfo Lopez Mateos",
    Phone: "+52 626 244 6757"
  },
  { ID: 8, CustomerID: 8, Address: "Nong Khae", Phone: "+66 326 375 8694" },
  { ID: 9, CustomerID: 9, Address: "Znamenskoye", Phone: "+7 926 141 2517" },
  {
    ID: 10,
    CustomerID: 10,
    Address: "Patpata Segundo",
    Phone: "+63 428 750 7737"
  },
  { ID: 11, CustomerID: 11, Address: "Fontanka", Phone: "+380 557 509 4191" },
  { ID: 12, CustomerID: 12, Address: "Novosil’", Phone: "+7 493 632 2768" },
  { ID: 13, CustomerID: 13, Address: "Ubinskoye", Phone: "+7 954 353 8930" },
  { ID: 14, CustomerID: 14, Address: "Protvino", Phone: "+7 386 362 2407" },
  {
    ID: 15,
    CustomerID: 15,
    Address: "Santa Fé do Sul",
    Phone: "+55 867 691 7097"
  }
];

let customers: Customer[] = [
  {
    CustomerID: 1,
    CustomerName: "Kaela Phonix",
    Address: "Jiaodai",
    Phone: "+86 198 391 4102"
  },
  {
    CustomerID: 2,
    CustomerName: "Dotty Hearnden",
    Address: "Jiangkou",
    Phone: "+86 150 280 2140"
  },
  {
    CustomerID: 3,
    CustomerName: "Alasdair Greenin",
    Address: "Lyubokhna",
    Phone: "+7 657 495 7659"
  },
  {
    CustomerID: 4,
    CustomerName: "Stoddard Laidlaw",
    Address: "Daguma",
    Phone: "+63 329 967 9440"
  },
  {
    CustomerID: 5,
    CustomerName: "Damiano Gencke",
    Address: "Rozkishne",
    Phone: "+380 535 527 9516"
  },
  {
    CustomerID: 6,
    CustomerName: "Aura Bavidge",
    Address: "Aboisso",
    Phone: "+225 835 264 8238"
  },
  {
    CustomerID: 7,
    CustomerName: "Emmanuel Chedgey",
    Address: "Chafé",
    Phone: "+351 303 415 1547"
  },
  {
    CustomerID: 8,
    CustomerName: "Clerkclaude Pargeter",
    Address: "Nikol’sk",
    Phone: "+7 345 358 4671"
  },
  {
    CustomerID: 9,
    CustomerName: "Onfroi Cinnamond",
    Address: "Feijó",
    Phone: "+55 418 840 9370"
  },
  {
    CustomerID: 10,
    CustomerName: "Madlin Kopke",
    Address: "Jejkowice",
    Phone: "+48 767 236 8446"
  },
  {
    CustomerID: 11,
    CustomerName: "Mortie Feary",
    Address: "Leiguan",
    Phone: "+86 100 827 4204"
  },
  {
    CustomerID: 12,
    CustomerName: "Colet Haitlie",
    Address: "Afántou",
    Phone: "+30 605 452 7075"
  },
  {
    CustomerID: 13,
    CustomerName: "Pippy Carnell",
    Address: "Marugame",
    Phone: "+81 887 757 6251"
  },
  {
    CustomerID: 14,
    CustomerName: "Arvie Midden",
    Address: "Jiantianjie",
    Phone: "+86 950 705 1403"
  },
  {
    CustomerID: 15,
    CustomerName: "Brook Kamena",
    Address: "Amassoma",
    Phone: "+234 844 479 2019"
  }
];

@Injectable()
export class Service {
  getCustomers() {
    return customers;
  }
  getEmployees() {
    return employees;
  }
}
