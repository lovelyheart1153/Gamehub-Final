const getCroppedImage = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + url.slice(index);
};

export default getCroppedImage;
