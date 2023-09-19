import expenseModel from './models/expense.model.js';
const Expense = expenseModel;
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();
import db from './services/db.service.js';

const ExpenseResolvers = {
    Query: {
        expenses: async () => {
            try {
                await db.connectMongo();
                const result = await Expense.find();
                return result.map((dataChunk) => {
                    return { ...dataChunk._doc };
                });
            } catch (error) {
                console.log('Error->', error);
            } finally {
                await db.disconnectMongo();
            }
        },
        expensebyname: async (parent, args, context, info) => {
            try {
                let result;
                await db.connectMongo();
                if (typeof args.createdBy !== 'undefined') {
                    result = await Expense.find({ "createdBy": args.createdBy });
                } else {
                    result = await Expense.find();
                }
                return result.map((dataChunk) => {
                    return { ...dataChunk._doc };
                });
            } catch (error) {
                console.log('Error->', error);
            } finally {
                await db.disconnectMongo();
            }
        },
    },
    Mutation: {
        insertExpense: async (parent, args, context, info) => {
            const exp = new Expense({
                createdBy: args.expenseinput.createdBy,
                amount: args.expenseinput.amount,
                expenseType: args.expenseinput.expenseType,
                description: args.expenseinput.description,
                paymentMethod: {
                    method: args.expenseinput.paymentMethod.method,
                    tool: args.expenseinput.paymentMethod.tool
                }
            });
            let result;
            try {
                await db.connectMongo();
                result = await exp.save();
                result = await Expense.find().sort({createdAt: 'desc'}).limit(5);
                pubsub.publish('EXPENSE_INSERTED', {
                    expenseInserted: result
                });
                pubsub.publish('EXPENSE_INSERTED_FOR_' + args.expenseinput.createdBy, {
                    expenseInsertedForIndividual: result
                });
            } catch (error) {
                console.error('Unable to save expense info', error);
            } finally {
                await db.disconnectMongo();
            }
            return { ...result._doc };
        }
    },
    Subscription: {
        expenseInserted: {
            subscribe: () => {
                return pubsub.asyncIterator('EXPENSE_INSERTED');
            }
        },
        expenseInsertedForIndividual: {
            subscribe: (parent, args, context, info) => {
                return pubsub.asyncIterator('EXPENSE_INSERTED_FOR_' + args.createdBy);
            }
        }
    }
};
export default ExpenseResolvers;