import ErrorHelper from '../utils/errorHelper.js';

const restrictTo = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return next(
      new ErrorHelper('You do not have permission to perform this action.', 403)
    );
  }

  next();
};

export default restrictTo;
