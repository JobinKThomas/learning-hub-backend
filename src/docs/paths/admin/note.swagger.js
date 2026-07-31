/**
 * @openapi
 * tags:
 *   - name: Admin Notes
 *     description: Note Management APIs
 */

/**
 * @openapi
 * /notes:
 *   post:
 *     tags:
 *       - Admin Notes
 *     summary: Create Note
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoteRequest'
 *     responses:
 *       201:
 *         description: Note created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoteResponse'
 */

/**
 * @openapi
 * /notes/{id}:
 *   patch:
 *     tags:
 *       - Admin Notes
 *     summary: Update Note
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NoteRequest'
 *     responses:
 *       200:
 *         description: Note updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoteResponse'
 */

/**
 * @openapi
 * /notes/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Notes
 *     summary: Update Note Status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/StatusRequest'
 *     responses:
 *       200:
 *         description: Note status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoteResponse'
 */

/**
 * @openapi
 * /notes/{id}:
 *   delete:
 *     tags:
 *       - Admin Notes
 *     summary: Delete Note
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */

/**
 * @openapi
 * /notes:
 *   get:
 *     tags:
 *       - Admin Notes
 *     summary: List Notes
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *       - in: query
 *         name: topic
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoteListResponse'
 */

/**
 * @openapi
 * /notes/{slug}:
 *   get:
 *     tags:
 *       - Admin Notes
 *     summary: Get Note by Slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Note details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/NoteResponse'
 *       404:
 *         description: Note not found
 */