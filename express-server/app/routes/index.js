const express = require("express");
const router = express.Router();

const controller = require("../controllers");


// Get all Notes
router.get("/", controller.findAll);

// Get Note by Id
router.get("/:id", controller.findOne);

// Create a new Note
router.post("/", controller.create);

// Modify existing Note
router.put("/:id", controller.update);

// Delete Note by Id
router.delete("/:id", controller.delete);

module.exports = router;