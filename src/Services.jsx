export const getPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Gagal mengambil data post dari API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("[Services] Error fetching posts:", error.message);
    throw error;
  }
};