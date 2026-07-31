/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Topic:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6a69f63d0dcb8e3fdc12ab45
 *         title:
 *           type: string
 *           example: Variables
 *         slug:
 *           type: string
 *           example: variables
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         learningPath:
 *           type: string
 *         module:
 *           type: string
 *         section:
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
 *         difficulty:
 *           type: string
 *           enum:
 *             - BEGINNER
 *             - INTERMEDIATE
 *             - ADVANCED
 *             - EXPERT
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
 *     TopicRequest:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         learningPath:
 *           type: string
 *         module:
 *           type: string
 *         section:
 *           type: string
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         visibility:
 *           type: string
 *         subscriptionType:
 *           type: string
 *         difficulty:
 *           type: string
 *         order:
 *           type: integer
 *
 *     TopicResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Topic'
 *
 *     TopicListResponse:
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
 *                     $ref: '#/components/schemas/Topic'
 *                 meta:
 *                   $ref: '#/components/schemas/PaginationMeta'
 */