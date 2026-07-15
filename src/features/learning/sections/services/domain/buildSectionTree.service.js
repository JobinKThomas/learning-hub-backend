const buildSectionTree = (
  sections
) => {
  const map = new Map();

  const roots = [];

  sections.forEach((section) => {
    const id =
      section.id ??
      section._id.toString();

    map.set(id, {
      ...section,
      children: [],
    });
  });

  sections.forEach((section) => {
    const id =
      section.id ??
      section._id.toString();

    const current =
      map.get(id);

    if (!section.parentSection) {
      roots.push(current);

      return;
    }

    const parent =
      map.get(
        section.parentSection.toString()
      );

    if (parent) {
      parent.children.push(current);
    }
  });

  return roots;
};

export default buildSectionTree;