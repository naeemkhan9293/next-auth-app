"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendEmailVerification } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validateFields?.data;

  const salt = await bcryptjs.genSalt(10);

  const hashPassword = await bcryptjs.hash(password, salt);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({
    data: {
      email,
      name,
      password: hashPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  // TODO: Send verification token to the user
  await sendEmailVerification(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email send!" };
};
