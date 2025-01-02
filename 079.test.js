let users

beforeEach(() => {
    users = {
        '101': { id: 101, name: 'Dimych' },
        '3232312': { id: 3232312, name: 'Natasha' },
        '1212': { id: 1212, name: 'Valera' },
        '1': { id: 1, name: 'Katya' }
    }
})

test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'
    delete users['1212']


    expect(users['1'].name).toBe('Ekaterina');
    expect(users['1']).toEqual({ id: 1, name: 'Ekaterina' })
    expect(users['1212']).toBe(undefined) 
    expect(users['1212']).toBeUndefined()
})