(function(){
  "use strict";

  // Ekte meny- og prisdata: forretter/tilbehør/grillretter/gryteretter fra
  // restaurantens egen bestillingsside (SE MENY), drikkemeny fra shirazpersisk.no.
  // Delingsretter og dessert har ingen faste retter publisert p.t.
  var MENU = {
    delingsretter: {
      label: "Delingsretter",
      heading: "Delingsretter",
      empty: "Vi setter gjerne sammen et utvalg delingsretter til bordet – spør oss på stedet eller ved bestilling."
    },
    forretter: {
      label: "Forretter",
      heading: "Forretter",
      note: "Alle forretter serveres med nybakt nanbrød.",
      items: [
        { name: "Kashk & Bademjan", desc: "Mint, gurkemeie og løk.", price: 90 },
        { name: "Hummus", desc: "Kikerter, hvitløk, olivenolje og tahini.", price: 90 },
        { name: "Burani Bademjan", desc: "Grillet aubergine, yoghurt, hvitløk, pepper og salt.", price: 90 },
        { name: "Salad Shirazi", desc: "Løk, tomat, agurk, lime, salt og pepper.", price: 90 }
      ]
    },
    tilbehor: {
      label: "Tilbehør",
      heading: "Tilbehør",
      items: [
        { name: "Mat Khiyar", desc: "Yoghurt med agurk og tørket mynte.", price: 75 },
        { name: "Mast Mosir", desc: "Yoghurt med mosir.", price: 75 },
        { name: "Nan Brød", desc: "Nybakt, ovnsvarmt brød.", price: 40 }
      ]
    },
    grillretter: {
      label: "Grillretter",
      heading: "Grillretter",
      note: "Alle grillretter serveres med grillet tomat og ris.",
      items: [
        { name: "Kobideh", desc: "To spyd med lammekjøttdeig blandet med løk og sort pepper.", price: 280 },
        { name: "Jooje Kabab", desc: "Yoghurtmarinert kyllingfilet på spyd.", price: 300 },
        { name: "Chenjeh", desc: "Lammefilet marinert i løk, salt og sort pepper.", price: 300 },
        { name: "Barg", desc: "Spyd med indrefilet av okse.", price: 310 },
        { name: "Shiraz Spesial", desc: "Kyllingfilet og lammekjøttdeig marinert med løk, salt og sort pepper.", price: 320 },
        { name: "Dande Kabab", desc: "Fire marinerte lammekoteletter.", price: 259 }
      ]
    },
    gryteretter: {
      label: "Gryteretter",
      heading: "Gryteretter & risretter",
      items: [
        { name: "Ghorme Sabzi", desc: "Lammekjøtt, bønner, persille, spinat, koriander, oregano og lime.", price: 280 },
        { name: "Zereshk Polo Ba Morgh", desc: "Kokt kylling i krydderblanding med ris, mandel og pistasj.", price: 280 },
        { name: "Gheyme Bademjan", desc: "Lammekjøtt, tomatpuré, løk, karri og gurkemeie, servert med aubergine.", price: 280 },
        { name: "Baghali Polo & Mahiche", desc: "Lammeknoke med grønne bønner, dill og ris.", price: 310 }
      ]
    },
    dessert: {
      label: "Dessert",
      heading: "Dessert",
      empty: "Vår dessertmeny varierer – spør gjerne kelneren om dagens utvalg."
    },
    drikker: {
      label: "Drikker",
      heading: "Drikker",
      groups: [
        {
          title: "Øl",
          items: [
            { name: "7 Fjell Pilsner", price: 100 },
            { name: "7 Fjell Tropical IPA / Fløien IPA", price: 110 },
            { name: "7 Fjell Ginger Ninja / Småtøs", price: 115 },
            { name: "7 Fjell Golden Ale", desc: "Lettøl.", price: 90 },
            { name: "7 Fjell Ginger Ninja", desc: "Alkoholfritt.", price: 80 }
          ]
        },
        {
          title: "Husets spesialdrinker",
          items: [
            { name: "Vermouth Spritz", desc: "En frisk og aromatisk cocktail med Salvano Vermouth di Torino, Salvano Jhamel Brut og en touch av fersk rosmarin.", price: 130 },
            { name: "Signaturdrink", desc: "En sofistikert cocktail med Salvano Barolo Chinato, Remonda Bollicine Rosé Cuvée, jordbær og et hint av lime.", price: 140 }
          ]
        },
        {
          title: "Rødvin",
          glassBottle: true,
          items: [
            { name: "Nebbiolo Flin", desc: "100% Nebbiolo. Roseblader, krydder, tobakk og kirsebær.", glass: 170, bottle: 850 },
            { name: "Barbera d'Alba", desc: "100% Barbera. Bjørnebær, kirsebær og lite preg av eik.", glass: 180, bottle: 899 },
            { name: "Pinot Nero", desc: "Mørke bær, kirsebær, bjørnebær, vanilje, krydder.", glass: 180, bottle: 900 },
            { name: "Barbaresco", desc: "100% Nebbiolo. Kløver, lakris, trøffel og noe kirsebær.", glass: 215, bottle: 1100 },
            { name: "Nebbiolo Gentilium", desc: "100% Nebbiolo. Kardemomme, five spice, vanilje og kirsebær.", glass: 190, bottle: 950 },
            { name: "Riachi Lythe", desc: "Svart og rød frukt, eik, vanilje og brent kaffe.", bottle: 999 },
            { name: "Riachi Grand Cuvée", desc: "Kraftig rødvin laget på Syrah-druer.", bottle: 999 },
            { name: "Classique de Rimauresq Rouge 2018", desc: "Kompleks og moden, sorte frukter, krydder og pepper.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "Hvitvin",
          glassBottle: true,
          items: [
            { name: "Husets hvitvin", glass: 125, bottle: 625 },
            { name: "Chardonnay Sognante", desc: "100% Chardonnay. Ananas, ristet brød, moden tropisk frukt og eik.", glass: 170, bottle: 850 },
            { name: "Lugana", desc: "100% Turbiana di Lugana. Frisk, delikat og balansert, noe tropisk og mineralsk.", glass: 150, bottle: 750 }
          ]
        },
        {
          title: "Rosé & musserende",
          glassBottle: true,
          items: [
            { name: "Remonda Bollicine", desc: "Glera og Pinot Noir. Floralt, ville bær som bringebær.", glass: 130, bottle: 650 },
            { name: "Langhe Rosato", desc: "Nebbiolo og Barbera. Bringebær, jordbær, tørr men fruktig.", glass: 150, bottle: 750 },
            { name: "Jhamel Millesimato Brut", desc: "90% Chardonnay, 10% Pinot Noir. Ristet brød, grønne epler og salvie.", bottle: 1050 }
          ]
        }
      ]
    }
  };

  function priceHTML(item){
    if (item.glass && item.bottle) return 'Glass ' + item.glass + ',-<br>Flaske ' + item.bottle + ',-';
    if (item.bottle) return 'Flaske ' + item.bottle + ',-';
    if (item.glass) return 'Glass ' + item.glass + ',-';
    return item.price + ',-';
  }

  function renderItems(list){
    return list.map(function(item){
      return '' +
        '<div class="menu-item">' +
          '<div>' +
            '<div class="menu-item-name">' + item.name + '</div>' +
            (item.desc ? '<div class="menu-item-desc">' + item.desc + '</div>' : '') +
          '</div>' +
          '<div class="menu-item-price">' + priceHTML(item) + '</div>' +
        '</div>';
    }).join('');
  }

  function renderSection(key){
    var data = MENU[key];
    var el = document.querySelector('[data-menu-section="' + key + '"]');
    if (!el || !data) return;

    var html = '<div class="menu-section-head">' +
      '<p class="eyebrow">Vår meny</p>' +
      '<h2>' + data.heading + '</h2>' +
      (data.note ? '<p>' + data.note + '</p>' : '') +
      '</div>';

    if (data.empty) {
      html += '<p class="menu-empty">' + data.empty + '</p>';
    } else if (data.groups) {
      html += data.groups.map(function(group){
        return '<h3 class="menu-group-title">' + group.title + '</h3>' +
          '<div class="menu-items">' + renderItems(group.items) + '</div>';
      }).join('');
    } else if (data.items) {
      html += '<div class="menu-items">' + renderItems(data.items) + '</div>';
    }

    el.innerHTML = html;
  }

  Object.keys(MENU).forEach(renderSection);

  // Scroll-spy for sticky tab nav
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.menu-tabs a'));
  var sections = tabs.map(function(tab){
    return document.getElementById(tab.getAttribute('href').slice(1));
  });

  function setActive(){
    var pos = window.scrollY + 160;
    var current = sections[0];
    sections.forEach(function(sec){ if (sec && sec.offsetTop <= pos) current = sec; });
    tabs.forEach(function(tab){
      tab.classList.toggle('active', current && tab.getAttribute('href') === '#' + current.id);
    });
  }
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });

  var tabWrap = document.querySelector('.menu-tabs');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      setTimeout(function(){
        var active = tabWrap.querySelector('a.active');
        if (active) tabWrap.scrollTo({ left: active.offsetLeft - 24, behavior: 'smooth' });
      }, 400);
    });
  });
})();
