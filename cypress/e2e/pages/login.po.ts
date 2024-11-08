export class LoginPage {
  //selectors
  usernameInput = 'input[placeholder="username"]';
  passwordInput = 'input[placeholder="password"]';
  submitButton = 'input[type="submit"]';
  errorMessage = "body > .error"; // Assuming error messages are displayed in the body
  welcomeMessage = "body > .welcome"; // Assuming welcome message is displayed in the body

  // Methods
  fillLoginForm(username: string, password: string) {
    cy.get(this.usernameInput).type(username);
    cy.get(this.passwordInput).type(password);
  }

  submitForm() {
    cy.get(this.submitButton).click();
  }

  assertLoginSuccess() {
    cy.url().should("include", "/employees.html");
  }

  assertErrorMessage() {
    cy.get(this.errorMessage).should("contain", "Invalid credentials");
  }

  assertValidationError(message: string) {
    cy.get(this.errorMessage).should("contain", message);
  }
}
