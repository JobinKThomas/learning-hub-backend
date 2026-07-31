// /**
//  * @openapi
//  * tags:
//  *   - name: Public Sections
//  *     description: Public Section APIs
//  */

// /**
//  * @openapi
//  * /public/modules/{moduleId}/sections:
//  *   get:
//  *     tags:
//  *       - Public Sections
//  *     summary: List Sections
//  *     description: Returns all sections of a module.
//  *     parameters:
//  *       - in: path
//  *         name: moduleId
//  *         required: true
//  *         schema:
//  *           type: string
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
//  *         name: sort
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Sections fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/SectionListResponse'
//  */

// /**
//  * @openapi
//  * /public/sections/{slug}:
//  *   get:
//  *     tags:
//  *       - Public Sections
//  *     summary: Get Section By Slug
//  *     parameters:
//  *       - in: path
//  *         name: slug
//  *         required: true
//  *         schema:
//  *           type: string
//  *           example: introduction
//  *     responses:
//  *       200:
//  *         description: Section fetched successfully.
//  *         content:
//  *           application/json:
//  *             schema:
//  *               $ref: '#/components/schemas/SectionResponse'
//  *       404:
//  *         description: Section not found.
//  */