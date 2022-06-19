function getTextToImage() {
  const inputTextObject = document.getElementById('text-input');

  inputTextObject.addEventListener('input', () => {
    const textObjectValue = inputTextObject.value;
    const textOverImage = document.getElementById('meme-text');
    textOverImage.innerText = textObjectValue;
  });
}
getTextToImage();

function getImageToPrint() { // esta função eu peguei neste artigo => https://medium.com/@iamcodefoxx/how-to-upload-and-preview-an-image-with-javascript-749b92711b91
  const inputImageObject = document.getElementById('meme-insert');

  inputImageObject.addEventListener('change', function () {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const uploadedImage = reader.result;
      document.getElementById('meme-image').style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
  });
} getImageToPrint();
