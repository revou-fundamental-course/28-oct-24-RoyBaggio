function calculateBMI() {
    // Mendapatkan input Value
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters Menconvert Meter Jadi Cm
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Validasi Input (jadi Kalau Ga ada yang ga di isi Bakal ada alert)
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0 || age <= 0) {
        alert('tolong isi Berat badan, Usia, Tinggi badan Anda');
        return;
    
    }

    // Kalkulator BMI
    const bmi = weight / (height * height);
    document.getElementById('bmi-result').textContent = bmi.toFixed(1);

    // Menentukan Kategori Bmi 
    let status = "";
    let description = "";

    if (bmi < 18.5) {
        status = "Kekurangan Berat badan";
        description = "BMI Anda menunjukkan bahwa Anda berada dalam kategori kekurangan berat badan. Untuk mencapai berat badan yang ideal, disarankan untuk menambah asupan kalori harian dengan memilih makanan yang padat gizi seperti protein (daging, ikan, kacang-kacangan), karbohidrat kompleks (nasi, roti gandum), dan lemak sehat (alpukat, kacang-kacangan). Pastikan Anda makan secara teratur, tambahkan camilan sehat, dan pertimbangkan olahraga ringan untuk membangun massa otot"
    } else if (bmi < 24.9) {
        status = "Berat Badan Ideal";
        description = "BMI Anda menunjukkan bahwa Anda memiliki berat badan ideal. Ini adalah indikator positif untuk kesehatan Anda. Untuk mempertahankan berat badan ini, disarankan agar Anda terus menjaga pola makan yang seimbang dengan mengonsumsi berbagai macam makanan bergizi, termasuk buah, sayuran, protein, dan biji-bijian. Rutin berolahraga juga penting untuk menjaga kekuatan otot, fleksibilitas, dan kesehatan jantung. Pastikan juga Anda menjaga hidrasi dan tidur yang cukup untuk mendukung kesejahteraan tubuh secara menyeluruh";
    } else if (bmi < 29.9) {
        status = "Kelebihan berat badan";
        description = "BMI Anda menunjukkan bahwa berat badan Anda sedikit di atas rentang ideal. Untuk mencapai berat badan yang lebih sehat, disarankan agar Anda mulai memperhatikan pola makan dengan memilih makanan rendah kalori dan tinggi serat, seperti sayuran, buah, dan biji-bijian. Mengurangi konsumsi makanan tinggi gula dan lemak jenuh juga dapat membantu. Selain itu, lakukan olahraga rutin, seperti jalan cepat, bersepeda, atau latihan kekuatan, setidaknya 150 menit per minggu. Perubahan kecil dalam gaya hidup ini dapat membantu menurunkan berat badan dan meningkatkan kesehatan Anda secara keseluruhan";
    } else {
        status = "Obesitas";
        description = "BMI Anda menunjukkan bahwa Anda berada dalam kategori obesitas, yang dapat meningkatkan risiko berbagai masalah kesehatan, seperti penyakit jantung, diabetes, dan hipertensi. Untuk menurunkan berat badan secara sehat dan berkelanjutan, sangat disarankan untuk berkonsultasi dengan dokter atau ahli gizi. Mereka dapat membantu Anda merancang program penurunan berat badan yang sesuai dengan kebutuhan tubuh Anda, termasuk pola makan yang tepat dan jenis olahraga yang aman. Mengambil langkah ini dapat membantu Anda mencapai berat badan ideal dan meningkatkan kualitas hidup secara keseluruhan";
    }

    document.getElementById('bmi-status').textContent = `Status: ${status}`;
    document.getElementById('bmi-description').textContent = description;

    // Menampilkan Section Result Full Screen (Jadi ngegantiin Input)
    document.body.classList.add('show-result');
}

function resetForm() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    document.body.classList.remove('show-result');
    document.getElementById('result').style.display = 'none';
}

function goBack() {
    // Untuk Kembali Ke Input Form
    document.body.classList.remove('show-result');
}
