const data = [
    { icon: "fa-solar-panel", title: "ألواح شمسية" },
    { icon: "fa-bolt", title: "إنفرترات" },
    { icon: "fa-water", title: "طلمبات" },
    { icon: "fa-battery-full", title: "بطاريات" },
    { icon: "fa-tools", title: "صيانة" },
    { icon: "fa-headset", title: "دعم فني" }
];

const container = document.getElementById('services');
data.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <i class="fas ${item.icon} fa-2x" style="color:#25d366"></i>
            <h3>${item.title}</h3>
        </div>
    `;
});
