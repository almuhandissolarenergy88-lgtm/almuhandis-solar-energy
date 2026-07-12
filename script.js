// تفعيل التمرير السلس عند الضغط على الروابط
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// رسالة ترحيب في وحدة التحكم (للتأكد أن الملف يعمل)
console.log("AL-MUHANDIS SOLAR ENERGY Website Loaded Successfully!");
