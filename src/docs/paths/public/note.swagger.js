// /**
//  * @openapi
//  * tags:
//  *   - name: Public Notes
//  *     description: Public Note APIs
//  */

// /**
//  * @openapi
//  * /public/notes:
//  *   get:
//  *     tags:
//  *       - Public Notes
//  *     summary: List Notes
//  *     parameters:
//  *       - in: query
//  *         name: page
//  *         schema:
//  *           type: integer
//  *       - in: query
//  *         name: limit
//  *         schema:
//  *           type: integer
//  *       - in: query
//  *         name: topic
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: type
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: visibility
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: status
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: search
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Note list
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/NoteListResponse'
//  */

// /**
//  * @openapi
//  * /public/notes/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Notes
//  *     summary: Get Note by Slug
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Note details
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/NoteResponse'
//  *       404:
//  *         description: Note not found
//  */