import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CurrencySchema = new Schema({
    ticker: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    APIUrl: String,
})

const Currency = mongoose.model("currencies", CurrencySchema);

module.exports = {
    Schema: CurrencySchema,
    Currency
}