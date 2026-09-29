let adds = document.getElementById("add-button");
let names = document.getElementById("expense-title");
let amounts = document.getElementById("expense-amount");
let categorys = document.getElementById("expense-category");
let descriptions = document.getElementById("expense-description");

let expenseList = document.getElementById("expense-list");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function showExpense(expense) {

    let row = document.createElement("tr");

    row.innerHTML = `
        <td>${expense.name}</td>
        <td>${expense.category}</td>
        <td>${expense.amount}</td>
        <td>${expense.description}</td>
        <td><button class="delete">🗑️</button></td>
    `;

    expenseList.appendChild(row);


    let deletes = row.querySelector(".delete");

    deletes.addEventListener("click", () => {

        row.remove();

        expenses = expenses.filter(item => item !== expense);


        localStorage.setItem("expenses", JSON.stringify(expenses));
    });
}


expenses.forEach(expense => {
    showExpense(expense);
});



adds.addEventListener("click", event => {

    let namees = names.value;
    let amount = amounts.value;
    let category = categorys.value;
    let description = descriptions.value;

    let expense = {
        name: namees,
        amount: amount,
        category: category,
        description: description
    };


    expenses.push(expense);


    localStorage.setItem("expenses", JSON.stringify(expenses));


    showExpense(expense);

});