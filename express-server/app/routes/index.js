const express = require("express");
const router = express.Router();

const controller = require("../controllers");


// Create a new Note
router.post("/", controller.create);

// Get all Notes
router.get("/", controller.findAll);

// Get Note by Id
router.get("/:id", controller.findOne);

// Modify existing Note
router.put("/:id", controller.update);

// Delete Note by Id
router.delete("/:id", controller.delete);

module.exports = router;