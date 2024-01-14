import ExpenseResolvers from "./modules/expense/expense.resolvers.js";
const resolvers = {
    Query:{...ExpenseResolvers.Query},
    Mutation:{...ExpenseResolvers.Mutation},
    Subscription:{...ExpenseResolvers.Subscription}
}
export default resolvers;