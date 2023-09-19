import { gql } from 'apollo-server-express';
import ExpenseSchema from './modules/expense/expense.schema.js';
const schema = gql(`${ExpenseSchema}`);
export default schema;