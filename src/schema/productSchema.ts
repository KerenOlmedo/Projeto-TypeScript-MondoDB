import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  id: String,
  name: String,
  description: String,
  value: String,
});

export const Product = model('Product', productSchema);