/**
 * @openapi
 * tags:
 *   - name: Admin Sections
 *     description: Section Management APIs
 */

/**
 * @openapi
 * /modules/{moduleId}/sections:
 *   post:
 *     tags:
 *       - Admin Sections
 *     summary: Create Section
 *     description: Create a new section inside a module.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
 *         description: Module ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SectionRequest'
 *     responses:
 *       201:
 *         description: Section created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SectionResponse'
 *       400:
 *         description: Validation failed.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: Module not found.
 */

/**
 * @openapi
 * /sections/{id}:
 *   put:
 *     tags:
 *       - Admin Sections
 *     summary: Update Section
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
 *             $ref: '#/components/schemas/SectionRequest'
 *     responses:
 *       200:
 *         description: Section updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SectionResponse'
 */

/**
 * @openapi
 * /sections/{id}/status:
 *   patch:
 *     tags:
 *       - Admin Sections
 *     summary: Update Section Status
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
 *               $ref: '#/components/schemas/SectionResponse'
 */

/**
 * @openapi
 * /sections/{id}:
 *   delete:
 *     tags:
 *       - Admin Sections
 *     summary: Delete Section
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
 *         description: Section deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */

/**
 * @openapi
 * /modules/{moduleId}/sections:
 *   get:
 *     tags:
 *       - Admin Sections
 *     summary: List Sections
 *     description: Returns all sections of a module.
 *     parameters:
 *       - in: path
 *         name: moduleId
 *         required: true
 *         schema:
 *           type: string
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
 *         name: sort
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sections fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SectionListResponse'
 */

/**
 * @openapi
 * /sections/{slug}:
 *   get:
 *     tags:
 *       - Admin Sections
 *     summary: Get Section By Slug
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *           example: introduction
 *     responses:
 *       200:
 *         description: Section fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SectionResponse'
 *       404:
 *         description: Section not found.
 */