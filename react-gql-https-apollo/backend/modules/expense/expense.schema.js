

const ExpenseSchema = `
    type PaymentMethod {
        method: String
        tool: String
    }
    input PaymentMethodInput {
        method: String
        tool: String
    }
    type Expense {
        _id: ID!
        createdBy: String!
        description: String!
        amount: Int!,
        expenseType: String!
        paymentMethod: PaymentMethod
    }
    input ExpenseInput {
        createdBy: String!
        description: String!
        amount: Int!,
        expenseType: String!
        paymentMethod: PaymentMethodInput
    }
    type Query {
        expenses: [Expense!]!,
        expensebyname(createdBy: String):[Expense!]!
    }
    type Mutation {
        insertExpense(expenseinput: ExpenseInput): [Expense]
    }
    type Subscription {
        expenseInserted: [Expense!]!,
        expenseInsertedForIndividual(createdBy: String): Expense!
    }
`;
export default ExpenseSchema;