const handleMethod = (req, res) => setTimeout(() => res.send(req.params), 1000);

module.exports = {
  handleMethod,
};
