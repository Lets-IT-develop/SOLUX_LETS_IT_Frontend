export const toggleSetData = (currentData: Set<string>, newData: string): Set<string> => {
  if (!currentData || !(currentData instanceof Set)) return new Set();

  const updatedData = new Set(currentData);
  if (currentData.has(newData)) {
    updatedData.delete(newData);
  } else {
    updatedData.add(newData);
  }

  return updatedData;
};
