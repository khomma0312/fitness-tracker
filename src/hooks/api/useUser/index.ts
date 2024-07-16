import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "@/services/api/getCurrentUser";

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
    staleTime: 1000,
  });

  const isAuthenticated = user?.role === "authenticated";

  return { user, isLoading, isAuthenticated };
};
