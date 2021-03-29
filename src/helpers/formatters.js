export const capitalizeName = (name) => {
  const nameCopy = name.toLowerCase();

  return name.charAt(0).toUpperCase() + nameCopy.slice(1);
};
