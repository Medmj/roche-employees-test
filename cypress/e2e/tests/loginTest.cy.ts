// login.spec.ts
import { LoginPage } from "../pages/login.po";

describe("Login Functionality Test", () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.visitHomePage();
  });

  // Positive Test: should allow login with valid credentials
  it("should allow login with valid credentials", () => {
    loginPage.fillLoginForm("validuser", "validpassword");
    loginPage.submitForm();
    loginPage.assertLoginSuccess();
  });

  // Negative Test: should show an error with incorrect username
  it("should show an error with incorrect username", () => {
    loginPage.fillLoginForm("wronguser", "validpassword");
    loginPage.submitForm();
    loginPage.assertErrorMessage();
  });

  // Negative Test: should show an error with incorrect password
  it("should show an error with incorrect password", () => {
    loginPage.fillLoginForm("validuser", "wrongpassword");
    loginPage.submitForm();
    loginPage.assertErrorMessage();
  });

  // Negative Test: should not allow login with empty fields
  it("should not allow login with empty username and password fields", () => {
    loginPage.submitForm();
    loginPage.assertValidationError("Please fill in both fields"); // Assuming a validation message appears
  });

  // Negative Test: should not allow login with only one field filled
  it("should not allow login with only one field filled", () => {
    loginPage.fillLoginForm("validuser", "");
    loginPage.submitForm();
    loginPage.assertValidationError("Please enter your password"); // Assuming an error message appears
  });
});
