/* ================================================================
   INVITATION CONFIGURATION — edit these values when needed.
   Add a Formspree endpoint to receive and save messages directly.
   ================================================================ */
const invitation = {
  couple: { ar: "حبيبة وعمار", en: "Habiba & Ammar" },
  eventType: { ar: "حفل زفاف حبيبة وعمار", en: "Habiba & Ammar’s Wedding Celebration" },
  engagementDate: "2025-10-11",
  eventDate: "2026-11-26T20:00:00+03:00",
  eventEnd: "2026-11-26T23:30:00+03:00",
  timezone: "Africa/Cairo",
  venue: { ar: "قاعة مرجانه بلازا", en: "Morgana Plaza" },
  address: {
    ar: "قاعة مرجانه بلازا - \u2066Morgana Plaza\u2069، مدينة شبين القناطر، شبين القناطر، محافظة القليوبية 6337142",
    en: "Morgana Plaza, Shebin El-Qanater City, Shebin El-Qanater, Qalyubia Governorate 6337142"
  },
  mapsUrl: "https://share.google/yAZd0FHOG4V9gLyc7",
  rsvpEndpoint: "https://formspree.io/f/xdaqabqg",
  websiteUrl: "https://youssef-ehab-nafaa.github.io/Ammar-Habiba/",
  defaultLanguage: "ar",
  musicFile: "assets/audio/our-song.mp3"
};

const favicon = document.querySelector('link[rel="icon"]');
if (favicon && document.body.classList.contains('theme-black-gold')) {
  favicon.href = 'assets/images/amr-mona-logo-black-gold.svg';
}

