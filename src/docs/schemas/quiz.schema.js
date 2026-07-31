/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Quiz:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6a6b1234567890abcdef1234
 *         topic:
 *           type: string
 *           example: 6a69d74b84e0d19db8f5a518
 *         title:
 *           type: string
 *           example: JavaScript Basics Quiz
 *         slug:
 *           type: string
 *           example: javascript-basics-quiz
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         passingMarks:
 *           type: integer
 *           example: 60
 *         totalMarks:
 *           type: integer
 *           example: 100
 *         duration:
 *           type: integer
 *           description: Duration in minutes
 *           example: 30
 *         attemptsAllowed:
 *           type: integer
 *           example: 3
 *         randomizeQuestions:
 *           type: boolean
 *           example: true
 *         showAnswers:
 *           type: boolean
 *           example: true
 *         visibility:
 *           type: string
 *           enum:
 *             - PUBLIC
 *             - PRIVATE
 *         subscriptionType:
 *           type: string
 *           enum:
 *             - FREE
 *             - PREMIUM
 *         order:
 *           type: integer
 *         status:
 *           type: string
 *           enum:
 *             - DRAFT
 *             - PUBLISHED
 *             - ARCHIVED
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     QuizRequest:
 *       type: object
 *       required:
 *         - topic
 *         - title
 *       properties:
 *         topic:
 *           type: string
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         passingMarks:
 *           type: integer
 *         totalMarks:
 *           type: integer
 *         duration:
 *           type: integer
 *         attemptsAllowed:
 *           type: integer
 *         randomizeQuestions:
 *           type: boolean
 *         showAnswers:
 *           type: boolean
 *         visibility:
 *           type: string
 *         subscriptionType:
 *           type: string
 *         order:
 *           type: integer
 *
 *     QuizResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Quiz'
 *
 *     QuizListResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               type: object
 *               properties:
 *                 items:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Quiz'
 *                 pagination:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */