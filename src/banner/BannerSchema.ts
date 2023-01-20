import mongoose, { Schema } from "mongoose";

type Banner = {
  description: String;
  title: String;
  category: String;
};

const BannerSchema = new Schema({
  description: String,
  title: String,
  category: String,
});

export default mongoose.model<Banner>("Banner", BannerSchema);
