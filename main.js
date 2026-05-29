/* ========== main.js - WanderLux 旅游网站交互逻辑 ========== */

/* ---- 1. 页面加载动画 ---- */
(function initLoader() {
  const loader = document.getElementById('pageLoader');
  window.addEventListener('load', function () {
    setTimeout(function () {
      loader.classList.add('hidden');
      // 加载完成后触发首屏动画
      triggerHeroAnimation();
    }, 2000);
  });
})();

function triggerHeroAnimation() {
  const activeSlide = document.querySelector('.hero-slide.active .slide-content');
  if (activeSlide) {
    activeSlide.style.animation = 'none';
    activeSlide.offsetHeight; // reflow
    activeSlide.style.animation = 'slideIn 0.9s ease both';
  }
}

/* ---- 2. 导航栏滚动效果 ---- */
(function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // 点击导航链接后关闭菜单
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
})();

/* ---- 3. Hero 轮播 ---- */
(function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.getElementById('heroDots');
  let current = 0;
  let timer = null;

  // 生成指示点
  slides.forEach(function (_, i) {
    const dot = document.createElement('div');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', function () { goTo(i); });
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    dotsWrap.querySelectorAll('.hero-dot')[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dotsWrap.querySelectorAll('.hero-dot')[current].classList.add('active');
    // 重新触发文字入场动画
    const content = slides[current].querySelector('.slide-content');
    if (content) {
      content.style.animation = 'none';
      content.offsetHeight;
      content.style.animation = 'slideIn 0.9s ease both';
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto() { clearInterval(timer); }

  document.getElementById('heroNext').addEventListener('click', function () {
    stopAuto(); next(); startAuto();
  });
  document.getElementById('heroPrev').addEventListener('click', function () {
    stopAuto(); prev(); startAuto();
  });

  // 触屏滑动支持
  var touchStartX = 0;
  var heroEl = document.querySelector('.hero');
  heroEl.addEventListener('touchstart', function (e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  heroEl.addEventListener('touchend', function (e) {
    var diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { stopAuto(); diff > 0 ? next() : prev(); startAuto(); }
  });

  startAuto();
})();

/* ---- 4. 目的地卡片过滤 ---- */
(function initDestFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.dest-card');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(function (card) {
        if (filter === 'all' || card.dataset.cat === filter) {
          card.classList.remove('hidden');
          // 重新触发入场动画
          card.style.animation = 'none';
          card.offsetHeight;
          card.style.animation = '';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();

/* ---- 5. 滚动入场动画（Intersection Observer） ---- */
(function initReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { observer.observe(el); });
})();

/* ---- 6. 数字计数动效 ---- */
(function initCounter() {
  const counters = document.querySelectorAll('.count');
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.closest('[data-target]').dataset.target, 10);
        animateCount(el, target);
        observer.unobserve(el.closest('[data-target]'));
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function (c) {
    observer.observe(c.closest('[data-target]'));
  });

  function animateCount(el, target) {
    var start = 0;
    var duration = 2000;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      // easeOutCubic
      var ease = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(ease * target);
      el.textContent = current >= 1000 ? (current / 1000).toFixed(0) + ',' + ('000'.slice(-(3 - String(current % 1000).length)) + current % 1000) : current;
      if (target >= 1000) {
        el.textContent = current.toLocaleString();
      }
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(step);
  }
})();

/* ---- 7. 视差滚动 ---- */
(function initParallax() {
  var bg = document.getElementById('parallaxBg');
  if (!bg) return;
  function onScroll() {
    var section = bg.parentElement;
    var rect = section.getBoundingClientRect();
    var scrolled = -rect.top * 0.35;
    bg.style.transform = 'translateY(' + scrolled + 'px)';
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ---- 8. 用户评价轮播 ---- */
(function initTestiSlider() {
  var track = document.getElementById('testiTrack');
  if (!track) return;
  var cards = track.querySelectorAll('.testi-card');
  var dotsWrap = document.getElementById('testiDots');
  var current = 0;
  var perPage = window.innerWidth <= 768 ? 1 : 3;

  // 生成指示点
  var totalPages = Math.ceil(cards.length / perPage);
  for (var i = 0; i < totalPages; i++) {
    var dot = document.createElement('div');
    dot.className = 'testi-dot' + (i === 0 ? ' active' : '');
    (function (idx) {
      dot.addEventListener('click', function () { goTo(idx); });
    })(i);
    dotsWrap.appendChild(dot);
  }

  function goTo(page) {
    current = Math.max(0, Math.min(page, totalPages - 1));
    var cardWidth = cards[0].getBoundingClientRect().width + 24;
    track.style.transform = 'translateX(-' + (current * perPage * cardWidth) + 'px)';
    dotsWrap.querySelectorAll('.testi-dot').forEach(function (d, i) {
      d.classList.toggle('active', i === current);
    });
  }

  document.getElementById('testiPrev').addEventListener('click', function () { goTo(current - 1); });
  document.getElementById('testiNext').addEventListener('click', function () { goTo(current + 1); });

  // 自动轮播
  setInterval(function () { goTo((current + 1) % totalPages); }, 4500);

  // 窗口resize
  window.addEventListener('resize', function () {
    perPage = window.innerWidth <= 768 ? 1 : 3;
    totalPages = Math.ceil(cards.length / perPage);
    current = 0;
    track.style.transform = 'translateX(0)';
  });
})();

/* ---- 9. 回顶部按钮 ---- */
(function initBackTop() {
  var btn = document.getElementById('backTop');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ---- 10. 联系表单提交 ---- */
(function initForm() {
  var form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    showToast('咨询已提交！顾问将于24小时内联系您 ✈');
    form.reset();
  });
})();

/* ---- Toast 提示 ---- */
function showToast(msg) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();
  var toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { toast.classList.add('show'); });
  });
  setTimeout(function () {
    toast.classList.remove('show');
    setTimeout(function () { toast.remove(); }, 500);
  }, 3500);
}

/* ---- 11. 搜索栏按钮交互 ---- */
(function initSearch() {
  var btn = document.querySelector('.search-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var input = document.querySelector('.search-group input[type="text"]');
    var dest = input ? input.value.trim() : '';
    if (dest) {
      showToast('正在为您搜索「' + dest + '」的行程...');
    } else {
      showToast('请输入目的地，开启你的旅程 🌍');
    }
  });
})();

/* ---- 12. 导航平滑滚动 + 激活状态 ---- */
(function initActiveNav() {
  var sections = document.querySelectorAll('section[id], div[id]');
  var links = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY + 120;
    sections.forEach(function (sec) {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        links.forEach(function (a) {
          a.classList.remove('active-link');
          if (a.getAttribute('href') === '#' + sec.id) {
            a.classList.add('active-link');
          }
        });
      }
    });
  });
})();
