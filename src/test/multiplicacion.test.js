import { producto } from "../js/multiplicacion";

test ("el producto de 7*35 debe ser 245", ()=>{
    expect(producto(7,35)).toBe(245)
})

test ("el producto de 1/3*3 debe ser 1 ", ()=>{
    expect(producto(1/3,3)).toBe(1)
})

test ("el producto de 0.333333*3 no debe ser 1", ()=>{
    expect(producto(0.333333,3)).not.toBe(1)
})