export default (imagePath: string) => {
  return import.meta.env.VITE_BASE_URL + imagePath;
};
