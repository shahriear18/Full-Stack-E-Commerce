exports.apiResponse = (res ,statusCode, StatusMessage, data) => {
  return res
    .status(statusCode)
    .json({
      success: statusCode > 400 ? false : true,
      statusCode,
      Message: StatusMessage,
      data,
    });
};
