Feature: sky tests

  # Scenario Outline: As a user, I can log into the secure area
  #   Given I am on the login page
  #   When I login with <username> and <password>
  #   Then I should see a flash message saying <message>

  #   Examples:
  #     | username | password             | message                        |
  #     | tomsmith | SuperSecretPassword! | You logged into a secure area! |
  #     | foobar   | barfoo               | Your username is invalid!      |

  Scenario Outline: Ensure to deals page loads
    Given I am on the home page
    When I navigate to Deals
    Then the user should be on the offers page
 
  # Scenario Outline: Ensure log in failure alert works
  #   Given I am on the home page
  #   When I try to sign in with invalid credentials
  #   Then I should see a text saying that Sorry, we did not recognise either your username or password

  # Scenario Outline: Ensure offer page loads
  #   Given I am on the offers page
  #   Then I see a list of offers with a <price> to it

  #   Examples:
  #     | price |
  #     |  25   |
  #     |  43   |
  #     |  50   |

  # Scenario Outline: Check search bar
  #   Given I am on the home page
  #   When I search sky in the search bar
  #   Then I should see an editorial section