const translations = {
  ar: {
    skip: "تخطَّ إلى المحتوى", loading: "لحظات ونحتفل معاً", gateKicker: "دعوة خاصة إليكم", gateText: "اضغطوا لفتح الدعوة ومشاركتنا فرحتنا", openInvitation: "افتح الدعوة", openMenu: "فتح القائمة", closeMenu: "إغلاق القائمة",
    mainNav: "التنقل الرئيسي", languageChoice: "اختيار اللغة", playMusic: "تشغيل الموسيقى", pauseMusic: "إيقاف الموسيقى", musicUnavailable: "تعذر تشغيل الموسيقى. يمكنكم متابعة الدعوة بدونها.",
    navHome: "الرئيسية", navEvent: "الموعد", navGallery: "الصور", navRsvp: "رسالة للعروسين",
    heroEyebrow: "بكل الحب والسعادة", couple: "حبيبة وعمار", couplePhotoAlt: "حبيبة وعمار", heroInvite: "يتشرفان بدعوتكم لمشاركتهما فرحة زفافهما",
    heroDate: "الخميس، 26 نوفمبر 2026", heroTime: "الساعة 8:00 مساءً", heroLocation: "قاعة مرجانه بلازا، مدينة شبين القناطر، محافظة القليوبية", heroButton: "شاركونا فرحتنا", scrollDown: "انتقل إلى المحتوى التالي",
    countdownKicker: "موعدنا يقترب", countdownTitle: "باقي على فرحتنا", days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية",
    countdownAccessible: "عد تنازلي إلى حفل زفاف حبيبة وعمار", countdownFinished: "اليوم يوم فرحتنا! ننتظركم للاحتفال معنا.",
    eventKicker: "تفاصيل الليلة", dateLabel: "التاريخ", dateValue: "الخميس، 26 نوفمبر 2026",
    timeLabel: "الوقت", timeValue: "الساعة 8:00 مساءً", venueLabel: "المكان", venueValue: "قاعة مرجانه بلازا",
    addressLabel: "العنوان", addressValue: "قاعة مرجانه بلازا - \u2066Morgana Plaza\u2069\nمدينة شبين القناطر، شبين القناطر\nمحافظة القليوبية 6337142",
    viewMap: "عرض الموقع على الخريطة", addCalendar: "إضافة إلى التقويم",
    galleryKicker: "من أجمل اللحظات", galleryTitle: "لحظات نحتفظ بها", galleryText: "تفاصيل صغيرة تروي فرحة اليوم.",
    rsvpKicker: "كلمات من القلب", rsvpTitle: "شاركونا كلماتكم الجميلة", rsvpText: "اتركوا لنا رسالة جميلة نحتفظ بها من هذا اليوم المميز.",
    guestName: "الاسم", guestNamePlaceholder: "اكتب اسمك", guestMessage: "رسالة للعروسين", guestMessagePlaceholder: "كلماتكم تسعدنا",
    directFormHelp: "تصل رسالتكم إلى العروسين وتظهر هنا.", sendResponse: "إرسال الرسالة",
    nameRequired: "من فضلك اكتب اسمك.", messageRequired: "من فضلك اكتب رسالتك.", sending: "جارٍ الإرسال...", sent: "وصلت رسالتكم، شكراً من القلب!", messageSaved: "تم حفظ رسالتكم وظهرت في الدعوة.", sendFailed: "تعذر إرسال الرسالة. حاول مرة أخرى.", formNotConnected: "النموذج جاهز، ويلزم إضافة رابط الاستقبال قبل النشر.",
    messagesTitle: "رسائل الضيوف", messagesEmpty: "لم تصل رسائل بعد.",
    closingKicker: "من القلب", closingTitle: "وجودكم يكمل فرحتنا", closingDate: "الخميس، 26 نوفمبر 2026، الساعة 8:00 مساءً",
    viewLocation: "عرض الموقع", confirmAttendance: "إرسال رسالة", shareInvitation: "مشاركة الدعوة", copyLink: "نسخ رابط الدعوة",
    footerText: "صُنعت بكل الحب لفرحة حبيبة وعمار", backToTop: "العودة إلى الأعلى", copied: "تم نسخ رابط الدعوة", shareFailed: "تعذرت المشاركة؛ تم نسخ الرابط بدلاً منها",
    calendarDownloaded: "تم تنزيل موعد المناسبة"
  },
  en: {
    skip: "Skip to content", loading: "A moment before we celebrate", gateKicker: "A special invitation for you", gateText: "Open the invitation and celebrate this beautiful moment with us", openInvitation: "Open Invitation", openMenu: "Open menu", closeMenu: "Close menu",
    mainNav: "Main navigation", languageChoice: "Choose language", playMusic: "Play music", pauseMusic: "Pause music", musicUnavailable: "The music could not be played. You can continue viewing the invitation.",
    navHome: "Home", navEvent: "Event", navGallery: "Photos", navRsvp: "Message",
    heroEyebrow: "Together with their families", couple: "Habiba & Ammar", couplePhotoAlt: "Habiba and Ammar", heroInvite: "Joyfully invite you to celebrate their wedding",
    heroDate: "Thursday, 26 November 2026", heroTime: "8:00 PM", heroLocation: "Morgana Plaza, Shebin El-Qanater, Qalyubia", heroButton: "Celebrate With Us", scrollDown: "Continue to the next section",
    countdownKicker: "Our date is drawing near", countdownTitle: "Until We Celebrate", days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
    countdownAccessible: "Countdown to Habiba and Ammar’s wedding celebration", countdownFinished: "Today is the day! We can’t wait to celebrate with you.",
    eventKicker: "Evening details", dateLabel: "Date", dateValue: "Thursday, 26 November 2026",
    timeLabel: "Time", timeValue: "8:00 PM", venueLabel: "Venue", venueValue: "Morgana Plaza",
    addressLabel: "Address", addressValue: "Morgana Plaza\nShebin El-Qanater City, Shebin El-Qanater\nQalyubia Governorate 6337142",
    viewMap: "View on Google Maps", addCalendar: "Add to Calendar",
    galleryKicker: "Beautiful moments", galleryTitle: "Memories We Keep", galleryText: "Small details that carry the joy of the day.",
    rsvpKicker: "Words from the heart", rsvpTitle: "Leave Us a Beautiful Message", rsvpText: "Share a few words that we can keep as a memory of this special day.",
    guestName: "Your name", guestNamePlaceholder: "Enter your name", guestMessage: "Message for the couple", guestMessagePlaceholder: "Your words will make us smile",
    directFormHelp: "Your message reaches the couple and appears here.", sendResponse: "Send Message",
    nameRequired: "Please enter your name.", messageRequired: "Please write a message.", sending: "Sending...", sent: "Your message arrived—thank you from our hearts!", messageSaved: "Your message was saved and is now on the invitation.", sendFailed: "The message could not be sent. Please try again.", formNotConnected: "The form is ready; add the receiving endpoint before publishing.",
    messagesTitle: "Guest messages", messagesEmpty: "No messages yet.",
    closingKicker: "From the heart", closingTitle: "Our Celebration Would Not Be Complete Without You", closingDate: "Thursday, 26 November 2026 at 8:00 PM",
    viewLocation: "View Location", confirmAttendance: "Send a Message", shareInvitation: "Share Invitation", copyLink: "Copy Invitation Link",
    footerText: "Made with love for Habiba and Ammar", backToTop: "Back to top", copied: "Invitation link copied", shareFailed: "Sharing was unavailable, so the link was copied instead",
    calendarDownloaded: "Calendar event downloaded"
  }
};

