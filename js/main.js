// ==========================================================================
// 1. МОДАЛЬНІ ВІКНА ТА ВАЛІДАЦІЯ КВІЗУ
// ==========================================================================

window.showPopup = function() {
    const q1Answered = document.querySelector('input[name="q1"]:checked');
    const q2Answered = document.querySelector('input[name="q2"]:checked');
    const q3Answered = document.querySelector('input[name="q3"]:checked');
 
    if (q1Answered && q2Answered && q3Answered) {
        document.getElementById('myPopup').style.display = 'flex';
    } else {
        alert('Будь ласка, дайте відповідь на всі три запитання, щоб побачити результат!');
    }
};
 
window.showSimplePopup = function() {
    document.getElementById('myPopup').style.display = 'flex';
};
 
window.closePopup = function() {
    document.getElementById('myPopup').style.display = 'none';
};
 
 
// ==========================================================================
// 2. ІНТЕРАКТИВНІ КНОПКИ ШАПКИ (СТИЛЬ ОС)
// ==========================================================================
 
document.addEventListener('DOMContentLoaded', () => {
 
    // -----------------------------------------------------------------------
    // 2.1. КНОПКА «МІНУС» (#minimize-btn) — Згортання всього контенту
    // -----------------------------------------------------------------------
    const minimizeBtn = document.getElementById('minimize-btn');
    const mainContent = document.getElementById('main-content');
    const heroSection = document.querySelector('.hero');
 
    if (minimizeBtn) {
        minimizeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            // Згортаємо нижній контент (<main>)
            if (mainContent) mainContent.classList.toggle('collapsed');
            
            // Одночасно згортаємо блок Hero (всередині <header>)
            if (heroSection) heroSection.classList.toggle('collapsed'); 
        });
    }
 
    // -----------------------------------------------------------------------
    // 2.2. КНОПКА «КАСКАД» (#fullscreen-btn) — Повноекранний режим
    // -----------------------------------------------------------------------
    const fullscreenBtn = document.getElementById('fullscreen-btn');
 
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (event) => {
            event.preventDefault();
            const doc = document.documentElement;
 
            if (!document.fullscreenElement && !document.webkitFullscreenElement) {
                if (doc.requestFullscreen) {
                    const req = doc.requestFullscreen();
                    if (req && req.catch) req.catch(e => console.log(e));
                } else if (doc.webkitRequestFullscreen) {
                    doc.webkitRequestFullscreen(); 
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen(); 
                }
            }
        });
    }
 
    // -----------------------------------------------------------------------
    // 2.3. КНОПКА «ХРЕСТИК» (#close-btn) — Пасхалка BSOD
    // -----------------------------------------------------------------------
    const closeBtn   = document.getElementById('close-btn');
    const bsodScreen = document.getElementById('bsod-screen');
 
    if (closeBtn && bsodScreen) {
        closeBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            if (document.fullscreenElement && document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
 
            bsodScreen.classList.remove('bsod-hidden');
        });
 
        bsodScreen.addEventListener('click', () => {
            bsodScreen.classList.add('bsod-hidden');
        });
 
        document.addEventListener('keydown', () => {
            if (!bsodScreen.classList.contains('bsod-hidden')) {
                bsodScreen.classList.add('bsod-hidden');
            }
        });
    }
});