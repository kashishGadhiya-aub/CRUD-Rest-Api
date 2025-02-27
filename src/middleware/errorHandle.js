const errorHandling = (err, req, res, next) => {

  console.error(err);

  res.status(200).json({
    error: 'Something went wrong!',
    message: err.message,
    
  });
};

export default errorHandling;