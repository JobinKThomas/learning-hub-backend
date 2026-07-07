export class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findById(id) {
    return this.model.findOne({
      _id: id,
      deletedAt: null,
    });
  }

  async create(payload) {
    return this.model.create(payload);
  }

  // ...
}

export default new BaseRepository(LearningPath);