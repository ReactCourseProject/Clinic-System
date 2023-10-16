const customMiddleware = (req, res, next) => {
    // Implement custom middleware logic here
    next();
  };
  
  module.exports = {
    customMiddleware: customMiddleware
  };
  