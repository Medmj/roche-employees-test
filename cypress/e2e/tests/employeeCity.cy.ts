import { employeePage } from "../pages/employeePageObjects.po";

describe("Employee TreeGrid Tests", () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it("should display the employee TreeGrid", () => {
    employeePage.verifyTreeGridExists();
  });

  it("should allow selecting employees and verify their cities", () => {
    employeePage.selectAndVerifyEmployee("Andrew", "Tacoma");
  });

  it("should handle multiple employee selections", () => {
    const employeeData = [
      { name: "Nancy", city: "Seattle" },
      { name: "Andrew", city: "Tacoma" },
      { name: "Janet", city: "Kirkland" },
    ];

    employeePage.selectAndVerifyMultipleEmployees(employeeData);
  });

  it("should handle pagination", () => {
    employeePage.verifyPaginationExists();
    employeePage.verifyRowCount(9);
  });
});
