const handleMethod = (req, res) => {
  switch (req.params.method) {
    case 'example':
      setTimeout(() => res.send({ success: true }), 1000);
      break;

    default:
      res
        .status(404)
        .send({ error: 404 });
      break;
  }
};

module.exports = {
  handleMethod,
};
