const exec = require("cild_process").exec;
const ro = require("express").Router();
const fs = require("fs");
const list = JSON.parse(fs.readFileSync(__dirname + "/restpy/setup.json"));
module.exports = (app) => {
  for (let x in list) {
      ro.get(x.path,(req, res) => {
        const pythonfileUrl = __dirname + "/restpy/" + x.file;
          if (x.lang == "py") {
        const jfile = JSON.stringify(req.query);
        new Promise((ok, err) => {
          console.log(
            "RUN " + `python3 ${pythonfileUrl} '${JSON.stringify(jfile)}'`
          );
          exec(
            `python3 ${pythonfileUrl} '${JSON.stringify(jfile)}'`,
            (errr, sto, sterr) => {
              if (errr) {
                err(errr);
              }
              try {
                ok({ stdout: JSON.parse(sto), stderr: JSON.parse(stderr) });
              } catch (e) {
                err(e);
              }
            }
          );
        }).then(
          (done) => {
            res.jsonp(done);
          },
          (errs) => {
            res.send("An error Occured:\n" + errs);
          }
        );} else if (x.lang == "html") {
            res.sendFile(pythonfileUrl);
        }
      });
  }
  return ro;
};
