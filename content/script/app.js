const $ = document;
const qrCodeDiv = $.querySelector('#qrCode');
const input = $.querySelector('#input');
const downloadBtn = $.querySelector('#dBtn');
input.addEventListener('keyup',event=>{
  fetch(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${event.target.value}`)
  .then(response=>response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    qrCodeDiv.style.backgroundImage = `url(${url})`;
    downloadBtn.href = url;
    downloadBtn.download = 'qrcode.png';
  }).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
})

