// // /**
// //  * @openapi
// //  * tags:
// //  *   - name: Public Learning Paths
// //  *     description: Public Learning Path APIs
// //  */

// // /**
// //  * @openapi
// //  * /public/learning-paths:
// //  *   get:
// //  *     tags:
// //  *       - Public Learning Paths
// //  *     summary: List Learning Paths
// //  *     description: Returns published learning paths.
// //  *     parameters:
// //  *       - in: query
// //  *         name: page
// //  *         schema:
// //  *           type: integer
// //  *       - in: query
// //  *         name: limit
// //  *         schema:
// //  *           type: integer
// //  *       - in: query
// //  *         name: search
// //  *         schema:
// //  *           type: string
// //  *       - in: query
// //  *         name: difficulty
// //  *         schema:
// //  *           type: string
// //  *       - in: query
// //  *         name: visibility
// //  *         schema:
// //  *           type: string
// //  *       - in: query
// //  *         name: sort
// //  *         schema:
// //  *           type: string
// //  *     responses:
// //  *       200:
// //  *         description: Learning paths fetched successfully.
// //  *         content:
// //  *           application/json:
// //  *             schema:
// //  *               $ref: '#/components/schemas/LearningPathListResponse'
// //  */

// // /**
// //  * @openapi
// //  * /public/learning-paths/{slug}:
// //  *   get:
// //  *     tags:
// //  *       - Public Learning Paths
// //  *     summary: Get Learning Path
// //  *     parameters:
// //  *       - in: path
// //  *         name: slug
// //  *         required: true
// //  *         schema:
// //  *           type: string
// //  *           example: javascript-mastery
// //  *     responses:
// //  *       200:
// //  *         description: Learning path found.
// //  *         content:
// //  *           application/json:
// //  *             schema:
// //  *               $ref: '#/components/schemas/LearningPathResponse'
// //  *       404:
// //  *         description: Learning path not found.
// //  *         content:
// //  *           application/json:
// //  *             schema:
// //  *               $ref: '#/components/schemas/ErrorResponse'
// //  */
// /**
//  * @openapi
//  * /public/learning-paths:
//  *   get:
//  *     summary: Get all published learning paths
//  *     description: Returns a paginated list of all published and active learning paths.
//  *     tags:
//  *       - Public Learning Paths
//  *     parameters:
//  *       - in: query
//  *         name: page
//  *         schema:
//  *           type: integer
//  *           default: 1
//  *         description: Page number
//  *       - in: query
//  *         name: limit
//  *         schema:
//  *           type: integer
//  *           default: 10
//  *         description: Number of items per page
//  *       - in: query
//  *         name: search
//  *         schema:
//  *           type: string
//  *         description: Search by title
//  *     responses:
//  *       200:
//  *         description: Learning paths fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               allOf:
//  *                 - $ref: '#/components/schemas/ApiResponse'
//  *                 - type: object
//  *                   properties:
//  *                     data:
//  *                       type: object
//  *                       properties:
//  *                         items:
//  *                           type: array
//  *                           items:
//  *                             $ref: '#/components/schemas/PublicLearningPath'
//  *                         pagination:
//  *                           $ref: '#/components/schemas/Pagination'
//  *       500:
//  *         description: Internal server error.
//  */
// // router.get("/", learningPathController.getLearningPaths);