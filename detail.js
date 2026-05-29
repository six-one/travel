/* ========== detail.js - 详情页交互逻辑 ========== */

/* ---- 目的地数据 ---- */
var destData = {
  maldives: {
    name: '马尔代夫',
    tag: '海岛度假',
    subtitle: '碧海白沙的天堂 · 水上屋与珊瑚礁的绝美邂逅',
    bg: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=80',
    duration: '6天5夜',
    priceOld: '¥24,800',
    priceCurrent: '¥18,800',
    highlights: [
      { icon: 'fa-water', title: '水上别墅', desc: '私人无边泳池，推窗即见碧蓝大海' },
      { icon: 'fa-utensils', title: '美食盛宴', desc: '米其林主厨定制，海底餐厅烛光晚餐' },
      { icon: 'fa-fish', title: '深潜探索', desc: '专业教练陪同，与鲸鲨同游的奇妙体验' },
      { icon: 'fa-spa', title: '水疗养生', desc: '五星级 SPA 中心，身心全面疗愈放松' },
      { icon: 'fa-concierge-bell', title: '私人管家', desc: '24小时专属管家，满足一切合理需求' },
      { icon: 'fa-camera', title: '摄影跟拍', desc: '专业旅拍摄影师，记录每个精彩瞬间' }
    ]
  },
  kyoto: {
    name: '日本 · 京都',
    tag: '文化探索',
    subtitle: '樱花与禅意的诗篇 · 千年古都的宁静与雅致',
    bg: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80',
    duration: '7天6夜',
    priceOld: '¥12,800',
    priceCurrent: '¥8,800',
    highlights: [
      { icon: 'fa-torii-gate', title: '古刹巡礼', desc: '金阁寺、清水寺，千年禅意之旅' },
      { icon: 'fa-leaf', title: '庭院赏景', desc: '枯山水庭园，日式美学的极致体现' },
      { icon: 'fa-utensils', title: '怀石料理', desc: '米其林三星怀石，味觉与视觉的双重盛宴' },
      { icon: 'fa-spa', title: '温泉疗愈', desc: '天然温泉旅馆，享受日式极致服务' },
      { icon: 'fa-paint-brush', title: '和风体验', desc: '茶道、花道、和服漫步深度文化体验' },
      { icon: 'fa-camera', title: '竹林秘境', desc: '岚山竹林、伏见稻荷，摄影师天堂' }
    ]
  },
  dubai: {
    name: '迪拜 · 阿联酋',
    tag: '奢华之旅',
    subtitle: '沙漠中的璀璨明珠 · 摩天奇迹与极致奢华',
    bg: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80',
    duration: '5天4夜',
    priceOld: '¥18,500',
    priceCurrent: '¥12,500',
    highlights: [
      { icon: 'fa-building', title: '摩天奇观', desc: '哈利法塔顶层，俯瞰沙漠奇迹之城' },
      { icon: 'fa-utensils', title: '七星美食', desc: '帆船酒店下午茶，世界顶级餐厅体验' },
      { icon: 'fa-car', title: '沙漠飙车', desc: '专业越野冲沙，沙漠营地星空晚宴' },
      { icon: 'fa-gem', title: '奢华购物', desc: '迪拜 Mall 购物，全球最大奢侈品天堂' },
      { icon: 'fa-helicopter', title: '空中游览', desc: '直升机俯瞰棕榈岛，震撼视觉盛宴' },
      { icon: 'fa-concierge-bell', title: '七星服务', desc: '帆船酒店入住，超越想象的极致服务' }
    ]
  },
  santorini: {
    name: '希腊 · 圣托里尼',
    tag: '浪漫之岛',
    subtitle: '蓝顶白墙 · 爱琴海上的日落诗篇',
    bg: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&q=80',
    duration: '7天6夜',
    priceOld: '¥18,800',
    priceCurrent: '¥13,200',
    highlights: [
      { icon: 'fa-sun', title: '最美日落', desc: '伊亚悬崖，世界排名前三的绝美落日' },
      { icon: 'fa-ship', title: '游艇巡游', desc: '私人游艇环岛，火山温泉与蓝洞探秘' },
      { icon: 'fa-utensils', title: '地中海美食', desc: '崖边米其林餐厅，美食与美景的完美搭配' },
      { icon: 'fa-wine-glass-alt', title: '火山酒庄', desc: '圣岛特色葡萄酒品鉴，火山灰孕育的佳酿' },
      { icon: 'fa-camera', title: '专属摄影', desc: '专业摄影师全天跟拍，留下最美瞬间' },
      { icon: 'fa-hotel', title: '崖边酒店', desc: '无边泳池崖边精品酒店，推窗即爱琴海' }
    ]
  },
  paris: {
    name: '法国 · 巴黎',
    tag: '艺术之都',
    subtitle: '浪漫之都 · 艺术与时尚的永恒圣地',
    bg: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&q=80',
    duration: '8天7夜',
    priceOld: '¥22,800',
    priceCurrent: '¥15,800',
    highlights: [
      { icon: 'fa-landmark', title: '艺术殿堂', desc: '卢浮宫VIP导览，蒙娜丽莎前的私享时光' },
      { icon: 'fa-wine-glass-alt', title: '法式美食', desc: '米其林三星法餐，波尔多酒庄品鉴' },
      { icon: 'fa-store', title: '时尚购物', desc: '香榭丽舍大道，老佛爷百货奢华体验' },
      { icon: 'fa-music', title: '文化盛宴', desc: '巴黎歌剧院观演，红磨坊经典秀场' },
      { icon: 'fa-palette', title: '莫奈花园', desc: '吉维尼小镇探访，印象派诞生地朝圣' },
      { icon: 'fa-hotel', title: '宫殿酒店', desc: '历史宫殿酒店入住，感受法式生活艺术' }
    ]
  },
  bali: {
    name: '巴厘岛 · 印尼',
    tag: '热带天堂',
    subtitle: '神明之岛 · 热带丛林与碧海的完美融合',
    bg: 'https://images.unsplash.com/photo-1537956965359-7573183d1f57?w=1920&q=80',
    duration: '7天6夜',
    priceOld: '¥10,200',
    priceCurrent: '¥7,200',
    highlights: [
      { icon: 'fa-pray', title: '神庙朝圣', desc: '海神庙、圣泉寺，感受巴厘岛精神世界' },
      { icon: 'fa-seedling', title: '丛林梯田', desc: '德格拉朗梯田漫步，乌布森林探险' },
      { icon: 'fa-utensils', title: '脏鸭美食', desc: '巴厘特色脏鸭餐、火山景观下午茶' },
      { icon: 'fa-spa', title: '巴厘SPA', desc: '全球最佳 SPA 目的地，花瓣浴与精油按摩' },
      { icon: 'fa-water', title: '海滩冲浪', desc: '库塔海滩冲浪课程，蓝梦岛浮潜探秘' },
      { icon: 'fa-paint-brush', title: '文化体验', desc: '银器制作、蜡染工坊，深度手工艺体验' }
    ]
  },
  newyork: {
    name: '美国 · 纽约',
    tag: '繁华都市',
    subtitle: '不夜之城 · 全球文化与商业的中心舞台',
    bg: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?w=1920&q=80',
    duration: '10天9夜',
    priceOld: '¥28,500',
    priceCurrent: '¥19,800',
    highlights: [
      { icon: 'fa-city', title: '天际线巡礼', desc: '帝国大厦、Top of the Rock，全景俯瞰曼哈顿' },
      { icon: 'fa-theater-masks', title: '百老汇', desc: '经典音乐剧 VIP 座位，沉浸式观演体验' },
      { icon: 'fa-utensils', title: '全球美食', desc: '从米其林到街头小食，纽约味道全攻略' },
      { icon: 'fa-store', title: '第五大道', desc: '全球顶级购物街，奢华品牌一网打尽' },
      { icon: 'fa-landmark', title: '自由女神', desc: '自由岛VIP登顶，感受自由与梦想的力量' },
      { icon: 'fa-palette', title: '艺术殿堂', desc: 'MoMA、大都会博物馆，世界级艺术盛宴' }
    ]
  },
  chiangmai: {
    name: '泰国 · 清迈',
    tag: '人文秘境',
    subtitle: '万象之城 · 寺庙与丛林的禅意之旅',
    bg: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80',
    duration: '6天5夜',
    priceOld: '¥8,200',
    priceCurrent: '¥5,800',
    highlights: [
      { icon: 'fa-pray', title: '古城寺庙', desc: '双龙寺、契迪龙寺，兰纳王朝的辉煌印记' },
      { icon: 'fa-leaf', title: '丛林飞跃', desc: '热带雨林高空滑索，肾上腺素飙升的冒险' },
      { icon: 'fa-utensils', title: '夜市美食', desc: '周日夜市、凤飞飞猪脚饭，地道泰北风味' },
      { icon: 'fa-spa', title: '泰式按摩', desc: '古法泰式按摩与草药球热敷，身心焕然一新' },
      { icon: 'fa-paint-brush', title: '手工艺坊', desc: '博桑伞村、木雕村，亲手制作泰式工艺品' },
      { icon: 'fa-elephant', title: '大象保护', desc: '大象自然公园，与温和巨兽的亲密接触' }
    ]
  }
};

