/**
 * @openapi
 * components:
 *   schemas:
 *
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 686fd0d7c7c7d7d7d7d7d7d7
 *         firstName:
 *           type: string
 *           example: Jobin
 *         lastName:
 *           type: string
 *           example: Thomas
 *         email:
 *           type: string
 *           format: email
 *           example: admin@admin.com
 *         role:
 *           type: string
 *           example: admin
 *         isActive:
 *           type: boolean
 *           example: true
 *
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - firstName
 *         - email
 *         - password
 *       properties:
 *         firstName:
 *           type: string
 *           example: Jobin
 *         lastName:
 *           type: string
 *           example: Thomas
 *         email:
 *           type: string
 *           format: email
 *           example: admin@admin.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password@123
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: admin@admin.com
 *         password:
 *           type: string
 *           format: password
 *           example: Password@123
 *
 *     LoginResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Login successful.
 *         data:
 *           type: object
 *           properties:
 *             user:
 *               $ref: '#/components/schemas/User'
 *             accessToken:
 *               type: string
 *               example: eyJhbGciOiJIUzI1NiIs...
 *             refreshToken:
 *               type: string
 *               example: eyJhbGciOiJIUzI1NiIs...
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         message:
 *           type: string
 *           example: Success
 *         data:
 *           type: object
 *
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: false
 *         message:
 *           type: string
 *           example: Invalid credentials.
 *         errors:
 *           type: array
 *           items:
 *             type: string
 */