import mongoose, { Schema } from "mongoose";

type Contact = {
  name: String;
  mail: String;
  fone: String;
  interest: String;
};

const ContactSchema = new Schema({
  name: String,
  mail: String,
  fone: String,
  interest: String,
});

export default mongoose.model<Contact>("Contact", ContactSchema);
