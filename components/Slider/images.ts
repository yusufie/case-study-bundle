type ImageInfo = { src: string; alt: string; };
type ImageCollection = { [key: string]: ImageInfo };

const images: ImageCollection = {
  cobalt: {
    src: "/images/cobalt.png",
    alt: "Samsung Galaxy S24 - Cobalt Violet",
  },
  amber: {
    src: "/images/amber.png",
    alt: "Samsung Galaxy S24 - Amber Yellow",
  },
  marble: {
    src: "/images/marble.png",
    alt: "Samsung Galaxy S24 - Marble Gray",
  },
  onyx: {
    src: "/images/onyx.png",
    alt: "Samsung Galaxy S24 - Onyx Black",
  },
};

export default images;