import { resta } from "../js/resta";

test('la funcion resta(7,5) deberia dar 2', ()=>{
    expect(resta(7,5)).toBe(2)
})

test('la funcion resta(1,-8) deberia dar 9', ()=>{
    expect(resta(1,-8)).toBe(9)
})
