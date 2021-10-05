describe ('Probaremos jest',()=>{
    test ('objetos igalues', ()=>{
        const datos1={
            nombre:"Sergio",
            edad: 21
        }

        const datos2={
            nombre:"No Sergio",
            edad: 21
        }
        expect (datos1).not.toEqual(datos2)
    })
}
)