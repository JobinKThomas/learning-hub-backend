/**
 * @openapi
 * tags:
 *   - name: Admin Playgrounds
 *     description: Playground Management APIs
 */

/**
 * @openapi
 * /playgrounds:
 *   post:
 *     summary: Create Playground
 *     tags:
 *       - Admin Playgrounds
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PlaygroundRequest'
 *     responses:
 *       201:
 *         description: Playground created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlaygroundResponse'
 */

/**
 * @openapi
 * /playgrounds:
 *   get:
 *     summary: List Playgrounds
 *     tags:
 *       - Admin Playgrounds
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: topic
 *         schema:
 *           type: string
 *       - in: query
 *         name: language
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Playground list.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlaygroundListResponse'
 */

/**
 * @openapi
 * /playgrounds/{slug}:
 *   get:
 *     summary: Get Playground by Slug
 *     tags:
 *       - Admin Playgrounds
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Playground details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlaygroundResponse'
 *       404:
 *         description: Playground not found.
 */

/**
 * @openapi
 * /playgrounds/{id}:
 *   patch:
 *     summary: Update Playground
 *     tags:
 *       - Admin Playgrounds
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
 *             $ref: '#/components/schemas/PlaygroundRequest'
 *     responses:
 *       200:
 *         description: Playground updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlaygroundResponse'
 */

/**
 * @openapi
 * /playgrounds/{id}/status:
 *   patch:
 *     summary: Update Playground Status
 *     tags:
 *       - Admin Playgrounds
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
 *         description: Playground status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PlaygroundResponse'
 */

/**
 * @openapi
 * /playgrounds/{id}:
 *   delete:
 *     summary: Delete Playground
 *     tags:
 *       - Admin Playgrounds
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
 *         description: Playground deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */