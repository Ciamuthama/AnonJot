const express = require("express");
const Notes = require("../model/noteshema");

const router = express.Router();

router.get("/notes", (req, res) => {
  Notes.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json(`ERROR${err}`);
    });
});

router.post("/new", (req, res) => {
  const note = new Notes(req.body);

  note
    .save()
    .then((result) => {
      res.json(result)
      
    })
    .catch((err) => {
      res.status(404).json(`ERROR${err}`);
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Notes.findById(id)
    .then((result) => {
      //res.redirect('detail')
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json(`ERROR${err}`);
    });
});

router.patch("/:id", (req, res) => {
  const id = req.params.id;
  Notes.findByIdAndUpdate(id);
  const note = new Notes(req.body);

  note
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(404).json(`ERROR${err}`);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  Notes.findByIdAndDelete(id)
    .then((result) => {
      res.json("Data successfully deleted");
    })
    .catch((err) => {
      res.status(404).json(`ERROR${err}`);
    });
});

module.exports = router;
