const express = require("express");
const Notes = require("../model/noteshema.js");

const router = express.Router();

router.get("/", (req, res) => {
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

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  try {
        const updatedNote = await Notes.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ error: 'Note not found' });
    }
    res.json(updatedNote);
  } catch (err) {
    res.status(500).json({ error: `Internal Server Error: ${err.message}` });
  }
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
