// هذا الكود يضمن أن القائمة تظهر في كل الصفحات بمجرد ربطه
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div style="background:#003366; padding:20px; text-align:center;">
            <a href="index.html" style="color:white; margin:10px;">الرئيسية</a>
            <a href="about.html" style="color:white; margin:10px;">عن الشركة</a>
            <a href="projects.html" style="color:white; margin:10px;">مشاريعنا</a>
        </div>
    `;
    document.body.prepend(nav);
});
