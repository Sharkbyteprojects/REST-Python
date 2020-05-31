const exec = require("child_process").exec;
const ro = require("express").Router();
const fs = require("fs");
const filex=fs.readFileSync(__dirname + "/restpy/setup.json", 'utf-8');
const list = JSON.parse(filex);
module.exports = (app) => {
  list.forEach(x => {
      console.log(x.path);
      ro.get(x.path,(req, res) => {
        const pythonfileUrl = __dirname + "/restpy/" + x.file;
          if (x.lang == "py") {
        const jfile = JSON.stringify(req.query);
        new Promise((ok, err) => {
          console.log(
            "RUN " + `python3 ${pythonfileUrl} ${JSON.stringify(jfile)}`
          );
          exec(
            `python3 ${pythonfileUrl} ${JSON.stringify(jfile)}`,
            (errr, sto, sterr) => {
              if (errr) {
                err(errr);
              }
              try {
                ok(JSON.parse(sto));
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
    });
  return ro;
};
