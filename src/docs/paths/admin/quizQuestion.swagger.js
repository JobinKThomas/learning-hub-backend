/**
 * @openapi
 * tags:
 *   - name: Admin Quiz Questions
 *     description: Quiz Question Management APIs
 */

/**
 * @openapi
 * /quiz-questions:
 *   post:
 *     summary: Create Quiz Question
 *     tags:
 *       - Admin Quiz Questions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/QuizQuestionRequest'
 *     responses:
 *       201:
 *         description: Quiz Question created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizQuestionResponse'
 */

/**
 * @openapi
 * /quiz-questions:
 *   get:
 *     summary: List Quiz Questions
 *     tags:
 *       - Admin Quiz Questions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: quiz
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
 *         description: Quiz Question list.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizQuestionListResponse'
 */

/**
 * @openapi
 * /quiz-questions/{id}:
 *   get:
 *     summary: Get Quiz Question by ID
 *     tags:
 *       - Admin Quiz Questions
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
 *         description: Quiz Question details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizQuestionResponse'
 *       404:
 *         description: Quiz Question not found.
 */

/**
 * @openapi
 * /quiz-questions/{id}:
 *   patch:
 *     summary: Update Quiz Question
 *     tags:
 *       - Admin Quiz Questions
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
 *             $ref: '#/components/schemas/QuizQuestionRequest'
 *     responses:
 *       200:
 *         description: Quiz Question updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizQuestionResponse'
 */

/**
 * @openapi
 * /quiz-questions/{id}:
 *   delete:
 *     summary: Delete Quiz Question
 *     tags:
 *       - Admin Quiz Questions
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
 *         description: Quiz Question deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiResponse'
 */