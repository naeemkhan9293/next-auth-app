"use server";
import { getUserByEmail } from "@/data/user";
import { sendPasswordResetEmails } from "@/lib/mail";
import { generatePasswordResetToken } from "@/lib/tokens";
import { ResetSchema } from "@/schemas";

import * as z from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const validateFields = ResetSchema.safeParse(values);
  if (!validateFields.success) {
    return { error: "Invalid Emails!" };
  }

  const { email } = validateFields.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: "Email not found!" };
  }

  // TODO: Generate token and send email
  const passwordResetToken = await generatePasswordResetToken(email);
  await sendPasswordResetEmails(
    passwordResetToken.email,
    passwordResetToken.token
  );
  return { success: "Reset email Send!" };
};
