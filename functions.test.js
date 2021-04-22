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