/* ---- 获取 URL 参数并填充数据 ---- */
(function initDetailData() {
  var params = new URLSearchParams(window.location.search);
  var dest = params.get('dest') || 'maldives';
  var data = destData[dest] || destData.maldives;

  // Hero
  var heroBg = document.getElementById('detailHeroBg');
  if (heroBg) heroBg.style.backgroundImage = 'url(' + data.bg + ')';

  var breadcrumbName = document.getElementById('breadcrumbName');
  if (breadcrumbName) breadcrumbName.textContent = data.name;

  var heroTag = document.getElementById('detailHeroTag');
  if (heroTag) heroTag.textContent = data.tag;

  var heroTitle = document.getElementById('detailHeroTitle');
  if (heroTitle) heroTitle.textContent = data.name;

  var heroSubtitle = document.getElementById('detailHeroSubtitle');
  if (heroSubtitle) heroSubtitle.textContent = data.subtitle;

  var duration = document.getElementById('detailDuration');
  if (duration) duration.textContent = data.duration;

  var priceOld = document.getElementById('detailPriceOld');
  if (priceOld) priceOld.textContent = data.priceOld;

  var priceCurrent = document.getElementById('detailPriceCurrent');
  if (priceCurrent) priceCurrent.textContent = data.priceCurrent;

  // Page title
  document.title = data.name + ' | WanderLux 精品旅行';

  // Highlights
  var highlightsGrid = document.getElementById('highlightsGrid');
  if (highlightsGrid && data.highlights) {
    highlightsGrid.innerHTML = data.highlights.map(function (h) {
      return '<div class="highlight-item">' +
        '<div class="highlight-icon"><i class="fas ' + h.icon + '"></i></div>' +
        '<h4>' + h.title + '</h4>' +
        '<p>' + h.desc + '</p>' +
        '</div>';
    }).join('');
  }

  // Booking price card
  var bpcOld = document.querySelector('.bpc-old');
  var bpcCurrent = document.querySelector('.bpc-current');
  if (bpcOld) bpcOld.textContent = data.priceOld;
  if (bpcCurrent) bpcCurrent.textContent = data.priceCurrent;

  // Calculate savings
  var oldNum = parseInt(data.priceOld.replace(/[¥,]/g, ''), 10);
  var curNum = parseInt(data.priceCurrent.replace(/[¥,]/g, ''), 10);
  var saveNum = oldNum - curNum;
  var bpcSave = document.querySelector('.bpc-save');
  if (bpcSave) bpcSave.textContent = '立省 ¥' + saveNum.toLocaleString();
})();

