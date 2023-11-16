import { mongoose } from "mongoose";

const handleError = (error) => {
  console.error(error);
};

try {
  await mongoose.connect("mongodb://root:pass@127.0.0.1:27017/");
  console.log("Database connected");
} catch (error) {
  handleError(error);
}

export { mongoose };
