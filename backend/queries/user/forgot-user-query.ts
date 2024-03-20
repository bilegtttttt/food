import nodemailer, { Transport, TransportOptions } from "nodemailer";
import { Request, Response } from "express";
import { UserModel } from "../../db";
import { transport } from "../../utils";

const isEmailValid = async (email: string) => {
  // Await the result of the findOne operation
  const result = await UserModel.findOne({ email: email });
  return result;
};

export const forgotPasswordQuery = async (req: Request) => {
  const { email } = req.body;

  try {
    const isUser = await isEmailValid(email);

    if (!isUser) {
      throw new Error("Email is not found");
    }

    const randomInt = (min: number, max: number) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const validationCode = randomInt(1000, 9999);

    const options = {
      from: "bbilegt379@gmail.com",
      to: email,
      subject: "Password Reset",
      text: `Your new password: ${validationCode}`,
    };

    // Send email
    await transport.sendMail(options);

    console.log(validationCode);

    // // Update user with new password
    // const updateUser = await UserModel.findOneAndUpdate(
    //   { email: email },
    //   { $set: { password: newPassword } } // Assuming your password field is named 'password'
    // );

    return validationCode;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
