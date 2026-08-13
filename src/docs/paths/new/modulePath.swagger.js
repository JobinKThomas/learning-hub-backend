/**
 * @openapi
 * /public/modules/{slug}:
 *   get:
 *     summary: Get published module by slug
 *     description: Returns a published module and its published sections.
 *     tags:
 *       - Public Modules
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: javascript-basics
 *     responses:
 *       200:
 *         description: Module fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PublicModuleResponse'
 *       404:
 *         description: Module not found.
 *       500:
 *         description: Internal server error.
 */
