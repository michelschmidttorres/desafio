function calculateTotalPerPerson(shoppingList, mailList) {

    if (shoppingList.length === 0)
        return "Empty shopping list"
    if (mailList.length === 0)
        return "Empty mail list"

    const shoppingListTotal = shoppingList.reduce((total, currentItem) => {
        return total += currentItem.amount * currentItem.price 
    }, 0)

    const valuePerPerson =  Math.floor(shoppingListTotal / mailList.length)
    let missingCents = shoppingListTotal % mailList.length

    return mailList.reduce((billPerPerson, email) => {
        if(missingCents > 0) {
           billPerPerson[email] = valuePerPerson + 1
           missingCents--
        } else {
            billPerPerson[email] = valuePerPerson
        }
        return billPerPerson
    }, {})
}

shoppingList = [
    { item: "pencil", amount: 1, price: 100 },
    { item: "smartphone", amount: 15, price: 159999 },
    { item: "notebook", amount: 7, price: 239980 },
    { item: "mouse", amount: 37, price: 2973 },
    { item: "keyboard", amount: 37, price: 3539 }  
]                                                       

mailList = [
    "joao@abcd.com",
    "pedro@xpto.com.br",
    "dev@stone.com.br"
]

console.log(calculateTotalPerPerson(shoppingList, mailList))
