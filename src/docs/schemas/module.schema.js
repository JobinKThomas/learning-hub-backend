/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Module:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *
 *         learningPath:
 *           type: string
 *           description: Learning Path ID
 *           example: 686fd0d7c7c7d7d7d7d7d7d1
 *
 *         title:
 *           type: string
 *           example: JavaScript Fundamentals
 *
 *         slug:
 *           type: string
 *           example: javascript-fundamentals
 *
 *         shortDescription:
 *           type: string
 *           example: Learn the fundamentals of JavaScript.
 *
 *         description:
 *           type: string
 *           example: Variables, Data Types, Operators and more.
 *
 *         thumbnail:
 *           type: string
 *           nullable: true
 *           example: https://cdn.learnhub.com/images/module-js.png
 *
 *         banner:
 *           type: string
 *           nullable: true
 *           example: https://cdn.learnhub.com/images/banner-js.png
 *
 *         icon:
 *           type: string
 *           nullable: true
 *           example: javascript
 *
 *         difficulty:
 *           type: string
 *           enum:
 *             - BEGINNER
 *             - INTERMEDIATE
 *             - ADVANCED
 *             - EXPERT
 *           example: BEGINNER
 *
 *         visibility:
 *           type: string
 *           enum:
 *             - PUBLIC
 *             - PRIVATE
 *           example: PUBLIC
 *
 *         subscriptionType:
 *           type: string
 *           enum:
 *             - FREE
 *             - PREMIUM
 *           example: FREE
 *
 *         estimatedHours:
 *           type: number
 *           example: 8
 *
 *         estimatedSections:
 *           type: integer
 *           example: 6
 *
 *         estimatedTopics:
 *           type: integer
 *           example: 30
 *
 *         totalContent:
 *           type: integer
 *           example: 45
 *
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - javascript
 *             - basics
 *             - frontend
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
 *           example: PUBLISHED
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *
 *     ModuleRequest:
 *       type: object
 *       required:
 *         - learningPath
 *         - title
 *       properties:
 *         learningPath:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d1
 *
 *         title:
 *           type: string
 *           example: JavaScript Fundamentals
 *
 *         shortDescription:
 *           type: string
 *           example: Learn the fundamentals of JavaScript.
 *
 *         description:
 *           type: string
 *           example: Variables, Data Types, Operators and more.
 *
 *         thumbnail:
 *           type: string
 *
 *         banner:
 *           type: string
 *
 *         icon:
 *           type: string
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
 *
 *         estimatedSections:
 *           type: integer
 *
 *         estimatedTopics:
 *           type: integer
 *
 *         totalContent:
 *           type: integer
 *
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *
 *         order:
 *           type: integer
 *
 *
 *     ModuleResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Module'
 *
 *
 *     ModuleListResponse:
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
 *                     $ref: '#/components/schemas/Module'
 *
 *                 meta:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */