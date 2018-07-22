const handleMethod = (req, res) => {
  res.send(req.params);
};

module.exports = {
  handleMethod,
};
