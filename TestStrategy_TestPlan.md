**Test Strategy**
The test strategy will outline the high-level approach:

Scope:

- Verify login functionality.
- Verify functionality to display selected employees’ city of origin.

**Types of Testing:**

- Functional Testing: Test login and selection features manually to confirm they work as expected.
- UI Automation: Use Cypress to automate the test cases.
- Boundary Testing: Check login for edge cases like invalid credentials and empty fields.
- Data Display Validation: Confirm city information is correct for selected employees.

**Risks:**

- UI responsiveness issues on different devices.
- Potential errors displaying data if the city value is null.
- Pagination

**Automation Scope:**

- Automate login validation and employee selection using Cypress.
- Focus on key functional flows to maximize efficiency.

**Test Plan**
In the test plan we will delve into the project specifications:

**Test Cases:**

**_Login Functionality:_**

- Valid login: Ensure login with correct credentials is successful.
- Invalid login: Test with incorrect username and password.
- Missing username or password.

**_Employee City of Origin Display:_**

- Verify that selected employees’ cities display correctly.
- Test selection and display when no city is assigned (like null values).
- Confirm accurate city display when multiple employees are selected.

**Automation Implementation:**

Write Cypress tests covering login and employee selection/display.
Structure Cypress tests to validate login with positive/negative cases and ensure data displays in the list as expected.

**Documentation:**

Issues and Missing Criteria: Document identified issues (Example: null handling for city field).
Acceptance Criteria Review: Note any unclear requirements or missing criteria, such as error message specifications for invalid login.

**Negative Tests in Cypress:**

It’s important to note that the negative tests for login functionality in Cypress are intentionally designed to fail. This is because the login feature itself is not yet properly implemented. These tests will serve as placeholders for when the feature is completed, ensuring that once the login is properly integrated, the negative tests can be revisited and passed. This approach helps maintain focus on testing the other features while also highlighting areas needing development or improvement in the login functionality.
