import * as z from "zod";

export type FormValues = {
  email: string;
  password: string;
};

export const schema = z.object({
  email: z.string().email({
    message: "メールアドレスの形式が正しくありません",
  }),
  password: z.string().min(8, {
    message: "パスワードは8文字以上で入力してください",
  }),
});
