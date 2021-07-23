import { basePath } from "../configAPI";

export async function fetchAnimeTreding(limit) {
  const url = `${basePath}/trending/anime?limit=${limit}`;
  const params = {
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
  };
  const response = await fetch(url, params);
  const { data } = await response.json();
  return data;
}
