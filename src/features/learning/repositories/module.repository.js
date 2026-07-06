import Module from "../models/Module.js";

export const createModule = (data) => {
  return Module.create(data);
};

export const findBySlug = (slug) => {
  return Module.findOne({ slug });
};

export const getModules = () => {
  return Module.find();
};