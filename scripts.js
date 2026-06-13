function getQrCode() {
  const text = document.getElementById("text-input").value.trim();
  if (!text) {
    alert("Please enter a valid text");
    return;
  }

  // empty qr container div
  qrcodeContainer.innerHTML = "";

  new QRCode(qrcodeContainer, {
    text: text,
    width: 200,
    height: 200,
    color: "white",
  });
}

const generateButton = document.getElementById("generator");
const qrcodeContainer = document.getElementById("qrcode");
