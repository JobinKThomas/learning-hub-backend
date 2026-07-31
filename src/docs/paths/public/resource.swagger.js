// /**
//  * @openapi
//  * tags:
//  *   - name: Public Resources
//  *     description: Public Resource APIs
//  */

// /**
//  * @openapi
//  * /public/resources:
//  *   get:
//  *     tags:
//  *       - Public Resources
//  *     summary: List Resources
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
//  *         description: Resource list
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ResourceListResponse'
//  */

// /**
//  * @openapi
//  * /public/resources/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Resources
//  *     summary: Get Resource by Slug
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Resource details
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/ResourceResponse'
//  *       404:
//  *         description: Resource not found
//  */