import { Router } from "express";

import authRoutes from "../features/auth/routes/auth.routes.js";
import learningPathRoutes from "../features/learning/learning-paths/routes/learningPath.routes.js";
import learningPathModuleRoutes from "../features/learning/modules/routes/learningPathModule.routes.js";
import modulesRoutes from "../features/learning/modules/routes/module.routes.js";
import moduleSectionRoutes from "../features/learning/sections/routes/moduleSection.routes.js";
import sectionRoutes from "../features/learning/sections/routes/section.routes.js";
import sectionTopicRoutes from "../features/learning/topics/routes/sectionTopic.routes.js";
import topicRoutes from "../features/learning/topics/routes/topic.routes.js";
import notesRoutes from "../features/learning/notes/routes/note.routes.js";
import resourcesRoutes from "../features/learning/resources/routes/resource.routes.js";
import playgroundsRoutes from "../features/learning/playground/routes/playground.routes.js";
import quizzessRoutes from "../features/learning/quizzes/routes/quiz.routes.js";
import quizQuestionsRoutes from "../features/learning/quizzes/routes/quizQuestion.routes.js";


const router = Router();

router.use("/auth", authRoutes);
router.use("/learning-paths", learningPathRoutes);
router.use("/learning-paths", learningPathModuleRoutes);
router.use("/modules", modulesRoutes);
router.use("/modules", moduleSectionRoutes);
router.use("/sections", sectionRoutes);
router.use("/sections", sectionTopicRoutes);
router.use("/topics", topicRoutes);
router.use("/notes", notesRoutes);
router.use("/resources", resourcesRoutes);
router.use("/playgrounds", playgroundsRoutes);
router.use("/quizzes", quizzessRoutes);
router.use("/quiz-questions", quizQuestionsRoutes);


export default router;