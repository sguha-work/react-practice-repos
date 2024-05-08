import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher';
let Schema = mongoose.Schema;

let schema = new Schema({
    name: { type: String, required: true },
    birthdate: { type: Date, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    gender: {
        type: String,
        enum: ["Male", "Female", "Trans", "Gay"],
        required: true
    }
},
    { _id: true },
    { timestamps: true }
);

// If no path is given, all date fields will be applied
schema.plugin(patcher);
export default mongoose.model("user", schema);