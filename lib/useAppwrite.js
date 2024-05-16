import { useEffect, useState } from "react";
import { Alert } from "react-native";

const useAppWrite = (fn) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error) {
      Alert.error("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = async () => {
    fetchData();
  };

  return { data, isLoading, refetch };
};

export default useAppWrite;
