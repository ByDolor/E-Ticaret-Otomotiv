
function validateForm() {
    var name = document.querySelector('input[placeholder="Ad Soyad"]').value;
    var email = document.querySelector('input[placeholder="E-posta"]').value;
    var phoneNumber = document.querySelector('input[placeholder="Telefon Numarası"]').value;
    var cardName = document.querySelector('input[placeholder="Kart Üzerindeki İsim"]').value;

    if (name === '' || email === '' || phoneNumber === '' || cardName === '') {
        alert('Lütfen tüm alanları doldurun.');
        return false;
    } else {
        var verificationCode = prompt('Telefonunuza Gönderilen 6 Haneli Doğrulama Kodunu Giriniz.');
        if (verificationCode === null || verificationCode.length !== 6) {
            alert('Lütfen doğrulama kodunuzu girin (6 haneli).');
            return false;
        }
    }
    alert('Ödeme Başarıyla Tamamlandı!');
    return true;
}

// Yılları otomatik oluşturma
var currentYear = new Date().getFullYear();
for (var i = 0; i < 20; i++) {
    var year = currentYear + i;
    var optionYear = document.createElement('option');
    optionYear.value = year;
    optionYear.textContent = year;
    document.getElementById('expiry_year').appendChild(optionYear);
}
