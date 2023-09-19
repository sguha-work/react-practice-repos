import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher';
let Schema = mongoose.Schema;

let schema = new Schema({
    createdBy: { type: String, required: true, default: "admin" },
    description: { type: String, required: true, default:'Not specified' },
    time: {type: Number, required: true, default: Date.now()},
    amount: { type: Number, required: true, default: 0 },
    expenseType: { type: String, required: true },
    paymentMethod: {
        method: { type: String, required: true },
        tool: { type: String, required: false }
    }
},
    { timestamps: true, optimisticConcurrency: true }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
mongoose.set('strictQuery', true)
export default mongoose.model("expense", schema);