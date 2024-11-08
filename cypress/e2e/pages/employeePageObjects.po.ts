class EmployeePageObjects {
  // Selectors
  private readonly treeGrid: string = "#treeGrid";
  private readonly treeGridTitle: string = ".jqx-tree-grid-title";
  private readonly treeGridCheckbox: string = ".jqx-tree-grid-checkbox";
  private readonly viewSelectedButton: string = "#btn";
  private readonly selectedListBox: string = "#listBoxSelected";
  private readonly gridPager: string = ".jqx-grid-pager";
  private readonly gridTitleHeader: string = ".jqx-tree-grid-title-header";

  // Wait methods
  waitForGridLoad(): void {
    cy.get(this.treeGrid).should("be.visible");
  }

  // Verification methods
  verifyTreeGridExists(): void {
    cy.get(this.treeGrid).should("exist");
    cy.get(this.treeGridTitle).should("exist");
  }

  verifyListBoxExists(): void {
    cy.get(this.selectedListBox).should("exist").and("be.visible");
  }

  verifyEmployeeCity(employeeName: string, city: string): void {
    cy.get(this.selectedListBox).should(
      "contain",
      `${employeeName} is from ${city}`
    );
  }

  verifyPaginationExists(): void {
    cy.get(this.gridPager).should("exist");
  }

  verifyRowCount(maxCount: number): void {
    cy.get(this.treeGrid)
      .find(this.gridTitleHeader)
      .should("have.length.lte", maxCount);
  }

  // action methods
  selectFirstEmployee(): void {
    cy.get(this.treeGrid).find(`${this.treeGridCheckbox}:first`).click();
  }

  selectMultipleEmployees(count: number): void {
    cy.get(this.treeGrid).within(() => {
      for (let i = 0; i < count; i++) {
        cy.get(this.treeGridCheckbox).eq(i).click();
      }
    });
  }

  clickViewSelectedButton(): void {
    cy.get(this.viewSelectedButton).click();
  }

  // Validation action methods
  selectAndVerifyEmployee(employeeName: string, city: string): void {
    this.selectFirstEmployee();
    this.clickViewSelectedButton();
    this.verifyListBoxExists();
    this.verifyEmployeeCity(employeeName, city);
  }

  selectAndVerifyMultipleEmployees(
    employeeData: Array<{ name: string; city: string }>
  ): void {
    this.selectMultipleEmployees(employeeData.length);
    this.clickViewSelectedButton();
    employeeData.forEach((employee) => {
      this.verifyEmployeeCity(employee.name, employee.city);
    });
  }
}

export const employeePage = new EmployeePageObjects();
