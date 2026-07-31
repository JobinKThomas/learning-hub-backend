// /**
//  * @openapi
//  * tags:
//  *   - name: Public Modules
//  *     description: Public Module APIs
//  */

// /**
//  * @openapi
//  * /public/learning-paths/{learningPathId}/modules:
//  *   get:
//  *     tags:
//  *       - Public Modules
//  *     summary: List Modules
//  *     description: Returns all published modules belonging to a learning path.
//  *     parameters:
//  *       - in: path
//  *         name: learningPathId
//  *         required: true
//  *         description: Learning Path ID
//  *         schema:
//  *           type: string
//  *           example: 686fd0d7c7c7d7d7d7d7d7d7
//  *       - in: query
//  *         name: page
//  *         schema:
//  *           type: integer
//  *           default: 1
//  *       - in: query
//  *         name: limit
//  *         schema:
//  *           type: integer
//  *           default: 20
//  *       - in: query
//  *         name: search
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: difficulty
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: visibility
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: sort
//  *         schema:
//  *           type: string
//  *           example: order
//  *     responses:
//  *       200:
//  *         description: Modules fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ModuleListResponse'
//  *       404:
//  *         description: Learning path not found.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */

// /**
//  * @openapi
//  * /public/modules/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Modules
//  *     summary: Get Module By Slug
//  *     description: Returns a published module by its slug.
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         description: Module Slug
//  *         schema:
//  *           type: string
//  *           example: javascript-fundamentals
//  *     responses:
//  *       200:
//  *         description: Module fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ModuleResponse'
//  *       404:
//  *         description: Module not found.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */