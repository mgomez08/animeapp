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

export async function fetchHighestAnimes(limit) {
  const url = `${basePath}/anime?page%5Blimit%5D=${limit}&sort=-average_rating`;
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
export async function fetchPopularAnimes(limit) {
  const url = `${basePath}/anime?page%5Blimit%5D=${limit}&sort=-user_count`;
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
export async function fetchAnimeData(animeSlug) {
  const url = `${basePath}/anime?fields%5Bcategories%5D=slug%2Ctitle&filter%5Bslug%5D=${animeSlug}&include=categories%2CanimeProductions.producer`;
  const params = {
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
  };
  const response = await fetch(url, params);
  const { data, included } = await response.json();
  return { data: data[0], included };
}

export async function fetchEpisodesAnimeData(animeId) {
  const url = `${basePath}/episodes?filter%5BmediaType%5D=Anime&filter%5Bmedia_id%5D=${animeId}&sort=number`;
  const params = {
    headers: {
      "Content-Type": "application/vnd.api+json",
      Accept: "application/vnd.api+json",
    },
  };
  const response = await fetch(url, params);
  const data = await response.json();
  return data;
}
