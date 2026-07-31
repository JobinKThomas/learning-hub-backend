/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Section:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *
 *         learningPath:
 *           type: string
 *
 *         module:
 *           type: string
 *
 *         parentSection:
 *           type: string
 *           nullable: true
 *
 *         title:
 *           type: string
 *           example: Variables
 *
 *         slug:
 *           type: string
 *           example: variables
 *
 *         shortDescription:
 *           type: string
 *
 *         description:
 *           type: string
 *
 *         level:
 *           type: integer
 *           example: 1
 *
 *         path:
 *           type: string
 *           example: javascript-basics
 *
 *         childrenCount:
 *           type: integer
 *           example: 5
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
 *         order:
 *           type: integer
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
 *
 *     SectionRequest:
 *       type: object
 *       required:
 *         - learningPath
 *         - module
 *         - title
 *       properties:
 *         learningPath:
 *           type: string
 *
 *         module:
 *           type: string
 *
 *         parentSection:
 *           type: string
 *
 *         title:
 *           type: string
 *
 *         shortDescription:
 *           type: string
 *
 *         description:
 *           type: string
 *
 *         difficulty:
 *           type: string
 *
 *         visibility:
 *           type: string
 *
 *         subscriptionType:
 *           type: string
 *
 *         order:
 *           type: integer
 *
 *
 *     SectionResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Section'
 *
 *
 *     SectionListResponse:
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
 *                     $ref: '#/components/schemas/Section'
 *
 *                 meta:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */