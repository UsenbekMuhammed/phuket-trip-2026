const days = [
  {
    date: "21.08.2026",
    title: "День 1: Прилет и заселение",
    cat: "food",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=90",
    text: "Прилет вечером, минивэн до виллы, заселение и легкий ужин.",
    events: [
      {
        time: "17:45",
        text: "Прилет на Пхукет",
        img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:00",
        text: "Паспортный контроль, багаж, обмен денег и SIM-карты",
        img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "20:00",
        text: "Минивэн до района Раваи",
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
    title: "День 2: Най Харн и seafood",
    cat: "beach food",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90",
    text: "Закуп продуктов, пляж Най Харн и королевский ужин на Rawai Seafood Market.",
    events: [
      {
        time: "09:00",
        text: "Завтрак на вилле",
        img: "https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:30",
        text: "Makro или Big C: закуп воды, льда, завтраков и BBQ-продуктов",
        img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:30",
        text: "Пляж Най Харн: купание, чилл, фото",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "15:30",
        text: "Обед в пляжном кафе",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:00",
        text: "Rawai Seafood Market: лобстеры, креветки, рыба и торг",
        img: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "18:30",
        text: "Огромный seafood-ужин всей компанией",
        img: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "23.08.2026",
    title: "День 3: Big Buddha и Old Town",
    cat: "adventure food",
    img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=90",
    text: "Big Buddha, Wat Chalong, Old Phuket Town и ужин в Raya.",
    events: [
      {
        time: "09:30",
        text: "Завтрак на вилле",
        img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "11:15",
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
        time: "18:30",
        text: "Ужин в Raya",
        img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "24.08.2026",
    title: "День 4: Джунгли и ATV",
    cat: "adventure",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=90",
    text: "Квадроциклы, джунгли, Elephant Sanctuary и тайский массаж.",
    events: [
      {
        time: "09:00",
        text: "Завтрак и одежда, которую не жалко испачкать",
        img: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:45",
        text: "ATV-тур по грязевым трассам",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00",
        text: "Обед в лагере в джунглях",
        img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:30",
        text: "Elephant Sanctuary",
        img: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:00",
        text: "Тайский массаж",
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "25.08.2026",
    title: "День 5: Януи, Windmill и Патонг",
    cat: "beach party",
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=90",
    text: "Yanui Beach, каяки, Windmill Viewpoint, пре-пати и Bangla Road.",
    events: [
      {
        time: "10:00",
        text: "Поздний завтрак",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "11:30",
        text: "Yanui Beach: каяки и снорклинг",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:00",
        text: "Обед у пляжа",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "16:30",
        text: "Windmill Viewpoint рядом с Януи",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "20:00",
        text: "Пре-пати на вилле",
        img: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "22:45",
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
    date: "26.08.2026",
    title: "День 6: Freedom Beach и закат",
    cat: "beach",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=90",
    text: "День после Патонга: сон, Freedom Beach и закат на Promthep Cape.",
    events: [
      {
        time: "12:00",
        text: "Поздний подъем после Патонга",
        img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00",
        text: "Легкий бранч на вилле",
        img: "https://images.unsplash.com/photo-1543352634-a1c51d9f1fa7?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:30",
        text: "Выезд на Freedom Beach",
        img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:00",
        text: "Белый песок, купание, фото и кокосы",
        img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:45",
        text: "Promthep Cape: закат над океаном",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:15",
        text: "Ужин в Promthep Cape Restaurant",
        img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "27.08.2026",
    title: "День 7: Пхи-Пхи и Monkey Beach",
    cat: "beach adventure",
    img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=90",
    text: "Спидбот на Пхи-Пхи, Maya Bay, Monkey Beach и снорклинг.",
    events: [
      {
        time: "07:00",
        text: "Ранний подъем и проверка погоды",
        img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "08:00",
        text: "Трансфер на причал",
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "10:00",
        text: "Острова Пхи-Пхи и Maya Bay",
        img: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "11:30",
        text: "Monkey Beach: смотрим обезьян, не кормим и не трогаем",
        img: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "13:00",
        text: "Обед на пляже",
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "14:30",
        text: "Снорклинг и бирюзовая вода",
        img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "19:30",
        text: "Доставка еды и кино на вилле",
        img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "28.08.2026",
    title: "День 8: Beach Club Luxury",
    cat: "beach party food",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1600&q=90",
    text: "Cafe Del Mar / Catch Beach Club, daybeds, коктейли, DJ и красивый ужин.",
    events: [
      {
        time: "10:00",
        text: "Завтрак и стильный beach look",
        img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "12:00",
        text: "Cafe Del Mar Phuket или Catch Beach Club",
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
        time: "19:00",
        text: "Ужин в Boat Avenue или рядом с клубом",
        img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=90"
      }
    ]
  },
  {
    date: "29.08.2026",
    title: "День 9: Шопинг и рынок",
    cat: "food",
    img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=1600&q=90",
    text: "Central Festival, Chillva или Naka Market, street food, сувениры и манго домой.",
    events: [
      {
        time: "11:00",
        text: "Central Festival",
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
        time: "16:30",
        text: "Chillva Market или Naka Weekend Market",
        img: "https://images.unsplash.com/photo-1523906630133-f6934a1ab2b9?auto=format&fit=crop&w=900&q=90"
      },
      {
        time: "17:00",
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
        time: "15:00",
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

const villaLocation = "New 3BR Chalet-Style Villa Pasak Paradise 3 Private Pool Laguna Phuket";
const cards = document.getElementById("cards");

function googleMapsLink(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function googleRouteFromVilla(destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(villaLocation)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

function googleRouteFromMe(destination) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

function youtubeLink(query) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(query + " Phuket travel guide")}`;
}

function getEventInfo(event) {
  const text = event.text.toLowerCase();

  const base = {
    location: event.text + " Phuket",
    price: "500–1500 бат",
    take: "Вода, наличные, телефон, powerbank",
    tip: "Уточнить время и дорогу заранее."
  };

  if (text.includes("freedom beach")) return {
    location: "Freedom Beach Phuket",
    price: "Вход/проход 100–200 бат, такси отдельно",
    take: "SPF, полотенце, вода, наличные",
    tip: "Лучше ехать утром или после 14:00."
  };

  if (text.includes("monkey beach")) return {
    location: "Monkey Beach Phi Phi",
    price: "Обычно входит в тур Пхи-Пхи",
    take: "Очки убрать, еду не держать, телефон крепко",
    tip: "Обезьян не кормить и не трогать."
  };

  if (text.includes("big buddha")) return {
    location: "Big Buddha Phuket",
    price: "Вход обычно бесплатный",
    take: "Закрытые плечи/колени, вода",
    tip: "Перед поездкой проверить, открыт ли объект."
  };

  if (text.includes("пхи") || text.includes("phi") || text.includes("maya")) return {
    location: "Phi Phi Islands Thailand",
    price: "Тур часто 1800–3500 бат/чел",
    take: "SPF, купальные вещи, полотенце, наличные",
    tip: "Maya Bay может закрываться сезонно — уточнять у туроператора."
  };

  if (text.includes("bangla") || text.includes("illuzion") || text.includes("sugar")) return {
    location: "Bangla Road Patong Phuket",
    price: "Коктейли 200–500 бат, клуб зависит от входа/депозита",
    take: "Наличные, телефон, договориться о точке встречи",
    tip: "Ехать всей компанией и держаться вместе."
  };

  if (text.includes("rawai seafood") || text.includes("seafood")) return {
    location: "Rawai Seafood Market Phuket",
    price: "Цена зависит от веса: креветки/рыба/лобстеры + готовка",
    take: "Наличные, умение торговаться",
    tip: "Сначала торговаться на рынке, потом отдавать готовить напротив."
  };

  if (text.includes("cafe del mar") || text.includes("catch beach")) return {
    location: text.includes("cafe") ? "Cafe Del Mar Phuket" : "Catch Beach Club Phuket",
    price: "Зависит от daybed/deposit, напитки и еда отдельно",
    take: "Купальные вещи, стильный beach look, карта/наличные",
    tip: "Лучше бронировать заранее."
  };

  if (text.includes("yanui")) return {
    location: "Yanui Beach Phuket",
    price: "Пляж бесплатно, каяки отдельно",
    take: "SPF, маска, вода, наличные",
    tip: "Хорошо совместить с Windmill Viewpoint."
  };

  if (text.includes("windmill")) return {
    location: "Windmill Viewpoint Phuket",
    price: "Бесплатно",
    take: "Телефон/камера, вода",
    tip: "Отличное место для фото и заката."
  };

  if (text.includes("central")) return {
    location: "Central Phuket",
    price: "По желанию: еда, шопинг, сувениры",
    take: "Карта, наличные, список покупок",
    tip: "Хороший вариант переждать жару."
  };

  if (text.includes("chillva") || text.includes("naka")) return {
    location: text.includes("chillva") ? "Chillva Market Phuket" : "Naka Weekend Market Phuket",
    price: "Street food обычно 50–200 бат за позицию",
    take: "Наличные, пустой желудок",
    tip: "Лучше идти вечером и пробовать разную еду."
  };

  if (text.includes("elephant")) return {
    location: "Elephant Sanctuary Phuket",
    price: "Обычно 2000–3500 бат/чел, зависит от программы",
    take: "Одежда, которую не жалко, полотенце",
    tip: "Выбирать ethical sanctuary без катания на слонах."
  };

  if (text.includes("atv")) return {
    location: "ATV Phuket",
    price: "Обычно 1200–2500 бат/чел",
    take: "Грязная одежда, закрытая обувь, вода",
    tip: "После тура лучше сразу ехать в душ."
  };

  if (text.includes("7-eleven") || text.includes("7/11")) return {
    location: "7-Eleven near Pasak Paradise Phuket",
    price: "Вода 10–20 бат, тосты 35–60 бат",
    take: "Наличные или карта",
    tip: "Для быстрых покупок лучше искать ближайший 7-Eleven на карте."
  };

  return base;
}

function renderCards(filter = "all") {
  if (!cards) return;
  cards.innerHTML = "";

  const list = filter === "all" ? days : days.filter(day => day.cat.includes(filter));

  list.forEach(day => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
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

  document.getElementById("eventInfoGrid").innerHTML = `
    <div><b>📍 Локация</b><span>${info.location}</span></div>
    <div><b>💰 Цены</b><span>${info.price}</span></div>
    <div><b>🎒 Что взять</b><span>${info.take}</span></div>
  `;

  document.getElementById("eventActions").innerHTML = `
    <a href="${googleMapsLink(info.location)}" target="_blank">📍 Google Maps</a>
    <a href="${googleRouteFromMe(info.location)}" target="_blank">🧭 Маршрут от меня</a>
    <a href="${googleRouteFromVilla(info.location)}" target="_blank">🏠 Маршрут от виллы</a>
    <a href="${youtubeLink(info.location)}" target="_blank">🎥 YouTube</a>
  `;
}

function closeEventModal() {
  document.getElementById("eventModal").style.display = "none";
}

function updateCountdown() {
  const tripDate = new Date("2026-08-21T17:45:00");
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

function convertKztToThb() {
  const input = document.getElementById("kztInput");
  const result = document.getElementById("bahtResult");

  if (!input || !result) return;

  const rate = 16.3;
  const value = Number(input.value);

  if (!value) {
    result.innerText = "≈ 0 ฿";
    return;
  }

  result.innerText = `≈ ${Math.round(value / rate).toLocaleString()} ฿`;
}

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
  { icon: "🧭", name: "Жан", role: "Капитан трипа", place: "Promthep Cape", mission: "Держать команду вместе" },
  { icon: "💰", name: "Алихан", role: "Министр финансов", place: "Central Festival", mission: "Следить за бюджетом" },
  { icon: "📍", name: "Алишер", role: "Навигатор", place: "Big Buddha", mission: "Не дать никому потеряться" },
  { icon: "📸", name: "Мухаммед", role: "Контент-мейкер", place: "Freedom Beach", mission: "Снимать лучший контент" },
  { icon: "🥩", name: "Адилет", role: "BBQ-мастер", place: "Вилла", mission: "Отвечать за финальный гриль" },
  { icon: "🎧", name: "Султан", role: "Главный DJ", place: "Bangla Road", mission: "Держать вайб" },
  { icon: "📷", name: "Ерлан", role: "Фотограф", place: "Phi Phi Islands", mission: "Поймать лучшие кадры" },
  { icon: "🎉", name: "Самат", role: "Министр развлечений", place: "Beach Club", mission: "Делать каждый день веселее" }
];

function renderSquad() {
  const grid = document.getElementById("squadGrid");
  if (!grid) return;

  grid.innerHTML = "";

  squad.forEach(person => {
    const card = document.createElement("div");
    card.className = "person";
    card.innerHTML = `
      ${person.icon}
      <h3>${person.name}</h3>
      <p>${person.role}</p>
    `;
    card.onclick = () => openPersonModal(person);
    grid.appendChild(card);
  });
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

document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") {
    closeModal();
    closeEventModal();
    closePersonModal();
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

renderCards();
renderSquad();
updateCountdown();
setInterval(updateCountdown, 1000);
