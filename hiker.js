let index = 0;
const images = ["https://i.ibb.co/CWKHcCh/mountainhiking-Copy.jpg","https://i.ibb.co/dtsz1jC/farmwalk.jpg","https://i.ibb.co/ncHRjHR/the-view.jpg","https://i.ibb.co/7v7vVKy/saltbath.jpg","https://i.ibb.co/5TcSq9J/memo1.jpg","https://i.ibb.co/2MCDKBg/waterfal.jpg","https://i.ibb.co/CnpPkHq/ethio.jpg","https://i.ibb.co/sv6ndcX/teree.jpg","https://i.ibb.co/JkjwdWr/walk-down.jpg","https://i.ibb.co/wJcP4Rz/horsen.jpg","https://i.ibb.co/mDGWDhv/pic.jpg","https://i.ibb.co/phkgjS6/rest.jpg","https://i.ibb.co/4Pzy6cJ/memo3.jpg","https://i.ibb.co/KqyWDmT/cross.jpg","https://i.ibb.co/Lp90ndc/look.jpg"]
displayImages();
function displayImages() {
  const banner = document.getElementsByClassName("banner");
  if (banner?.length > 0) {
    banner[0].style.backgroundImage = `url(${images[index]})`;
  }
  index++;
  if (index >= images.length) {
    index = 0;
  }
  setTimeout(displayImages, 2000);
}