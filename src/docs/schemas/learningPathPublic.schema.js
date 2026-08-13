/**
 * @openapi
 * components:
 *   schemas:
 *
 *     PublicLearningPath:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6890b5f7d84e1d3b2cf12a34
 *
 *         title:
 *           type: string
 *           example: JavaScript Learning Path
 *
 *         slug:
 *           type: string
 *           example: javascript-learning-path
 *
 *         shortDescription:
 *           type: string
 *           example: Master JavaScript from beginner to advanced.
 *
 *         difficulty:
 *           type: string
 *           enum:
 *             - Beginner
 *             - Intermediate
 *             - Advanced
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
 *           example: 96
 *
 *         totalContent:
 *           type: integer
 *           example: 120
 *
 *         thumbnail:
 *           type: string
 *           example: https://cdn.learninghub.com/images/javascript.png
 *
 *         banner:
 *           type: string
 *           example: https://cdn.learninghub.com/images/javascript-banner.png
 *
 *         icon:
 *           type: string
 *           example: https://cdn.learninghub.com/icons/javascript.svg
 *
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - javascript
 *             - es6
 *             - frontend
 *
 *     PublicModule:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6890b7d3d84e1d3b2cf12a50
 *
 *         title:
 *           type: string
 *           example: JavaScript Fundamentals
 *
 *         slug:
 *           type: string
 *           example: javascript-fundamentals
 *
 *         order:
 *           type: integer
 *           example: 1
 *
 *         estimatedTime:
 *           type: integer
 *           example: 120
 *
 *     PublicLearningPathDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/PublicLearningPath'
 *         - type: object
 *           properties:
 *             description:
 *               type: string
 *               example: Complete JavaScript learning path from basics to advanced concepts.
 *
 *             modules:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PublicModule'
 *
 *     PublicLearningPathResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/PublicLearningPathDetails'
 *
 *     PublicLearningPathListResponse:
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
 *                     $ref: '#/components/schemas/PublicLearningPath'
 *                 meta:
 *                   $ref: '#/components/schemas/Pagination'
 *
 *     Pagination:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *
 *         limit:
 *           type: integer
 *           example: 10
 *
 *         total:
 *           type: integer
 *           example: 45
 *
 *         totalPages:
 *           type: integer
 *           example: 5
 */

/**
 * @openapi
 * components:
 *   schemas:
 *
 *     PublicLearningPathModule:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6890b7d3d84e1d3b2cf12a50
 *
 *         title:
 *           type: string
 *           example: JavaScript Basics
 *
 *         slug:
 *           type: string
 *           example: javascript-basics
 *
 *         shortDescription:
 *           type: string
 *           example: Learn variables, operators and data types.
 *
 *         difficulty:
 *           type: string
 *           enum:
 *             - BEGINNER
 *             - INTERMEDIATE
 *             - ADVANCED
 *             - EXPERT
 *
 *         estimatedTime:
 *           type: integer
 *           example: 180
 *
 *         totalSections:
 *           type: integer
 *           example: 8
 *
 *         order:
 *           type: integer
 *           example: 1
 *
 *     PublicLearningPathModulesResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PublicLearningPathModule'
 */