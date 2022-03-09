translateFunctions = require("./functions/translator");

module.exports = (app) => {
  //Middleware
  var auth = function (req, res, next) {
    if (req.headers["auth"] === process.env.SECRET) {
      next();
    } else {
      res.status(401).send(
        JSON.stringify({
          code: 401,
          message: "Aqui não, safado!",
        })
      );
    }
  };

  app.get("/translate", auth, function (request, response) {
    try {
      var words = request.query.text;
      if (words) {
        translateFunctions
          .translater(words)
          .then((res) => {
            response.send(
              JSON.stringify({
                code: 200,
                translate: res,
              })
            );
          })
          .catch((err) => response.send("Translated! :" + err));
      } else {
        request.status(204);
        response.send(
          JSON.stringify({
            code: 204,
            message: "Texto inválido",
          })
        );
      }
    } catch (error) {
      response.status(204);
      response.send(
        JSON.stringify({
          code: 204,
          message: "Texto inválido",
        })
      );
    }
  });
};
