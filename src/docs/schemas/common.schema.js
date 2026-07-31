/**
 * @openapi
 * components:
 *   schemas:
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *
 *         message:
 *           type: string
 *           example: Success
 *
 *         data:
 *           type: object
 *
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *
 *         message:
 *           type: string
 *           example: Validation failed.
 *
 *         errors:
 *           type: array
 *           items:
 *             type: string
 *           example:
 *             - Title is required.
 *             - Difficulty is invalid.
 *
 *
 *     PaginationMeta:
 *       type: object
 *       properties:
 *         page:
 *           type: integer
 *           example: 1
 *
 *         limit:
 *           type: integer
 *           example: 20
 *
 *         total:
 *           type: integer
 *           example: 125
 *
 *         totalPages:
 *           type: integer
 *           example: 7
 *
 *         hasNextPage:
 *           type: boolean
 *           example: true
 *
 *         hasPreviousPage:
 *           type: boolean
 *           example: false
 *
 *
 *     PagedResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *
 *         message:
 *           type: string
 *           example: Data fetched successfully.
 *
 *         data:
 *           type: object
 *           properties:
 *             items:
 *               type: array
 *               items:
 *                 type: object
 *
 *             meta:
 *               $ref: '#/components/schemas/PaginationMeta'
 *
 *
 *     StatusRequest:
 *       type: object
 *       required:
 *         - status
 *       properties:
 *         status:
 *           type: string
 *           example: PUBLISHED
 *
 *
 *     OrderRequest:
 *       type: object
 *       required:
 *         - order
 *       properties:
 *         order:
 *           type: integer
 *           minimum: 0
 *           example: 1
 *
 *
 *     ObjectId:
 *       type: string
 *       example: 686fd0d7c7c7d7d7d7d7d7d7
 *
 *
 *     Slug:
 *       type: string
 *       example: javascript-basics
 */