const express = require("express");
const router = express.Router();

const controller = require("../controllers");

/**
 * @swagger
 * definitions:
 *   Note:
 *     properties:
 *       title:
 *         type: string
 *       description:
 *         type: string
 */

// Get all Notes
/**
 * @swagger
 * /api/notes:
 *   get:
 *     tags:
 *       - Notes
 *     description: Returns all notes
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of notes
 *         schema:
 *           $ref: '#/definitions/Note'
 */
router.get("/", controller.findAll);

// Get Note by Id
/**
 * @swagger
 * /api/notes/{id}:
 *   get:
 *     tags:
 *       - Notes
 *     description: Returns a single note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Note's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: A single note
 *         schema:
 *           $ref: '#/definitions/Note'
 */

router.get("/:id", controller.findOne);

// Create a new Note
/**
 * @swagger
 * /api/notes:
 *   post:
 *     tags:
 *       - Notes
 *     description: Creates a new note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: note
 *         description: Note object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       200:
 *         description: Successfully created
 */

router.post("/", controller.create);

// Modify existing Note
/**
 * @swagger
 * /api/Notes/{id}:
 *   put:
 *     tags:
 *       - Notes
 *     description: Updates a single note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Note's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: note
 *         description: Note object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Note'
 *     responses:
 *       200:
 *         description: Successfully updated
 */

router.put("/:id", controller.update);

// Delete Note by Id
/**
 * @swagger
 * /api/notes/{id}:
 *   delete:
 *     tags:
 *       - Notes
 *     description: Deletes a single note
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Note's id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete("/:id", controller.delete);

module.exports = router;