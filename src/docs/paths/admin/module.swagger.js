/**
 * @openapi
 * tags:
 *   - name: Admin Modules
 *     description: Module Management APIs
 */

/**
 * @openapi
 * /learning-paths/{learningPathId}/modules:
 *   post:
 *     tags:
 *       - Admin Modules
 *     summary: Create Module
 *     description: Creates a new module under a learning path.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: learningPathId
 *         required: true
 *         description: Learning Path ID
 *         schema:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ModuleRequest'
 *     responses:
 *       201:
 *         description: Module created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ModuleResponse'
 *       400:
 *         description: Validation failed.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: Unauthorized.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Learning path not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /modules/{id}:
 *   put:
 *     tags:
 *       - Admin Modules
 *     summary: Update Module
 *     description: Updates an existing module.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Module ID
 *         schema:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ModuleRequest'
 *     responses:
 *       200:
 *         description: Module updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ModuleResponse'
 *       404:
 *         description: Module not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /modules/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Modules
 *     summary: Update Module Status
 *     description: Updates the publication status of a module.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Module ID
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
 *         description: Module status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ModuleResponse'
 *       404:
 *         description: Module not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /modules/{id}:
 *   delete:
 *     tags:
 *       - Admin Modules
 *     summary: Delete Module
 *     description: Soft deletes a module.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Module ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Module deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 *       404:
 *         description: Module not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /learning-paths/{learningPathId}/modules:
 *   get:
 *     tags:
 *       - Admin Modules
 *     summary: List Modules
 *     description: Returns all published modules belonging to a learning path.
 *     parameters:
 *       - in: path
 *         name: learningPathId
 *         required: true
 *         description: Learning Path ID
 *         schema:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
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
 *           example: order
 *     responses:
 *       200:
 *         description: Modules fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ModuleListResponse'
 *       404:
 *         description: Learning path not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @openapi
 * /modules/{slug}:
 *   get:
 *     tags:
 *       - Admin Modules
 *     summary: Get Module By Slug
 *     description: Returns a published module by its slug.
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         description: Module Slug
 *         schema:
 *           type: string
 *           example: javascript-fundamentals
 *     responses:
 *       200:
 *         description: Module fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ModuleResponse'
 *       404:
 *         description: Module not found.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */