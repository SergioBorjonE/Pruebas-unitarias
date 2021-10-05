import {suma} from '../js/suma';

test('adds 1+2 to equal 3', ()=>{
    //Se espera que suma(1,2) sea 3
    expect(suma(1,2)).toBe(3);
})