let currentLanguage = localStorage.getItem("invitationLanguage") || invitation.defaultLanguage;
if (!translations[currentLanguage]) currentLanguage = invitation.defaultLanguage;

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
const t = (key) => translations[currentLanguage][key] || key;

function applyLanguage(language) {
  currentLanguage = translations[language] ? language : invitation.defaultLanguage;
  localStorage.setItem("invitationLanguage", currentLanguage);
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  $$('[data-i18n]').forEach((element) => {
    const value = translations[currentLanguage][element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  $$('[data-i18n-placeholder]').forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  $$('[data-i18n-aria]').forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });
  $$('[data-i18n-alt]').forEach((element) => {
    element.alt = t(element.dataset.i18nAlt);
  });
  $$('[data-lang]').forEach((button) => button.classList.toggle("active", button.dataset.lang === currentLanguage));

  document.title = currentLanguage === "ar" ? "زفاف حبيبة وعمار | 26 نوفمبر 2026" : "Habiba & Ammar’s Wedding | 26 November 2026";
  const description = currentLanguage === "ar"
    ? "يسعد حبيبة وعمار بدعوتكم لمشاركتهما فرحة زفافهما يوم الخميس 26 نوفمبر 2026 في قاعة مرجانه بلازا بمدينة شبين القناطر، محافظة القليوبية."
    : "Habiba and Ammar invite you to celebrate their wedding on Thursday, 26 November 2026 at Morgana Plaza in Shebin El-Qanater, Qalyubia.";
  $('meta[name="description"]').content = description;
  $('meta[property="og:title"]').content = document.title;
  $('meta[property="og:description"]').content = description;
  $('meta[name="twitter:title"]').content = document.title;
  $('meta[name="twitter:description"]').content = description;

  const musicButton = $('#musicButton');
  if (musicButton && !musicButton.hidden) musicButton.setAttribute("aria-label", t($('#backgroundMusic').paused ? "playMusic" : "pauseMusic"));
  updateCountdown();
}

$$('[data-lang]').forEach((button) => button.addEventListener("click", () => applyLanguage(button.dataset.lang)));

const loader = $('#loader');
const hideLoader = () => loader.classList.add('hidden');
window.addEventListener('load', () => window.setTimeout(hideLoader, 350));
window.setTimeout(hideLoader, 2500);

const header = $('#siteHeader');
const progress = $('#scrollProgress');
const backToTop = $('#backToTop');
function updateScrollUI() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle('scrolled', y > 24);
  backToTop.classList.toggle('visible', y > 600);
  progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
}
window.addEventListener('scroll', updateScrollUI, { passive: true });
updateScrollUI();
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

const menuToggle = $('#menuToggle');
const navigation = $('#navigation');
function setMenu(open) {
  navigation.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', t(open ? 'closeMenu' : 'openMenu'));
}
menuToggle.addEventListener('click', () => setMenu(!navigation.classList.contains('open')));
$$('a', navigation).forEach((link) => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries, observer) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 })
  : null;
$$('.reveal').forEach((element) => revealObserver ? revealObserver.observe(element) : element.classList.add('visible'));

const sectionObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $$('nav a').forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      }
    }), { rootMargin: '-40% 0px -50%', threshold: 0 })
  : null;
$$('main section[id]').forEach((section) => sectionObserver?.observe(section));

