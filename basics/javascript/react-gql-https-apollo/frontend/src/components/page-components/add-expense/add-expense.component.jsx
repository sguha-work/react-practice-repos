import InputComponent from "../../shared-components/input.component";
function AddExpenseComponent() {
    let description = '', amount = 0, expenseType = '';
    const getDescription = (value) => {
        description = value;
        console.log(description);
    }
    const getAmount = (value) => {
        amount = parseInt(value);
        console.log(amount);
    }
    const getExpenseType = (value) => {
        expenseType = value;
        console.log(expenseType);
    }
    const submitExpense = async (event) => {
        event.preventDefault();
        console.log(description, amount, expenseType);
        const mutationString = `
        mutation {
            insertExpense(expenseinput:{
              createdBy: "admin",
              description: "${description}",
              amount: ${amount},
              expenseType: "${expenseType}",
              paymentMethod: {
                  method: "upi",
                  tool: "gpay"
              }
            }) {
              _id
              createdBy
              description
              amount
              expenseType
              paymentMethod {
                method
                tool
              }
            }
          }
        `;
        const mutationData = {
            "query": mutationString
        };console.log('mutationData',mutationData);
        try {
            const rawResponse = await fetch('https://localhost:3005/expense', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mutationData)
            });
            const content = await rawResponse.json();
            console.log(content);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <h1>AddExpenseComponent</h1>
            <form>
                <InputComponent getValue={getDescription} type="text" className="input" placeholder="Enter expense description" name="description"></InputComponent>
                <br></br>
                <InputComponent getValue={getAmount} type="number" className="input" placeholder="Enter expense amount" name="amount"></InputComponent>
                <br></br>
                <InputComponent getValue={getExpenseType} type="text" className="input" placeholder="Enter expense type" name="expensetype"></InputComponent>
                <br></br>
                <button onClick={submitExpense}>Click me to submit</button>
            </form>
        </div>
    )
}

export default AddExpenseComponent;
/*
mutation {
  insertExpense(expenseinput:{
    createdBy: "admin"
    description: "Weekend fooding"
    amount: 1005,
    expenseType: "Food"
    paymentMethod: {
        method: "upi",
        tool: "gpay"
    }
  }) {
    _id
    createdBy
    description
    amount
    expenseType
    paymentMethod {
      method
      tool
    }
  }
}
*/