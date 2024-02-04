import axios from "axios";
import { BASE_URL } from "../config";

const getGannCalculation = async (value) => {
  try {
    const url = BASE_URL + "/gann";
    const res = await axios.get(url, {
      params: {
        value,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export { getGannCalculation };
