import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const usePlants = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: plants = [],
    isLoading,
    error,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["plant", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/plants/${user?.email}`);
      return data.data;
    },
    enabled: !!user?.email,
  });
  return { plants, isLoading, isError, error, refetch };
};

export default usePlants;
