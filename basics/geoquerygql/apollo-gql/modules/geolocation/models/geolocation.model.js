import * as mongoose from 'mongoose';
import patcher from 'mongoose-patcher'; 
mongoose.set('strictQuery', true);
let Schema = mongoose.Schema;
let schema = new Schema({
  name: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: String, required: true }
},
  { timestamps: true, optimisticConcurrency: true }
);
schema.plugin(patcher);
export default mongoose.model("geolocations", schema);
