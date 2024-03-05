import { connect, set } from "mongoose";

const CONNECTION_STRING: string =
  "mongodb+srv://bbilegt379:0327@bilegt.lacnssu.mongodb.net/";

export const connectDb = async () => {
  set("strictQuery", false);

  try {
    await connect(CONNECTION_STRING),
      console.log("Successfully connected  to DB");
  } catch (error) {
    console.log("DB connection is unsuccessfully");
  }
};
