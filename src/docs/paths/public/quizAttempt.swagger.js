/**
 * @openapi
 * tags:
 *   - name: Quiz Attempts
 *     description: Quiz Attempt APIs
 */

/**
 * @openapi
 * /quiz/{id}:
 *   get:
 *     summary: Get quiz attempt
 *     description: Returns the result of a submitted quiz attempt.
 *     tags:
 *       - Quiz Attempts
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         example: 6a6c1234567890abcdef1234
 *     responses:
 *       200:
 *         description: Quiz attempt fetched successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/QuizAttemptResponse'
 *       404:
 *         description: Quiz attempt not found.
 */