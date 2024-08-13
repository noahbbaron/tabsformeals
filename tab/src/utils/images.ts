const IMAGE_DOMAIN = 'https://pub-bf0a670fada84c7cb87dc44341fb7cb7.r2.dev';

const imageSlugs = [
  'photo-1476231682828-37e571bc172f-min.jpeg',
  'niklas-tidbury-r2vxqvKXng8-unsplash-min.jpg',
  'lukasz-szmigiel-2ShvY8Lf6l0-unsplash-min.jpg',
];

const selectRandomImageURL = () => {
  const randomIndex = Math.floor(Math.random() * imageSlugs.length);
  const imageSlug = imageSlugs[randomIndex];
  const imageURL = `${IMAGE_DOMAIN}/${imageSlug}`;

  return imageURL;
};

export { selectRandomImageURL };
