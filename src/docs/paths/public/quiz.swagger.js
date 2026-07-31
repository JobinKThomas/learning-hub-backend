/**
 * @openapi
 * tags:
 *   - name: Public Quiz
 *     description: Public Quiz APIs
 */

/**
 * @openapi
 * /quiz/{slug}:
 *   get:
 *     summary: Get quiz by slug
 *     description: Returns a published public quiz with its questions.
 *     tags:
 *       - Public Quiz
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: javascript-basics
 *     responses:
 *       200:
 *         description: Quiz fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/PublicQuizResponse'
 *       404:
 *         description: Quiz not found.
 */

/**
 * @openapi
 * /quiz/{slug}/submit:
 *   post:
 *     summary: Submit quiz answers
 *     description: Submit answers for a public quiz and calculate the result.
 *     tags:
 *       - Public Quiz
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         example: javascript-basics
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubmitQuizRequest'
 *     responses:
 *       200:
 *         description: Quiz submitted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizAttemptResponse'
 *       400:
 *         description: Validation failed.
 *       404:
 *         description: Quiz not found.
 */

/**
 * @openapi
 * /quiz:
 *   get:
 *     summary: Get all public quizzes
 *     description: Returns a list of all published quizzes.
 *     tags:
 *       - Public Quiz
 *     responses:
 *       200:
 *         description: List of quizzes fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/ApiResponse'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/PublicQuizListItem'
 *       500:
 *         description: Internal server error.
 */