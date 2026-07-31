/**
 * @openapi
 * components:
 *   schemas:
 *
 *     PublicQuizResponse:
 *       type: object
 *       properties:
 *         quiz:
 *           $ref: '#/components/schemas/Quiz'
 *         questions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: 6a6b33e44f318c514d0b4733
 *               question:
 *                 type: string
 *                 example: What is JavaScript?
 *               type:
 *                 type: string
 *                 example: MCQ
 *               options:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: A
 *                     label:
 *                       type: string
 *                       example: A Programming Language
 *
 *     SubmitQuizRequest:
 *       type: object
 *       required:
 *         - answers
 *       properties:
 *         answers:
 *           type: array
 *           items:
 *             type: object
 *             required:
 *               - questionId
 *               - selectedOption
 *             properties:
 *               questionId:
 *                 type: string
 *                 example: 6a6b33e44f318c514d0b4733
 *               selectedOption:
 *                 type: string
 *                 example: A
 *
 *     QuizAttempt:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         quiz:
 *           type: string
 *         user:
 *           type: string
 *           nullable: true
 *         answers:
 *           type: array
 *           items:
 *             type: object
 *         score:
 *           type: integer
 *           example: 8
 *         totalPoints:
 *           type: integer
 *           example: 10
 *         percentage:
 *           type: number
 *           example: 80
 *         passed:
 *           type: boolean
 *         startedAt:
 *           type: string
 *           format: date-time
 *         submittedAt:
 *           type: string
 *           format: date-time
 *
 *     QuizAttemptResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/QuizAttempt'
 * PublicQuizListItem:
 * type: object
 * properties:
 *   id:
 *     type: string
 *   title:
 *     type: string
 *   slug:
 *     type: string
 *   description:
 *     type: string
 *   difficulty:
 *     type: string
 *     enum:
 *       - Beginner
 *       - Intermediate
 *       - Advanced
 *   totalQuestions:
 *     type: integer
 *   estimatedTime:
 *     type: integer
 *     description: Time in minutes
 */