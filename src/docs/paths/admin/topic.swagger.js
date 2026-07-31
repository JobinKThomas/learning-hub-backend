/**
 * @openapi
 * tags:
 *   - name: Admin Topics
 *     description: Topic Management APIs
 */

// /**
//  * @openapi
//  * /topics:
//  *   post:
//  *     tags:
//  *       - Admin Topics
//  *     summary: Create Topic
//  *     security:
//  *       - bearerAuth: []
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/TopicRequest'
//  *     responses:
//  *       201:
//  *         description: Topic created successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/TopicResponse'
//  */
/**
 * @openapi
 * /sections/{sectionId}/topics:
 *   post:
 *     tags:
 *       - Admin Topics
 *     summary: Create Topic
 *     description: Create a new topic under the specified section.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: sectionId
 *         required: true
 *         description: Section ID
 *         schema:
 *           type: string
 *           example: 6a6c3542cbf66ae3b273cf68
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TopicRequest'
 *     responses:
 *       201:
 *         description: Topic created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicResponse'
 *       400:
 *         description: Validation failed.
 *       401:
 *         description: Unauthorized.
 *       403:
 *         description: Forbidden.
 *       404:
 *         description: Section not found.
 */

/**
 * @openapi
 * /topics/{id}:
 *   put:
 *     tags:
 *       - Admin Topics
 *     summary: Update Topic
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
 *             $ref: '#/components/schemas/TopicRequest'
 *     responses:
 *       200:
 *         description: Topic updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicResponse'
 */

/**
 * @openapi
 * /topics/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Topics
 *     summary: Update Topic Status
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
 *         description: Topic status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicResponse'
 */

/**
 * @openapi
 * /topics/{id}:
 *   delete:
 *     tags:
 *       - Admin Topics
 *     summary: Delete Topic
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
 *         description: Topic deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */

/**
 * @openapi
 * /topics:
 *   get:
 *     tags:
 *       - Admin Topics
 *     summary: List Topics
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
 *         name: learningPath
 *         schema:
 *           type: string
 *       - in: query
 *         name: module
 *         schema:
 *           type: string
 *       - in: query
 *         name: section
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: difficulty
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topic list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicListResponse'
 */

/**
 * @openapi
 * /topics/{slug}:
 *   get:
 *     tags:
 *       - Admin Topics
 *     summary: Get Topic by Slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Topic details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TopicResponse'
 *       404:
 *         description: Topic not found
 */