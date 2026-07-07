// import ApiError from "../shared/ApiError.js";

// const authorize = (...roles) => {
//   return (req, res, next) => {
//     if (!req.user) {
//       return next(
//         new ApiError(401, "Authentication required")
//       );
//     }

//     if (!roles.includes(req.user.role)) {
//       return next(
//         new ApiError(
//           403,
//           "You are not authorized to perform this action"
//         )
//       );
//     }

//     next();
//   };
// };

// export default authorize;

import ApiError from "../shared/ApiError.js";

const authorize =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ApiError(
          403,
          "You do not have permission to access this resource."
        )
      );
    }

    next();
  };

export default authorize;