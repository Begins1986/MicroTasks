import {ActionType, div, mult, numberReduser, sub, sum} from "./tasks";


test('sum of two number', () => {
    //1. Тестовые данные:
    const a: number = 10
    const b: number = 20
    //2. Выполнение кода
    const result = sum(a, b)
    //3. Проверка результатов
    expect(result).toBe(30)
})

test('subtract of two number', () => {
    expect(sub(40, 10)).toBe(30)
})

test('mult of two number', () => {
    expect(mult(50, 20)).toBe(1000)
})

test('div of two number', () => {
    expect(div(40, 10)).toBe(4)
})

test('sum with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType = {
        type: "sum",
        num: 500
    }
    const result = numberReduser(salary, action)
    expect(result).toBe(1500)
})

test('sub with numberReducer', () => {
    const salary: number = 1000
    const action: ActionType = {
        type: "sub",
        num: 500
    }
    const result = numberReduser(salary, action)
    expect(result).toBe(500)
})

test('mult with numberReducer', () => {
    const salary: number = 300
    const action: ActionType = {
        type: "mult",
        num: 5
    }
    const result = numberReduser(salary, action)
    expect(result).toBe(1500)
})

test('div with numberReducer', () => {
    const salary: number = 300
    const action: ActionType = {
        type: "div",
        num: 5
    }
    const result = numberReduser(salary, action)
    expect(result).toBe(60)
})