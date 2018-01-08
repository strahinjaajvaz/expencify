// yarn run test -- --watchAll

const add = (a, b) => a + b;

test("Should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

const generateGreeting = (name = "anonymous") => {
  return `Hello ${name}!`;
};

test("Should give a greeting", () => {
  const result = generateGreeting("strahinja");
  expect(result).toBe("Hello strahinja!");
});

test("Should give a greeting", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello anonymous!");
});

