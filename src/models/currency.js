import { Schema, model } from "mongoose";

const CurrencySchema = new Schema({
    ticker: {
        type: String,
        unique: true,
        index: true
    },
    name: String,
    APIUrl: String,
});

const Currency = model("Currency", CurrencySchema);

export { Currency, CurrencySchema };
