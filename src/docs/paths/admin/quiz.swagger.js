/**
 * @openapi
 * tags:
 *   - name: Admin Quizzes
 *     description: Quiz Management APIs
 */

/**
 * @openapi
 * /quizzes:
 *   post:
 *     summary: Create Quiz
 *     tags:
 *       - Admin Quizzes
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuizRequest'
 *     responses:
 *       201:
 *         description: Quiz created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 */

/**
 * @openapi
 * /quizzes:
 *   get:
 *     summary: List Quizzes
 *     tags:
 *       - Admin Quizzes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: topic
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: visibility
 *         schema:
 *           type: string
 *       - in: query
 *         name: search
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
 *     responses:
 *       200:
 *         description: Quiz list.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizListResponse'
 */

/**
 * @openapi
 * /quizzes/{slug}:
 *   get:
 *     summary: Get Quiz by Slug
 *     tags:
 *       - Admin Quizzes
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 *       404:
 *         description: Quiz not found.
 */

/**
 * @openapi
 * /quizzes/{id}:
 *   patch:
 *     summary: Update Quiz
 *     tags:
 *       - Admin Quizzes
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
 *             $ref: '#/components/schemas/QuizRequest'
 *     responses:
 *       200:
 *         description: Quiz updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 */

/**
 * @openapi
 * /quizzes/{id}/status:
 *   patch:
 *     summary: Update Quiz Status
 *     tags:
 *       - Admin Quizzes
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
 *         description: Quiz status updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizResponse'
 */

/**
 * @openapi
 * /quizzes/{id}:
 *   delete:
 *     summary: Delete Quiz
 *     tags:
 *       - Admin Quizzes
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
 *         description: Quiz deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */