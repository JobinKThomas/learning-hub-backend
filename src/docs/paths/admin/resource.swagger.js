/**
 * @openapi
 * tags:
 *   - name: Admin Resources
 *     description: Resource Management APIs
 */

/**
 * @openapi
 * /resources:
 *   post:
 *     tags:
 *       - Admin Resources
 *     summary: Create Resource
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ResourceRequest'
 *     responses:
 *       201:
 *         description: Resource created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceResponse'
 */

/**
 * @openapi
 * /resources/{id}:
 *   patch:
 *     tags:
 *       - Admin Resources
 *     summary: Update Resource
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
 *             $ref: '#/components/schemas/ResourceRequest'
 *     responses:
 *       200:
 *         description: Resource updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceResponse'
 */

/**
 * @openapi
 * /resources/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Resources
 *     summary: Update Resource Status
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
 *         description: Resource status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceResponse'
 */

/**
 * @openapi
 * /resources/{id}:
 *   delete:
 *     tags:
 *       - Admin Resources
 *     summary: Delete Resource
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
 *         description: Resource deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */

/**
 * @openapi
 * /resources:
 *   get:
 *     tags:
 *       - Admin Resources
 *     summary: List Resources
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
 *         name: topic
 *         schema:
 *           type: string
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resource list
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceListResponse'
 */

/**
 * @openapi
 * /resources/{slug}:
 *   get:
 *     tags:
 *       - Admin Resources
 *     summary: Get Resource by Slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Resource details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ResourceResponse'
 *       404:
 *         description: Resource not found
 */