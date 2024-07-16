import { signinUser } from "@/services/api/signinUser";
import { paths } from "@/services/utils/paths";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useSignin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: signin, isPending, isError } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      signinUser(email, password),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate(paths.dashboard);
    },
  });

  return { signin, isPending, isError };
};
