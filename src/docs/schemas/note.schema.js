/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Note:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6a6b35d4b2c9a28c9f4d0012
 *         topic:
 *           type: string
 *           example: 6a69f63d0dcb8e3fdc12ab45
 *         title:
 *           type: string
 *           example: JavaScript Variables
 *         slug:
 *           type: string
 *           example: javascript-variables
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         markdown:
 *           type: string
 *         html:
 *           type: string
 *         plainText:
 *           type: string
 *         excerpt:
 *           type: string
 *         readingTime:
 *           type: integer
 *         wordCount:
 *           type: integer
 *         type:
 *           type: string
 *           enum:
 *             - THEORY
 *             - TUTORIAL
 *             - DOCUMENTATION
 *             - EXERCISE
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
 *     NoteRequest:
 *       type: object
 *       required:
 *         - topic
 *         - title
 *         - markdown
 *       properties:
 *         topic:
 *           type: string
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         markdown:
 *           type: string
 *         type:
 *           type: string
 *           enum:
 *             - ARTICLE
 *             - TUTORIAL
 *             - DOCUMENTATION
 *             - EXERCISE
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
 *
 *     NoteResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Note'
 *
 *     NoteListResponse:
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
 *                     $ref: '#/components/schemas/Note'
 *                 meta:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */