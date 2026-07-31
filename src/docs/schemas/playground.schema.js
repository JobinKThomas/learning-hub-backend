/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Playground:
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
 *           example: Array Methods Playground
 *         slug:
 *           type: string
 *           example: array-methods-playground
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         language:
 *           type: string
 *           example: javascript
 *         starterCode:
 *           type: string
 *         solutionCode:
 *           type: string
 *         expectedOutput:
 *           type: string
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
 *     PlaygroundRequest:
 *       type: object
 *       required:
 *         - topic
 *         - title
 *         - language
 *       properties:
 *         topic:
 *           type: string
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         language:
 *           type: string
 *         starterCode:
 *           type: string
 *         solutionCode:
 *           type: string
 *         expectedOutput:
 *           type: string
 *         visibility:
 *           type: string
 *         subscriptionType:
 *           type: string
 *         order:
 *           type: integer
 *
 *     PlaygroundResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Playground'
 *
 *     PlaygroundListResponse:
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
 *                     $ref: '#/components/schemas/Playground'
 *                 pagination:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */