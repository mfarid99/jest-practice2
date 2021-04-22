const functions = require('./functions')

test('Adds 2 and 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test('adds 3 + 4 equals 7', ()=> {
    expect(functions.add(3, 4)).toBe(7)
})

test('sub 100 - 91 equals 9', ()=> {
    expect(functions.sub(100, 91)).toBe(9)
})

test('3 X 4 X 2 equal 24', () => {
    expect(functions.metalx(3, 4, 2)).toBe(24)
})

test('8 should result in 8', ()=> {
    expect(functions.checkVal(8)).toBe(8);
})

test('user should be Moe Farid', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Moe',
        lastName: 'Farid'
    })
})

test('Should be under 1220', ()=> {
    const load1 = 400;
    const load2 = 500;
    expect(load1 + load2).toBeLessThan(1220)
})

test('to be equal 500', ()=> {
    const apple = 250;
    const orange = 150;
    const green = 100;
    expect(apple + orange + green).toBe(500)
})

test ('There is no I in team', ()=> {
    expect('Zero').toMatch(/Z/)
})

test('Admin should be in username', () => {
    adminNames = ['John', 'Sally', 'Harry']
    expect(adminNames).toContain('Sally')
})