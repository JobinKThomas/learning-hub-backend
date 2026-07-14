import * as sectionRepository from "../../repositories/section.repository.js";
import sectionPresenter from "../../presenters/section.presenter.js";

const listSectionsService = async (filters = {}) => {
  const {
    page = 1,
    limit = 20,
  } = filters;

  const sections =
    await sectionRepository.findSections(filters);

  const total =
    await sectionRepository.countSections({
      learningPath: filters.learningPath,
      module: filters.module,
      parentSection: filters.parentSection,
      status: filters.status,
      visibility: filters.visibility,
    });

  return {
    items: sections.map(sectionPresenter),

    pagination: {
      page: Number(page),
      limit: Number(limit),
      total,
      totalPages: Math.ceil(
        total / Number(limit)
      ),
    },
  };
};

export default listSectionsService;