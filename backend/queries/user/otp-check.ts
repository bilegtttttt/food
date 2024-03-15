// import { Request } from "express";
// import { UserModel } from "../../db/models/user";

// const getUserByEmail = async (email: string) => {
//   try {
//     const user = await UserModel.findOne({ email });
//     return user;
//   } catch (error) {
//     throw new Error(`Error fetching user by email: ${error.message}`);
//   }
// };

// export const OptChecker = async (req: Request) => {
//   const { otp, email } = req.body;
//   try {
//     if (!otp || !email) {
//       throw new Error("OTP or email not provided");
//     }

//     const user = await getUserByEmail(email);

//     if (!user) {
//       throw new Error("User not found");
//     }

//     if (user.otp === otp) {
//       await UserModel.updateOne({ email: user.email }, { $set: { otp: "" } });
//       return "success";
//     } else {
//       return "invalid code";
//     }
//   } catch (error) {
//     throw new Error(`OptChecker error: ${error.message}`);
//   }
// };
