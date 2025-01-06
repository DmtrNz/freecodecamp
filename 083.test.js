

describe('User Service', () => {
  test('should list users', async () => {
    const users = await userService.listUsers();
    expect(Array.isArray(users)).toBe(true);
  });

  test('should find a user by ID', async () => {
    const userId = '123'; // Замените на реальный ID пользователя
    const user = await userService.findUser(userId);
    expect(user).toHaveProperty('id', userId);
  });

  test('should add a new user', async () => {
    const newUserData = { name: 'John Doe', email: 'john.doe@example.com' };
    const newUser = await userService.addUser(newUserData);
    expect(newUser).toHaveProperty('id');
    expect(newUser.name).toBe(newUserData.name);
    expect(newUser.email).toBe(newUserData.email);
  });

  test('should update an existing user', async () => {
    const userId = '123'; // Замените на реальный ID пользователя
    const updatedUserData = { name: 'Jane Doe' };
    const updatedUser = await userService.modifyUser(userId, updatedUserData);
    expect(updatedUser.id).toBe(userId);
    expect(updatedUser.name).toBe(updatedUserData.name);
  });

  test('should delete a user', async () => {
    const userId = '123'; // Замените на реальный ID пользователя
    const result = await userService.removeUser(userId);
    expect(result).toHaveProperty('message', `User with ID ${userId} deleted successfully`);
  });
});