const eventTime = new Date(invitation.eventDate).getTime();
let countdownInterval;
function updateCountdown() {
  const difference = Math.max(0, eventTime - Date.now());
  const values = {
    days: Math.floor(difference / 86400000),
    hours: Math.floor((difference / 3600000) % 24),
    minutes: Math.floor((difference / 60000) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
  Object.entries(values).forEach(([id, value]) => { $(`#${id}`).textContent = String(value).padStart(2, '0'); });
  if (difference === 0) {
    clearInterval(countdownInterval);
    $('#countdown').hidden = true;
    const finished = $('#countdownFinished');
    finished.hidden = false;
    finished.textContent = t('countdownFinished');
    if (!localStorage.getItem('weddingCelebrationShown')) {
      localStorage.setItem('weddingCelebrationShown', 'true');
      createCelebration();
    }
  }
}
function createCelebration() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  for (let i = 0; i < 36; i += 1) {
    const petal = document.createElement('i');
    petal.style.cssText = `position:fixed;z-index:2300;top:-20px;left:${Math.random() * 100}vw;width:8px;height:12px;border-radius:60% 0 60% 0;background:${i % 2 ? '#c6a36a' : '#e6d5bf'};animation:petalFall ${4 + Math.random() * 3}s linear ${Math.random()}s forwards;pointer-events:none`;
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 8500);
  }
}
const petalStyle = document.createElement('style');
petalStyle.textContent = '@keyframes petalFall{to{transform:translate3d(40px,110vh,0) rotate(720deg);opacity:.15}}';
document.head.appendChild(petalStyle);
updateCountdown();
countdownInterval = window.setInterval(updateCountdown, 1000);

function icsDate(dateString) {
  return new Date(dateString).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}
function escapeIcs(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}
$('#calendarButton').addEventListener('click', () => {
  const title = invitation.eventType[currentLanguage];
  const description = currentLanguage === 'ar'
    ? `يسعد حبيبة وعمار بدعوتكم لمشاركتهما فرحة زفافهما. ${invitation.mapsUrl}`
    : `Habiba and Ammar invite you to celebrate their wedding. ${invitation.mapsUrl}`;
  const location = `${invitation.venue[currentLanguage]} — ${invitation.address[currentLanguage]}`;
  const ics = [
    'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Habiba and Ammar//Wedding Invitation//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH',
    'BEGIN:VEVENT', 'UID:habiba-ammar-wedding-20261126@invitation', `DTSTAMP:${icsDate(new Date().toISOString())}`,
    `DTSTART:${icsDate(invitation.eventDate)}`, `DTEND:${icsDate(invitation.eventEnd)}`, `SUMMARY:${escapeIcs(title)}`,
    `DESCRIPTION:${escapeIcs(description)}`, `LOCATION:${escapeIcs(location)}`, 'STATUS:CONFIRMED', 'END:VEVENT', 'END:VCALENDAR'
  ].join('\r\n');
  const url = URL.createObjectURL(new Blob([ics], { type: 'text/calendar;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url; link.download = 'habiba-ammar-wedding.ics'; link.click();
  URL.revokeObjectURL(url);
  showToast(t('calendarDownloaded'));
});

const GUEST_MESSAGE_KEY = "guestMessages";
function readLocalMessages() {
  try {
    const parsed = JSON.parse(localStorage.getItem(GUEST_MESSAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}
function messageKey(item) {
  return `${item.createdAt}|${item.name}|${item.message}`;
}
async function loadSharedMessages() {
  try {
    const response = await fetch("messages.json", { cache: "no-store" });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}
function mergeMessages(shared, local) {
  const map = new Map();
  [...shared, ...local].forEach((item) => {
    if (!item || !String(item.name || "").trim() || !String(item.message || "").trim()) return;
    map.set(messageKey(item), item);
  });
  return [...map.values()].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
}
function renderGuestMessages(items) {
  const list = $("#guestMessages");
  const empty = $("#guestMessagesEmpty");
  if (!list) return;
  list.replaceChildren();
  if (empty) empty.hidden = items.length > 0;
  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "guest-note";
    const name = document.createElement("h3");
    name.textContent = item.name;
    const text = document.createElement("p");
    text.textContent = item.message;
    article.append(name, text);
    list.append(article);
  });
}
async function refreshGuestMessages() {
  renderGuestMessages(mergeMessages(await loadSharedMessages(), readLocalMessages()));
}
async function saveGuestMessage(entry) {
  const local = readLocalMessages();
  local.push(entry);
  localStorage.setItem(GUEST_MESSAGE_KEY, JSON.stringify(local));
  try {
    const response = await fetch("api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(entry)
    });
    if (!response.ok) return false;
    const saved = await response.json();
    if (Array.isArray(saved)) {
      localStorage.setItem(GUEST_MESSAGE_KEY, JSON.stringify(saved));
      renderGuestMessages([...saved].sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt))));
    }
    return true;
  } catch {
    return false;
  }
}

const form = $('#rsvpForm');
function clearErrors() { $$('.error', form).forEach((error) => { error.textContent = ''; }); }
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  clearErrors();
  const name = $('#guestName').value.trim();
  const message = $('#guestMessage').value.trim();
  let valid = true;
  if (!name) { $('#guestNameError').textContent = t('nameRequired'); valid = false; }
  if (!message) { $('#guestMessageError').textContent = t('messageRequired'); valid = false; }
  if (!valid) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const originalLabel = submitButton.textContent;
  submitButton.disabled = true;
  submitButton.textContent = t('sending');
  const entry = { name, message, createdAt: new Date().toISOString() };

  try {
    const savedToFile = await saveGuestMessage(entry);
    if (!savedToFile) await refreshGuestMessages();
    form.reset();

    let delivered = false;
    if (invitation.rsvpEndpoint) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('message', message);
      formData.append('event', invitation.eventType[currentLanguage]);
      formData.append('language', currentLanguage);
      try {
        const response = await fetch(invitation.rsvpEndpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        delivered = response.ok;
      } catch {
        delivered = false;
      }
    }
    showToast(delivered ? t('sent') : t('messageSaved'));
  } catch {
    showToast(t('sendFailed'));
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalLabel;
  }
});
refreshGuestMessages();

