/**
 * @openapi
 * tags:
 *   - name: Admin Learning Paths
 *     description: Learning Path Management APIs
 */

/**
 * @openapi
 * /learning-paths:
 *   post:
 *     tags:
 *       - Admin Learning Paths
 *     summary: Create Learning Path
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LearningPathRequest'
 *     responses:
 *       201:
 *         description: Learning path created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPathResponse'
 *       400:
 *         description: Validation failed.
 *       401:
 *         description: Unauthorized.
 */

/**
 * @openapi
 * /learning-paths/{id}:
 *   put:
 *     tags:
 *       - Admin Learning Paths
 *     summary: Update Learning Path
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
 *             $ref: '#/components/schemas/LearningPathRequest'
 *     responses:
 *       200:
 *         description: Updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPathResponse'
 */

/**
 * @openapi
 * /learning-paths/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Learning Paths
 *     summary: Update Learning Path Status
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
 *         description: Status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPathResponse'
 */

/**
 * @openapi
 * /learning-paths/{id}:
 *   delete:
 *     tags:
 *       - Admin Learning Paths
 *     summary: Delete Learning Path
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
 *         description: Learning path deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Learning path not found.
 */

/**
 * @openapi
 * /learning-paths:
 *   get:
 *     tags:
 *       - Admin Learning Paths
 *     summary: List Learning Paths
 *     description: Returns published learning paths.
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
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: difficulty
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Learning paths fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPathListResponse'
 */

/**
 * @openapi
 * /learning-paths/{slug}:
 *   get:
 *     tags:
 *       - Admin Learning Paths
 *     summary: Get Learning Path
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *           example: javascript-mastery
 *     responses:
 *       200:
 *         description: Learning path found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPathResponse'
 *       404:
 *         description: Learning path not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */