// Функция для проверки email с помощью регулярного выражения
function isValidEmail(email) {
  // Регулярное выражение для проверки email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Пример использования
const testEmail = "example@test.com";
console.log(`Является ли "${testEmail}" валидным email?`, isValidEmail(testEmail));

// Дополнительные тесты
const emailsToTest = [
  "user@domain.com",
  "invalid.email@",
  "another@example",
  "test@test.co.uk",
  "no@spaces.com",
  "invalid@.com"
];

emailsToTest.forEach(email => {
  console.log(`"${email}" ->`, isValidEmail(email) ? "Valid" : "Invalid");
});