const toast = $('#toast');
let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add('visible');
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2800);
}
function invitationUrl() {
  return invitation.websiteUrl || (location.protocol.startsWith('http') ? location.href.split('#')[0] : '');
}
async function copyInvitationUrl(message = t('copied')) {
  const url = invitationUrl();
  if (!url) { showToast(currentLanguage === 'ar' ? 'أضف رابط الموقع في script.js بعد النشر' : 'Add the published website URL in script.js'); return; }
  try {
    await navigator.clipboard.writeText(url);
  } catch {
    const input = document.createElement('textarea');
    input.value = url; input.style.position = 'fixed'; input.style.opacity = '0'; document.body.appendChild(input); input.select();
    document.execCommand('copy'); input.remove();
  }
  showToast(message);
}
$('#copyButton').addEventListener('click', () => copyInvitationUrl());
$('#shareButton').addEventListener('click', async () => {
  const url = invitationUrl();
  if (!url) { copyInvitationUrl(); return; }
  const data = { title: invitation.eventType[currentLanguage], text: currentLanguage === 'ar' ? 'شاركونا فرحة زفافنا' : 'Celebrate our wedding with us', url };
  if (navigator.share) {
    try { await navigator.share(data); } catch (error) { if (error.name !== 'AbortError') await copyInvitationUrl(t('shareFailed')); }
  } else await copyInvitationUrl();
});

const audio = $('#backgroundMusic');
const musicButton = $('#musicButton');
const invitationGate = $('#invitationGate');
const openInvitationButton = $('#openInvitationButton');

async function playConfiguredMusic(showError = true) {
  if (!invitation.musicFile) return false;
  try {
    await audio.play();
    localStorage.setItem('musicPreference', 'play');
    musicButton.setAttribute('aria-label', t('pauseMusic'));
    return true;
  } catch {
    if (showError) showToast(t('musicUnavailable'));
    return false;
  }
}

if (invitation.musicFile) {
  audio.src = invitation.musicFile;
  audio.volume = 0.65;
  musicButton.hidden = false;
  musicButton.addEventListener('click', async () => {
    if (audio.paused) await playConfiguredMusic();
    else { audio.pause(); localStorage.setItem('musicPreference', 'pause'); }
    musicButton.setAttribute('aria-label', t(audio.paused ? 'playMusic' : 'pauseMusic'));
  });
  audio.addEventListener('error', () => { musicButton.hidden = true; }, { once: true });
}

applyLanguage(currentLanguage);

invitationGate.hidden = false;
invitationGate.setAttribute('aria-hidden', 'false');
document.body.classList.add('gate-locked');

openInvitationButton.addEventListener('click', () => {
  openInvitationButton.disabled = true;
  openInvitationButton.classList.add('is-opening');
  void playConfiguredMusic();
  window.setTimeout(() => {
    invitationGate.classList.add('opening');
    invitationGate.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('gate-locked');
    window.setTimeout(() => {
      invitationGate.hidden = true;
      $('#home').focus?.();
    }, 720);
  }, 800);
});

window.addEventListener('load', () => window.setTimeout(() => openInvitationButton.focus(), 700));
