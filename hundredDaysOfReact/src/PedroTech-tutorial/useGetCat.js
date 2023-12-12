import { useQuery } from "@tanstack/react-query";
import { Axios } from "axios";

export const useGetCat = () => {
  const { data, refetch } = useQuery({
    queryKey: ["catsFact"],
    queryFn: async () => {
      const response = await Axios.get("https://catfact.ninja/fact");
      return response.data;
    },
  });

  const refetchData = () => {
    alert("Data Refetched");
    refetch();
  };

  return { data, refetchData };
};
