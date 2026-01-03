import { ApiResponse } from "../utils/apiResponse.js";

export const healthcheck = async (req, res) => {
  res
    .status(200)
    .json(new ApiResponse(200, { message: "Server is running..." }));
};
