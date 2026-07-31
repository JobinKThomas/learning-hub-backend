/**
 * @openapi
 * components:
 *   schemas:
 *
 *     LearningPath:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *
 *         title:
 *           type: string
 *           example: JavaScript Mastery
 *
 *         slug:
 *           type: string
 *           example: javascript-mastery
 *
 *         shortDescription:
 *           type: string
 *           example: Complete JavaScript roadmap.
 *
 *         description:
 *           type: string
 *           example: Learn JavaScript from beginner to expert.
 *
 *         thumbnail:
 *           type: string
 *           example: https://cdn.learnhub.com/images/js.png
 *
 *         banner:
 *           type: string
 *           example: https://cdn.learnhub.com/images/banner.png
 *
 *         icon:
 *           type: string
 *           example: javascript
 *
 *         difficulty:
 *           type: string
 *           enum:
 *             - BEGINNER
 *             - INTERMEDIATE
 *             - ADVANCED
 *             - EXPERT
 *
 *         visibility:
 *           type: string
 *           enum:
 *             - PUBLIC
 *             - PRIVATE
 *
 *         subscriptionType:
 *           type: string
 *           enum:
 *             - FREE
 *             - PREMIUM
 *
 *         estimatedHours:
 *           type: number
 *           example: 40
 *
 *         estimatedModules:
 *           type: integer
 *           example: 12
 *
 *         estimatedNotes:
 *           type: integer
 *           example: 120
 *
 *         totalContent:
 *           type: integer
 *           example: 145
 *
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *
 *         order:
 *           type: integer
 *           example: 1
 *
 *         status:
 *           type: string
 *           enum:
 *             - DRAFT
 *             - PUBLISHED
 *             - ARCHIVED
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     LearningPathRequest:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         thumbnail:
 *           type: string
 *         banner:
 *           type: string
 *         icon:
 *           type: string
 *         difficulty:
 *           type: string
 *         visibility:
 *           type: string
 *         subscriptionType:
 *           type: string
 *         estimatedHours:
 *           type: number
 *         estimatedModules:
 *           type: integer
 *         estimatedNotes:
 *           type: integer
 *         totalContent:
 *           type: integer
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *         order:
 *           type: integer
 *
 *     LearningPathResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/LearningPath'
 *
 *     LearningPathListResponse:
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
 *                     $ref: '#/components/schemas/LearningPath'
 *                 meta:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */