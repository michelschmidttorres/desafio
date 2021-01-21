function calculateTotalPerPerson(shoppingList, mailList) {

    if (!shoppingList)
        return 'shoppingList not defined'
    if (!mailList)
        return 'mailList not defined'
    if (shoppingList.length === 0)
        return "Empty shopping list"
    if (mailList.length === 0)
        return "Empty mail list"

    shoppingListTotal = shoppingList.reduce((total, currentItem) => {
        return total += currentItem.amount * currentItem.price
    }, 0)

    let valuePerPerson = shoppingListTotal / mailList.length
    let modValuePerPerson = shoppingListTotal % mailList.length

    const billPerPerson = new Map()

    mailList.forEach(email => {
        if (modValuePerPerson != 0) {
            billPerPerson.set(email, Math.floor(valuePerPerson + 1))
            modValuePerPerson = modValuePerPerson - 1
        } else {
            billPerPerson.set(email, Math.floor(valuePerPerson))
        }
    })

    return billPerPerson
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



