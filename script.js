const services = [
    { icon: "fa-solar-panel", name: "ألواح شمسية" },
    { icon: "fa-bolt", name: "إنفرترات" },
    { icon: "fa-water", name: "طلمبات مياه" },
    { icon: "fa-battery-full", name: "بطاريات" }
];

const container = document.getElementById('services');
services.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <i class="fas ${item.icon} fa-2x" style="color:#25d366"></i>
            <p>${item.name}</p>
        </div>
    `;
});
