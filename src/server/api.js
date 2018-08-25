const handleMethod = (req, res, next) => {
  switch (true) {
    case (req.method === 'GET' && req.params.method === 'example'):
      setTimeout(() => res.send({ success: true }), 500);
      break;

    default:
      next();
      break;
  }
};

module.exports = {
  handleMethod,
};
