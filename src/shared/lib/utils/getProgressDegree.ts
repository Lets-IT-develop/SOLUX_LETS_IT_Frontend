export const getProgressDegree = <T extends string>(progress: T, steps: T[]) => {
  const progressIndex = steps.indexOf(progress);
  return (progressIndex / (steps.length - 1)) * 100;
};
