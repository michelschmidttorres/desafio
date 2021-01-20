shoppingList = [
    { item: "pencil", amount: 1, price: 1.00 },         // 1,00
    { item: "smartphone", amount: 15, price: 1599.99 }, // 23.999,85
    { item: "notebook", amount: 7, price: 2399.80 },    // 16.798,60
    { item: "mouse", amount: 37, price: 29.73 },        // 1.100,01
    { item: "keyboard", amount: 37, price: 35.39 }      // 1.309,43
]                                                       // TOTAL = 43.208,89

mailList = [
    "joao@abc.com",
    "pedro@xpto.com.br",
    "dev@stone.com.br"
]

function validateInputs(shoppingList, mailList) {
    if (!shoppingList)
        return 'shoppingList not defined'
    if (!mailList)
        return 'mailList not defined'
    if (shoppingList.length === 0)
        return "Empty shopping list"
    if (mailList.length === 0)
        return "Empty mail list"
}

function calculateTotalPerPerson(shoppingList, mailList) {

    validateInputs(shoppingList, mailList)

    // Calculate the total value
    shoppingListTotal = shoppingList.reduce((total, currentItem) => {
        return total += currentItem.amount * (currentItem.price * 100)
    }, 0)

    // Index generated to control rounding of values
    let index = mailList.length
    let totalPerPerson = mailList.map(email => {
        let value = shoppingListTotal / index
        shoppingListTotal = shoppingListTotal - value
        // The first email will always be rounded up
        if (index == mailList.length) {
            index--
            return Math.ceil(value) / 100
        } else {
            index--
            return Math.floor(value) / 100
        }
    })

    // Map collection generated to return the desired list
    const billPerPerson = new Map()
    for (let i = 0; i < mailList.length; i++) {
        billPerPerson.set(mailList[i], totalPerPerson[i])
    }
    return billPerPerson
}

// Showing the result on the console when calling the function
console.log(calculateTotalPerPerson(shoppingList, mailList))

// Output
// 'joao@abc.com' => 14402.97,
// 'pedro@xpto.com.br' => 14402.96,
// 'dev@stone.com.br' => 14402.96


//      TOTAL    =      43208,89

