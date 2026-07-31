// /**
//  * @openapi
//  * tags:
//  *   - name: Public Learning Paths
//  *     description: Public Learning Path APIs
//  */

// /**
//  * @openapi
//  * /public/learning-paths:
//  *   get:
//  *     tags:
//  *       - Public Learning Paths
//  *     summary: List Learning Paths
//  *     description: Returns published learning paths.
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
//  *     responses:
//  *       200:
//  *         description: Learning paths fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/LearningPathListResponse'
//  */

// /**
//  * @openapi
//  * /public/learning-paths/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Learning Paths
//  *     summary: Get Learning Path
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         schema:
//  *           type: string
//  *           example: javascript-mastery
//  *     responses:
//  *       200:
//  *         description: Learning path found.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/LearningPathResponse'
//  *       404:
//  *         description: Learning path not found.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ErrorResponse'
//  */