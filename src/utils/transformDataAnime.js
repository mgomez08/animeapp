export function transformAnimeDataBasic(data) {
  let newData = [];
  data.map((anime) => {
    return newData.push({
      canonicalTitle: anime.attributes.canonicalTitle,
      slug: anime.attributes.slug,
      coverImgOriginal: anime.attributes.coverImage.original,
      posterImgLarge: anime.attributes.posterImage.large,
    });
  });
  return newData;
}