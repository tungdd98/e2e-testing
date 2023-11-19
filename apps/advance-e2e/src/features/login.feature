Feature: Login Screen

  Scenario: Load page
    Given Open url "/"
    When Wait for 3000 ms
    Then Verify that title is "Login Screen"
    When Set "login-input-email" blank
    When Set "login-input-password" blank
    Then Verify that the "login-button" is inactive
    When Set "admin" to "login-input-email"
    Then Verify that the "login-input-email-error" is displayed
    Then Verify that the "login-button" is inactive
    When Set "admin@gmail.com" to "login-input-email"
    Then Verify that the "login-input-email-error" is hidden
    When Set "123" to "login-input-password"
    Then Verify that the "login-input-password-error" is hidden
    Then Verify that the "login-button" is active
