/**
 * @openapi
 * /public/learning-paths:
 *   get:
 *     summary: Get all published learning paths
 *     description: Returns a paginated list of published and active learning paths.
 *     tags:
 *       - Public Learning Paths
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of learning paths per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by title
 *     responses:
 *       200:
 *         description: Learning paths fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: object
 *                       properties:
 *                         items:
 *                           type: array
 *                           items:
 *                             $ref: '#/components/schemas/PublicLearningPath'
 *                         pagination:
 *                           $ref: '#/components/schemas/Pagination'
 *       500:
 *         description: Internal server error.
 */
/**
 * @openapi
 * /public/learning-paths/{slug}:
 *   get:
 *     summary: Get learning path by slug
 *     description: Returns a published learning path by its slug.
 *     tags:
 *       - Public Learning Paths
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: javascript-learning-path
 *     responses:
 *       200:
 *         description: Learning path fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/PublicLearningPathDetails'
 *       404:
 *         description: Learning path not found.
 *       500:
 *         description: Internal server error.
 */
/**
 * @openapi
 * /public/learning-paths/{slug}/modules:
 *   get:
 *     summary: Get all published modules of a learning path
 *     description: Returns all published modules that belong to a published learning path.
 *     tags:
 *       - Public Learning Paths
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: javascript-mastery
 *     responses:
 *       200:
 *         description: Modules fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PublicLearningPathModulesResponse'
 *       404:
 *         description: Learning path not found.
 *       500:
 *         description: Internal server error.
 */
