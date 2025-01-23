document.addEventListener('DOMContentLoaded', function () {
    
    // Generate QR code before  generating the PDF

    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: "https://www.laatumarjat.fi",
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })
    
    var element = document.querySelector('.poster');

    // Use html2pdf to create a PDF of the element

    html2pdf().from(element).set({
        margin: [0, -59, 0, 0],
        filename: 'poster.pdf',
        pagebreak: false,
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    }).save();

});