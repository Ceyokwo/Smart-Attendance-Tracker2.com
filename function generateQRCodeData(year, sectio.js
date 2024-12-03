function generateQRCodeData(year, section, accountName) {
    const currentDate = new Date();
    const qrCodeData = `Date: ${currentDate.toLocaleDateString()}
Year: ${year}
Section: ${section}
Account: ${accountName}`;
    return qrCodeData;
}

function generateQRCode() {
    const year = document.getElementById('year').value;
    const section = document.getElementById('section').value;
    const accountName = document.getElementById('accountName').value;

    const qrCodeData = generateQRCodeData(year, section, accountName);

    new QRCode(document.getElementById("qrcode"), {
        text: qrCodeData,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}