// 台北市消防局 救護學院 - 互動邏輯

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 滾動進場動畫 (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 套用動畫到所有玻璃卡片
    document.querySelectorAll('.glass-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(card);
    });

    // 2. CPR 節奏器控制 (選擇性功能：點擊切換節奏)
    const rhythmPulse = document.querySelector('.rhythm-pulse');
    if (rhythmPulse) {
        rhythmPulse.addEventListener('click', () => {
            // 切換按壓提示聲或更多互動
            alert("正在模擬 A-Mei《給我感覺》的節奏：每分鐘約 110 次按壓。");
        });
    }

    // 3. 處理背景 Logo 載入錯誤 (若使用者尚未存檔)
    const logoImg = document.getElementById('main-logo');
    if (logoImg) {
        logoImg.onerror = function() {
            this.style.display = 'none';
            console.warn("尚未找到 logo.png，請將 Logo 存放到專案路徑中。");
        };
    }
});
