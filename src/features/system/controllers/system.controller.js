import ApiResponse from "../../../shared/ApiResponse.js";

export const health = (req, res) => {
  return res.json(
    new ApiResponse({
      message: "Learning Hub API Running",
    })
  );
};