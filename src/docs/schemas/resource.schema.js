/**
 * @openapi
 * components:
 *   schemas:
 *
 *     Resource:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6a6b7b8b222b3944c68bc777
 *         topic:
 *           type: string
 *           example: 6a69d74b84e0d19db8f5a518
 *         title:
 *           type: string
 *           example: JavaScript Official Documentation
 *         slug:
 *           type: string
 *           example: javascript-official-documentation
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         url:
 *           type: string
 *           format: uri
 *           example: https://developer.mozilla.org/docs/Web/JavaScript
 *         type:
 *           type: string
 *           enum:
 *             - ARTICLE
 *             - VIDEO
 *             - WEBSITE
 *             - DOCUMENTATION
 *             - PDF
 *             - GITHUB
 *             - OTHER
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
 *     ResourceRequest:
 *       type: object
 *       required:
 *         - topic
 *         - title
 *         - url
 *       properties:
 *         topic:
 *           type: string
 *         title:
 *           type: string
 *         shortDescription:
 *           type: string
 *         description:
 *           type: string
 *         url:
 *           type: string
 *         type:
 *           type: string
 *         visibility:
 *           type: string
 *         subscriptionType:
 *           type: string
 *         order:
 *           type: integer
 *
 *     ResourceResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/Resource'
 *
 *     ResourceListResponse:
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
 *                     $ref: '#/components/schemas/Resource'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 */