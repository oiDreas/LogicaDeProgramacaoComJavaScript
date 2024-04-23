//JSON - JavaScript Object Notation
//Agrupamento de Dados
//Chave e Valor com objetivo de transferir dados

let invoice = {  //Aqui temos um JSON
    name: 'Anthony',
    age: 20,
    products: {
        0: ['Mouse Redragon Cobra' , 129.90],
        1: ['Teclado Mecanico' , 200.00],
        2: ['Monitor Samsung' , 540.90],
        3: ['Monitor Concordia' ,  610.90]
    },
}

function generateInvoice(invoice) {
    console.log(`Nome do comprador: ${invoice.name}`)
    console.log(`Idade do comprador: ${invoice.age}`)
    console.log(`Produtos escolhidos`)

    for (let i in invoice.products) {
        let [productsName, productsPrice] = invoice.products[i]
        console.log(`- ${productsName} ${productsPrice}!`)
    }
}

generateInvoice(invoice)