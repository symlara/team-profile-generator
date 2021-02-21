const Engineer = require("../lib/Engineer");

test("Can set GitHUb account from constructor", () => {
  const testValue = "GitHubUser";
  const i = new Engineer("Alex", 1, "email@email.com", testValue);
  expect(i.github).toBe(testValue);
});

test("getRole() should return Engineer", () => {
  const testValue = "Engineer";
  const i = new Engineer("Aaliyah", 1, "email@email.com", "GitHubUser");
  expect(i.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHub";
  const i = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(i.getGitHub()).toBe(testValue);
});