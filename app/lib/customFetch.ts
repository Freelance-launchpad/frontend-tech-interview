export const customFetch = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response;
};
