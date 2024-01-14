import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher';
let Schema = mongoose.Schema;

let schema = new Schema({
    title: { type: String, required: true },
    important: { type: Boolean, default: false }
},
    { timestamps: true }
);

schema.plugin(patcher);
export default mongoose.model("todo", schema);