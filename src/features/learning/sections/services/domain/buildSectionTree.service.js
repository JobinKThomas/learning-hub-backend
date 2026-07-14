const buildSectionTree = (
  sections
) => {

  const map = new Map();

  const roots = [];

  sections.forEach(section => {

    map.set(
      section._id.toString(),
      {
        ...section,
        children: [],
      }
    );

  });

  sections.forEach(section => {

    if (!section.parentSection) {

      roots.push(
        map.get(
          section._id.toString()
        )
      );

      return;
    }

    const parent =
      map.get(
        section.parentSection.toString()
      );

    if (parent) {

      parent.children.push(

        map.get(
          section._id.toString()
        )

      );

    }

  });

  return roots;

};

export default buildSectionTree;