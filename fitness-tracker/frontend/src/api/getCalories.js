import axios from "axios";

export const getCalories = async (activity) => {
  const key = process.env.REACT_APP_API_NINJAS_KEY;

  const response = await axios.get("https://api.api-ninjas.com/v1/caloriesburned", {
    headers: { "X-Api-Key": key },
    params: { activity },
  });

  return response.data;
};