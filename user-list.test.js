// task 13.2

  const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
  const length = userList.length;

  test('verify that the array contains the element "admin"', () => {
    expect(userList).toContain('admin');
  });

  test('verify that the first element in the array is “Nick”', () => {
    expect(userList[0]).toMatch(/Nick/);
  });

  test('verify that the last element in the array is “new_user_2”', () => {
    expect(userList[length - 1]).toEqual('new_user_2');
  });  

  test('verify that the length of the array is 5', () => {
    expect(length).toBe(5);
  });
  
  test('verify that the 3rd element of the array has type string', () => {
    expect(typeof userList[2]).toEqual('string');
  });  
  
  test('verify that that the array does not have an 8th element', () => {
    expect(length).toBeLessThan(8);
  });
    