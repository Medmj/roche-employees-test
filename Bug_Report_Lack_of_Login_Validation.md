**Bug Report: Lack of Login Validation**

- Title: Lack of Login Validation Allows Access with Any Credentials

- Severity: High

- Priority: Critical

- Environment:

Application: Roche Employee Management Web Application
Browser: Chrome (Version 118.0.x) and Firefox (Version 119.0.x)
OS: MacOS

Description: The login functionality in the Roche Employee Management application currently lacks proper validation. Users can enter any credentials (username and password) to access the application, regardless of their validity. This security flaw poses a risk by allowing unauthorized access without any form of credential verification.

Steps to Reproduce:

- Open the Roche Employee Management application.
- Select the login section fields in the top left of the screen.
- Enter any random text in the username and password fields (e.g., Username: "testuser", Password: "password123").
- Click the "Sign in" button.

Expected Result: The application should validate the credentials and only grant access if the username and password are correct. If invalid credentials are entered, an error message should appear, and the user should remain on the login page.

Actual Result: The application grants access without verifying the username or password, allowing any input to pass as valid credentials.

Impact: This issue severely impacts security as unauthorized users can gain access without proper validation. It is critical to implement backend authentication to ensure only legitimate users can log in.

Recommendation: Implement server-side validation for login credentials, ensuring that:

Only users with valid usernames and passwords can gain access.
Incorrect credentials prompt an error message.
