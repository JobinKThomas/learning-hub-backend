/**
 * @openapi
 * components:
 *   schemas:
 *
 *     QuizQuestion:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6a6b1234567890abcdef1234
 *         quiz:
 *           type: string
 *           example: 6a6af9355d2ade0fc97cbb2e
 *         question:
 *           type: string
 *           example: Which method is used to add an element at the end of an array?
 *         type:
 *           type: string
 *           enum:
 *             - SINGLE_CHOICE
 *             - MULTIPLE_CHOICE
 *             - TRUE_FALSE
 *             - FILL_IN_THE_BLANK
 *         options:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               isCorrect:
 *                 type: boolean
 *         explanation:
 *           type: string
 *         marks:
 *           type: integer
 *           example: 5
 *         order:
 *           type: integer
 *           example: 1
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
 *     QuizQuestionRequest:
 *       type: object
 *       required:
 *         - quiz
 *         - question
 *         - type
 *         - options
 *       properties:
 *         quiz:
 *           type: string
 *         question:
 *           type: string
 *         type:
 *           type: string
 *         options:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *               isCorrect:
 *                 type: boolean
 *         explanation:
 *           type: string
 *         marks:
 *           type: integer
 *         order:
 *           type: integer
 *         status:
 *           type: string
 *
 *     QuizQuestionResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/QuizQuestion'
 *
 *     QuizQuestionListResponse:
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
 *                     $ref: '#/components/schemas/QuizQuestion'
 *                 pagination:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */