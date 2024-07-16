import { signinUser } from "@/services/api/signinUser";
import { paths } from "@/services/utils/paths";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
  const navigate = useNavigate();

  const { mutate: signin, isPending, isError } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signinUser(email, password),
    onSuccess: () => {
      navigate(paths.dashboard);
    },
  });

  return { signin, isPending, isError };
};
