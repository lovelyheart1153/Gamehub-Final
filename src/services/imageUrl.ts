import noImage from "../assets/noImage.jpg";

const getCroppedImage = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + url.slice(index);
};

export default getCroppedImage;