/* ---- 详情页 Hero 视差 ---- */
(function initDetailParallax() {
  var heroBg = document.getElementById('detailHeroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', function () {
    var scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = 'translateY(' + (scrolled * 0.35) + 'px)';
    }
  }, { passive: true });
})();

/* ---- 滚动入场动画 ---- */
(function initDetailReveal() {
  var revealEls = document.querySelectorAll('.detail-page .reveal');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(function (el) { observer.observe(el); });
})();

/* ---- 图片灯箱 ---- */
(function initLightbox() {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxCaption = document.getElementById('lightboxCaption');
  var lightboxCounter = document.getElementById('lightboxCounter');
  var closeBtn = document.getElementById('lightboxClose');
  var prevBtn = document.getElementById('lightboxPrev');
  var nextBtn = document.getElementById('lightboxNext');
  var galleryItems = document.querySelectorAll('.dgal-item');
  var currentIndex = 0;

  if (!lightbox || !galleryItems.length) return;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    var item = galleryItems[currentIndex];
    var img = item.querySelector('img');
    var caption = item.dataset.caption || '';
    lightboxImg.src = img.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200');
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption;
    lightboxCounter.textContent = (currentIndex + 1) + ' / ' + galleryItems.length;
  }

  galleryItems.forEach(function (item, i) {
    item.addEventListener('click', function () { openLightbox(i); });
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightbox();
  });

  nextBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') { currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); }
    if (e.key === 'ArrowRight') { currentIndex = (currentIndex + 1) % galleryItems.length; updateLightbox(); }
  });
})();

/* ---- 倒计时 ---- */
(function initCountdown() {
  var cdDays = document.getElementById('cdDays');
  var cdHours = document.getElementById('cdHours');
  var cdMins = document.getElementById('cdMins');
  var cdSecs = document.getElementById('cdSecs');
  if (!cdDays) return;

  // 设置3天后过期
  var endTime = Date.now() + 3 * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000 + 45 * 60 * 1000;

  function update() {
    var diff = Math.max(0, endTime - Date.now());
    var d = Math.floor(diff / (24 * 60 * 60 * 1000));
    var h = Math.floor((diff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    var m = Math.floor((diff % (60 * 60 * 1000)) / (60 * 1000));
    var s = Math.floor((diff % (60 * 1000)) / 1000);
    cdDays.textContent = d < 10 ? '0' + d : d;
    cdHours.textContent = h < 10 ? '0' + h : h;
    cdMins.textContent = m < 10 ? '0' + m : m;
    cdSecs.textContent = s < 10 ? '0' + s : s;
  }

  update();
  setInterval(update, 1000);
})();

/* ---- 预订表单 ---- */
(function initBookingForm() {
  var form = document.getElementById('bookingForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (typeof showToast === 'function') {
      showToast('预订已提交！旅行顾问将于2小时内联系您 ✈');
    } else {
      alert('预订已提交！旅行顾问将于2小时内联系您');
    }
    form.reset();
  });
})();

/* ---- 回顶部 ---- */
(function initDetailBackTop() {
  var btn = document.getElementById('backTop');
  if (!btn) return;
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

/* ---- 行程时间线动画 ---- */
(function initItineraryAnimation() {
  var items = document.querySelectorAll('.iti-item');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(function (item) {
    item.style.opacity = '0';
    item.style.transform = 'translateX(30px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
})();

/* ---- 导航栏移动端 ---- */
(function initDetailNav() {
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });
})();
