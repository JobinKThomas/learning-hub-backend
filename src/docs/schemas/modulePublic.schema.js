/**
 * @openapi
 * components:
 *   schemas:
 *
 *     PublicModule:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6890b7d3d84e1d3b2cf12a50
 *
 *         learningPath:
 *           type: string
 *           example: 6890b5f7d84e1d3b2cf12a34
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
 *           example: Learn JavaScript fundamentals.
 *
 *         description:
 *           type: string
 *           example: This module introduces variables, operators, functions and more.
 *
 *         thumbnail:
 *           type: string
 *           example: https://cdn.learninghub.com/images/module-js.png
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
 *     PublicSection:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 6890c1d5d84e1d3b2cf12b20
 *
 *         module:
 *           type: string
 *           example: 6890b7d3d84e1d3b2cf12a50
 *
 *         title:
 *           type: string
 *           example: Variables and Data Types
 *
 *         slug:
 *           type: string
 *           example: variables-and-data-types
 *
 *         shortDescription:
 *           type: string
 *           example: Learn variables and primitive data types.
 *
 *         estimatedTime:
 *           type: integer
 *           example: 30
 *
 *         order:
 *           type: integer
 *           example: 1
 *
 *     PublicModuleDetails:
 *       type: object
 *       properties:
 *         module:
 *           $ref: '#/components/schemas/PublicModule'
 *
 *         sections:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/PublicSection'
 *
 *     PublicModuleResponse:
 *       allOf:
 *         - $ref: '#/components/schemas/ApiResponse'
 *         - type: object
 *           properties:
 *             data:
 *               $ref: '#/components/schemas/PublicModuleDetails'
 */
