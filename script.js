// === Прелоадер ===
(function initPreloader() {
  const preloader = document.getElementById("preloader");
  const numberEl = document.getElementById("preloaderNumber");
  if (!preloader || !numberEl) return;

  let progress = 0;
  const duration = 1400;
  const start = performance.now();

  function tick(now) {
    const elapsed = now - start;
    progress = Math.min(100, Math.round((elapsed / duration) * 100));
    numberEl.textContent = progress;

    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => preloader.classList.add("done"), 250);
    }
  }
  requestAnimationFrame(tick);
})();

const days = [
  {
    date: "21.08.2026",
    title: "День 1: Прилет и заселение в Банг Тао",
    cat: "food",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=90",
    text: "Прилет в 18:00, трансфер на север острова в Банг Тао, заселение и легкий ужин.",
    events: [
      {
        time: "18:00",
        text: "Прилет на Пхукет",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:15",
        text: "Паспортный контроль, багаж, обмен денег и SIM-карты",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "20:00",
        text: "Трансфер в Банг Тао (~40-45 минут от аэропорта)",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "21:00",
        text: "Заселение на виллу, депозит, счетчики",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "22:00",
        text: "Легкий ужин возле виллы и отдых у бассейна",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "22.08.2026",
    title: "День 2: Знакомство с районом и Blue Tree",
    cat: "beach adventure food",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=90",
    text: "Закуп продуктов, аквапарк Blue Tree Phuket рядом с виллой и закат на пляже Банг Тао.",
    events: [
      {
        time: "09:00",
        text: "Завтрак на вилле",
        img: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:30",
        text: "Villa Market или Boat Avenue: закуп воды, льда, завтраков и BBQ-продуктов",
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:00",
        text: "Blue Tree Phuket: вейкборд, слайды, флоатинг-бары, лагуна",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "15:00",
        text: "Обед на территории Blue Tree",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:30",
        text: "Пляж Банг Тао: закат, купание (смотрим на флаги — не сезон, море бывает неспокойным)",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:30",
        text: "Ужин в Cherngtalay",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "23.08.2026",
    title: "День 3: Big Buddha и Old Town",
    cat: "adventure food",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=90",
    text: "Выезд на юг острова: Big Buddha, Wat Chalong, Old Phuket Town и ужин в Raya.",
    events: [
      {
        time: "09:00",
        text: "Завтрак на вилле и выезд на юг острова (утром обычно сухо)",
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "11:00",
        text: "Big Buddha и панорама острова",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00",
        text: "Обед с видом на джунгли",
        img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:30",
        text: "Wat Chalong",
        img: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "16:00",
        text: "Old Phuket Town: цветные улицы, граффити и фото",
        img: "https://images.unsplash.com/photo-1599639668273-b3503150d8b1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:00",
        text: "Ужин в Raya, возвращение в Банг Тао",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "24.08.2026",
    title: "День 4: James Bond Island и Phang Nga Bay",
    cat: "beach adventure",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",
    text: "Не сезон — открытое море к Пхи-Пхи может штормить, поэтому едем в защищённый залив Phang Nga: спокойная вода почти всегда.",
    events: [
      {
        time: "07:00",
        text: "Ранний подъем и проверка погоды/волн",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "08:00",
        text: "Трансфер на причал (тур с бесплатной отменой/переносом на случай непогоды)",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:00",
        text: "James Bond Island (Khao Phing Kan) и бухта Phang Nga",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:00",
        text: "Каякинг по мангровым пещерам (hongs)",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:30",
        text: "Обед на плавучей деревне Koh Panyi",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "16:00",
        text: "Снорклинг у островов бухты",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "20:00",
        text: "Возвращение в Банг Тао, доставка еды и кино на вилле",
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "25.08.2026",
    title: "День 5: Джунгли, ATV и слоны",
    cat: "adventure",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=90",
    text: "Квадроциклы, джунгли, Elephant Sanctuary и тайский массаж — отличный план даже если пойдет дождь.",
    events: [
      {
        time: "09:00",
        text: "Завтрак и одежда, которую не жалко испачкать",
        img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:45",
        text: "ATV-тур по грязевым трассам (в дождь даже веселее)",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00",
        text: "Обед в лагере в джунглях",
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:30",
        text: "Elephant Sanctuary (ethical, без катания на слонах)",
        img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:00",
        text: "Тайский массаж рядом с виллой в Банг Тао",
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "26.08.2026",
    title: "День 6: Отдых и Патонг вечером",
    cat: "beach party",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=90",
    text: "Спокойный день у бассейна виллы, вечером выезд в Патонг на тусовку.",
    events: [
      {
        time: "11:00",
        text: "Поздний завтрак и день у бассейна виллы",
        img: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:00",
        text: "Обед на вилле или рядом",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "20:00",
        text: "Пре-пати на вилле",
        img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "21:00",
        text: "Трансфер в Патонг (~35-40 минут от Банг Тао)",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "22:30",
        text: "Bangla Road, бары и коктейли",
        img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "01:00",
        text: "Illuzion или Sugar",
        img: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "27.08.2026",
    title: "День 7: Западное побережье и закат на Promthep",
    cat: "beach adventure",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=90",
    text: "Камала, смотровая Laem Singh, Сурин Бич и легендарный закат на мысе Promthep Cape.",
    events: [
      {
        time: "12:00",
        text: "Поздний подъем после Патонга",
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:30",
        text: "Легкий бранч на вилле",
        img: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:30",
        text: "Пляж Камала и смотровая Laem Singh Viewpoint",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "16:00",
        text: "Сурин Бич: белый песок и виллы у моря",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "18:00",
        text: "Promthep Cape: закат над океаном (самая южная точка острова)",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:30",
        text: "Ужин в Promthep Cape Restaurant",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "28.08.2026",
    title: "День 8: Beach Club в Банг Тао",
    cat: "beach party food",
    img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=90",
    text: "Xana Beach Club или Catch Beach Club Bangtao — daybeds, DJ и коктейли в 5-10 минутах от виллы.",
    events: [
      {
        time: "10:00",
        text: "Завтрак и стильный beach look",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:00",
        text: "Xana Beach Club или Catch Beach Club Bangtao",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:30",
        text: "Daybeds, коктейли и бассейн",
        img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00–18:00",
        text: "DJ, ланч, пляжный luxury chill",
        img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:30",
        text: "Ужин рядом с клубом в Банг Тао",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "29.08.2026",
    title: "День 9: Шопинг и рынки",
    cat: "food",
    img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=1600&q=90",
    text: "Central Phuket Floresta, Chillva или Naka Market, street food и сувениры домой.",
    events: [
      {
        time: "11:00",
        text: "Central Phuket Floresta (~15 минут от Банг Тао)",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "11:30",
        text: "Шопинг, косметика, сувениры и бренды",
        img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:00",
        text: "Обед на фудкорте",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:00",
        text: "Chillva Market или Naka Weekend Market",
        img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:30",
        text: "Street food: сатэ, роти, жареное мороженое",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "21:00",
        text: "Возвращение на виллу и первые чемоданы",
        img: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "30.08.2026",
    title: "День 10: Финал и вылет домой",
    cat: "food party",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1600&q=90",
    text: "Финальный завтрак, бассейн, сдача виллы, аэропорт и вылет в 19:25.",
    events: [
      {
        time: "09:00",
        text: "Финальный завтрак на вилле",
        img: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:00",
        text: "Последний бассейн, фото и сбор вещей",
        img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:00",
        text: "Последний обед возле виллы",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:00",
        text: "Сдача виллы, расчет за свет и воду, возврат депозита",
        img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "15:30",
        text: "Минивэн в аэропорт Пхукета",
        img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:00",
        text: "Регистрация, Duty Free, еда перед рейсом",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:25",
        text: "Вылет домой",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=90"
      }
    ]
  }
];

// Обновлённый адрес виллы
const villaLocation = "The Regent Villa Pasak, Phuket, Thailand";

// Ссылка на общий альбом Google Фото
const galleryLink = "https://photos.app.goo.gl/XHzDK3m8nmuULbam7";

const cards = document.getElementById("cards");

function googleMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleRouteFromVilla(destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(villaLocation)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

function openRouteFromMe(destination) {
  if (!navigator.geolocation) {
    window.open(googleRouteFromVilla(destination), "_blank");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    function(position) {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;

      const url = `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
      window.open(url, "_blank");
    },
    function() {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;
      window.open(url, "_blank");
    }
  );
}

function youtubeLink(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " Phuket travel guide")}`;
}

// === Кастомные line-иконки (вместо эмодзи) ===
const icons = {
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 12 12 3h6a3 3 0 0 1 3 3v6l-9 9-9-9Z"/><circle cx="16" cy="8" r="1.3" fill="currentColor" stroke="none"/></svg>',
  backpack: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M8 8V6a4 4 0 0 1 8 0v2"/><rect x="5" y="8" width="14" height="13" rx="3"/><path d="M9 12h6M9 16h6"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 16.9 6.4 20l1.4-6.2-4.8-4.3 6.4-.6L12 3Z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 8 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-8Z"/><path d="M10 6v2M10 16v2M10 11v2"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 8h3l2-2h6l2 2h3v11H4Z"/><circle cx="12" cy="13.5" r="3.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z"/></svg>',
  cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M12 8v8M8 12h8"/></svg>',
  flame: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21c4 0 6-2.5 6-6 0-3-2-4.5-2-4.5.5 2-1 3-1 3 .5-4-3-6-3-9-2 2-4 5-4 8.5 0 1-1 1.5-2 1-1 1.5-1 4 .5 5.5C7 21 9 21 12 21Z"/></svg>',
  hospital: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="7" width="16" height="14" rx="1.5"/><path d="M9 3h6v4H9z"/><path d="M12 11v6M9 14h6"/></svg>',
  flag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M5 21V4"/><path d="M5 5h13l-3 4 3 4H5"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="2.3"/><circle cx="18" cy="18" r="2.3"/><path d="M6 8.3C6 13 9 11 12 14s2 3.7 6 3.7"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 11 12 4l8 7"/><path d="M6 10v10h12V10"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M10 8.5v7l6-3.5-6-3.5Z" fill="currentColor" stroke="none"/></svg>'
};

function ic(name) {
  return `<span class="icn">${icons[name] || ""}</span>`;
}

function getYourGuideLink(query) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}`;
}

function viatorLink(query) {
  return `https://www.viator.com/searchResults/all?text=${encodeURIComponent(query)}`;
}

function getEventInfo(event) {
  const text = event.text.toLowerCase();

  const base = {
    location: event.text + " Phuket",
    price: "500–1500 бат",
    take: "Вода, наличные, телефон, powerbank",
    tip: "Уточнить время и дорогу заранее."
  };

  if (text.includes("blue tree")) return {
    location: "Blue Tree Phuket",
    price: "Вход обычно 500–900 бат, отдельные активности (вейкборд, слайды) — по прайсу",
    take: "Купальник, полотенце, вода, наличные/карта",
    tip: "Рейтинг 4.5 (162 отзыва), открыто ежедневно 6:00–00:00. Раньше был аквапарком, сейчас скорее lifestyle-комплекс: бассейн, кафе, спа, магазины — можно провести полдня, даже если не любите воду.",
    rating: "4.5 ★ · 162 отзыва",
    hours: "Ежедневно 6:00–00:00",
    bookingQuery: "Blue Tree Phuket water park ticket"
  };

  if (text.includes("james bond") || text.includes("phang nga") || text.includes("hong")) return {
    location: "James Bond Island Phang Nga Bay",
    price: "Тур часто 1800–3000 бат/чел",
    take: "SPF, вода, наличные, что-то от дождя (иногда моросит)",
    tip: "Рейтинг залива 4.7 (428 отзывов) — путешественники называют его \"тем самым Таиландом из буклетов\": известняковые скалы, пещеры-hong и изумрудная вода. В несезон это спокойнее, чем открытое море к Пхи-Пхи.",
    rating: "4.7 ★ · 428 отзывов",
    bookingQuery: "James Bond Island Phang Nga Bay tour Phuket"
  };

  if (text.includes("panyi")) return {
    location: "Ko Panyi (плавучая деревня) Phang Nga",
    price: "Обычно входит в тур по заливу Phang Nga",
    take: "Наличные на сувениры и обед, вода",
    tip: "Рейтинг 4.4 (36 отзывов). Целая деревня на сваях над водой — можно зайти в местную школу и посмотреть на жизнь общины, не только сделать фото.",
    rating: "4.4 ★ · 36 отзывов"
  };

  if (text.includes("xana")) return {
    location: "XANA Beach Club, Bang Tao",
    price: "Открыто, но по факту заказ еды/напитков от 300–500 бат/чел, ежедневно 10:00–21:00",
    take: "Купальные вещи, стильный beach look, карта/наличные",
    tip: "Рейтинг 4.3 (1131 отзыв). Отзывы хвалят закат над Андаманским морем и DJ-атмосферу — но многие пишут, что выбор еды скромный, если приходить именно ради еды, а не вайба у моря.",
    rating: "4.3 ★ · 1131 отзыв",
    hours: "Ежедневно 10:00–21:00"
  };

  if (text.includes("catch beach") || (text.includes("catch") && text.includes("bangtao"))) return {
    location: "Catch Beach Club, Bang Tao",
    price: "Есть минимальный чек/депозит на лежак, ежедневно 7:30–00:00",
    take: "Купальные вещи, стильный beach look, карта/наличные",
    tip: "Рейтинг 4.2 (2171 отзыв). В отзывах часто хвалят закатные виды, фаер-шоу вечером и живую сакс-музыку днём — но по выходным лучше бронировать лежак заранее.",
    rating: "4.2 ★ · 2171 отзыв",
    hours: "Ежедневно 7:30–00:00"
  };

  if (text.includes("камала") || text.includes("kamala")) return {
    location: "Kamala Beach Phuket",
    price: "Пляж бесплатно, шезлонги 100–200 бат",
    take: "SPF, вода, наличные",
    tip: "Рейтинг 4.4 (3879 отзывов). Просторнее и спокойнее Патонга, но есть предупреждения о сильных течениях — купаться между красными флагами, вечером в море после заката не заходить.",
    rating: "4.4 ★ · 3879 отзывов"
  };

  if (text.includes("laem singh")) return {
    location: "Laem Sing Viewpoint Phuket",
    price: "Бесплатно",
    take: "Телефон/камера, удобная обувь",
    tip: "Рейтинг 4.7 (1812 отзывов). Смотровая прямо у дороги над пляжем Laem Sing — по отзывам, закат здесь может быть перекрыт деревьями, так что для чистого заката лучше спуститься к самому пляжу.",
    rating: "4.7 ★ · 1812 отзывов"
  };

  if (text.includes("сурин") || text.includes("surin")) return {
    location: "Surin Beach Phuket",
    price: "Пляж бесплатно, рестораны у моря — от 300 бат",
    take: "SPF, вода, наличные",
    tip: "Рейтинг 4.5 (3117 отзывов). Многие пишут, что Сурин красивее и спокойнее, чем Банг Тао и Камала — белый песок, тень от деревьев, кофейный трак на пляже.",
    rating: "4.5 ★ · 3117 отзывов"
  };

  if (text.includes("bang tao")) return {
    location: "Bang Tao Beach Phuket",
    price: "Пляж бесплатно, шезлонг ~100 бат, массаж на пляже ~400 бат",
    take: "SPF, вода, наличные",
    tip: "Рейтинг 4.5 (2829 отзывов) — один из лучших пляжей острова для заката. В несезон волны сильнее у части пляжа — выбирайте участок ближе к северу, где спокойнее.",
    rating: "4.5 ★ · 2829 отзывов"
  };

  if (text.includes("big buddha")) return {
    location: "Phuket Big Buddha",
    price: "Вход бесплатный (донейшн приветствуется)",
    take: "Закрытые плечи/колени (дают накидки на входе), вода",
    tip: "Рейтинг 4.6 (39 023 отзыва!) — одна из самых культовых точек острова. 45-метровая мраморная статуя и панорама на весь Пхукет с холма Nakkerd. Лучше приезжать утром — меньше людей и жары.",
    rating: "4.6 ★ · 39 023 отзыва",
    hours: "Ежедневно 6:00–18:30"
  };

  if (text.includes("wat chalong") || text.includes("чалонг")) return {
    location: "Wat Chalong Phuket",
    price: "Вход бесплатный",
    take: "Закрытые плечи/колени, наличные на пожертвование",
    tip: "Рейтинг 4.6 (17 312 отзывов) — крупнейший и самый почитаемый храм острова. Стоит закладывать 1.5-2 часа: золотая пагода с сотнями статуй Будды впечатляет не меньше самого храма.",
    rating: "4.6 ★ · 17 312 отзывов",
    hours: "Ежедневно 8:00–17:00"
  };

  if (text.includes("elephant")) return {
    location: "Phuket Elephant Sanctuary",
    price: "От ~2500 бат/чел в зависимости от программы (полдня/весь день)",
    take: "Одежда, которую не жалко, полотенце, средство от комаров",
    tip: "Рейтинг 4.8 (3196 отзывов) — реально этичный санктуарий: без катания, кормление и прогулка на расстоянии, у каждого слона свой погонщик. Многие отмечают, что это один из лучших дней всей поездки.",
    rating: "4.8 ★ · 3196 отзывов",
    hours: "Ежедневно 9:00–17:00",
    bookingQuery: "Phuket Elephant Sanctuary ethical half day"
  };

  if (text.includes("atv")) return {
    location: "ATV Phuket",
    price: "Обычно 1200–2500 бат/чел",
    take: "Грязная одежда, закрытая обувь, вода",
    tip: "После тура лучше сразу ехать в душ — трассы грязевые и это часть удовольствия.",
    bookingQuery: "ATV quad bike jungle tour Phuket"
  };

  if (text.includes("bangla") || text.includes("illuzion") || text.includes("sugar")) return {
    location: "Bangla Road Patong Phuket",
    price: "Коктейли 200–500 бат, клуб зависит от входа/депозита",
    take: "Наличные, телефон, договориться о точке встречи",
    tip: "Рейтинг 4.4 (1577 отзывов). Вечером улица закрывается для машин и превращается в сплошной поток баров и музыки — многие советуют пробовать уличную еду между барами, а не только пить.",
    rating: "4.4 ★ · 1577 отзывов"
  };

  if (text.includes("promthep") || text.includes("промтеп")) return {
    location: "Promthep Cape Phuket",
    price: "Бесплатно",
    take: "Телефон/камера, что-то тёплое — на мысе часто ветрено",
    tip: "Рейтинг 4.7 (18 703 отзыва) — легендарная точка заката острова, самая южная оконечность Пхукета. Рядом маяк-музей и небольшой храм на холме.",
    rating: "4.7 ★ · 18 703 отзыва"
  };

  if (text.includes("central")) return {
    location: "Central Phuket",
    price: "По желанию: еда, шопинг, сувениры",
    take: "Карта, наличные, список покупок",
    tip: "Рейтинг 4.6 (24 805 отзывов), ежедневно 10:00–22:00. Состоит из двух зон — Festival и Floresta, между ними легко потеряться на пару часов в жаркий день.",
    rating: "4.6 ★ · 24 805 отзывов",
    hours: "Ежедневно 10:00–22:00"
  };

  if (text.includes("chillva")) return {
    location: "Chillva Market Phuket",
    price: "Street food обычно 50–200 бат за позицию",
    take: "Наличные, пустой желудок",
    tip: "Рейтинг 4.4 (10 202 отзыва), открыто по будням/выходным 17:00–23:00, по воскресеньям закрыто. Атмосфера контейнерного ночного рынка с живой музыкой — хорошо идти большой компанией.",
    rating: "4.4 ★ · 10 202 отзыва",
    hours: "Пн–Сб 17:00–23:00, вс закрыто"
  };

  if (text.includes("naka")) return {
    location: "Naka Weekend Market Phuket",
    price: "Street food и шопинг, бюджетно",
    take: "Наличные, готовность торговаться",
    tip: "Рейтинг 4.4 (11 929 отзывов). Работает только по выходным (сб-вс 16:00–22:00) — по отзывам, отдельного внимания стоит фудкорт с местными десертами.",
    rating: "4.4 ★ · 11 929 отзывов",
    hours: "Сб–Вс 16:00–22:00"
  };

  if (text.includes("7-eleven") || text.includes("7/11")) return {
    location: "7-Eleven near The Regent Villa Pasak Phuket",
    price: "Вода 10–20 бат, тосты 35–60 бат",
    take: "Наличные или карта",
    tip: "Для быстрых покупок лучше искать ближайший 7-Eleven на карте."
  };

  return base;
}

// Проверяем, совпадает ли дата карточки с сегодняшним днём по времени Пхукета (UTC+7)
function isTripDayToday(dateStr) {
  const [day, month, year] = dateStr.split(".").map(Number);

  const now = new Date();
  const phuketNow = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Bangkok" }));

  return (
    phuketNow.getDate() === day &&
    phuketNow.getMonth() + 1 === month &&
    phuketNow.getFullYear() === year
  );
}

function renderCards(filter = "all") {
  if (!cards) return;
  cards.innerHTML = "";

  const list = filter === "all" ? days : days.filter(day => day.cat.includes(filter));

  list.forEach((day, index) => {
    const card = document.createElement("div");
    const bentoClass = index % 6 === 0 ? "card--big" : index % 6 === 3 ? "card--wide" : "";
    card.className = `card reveal reveal-stagger ${bentoClass}`.trim();
    card.style.setProperty("--stagger-index", index);

    const dayNumber = String(days.indexOf(day) + 1).padStart(2, "0");
    const isToday = isTripDayToday(day.date);
    if (isToday) card.classList.add("card-today");

    card.innerHTML = `
      <span class="card-num">${dayNumber}</span>
      ${isToday ? '<span class="today-badge">Сегодня</span>' : ""}
      <img src="${day.img}" alt="${day.title}">
      <div class="card-text">
        <span>${day.date}</span>
        <h3>${day.title}</h3>
        <p>${day.text}</p>
      </div>
    `;

    card.onclick = () => openModal(day);
    cards.appendChild(card);
  });

  observeRevealTargets();
}

function filterDays(type, button) {
  document.querySelectorAll(".filters button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  renderCards(type);
}

function openModal(day) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalImg").src = day.img;
  document.getElementById("modalDate").innerText = day.date;
  document.getElementById("modalTitle").innerText = day.title;

  const list = document.getElementById("modalEvents");
  list.innerHTML = "";

  day.events.forEach(event => {
    const item = document.createElement("div");
    item.className = "event";

    item.innerHTML = `
      <img src="${event.img}" alt="${event.text}">
      <div>
        <b>${event.time}</b>
        <span>${event.text}</span>
      </div>
    `;

    item.onclick = () => openEventModal(event);
    list.appendChild(item);
  });
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function openEventModal(event) {
  const info = getEventInfo(event);

  document.getElementById("eventModal").style.display = "flex";
  document.getElementById("eventDetailBg").style.backgroundImage = `url('${event.img}')`;
  document.getElementById("eventDetailTime").innerText = event.time;
  document.getElementById("eventDetailTitle").innerText = event.text;
  document.getElementById("eventDetailText").innerText = `${event.text}. ${info.tip}`;

  const ratingBlock = info.rating
    ? `<div><b>${ic("star")} Рейтинг</b><span>${info.rating}</span></div>`
    : "";
  const hoursBlock = info.hours
    ? `<div><b>${ic("clock")} Часы работы</b><span>${info.hours}</span></div>`
    : "";

  document.getElementById("eventInfoGrid").innerHTML = `
    <div><b>${ic("pin")} Локация</b><span>${info.location}</span></div>
    <div><b>${ic("tag")} Цены</b><span>${info.price}</span></div>
    <div><b>${ic("backpack")} Что взять</b><span>${info.take}</span></div>
    ${ratingBlock}
    ${hoursBlock}
  `;

  const bookingButtons = info.bookingQuery
    ? `
      <a href="${getYourGuideLink(info.bookingQuery)}" target="_blank">${ic("ticket")} GetYourGuide</a>
      <a href="${viatorLink(info.bookingQuery)}" target="_blank">${ic("ticket")} Viator</a>
    `
    : "";

  document.getElementById("eventActions").innerHTML = `
    <a href="${googleMapsLink(info.location)}" target="_blank">${ic("pin")} Google Maps</a>
    <button onclick="openRouteFromMe('${info.location.replace(/'/g, "\\'")}')">${ic("route")} Маршрут от меня</button>
    <a href="${googleRouteFromVilla(info.location)}" target="_blank">${ic("home")} Маршрут от виллы</a>
    <a href="${youtubeLink(info.location)}" target="_blank">${ic("play")} YouTube</a>
    ${bookingButtons}
  `;
}

function closeEventModal() {
  document.getElementById("eventModal").style.display = "none";
}

function updateCountdown() {
  // Указываем часовой пояс Пхукета (UTC+7) явно — иначе у гостей
  // из других стран отсчёт "врал" бы на разницу поясов
  const tripDate = new Date("2026-08-21T17:45:00+07:00");
  const now = new Date();
  const diff = tripDate - now;

  if (diff <= 0) {
    document.getElementById("d").innerText = "00";
    document.getElementById("h").innerText = "00";
    document.getElementById("m").innerText = "00";
    document.getElementById("s").innerText = "00";
    return;
  }

  document.getElementById("d").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("h").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("m").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("s").innerText = Math.floor((diff / 1000) % 60);
}

let thbToKztRate = 14.25;

async function loadCurrencyRate() {
  const rateText = document.getElementById("rateText");

  try {
    const response = await fetch("https://open.er-api.com/v6/latest/THB");
    const data = await response.json();

    if (data && data.rates && data.rates.KZT) {
      thbToKztRate = data.rates.KZT;
      rateText.innerText = `Текущий курс: 1 ฿ ≈ ${thbToKztRate.toFixed(2)} ₸`;
    } else {
      rateText.innerText = `Курс по умолчанию: 1 ฿ ≈ ${thbToKztRate} ₸`;
    }
  } catch (error) {
    rateText.innerText = `Курс по умолчанию: 1 ฿ ≈ ${thbToKztRate} ₸`;
  }
}

function convertThbToKzt() {
  const input = document.getElementById("thbInput");
  const result = document.getElementById("kztResult");

  if (!input || !result) return;

  const thb = Number(input.value);

  if (!thb) {
    result.innerText = "≈ 0 ₸";
    return;
  }

  const kzt = thb * thbToKztRate;
  result.innerText = `≈ ${Math.round(kzt).toLocaleString("ru-RU")} ₸`;
}

loadCurrencyRate();

function downloadPlan() {
  let text = "PHUKET TRIP 2026\n";
  text += "Arrival: 21.08.2026 17:45\n";
  text += "Departure: 30.08.2026 19:25\n\n";

  days.forEach(day => {
    text += `${day.date} — ${day.title}\n`;
    day.events.forEach(e => {
      text += `- ${e.time} — ${e.text}\n`;
    });
    text += "\n";
  });

  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "phuket-trip-2026.txt";
  link.click();
}

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music) music.volume = 0.45;

function startMusic() {
  if (!music || !musicBtn) return;

  music.play()
    .then(() => {
      musicBtn.innerHTML = "⏸ I Got You";
    })
    .catch(() => {
      musicBtn.innerHTML = "▶ Музыка";
    });
}

function toggleMusic() {
  if (!music || !musicBtn) return;

  if (music.paused) {
    music.play();
    musicBtn.innerHTML = "⏸ I Got You";
  } else {
    music.pause();
    musicBtn.innerHTML = "▶ Музыка";
  }
}

const squad = [
  { icon: "🧭", name: "Мага", role: "Капитан трипа", place: "Promthep Cape", mission: "Держать команду вместе" },
  { icon: "💰", name: "Алихан", role: "Министр финансов", place: "Central Phuket Floresta", mission: "Следить за бюджетом" },
  { icon: "📍", name: "Алишер", role: "Навигатор", place: "Big Buddha", mission: "Не дать никому потеряться" },
  { icon: "📸", name: "Муха", role: "Контент-мейкер", place: "Xana Beach Club", mission: "Снимать лучший контент" },
  { icon: "🥩", name: "Адилет", role: "BBQ-мастер", place: "Вилла в Банг Тао", mission: "Отвечать за финальный гриль" },
  { icon: "🎧", name: "Диас", role: "Главный DJ", place: "Bangla Road", mission: "Держать вайб" },
  { icon: "🎉", name: "Даулетбек", role: "Министр развлечений", place: "James Bond Island", mission: "Делать каждый день веселее" }
];

function renderSquad() {
  const grid = document.getElementById("squadGrid");
  if (!grid) return;

  grid.innerHTML = "";

  squad.forEach((person, index) => {
    const card = document.createElement("div");
    card.className = "person reveal reveal-stagger";
    card.style.setProperty("--stagger-index", index);
    card.innerHTML = `
      ${person.icon}
      <h3>${person.name}</h3>
      <p>${person.role}</p>
    `;
    card.onclick = () => openPersonModal(person);
    grid.appendChild(card);
  });

  observeRevealTargets();
}

function openPersonModal(person) {
  document.getElementById("personModal").style.display = "flex";
  document.getElementById("personIcon").innerText = person.icon;
  document.getElementById("personName").innerText = person.name;
  document.getElementById("personRole").innerText = person.role;
  document.getElementById("personPlace").innerText = person.place;
  document.getElementById("personMission").innerText = person.mission;
}

function closePersonModal() {
  document.getElementById("personModal").style.display = "none";
}

// Копирование ссылки на галерею в буфер обмена
function copyGalleryLink(button) {
  navigator.clipboard.writeText(galleryLink)
    .then(() => {
      const original = button.innerText;
      button.innerText = "Скопировано ✓";
      setTimeout(() => {
        button.innerText = original;
      }, 2000);
    })
    .catch(() => {
      window.prompt("Скопируй ссылку вручную:", galleryLink);
    });
}

// === Кастомный курсор ===
const cursorDot = document.getElementById("cursorDot");
const cursorRing = document.getElementById("cursorRing");
const isFinePointer = window.matchMedia("(pointer: fine)").matches;

if (isFinePointer && cursorDot && cursorRing) {
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Курсор увеличивается над кликабельными элементами
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest("a, button, .card, .person, .event, .magnetic")) {
      cursorRing.classList.add("hovering");
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.closest("a, button, .card, .person, .event, .magnetic")) {
      cursorRing.classList.remove("hovering");
    }
  });
}

// === След за курсором: тающие частицы в цветах сайта ===
const trailCanvas = document.getElementById("cursorTrailCanvas");

if (isFinePointer && trailCanvas) {
  const ctx = trailCanvas.getContext("2d");
  let trailPoints = [];
  const trailColors = ["255,91,57", "23,227,196", "244,242,237"];

  function resizeTrailCanvas() {
    trailCanvas.width = window.innerWidth;
    trailCanvas.height = window.innerHeight;
  }
  resizeTrailCanvas();
  window.addEventListener("resize", resizeTrailCanvas);

  document.addEventListener("mousemove", (e) => {
    trailPoints.push({
      x: e.clientX,
      y: e.clientY,
      life: 1,
      color: trailColors[Math.floor(Math.random() * trailColors.length)]
    });
    if (trailPoints.length > 40) trailPoints.shift();
  });

  function drawTrail() {
    requestAnimationFrame(drawTrail);
    ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);

    trailPoints.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3 * p.life, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.life * 0.5})`;
      ctx.fill();
      p.life -= 0.04;
    });

    trailPoints = trailPoints.filter(p => p.life > 0);
  }
  drawTrail();
}

// === Magnetic-эффект на кнопках ===
if (isFinePointer) {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".magnetic").forEach(el => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);

      if (dist < 120) {
        const strength = (120 - dist) / 120;
        const moveX = (e.clientX - centerX) * 0.25 * strength;
        const moveY = (e.clientY - centerY) * 0.25 * strength;
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
      } else {
        el.style.transform = "translate(0, 0)";
      }
    });
  });
}

// === Свечение, следующее за курсором в hero ===
const heroGlow = document.getElementById("heroGlow");
const heroSection = document.querySelector(".hero");

if (heroGlow && heroSection) {
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroGlow.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
  });
}
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

function toggleMobileMenu() {
  if (!burgerBtn || !navLinks) return;
  burgerBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
}

function closeMobileMenu() {
  if (!burgerBtn || !navLinks) return;
  burgerBtn.classList.remove("open");
  navLinks.classList.remove("open");
}

// Закрываем меню, когда переходим по ссылке
navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
    closeEventModal();
    closePersonModal();
    closeMobileMenu();
  }
});

document.getElementById("eventModal")?.addEventListener("click", function(e) {
  if (e.target.id === "eventModal") closeEventModal();
});

document.getElementById("personModal")?.addEventListener("click", function(e) {
  if (e.target.id === "personModal") closePersonModal();
});

document.addEventListener("click", function firstClick() {
  if (music && music.paused) startMusic();
  document.removeEventListener("click", firstClick);
});

window.addEventListener("load", startMusic);

// === Split-text: разбиваем заголовки на слова для покадрового появления ===
function splitHeadings() {
  document.querySelectorAll(".split-text").forEach(heading => {
    if (heading.dataset.split) return;
    heading.dataset.split = "true";

    const html = heading.innerHTML;
    const lines = html.split(/<br\s*\/?>/i);

    heading.innerHTML = lines.map(line => {
      const words = line.trim().split(/\s+/).filter(Boolean);
      return words.map((word, i) => {
        return `<span class="word" style="--word-index:${i}"><span>${word}</span></span>`;
      }).join(" ");
    }).join("<br>");
  });
}

// === Scroll-reveal: элементы плавно появляются, когда доскроллил до них ===
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
);

function observeRevealTargets() {
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el => {
    revealObserver.observe(el);
  });
}

// Чек-лист тоже участвует в reveal-эффекте
document.querySelectorAll(".checklist div").forEach((el, index) => {
  el.classList.add("reveal", "reveal-stagger");
  el.style.setProperty("--stagger-index", index);
});

// Money-box и gallery-box тоже мягко появляются
document.querySelectorAll(".money-box, .gallery-box").forEach(el => {
  el.classList.add("reveal");
});

// === Параллакс на фоне hero ===
const heroBg = document.getElementById("heroBg");
let parallaxTicking = false;

function updateParallax() {
  if (!heroBg) return;
  const scrolled = window.scrollY;
  // Фон двигается медленнее контента — создаёт эффект глубины
  heroBg.style.transform = `translateY(${scrolled * 0.35}px)`;
  parallaxTicking = false;
}

function onScrollParallax() {
  if (!parallaxTicking) {
    requestAnimationFrame(updateParallax);
    parallaxTicking = true;
  }
}

// === Прогресс-бар скролла ===
const scrollProgressBar = document.getElementById("scrollProgress");

function updateScrollProgress() {
  if (!scrollProgressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", () => {
  onScrollParallax();
  updateScrollProgress();
}, { passive: true });

splitHeadings();
observeRevealTargets();

// === 3D-tilt карточек при наведении курсора ===
if (isFinePointer) {
  document.addEventListener("mousemove", (e) => {
    const hovered = e.target.closest(".card, .person");
    document.querySelectorAll(".card, .person").forEach(el => {
      if (el !== hovered) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
    });
  });

  document.addEventListener("mouseout", (e) => {
    const left = e.target.closest(".card, .person");
    if (left) left.style.transform = "";
  });
}

// === Финальная 3D-сцена: полёт сквозь тропический космос ===
function initSpaceScene() {
  const canvas = document.getElementById("spaceCanvas");
  const section = document.getElementById("spaceFinale");
  if (!canvas || !section || typeof THREE === "undefined") return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);

  // Звёздное поле в цветах сайта: коралл, бирюза, тёплый белый
  const starCount = 2200;
  const positions = new Float32Array(starCount * 3);
  const colors = new Float32Array(starCount * 3);
  const palette = [
    [1, 0.36, 0.22],
    [0.09, 0.89, 0.77],
    [0.96, 0.95, 0.93]
  ];

  for (let i = 0; i < starCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 90 - 20;
    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = c[0];
    colors[i * 3 + 1] = c[1];
    colors[i * 3 + 2] = c[2];
  }

  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  starGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  const starMat = new THREE.PointsMaterial({ size: 0.1, vertexColors: true, transparent: true, opacity: 0.9 });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // "Тропический мусор" в тоннеле — пальмовые листья, разлетающиеся вокруг пути полёта
  const debrisGroup = new THREE.Group();
  const debrisCount = 70;
  const debrisPalette = [0xff5b39, 0x17e3c4, 0xf4f2ed];

  for (let i = 0; i < debrisCount; i++) {
    const leafGeo = new THREE.PlaneGeometry(0.6 + Math.random() * 0.8, 0.2 + Math.random() * 0.3);
    const leafMat = new THREE.MeshStandardMaterial({
      color: debrisPalette[i % debrisPalette.length],
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.55,
      roughness: 0.6
    });
    const leaf = new THREE.Mesh(leafGeo, leafMat);

    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 4;
    leaf.position.set(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      -Math.random() * 80
    );
    leaf.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    debrisGroup.add(leaf);
  }
  scene.add(debrisGroup);

  // "Тропическая планета" — светящийся коралловый шар
  const planetGeo = new THREE.SphereGeometry(1.3, 48, 48);
  const planetMat = new THREE.MeshStandardMaterial({
    color: 0xff5b39,
    emissive: 0x2a0f06,
    roughness: 0.55,
    metalness: 0.15
  });
  const planet = new THREE.Mesh(planetGeo, planetMat);
  planet.position.set(2.4, 0.4, -20);
  scene.add(planet);

  const tealLight = new THREE.PointLight(0x17e3c4, 3, 60);
  tealLight.position.set(-6, 3, 4);
  scene.add(tealLight);
  scene.add(new THREE.AmbientLight(0x404040, 1.4));

  // Бумажный самолётик — символ полета домой, летит перед камерой
  const planeGroup = new THREE.Group();
  const bodyGeo = new THREE.ConeGeometry(0.16, 0.9, 4);
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0xf4f2ed, flatShading: true, roughness: 0.4 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.rotation.x = Math.PI / 2;
  planeGroup.add(body);
  scene.add(planeGroup);

  let mouseX = 0, mouseY = 0;
  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX / window.innerWidth - 0.5;
    mouseY = e.clientY / window.innerHeight - 0.5;
  });

  // === Прогресс прокрутки секции: 0 (только зашли) → 1 (полностью пролистали) ===
  let targetProgress = 0;
  let currentProgress = 0;

  function updateSpaceProgress() {
    const rect = section.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) {
      targetProgress = 0;
      return;
    }
    const scrolled = -rect.top;
    targetProgress = Math.min(1, Math.max(0, scrolled / total));
  }

  window.addEventListener("scroll", updateSpaceProgress, { passive: true });
  updateSpaceProgress();

  function animate() {
    requestAnimationFrame(animate);

    // Плавно подтягиваем текущее значение к целевому — крутишь назад, летит назад
    currentProgress += (targetProgress - currentProgress) * 0.08;

    const depth = currentProgress * 60;

    stars.position.z = depth * 0.3;
    stars.rotation.y = currentProgress * 1.2;

    debrisGroup.position.z = depth;
    debrisGroup.rotation.z = currentProgress * 0.8;

    planet.position.z = -20 + depth;
    planet.rotation.y = currentProgress * 3;

    planeGroup.position.set(0, -0.3, -3 + depth * 0.05);
    planeGroup.rotation.y = Math.sin(currentProgress * 8) * 0.3;
    planeGroup.rotation.z = Math.cos(currentProgress * 6) * 0.25;

    camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.03;
    camera.position.y += (-mouseY * 1.4 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, planeGroup.position.z - 2);

    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    if (!canvas.clientWidth || !canvas.clientHeight) return;
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    updateSpaceProgress();
  });
}

window.addEventListener("load", initSpaceScene);

// === Мини-разговорник на тайском ===
const phraseGroups = [
  {
    title: "Основное",
    phrases: [
      { ru: "Привет", thai: "สวัสดี", latin: "савадии" },
      { ru: "Спасибо", thai: "ขอบคุณ", latin: "кхоп кхун" },
      { ru: "Да / Нет", thai: "ใช่ / ไม่ใช่", latin: "чай / май чай" },
      { ru: "Извините", thai: "ขอโทษ", latin: "кхо тхот" },
      { ru: "Ничего страшного", thai: "ไม่เป็นไร", latin: "май пен рай" },
      { ru: "Не понимаю", thai: "ไม่เข้าใจ", latin: "май кхао тяй" }
    ]
  },
  {
    title: "Еда",
    phrases: [
      { ru: "Вкусно!", thai: "อร่อยมาก", latin: "арой мак" },
      { ru: "Не остро", thai: "ไม่เผ็ด", latin: "май пхет" },
      { ru: "Немного остро", thai: "เผ็ดนิดหน่อย", latin: "пхет нит ной" },
      { ru: "Воду, пожалуйста", thai: "ขอน้ำ", latin: "кхо нам" },
      { ru: "Счёт, пожалуйста", thai: "เช็คบิล", latin: "чек бин" }
    ]
  },
  {
    title: "Шоппинг и торг",
    phrases: [
      { ru: "Сколько стоит?", thai: "เท่าไหร่", latin: "тао рай" },
      { ru: "Слишком дорого", thai: "แพงไป", latin: "пхэнг пай" },
      { ru: "Можно скидку?", thai: "ลดได้ไหม", latin: "лот дай май" }
    ]
  },
  {
    title: "Транспорт и экстренное",
    phrases: [
      { ru: "Где туалет?", thai: "ห้องน้ำอยู่ไหน", latin: "хонг нам ю най" },
      { ru: "Отвезите сюда (показать телефон)", thai: "ไปที่นี่", latin: "пай тхи ни" },
      { ru: "Помогите!", thai: "ช่วยด้วย", latin: "чуай дуай" },
      { ru: "Мне нужен врач", thai: "ฉันต้องการหมอ", latin: "чан тонг кан мо" },
      { ru: "Вызовите полицию", thai: "เรียกตำรวจ", latin: "риак тамруат" },
      { ru: "Иностранец (как вас назовут)", thai: "ฝรั่ง", latin: "фаранг" }
    ]
  }
];

function renderPhrasebook() {
  const container = document.getElementById("phraseGroups");
  if (!container) return;

  container.innerHTML = phraseGroups.map(group => `
    <div class="phrase-group">
      <div class="phrase-group-title">${group.title}</div>
      <div class="phrase-grid">
        ${group.phrases.map(p => `
          <div class="phrase-card">
            <div class="phrase-ru">${p.ru}</div>
            <span class="phrase-thai">${p.thai}</span>
            <span class="phrase-latin">— ${p.latin}</span>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// === Интерактивный чек-лист с прогрессом (сохраняется в localStorage) ===
const checklistItems = [
  "Загранпаспорт", "Страховка", "SPF 50", "Купальники",
  "Наличные", "Powerbank", "Чехол для воды", "Одежда для ATV",
  "Аптечка", "Дождевик", "Очки", "Легкая рубашка"
];

function getChecklistState() {
  try {
    return JSON.parse(localStorage.getItem("phuketChecklist") || "{}");
  } catch {
    return {};
  }
}

function saveChecklistState(state) {
  localStorage.setItem("phuketChecklist", JSON.stringify(state));
}

function renderChecklist() {
  const grid = document.getElementById("checklistGrid");
  if (!grid) return;

  const state = getChecklistState();
  grid.innerHTML = "";

  checklistItems.forEach((item, i) => {
    const div = document.createElement("div");
    div.textContent = item;
    if (state[i]) div.classList.add("checked");

    div.onclick = () => {
      const current = getChecklistState();
      current[i] = !current[i];
      saveChecklistState(current);
      renderChecklist();
    };

    grid.appendChild(div);
  });

  updateChecklistProgress(state);
}

function updateChecklistProgress(state) {
  const checkedCount = Object.values(state).filter(Boolean).length;
  const total = checklistItems.length;
  const bar = document.getElementById("checklistProgressBar");
  const label = document.getElementById("checklistProgressLabel");

  if (bar) bar.style.width = `${(checkedCount / total) * 100}%`;
  if (label) label.textContent = `${checkedCount} из ${total} собрано`;
}

// === Погода Пхукета в реальном времени (Open-Meteo, без API-ключа) ===
const weatherCodeMap = {
  0: ["☀️", "Ясно"],
  1: ["🌤️", "Малооблачно"],
  2: ["⛅", "Переменная облачность"],
  3: ["☁️", "Облачно"],
  45: ["🌫️", "Туман"],
  48: ["🌫️", "Туман с изморозью"],
  51: ["🌦️", "Морось"],
  53: ["🌦️", "Морось"],
  55: ["🌧️", "Сильная морось"],
  61: ["🌧️", "Небольшой дождь"],
  63: ["🌧️", "Дождь"],
  65: ["⛈️", "Сильный дождь"],
  80: ["🌦️", "Ливень"],
  81: ["🌧️", "Сильный ливень"],
  82: ["⛈️", "Очень сильный ливень"],
  95: ["⛈️", "Гроза"],
  96: ["⛈️", "Гроза с градом"],
  99: ["⛈️", "Сильная гроза"]
};

async function loadWeather() {
  const tempEl = document.getElementById("weatherTemp");
  const descEl = document.getElementById("weatherDesc");
  const iconEl = document.getElementById("weatherIcon");
  const detailsEl = document.getElementById("weatherDetails");

  if (!tempEl) return;

  try {
    const url = "https://api.open-meteo.com/v1/forecast?latitude=8.00&longitude=98.29&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FBangkok";
    const response = await fetch(url);
    const data = await response.json();

    const current = data.current;
    const daily = data.daily;
    const [icon, desc] = weatherCodeMap[current.weather_code] || ["🌤️", "—"];

    tempEl.textContent = `${Math.round(current.temperature_2m)}°C`;
    descEl.textContent = `${desc} · Банг Тао`;
    iconEl.textContent = icon;

    detailsEl.innerHTML = `
      <div><b>${Math.round(current.relative_humidity_2m)}%</b>Влажность</div>
      <div><b>${Math.round(current.wind_speed_10m)} км/ч</b>Ветер</div>
      <div><b>${Math.round(daily.temperature_2m_max[0])}° / ${Math.round(daily.temperature_2m_min[0])}°</b>Макс/мин сегодня</div>
      <div><b>${daily.precipitation_probability_max[0]}%</b>Шанс дождя</div>
    `;
  } catch (error) {
    descEl.textContent = "Не удалось загрузить погоду";
  }
}

// === Калькулятор общих расходов (локально, per-device) ===
const BUDGET_KEY = "phuketBudget";
const BUDGET_PEOPLE = 7;

function getBudgetItems() {
  try {
    return JSON.parse(localStorage.getItem(BUDGET_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveBudgetItems(items) {
  localStorage.setItem(BUDGET_KEY, JSON.stringify(items));
}

function renderBudget() {
  const list = document.getElementById("budgetList");
  const totalEl = document.getElementById("budgetTotal");
  const perPersonEl = document.getElementById("budgetPerPerson");
  if (!list) return;

  const items = getBudgetItems();
  list.innerHTML = "";

  if (items.length === 0) {
    list.innerHTML = `<div class="budget-empty">Пока нет ни одной записи — добавь первый расход выше.</div>`;
  } else {
    items.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "budget-item";
      row.innerHTML = `
        <div><b>${item.desc}</b> <span>· заплатил ${item.payer}</span></div>
        <div style="display:flex; align-items:center; gap:12px;">
          <b>${item.amount.toLocaleString("ru-RU")} ฿</b>
          <button aria-label="Удалить" data-index="${index}">×</button>
        </div>
      `;
      list.appendChild(row);
    });

    list.querySelectorAll("button[data-index]").forEach(btn => {
      btn.onclick = () => {
        const items = getBudgetItems();
        items.splice(Number(btn.dataset.index), 1);
        saveBudgetItems(items);
        renderBudget();
      };
    });
  }

  const total = items.reduce((sum, item) => sum + item.amount, 0);
  totalEl.textContent = `${total.toLocaleString("ru-RU")} ฿`;
  perPersonEl.textContent = `${Math.round(total / BUDGET_PEOPLE).toLocaleString("ru-RU")} ฿`;
}

const budgetForm = document.getElementById("budgetForm");
if (budgetForm) {
  budgetForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const desc = document.getElementById("budgetDesc").value.trim();
    const payer = document.getElementById("budgetPayer").value;
    const amount = Number(document.getElementById("budgetAmount").value);

    if (!desc || !amount) return;

    const items = getBudgetItems();
    items.push({ desc, payer, amount });
    saveBudgetItems(items);
    renderBudget();
    budgetForm.reset();
  });
}

const budgetClearBtn = document.getElementById("budgetClear");
if (budgetClearBtn) {
  budgetClearBtn.addEventListener("click", () => {
    if (confirm("Точно очистить все записи расходов?")) {
      saveBudgetItems([]);
      renderBudget();
    }
  });
}

// === Ripple-эффект на кнопках при клике ===
document.addEventListener("click", (e) => {
  const btn = e.target.closest(".btn, .btn-outline, .download");
  if (!btn) return;

  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);

  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
});

// === Мини-загрузки между разделами (как переход между уровнями в игре) ===
function createSectionLoader(targetId, label) {
  const target = document.getElementById(targetId);
  if (!target) return;

  let triggered = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !triggered) {
        triggered = true;
        observer.disconnect();
        showSectionLoader(label);
      }
    });
  }, { threshold: 0.15 });

  observer.observe(target);
}

function showSectionLoader(label) {
  const loader = document.createElement("div");
  loader.className = "section-loader";
  loader.innerHTML = `
    <div class="section-loader-label">${label}</div>
    <div class="section-loader-number">0%</div>
  `;
  document.body.appendChild(loader);

  requestAnimationFrame(() => loader.classList.add("visible"));

  const numberEl = loader.querySelector(".section-loader-number");
  let progress = 0;
  const duration = 550;
  const start = performance.now();

  function tick(now) {
    progress = Math.min(100, Math.round(((now - start) / duration) * 100));
    numberEl.textContent = `${progress}%`;

    if (progress < 100) {
      requestAnimationFrame(tick);
    } else {
      loader.classList.remove("visible");
      setTimeout(() => loader.remove(), 400);
    }
  }
  requestAnimationFrame(tick);
}

createSectionLoader("days", "ЗАГРУЗКА МАРШРУТА");
createSectionLoader("spaceFinale", "ВХОД В КОСМОС");

renderCards();
renderSquad();
renderChecklist();
renderBudget();
renderPhrasebook();
loadWeather();
updateCountdown();
observeRevealTargets();
updateParallax();
updateScrollProgress();
setInterval(updateCountdown, 1000);
