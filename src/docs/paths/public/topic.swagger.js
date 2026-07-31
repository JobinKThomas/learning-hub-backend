// /**
//  * @openapi
//  * tags:
//  *   - name: Public Topics
//  *     description: Public Topic APIs
//  */

// /**
//  * @openapi
//  * /topics:
//  *   get:
//  *     tags:
//  *       - Public Topics
//  *     summary: List Topics
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
//  *         name: learningPath
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: module
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: section
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: visibility
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: difficulty
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: status
//  *         schema:
//  *           type: string
//  *       - in: query
//  *         name: sort
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Topic list
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TopicListResponse'
//  */

// /**
//  * @openapi
//  * /topics/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Topics
//  *     summary: Get Topic by Slug
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Topic details
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TopicResponse'
//  *       404:
//  *         description: Topic not found
//  */