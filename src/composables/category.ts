export default function useCategory() {
  function setCategory(category: string) {
    localStorage.setItem('category', category);
  }

  function getCategory() {
    return localStorage.getItem('category');
  }

  return {
    setCategory,
    getCategory
  }
}