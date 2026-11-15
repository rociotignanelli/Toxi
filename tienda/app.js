(function () {
  'use strict';

  var CDN = 'https://acdn-us.mitiendanube.com/stores/131/478/products/';
  var P = (window.PRODUCTS || []).map(function (p, i) { p.rank = i; return p; });
  var CAT_ORDER = ['Autos', 'Camionetas y jeeps', 'UTV y areneros', 'Cuatriciclos', 'Motos', 'Camiones', 'Tractores y maquinaria', 'Karting', 'Monopatines'];

  var $ = function (s) { return document.querySelector(s); };
  var state = { cat: 'Todos', q: '', sort: 'rel', stock: false };

  function money(n) { return '$' + Math.round(n).toLocaleString('es-AR'); }
  function src(u, size) {
    if (u.charAt(0) === '@') return CDN + u.slice(1).replace('{s}', size);
    return u;
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function norm(s) { return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function minPrice(p) {
    var inStock = p.v.filter(function (v) { return v.s; });
    var list = inStock.length ? inStock : p.v;
    return list.length ? Math.min.apply(null, list.map(function (v) { return v.p; })) : p.p;
  }
  P.forEach(function (p) { p.min = minPrice(p); p.key = norm(p.n + ' ' + p.c); });

  // Chips de categorías
  var cats = CAT_ORDER.filter(function (c) { return P.some(function (p) { return p.c === c; }); });
  $('#chips').innerHTML = ['Todos'].concat(cats).map(function (c) {
    var n = c === 'Todos' ? P.length : P.filter(function (p) { return p.c === c; }).length;
    return '<button class="chip' + (c === 'Todos' ? ' is-active' : '') + '" data-cat="' + esc(c) + '">' + esc(c) + ' <small>' + n + '</small></button>';
  }).join('');
  $('#statCount').textContent = P.length;
  $('#statCats').textContent = cats.length;
  $('#year').textContent = new Date().getFullYear();

  function render() {
    var q = norm(state.q.trim());
    var list = P.filter(function (p) {
      if (state.cat !== 'Todos' && p.c !== state.cat) return false;
      if (state.stock && !p.s) return false;
      if (q && q.split(/\s+/).some(function (w) { return p.key.indexOf(w) === -1; })) return false;
      return true;
    });
    var by = {
      rel: function (a, b) { return a.rank - b.rank; },
      asc: function (a, b) { return a.min - b.min; },
      desc: function (a, b) { return b.min - a.min; },
      az: function (a, b) { return a.n.localeCompare(b.n, 'es'); }
    }[state.sort];
    list.sort(by);

    $('#results').textContent = list.length + (list.length === 1 ? ' producto' : ' productos');
    $('#empty').hidden = list.length > 0;
    $('#grid').innerHTML = list.map(function (p) {
      var img = p.img[0], img2 = p.img[1];
      return '<article class="card' + (p.s ? '' : ' is-out') + '" data-id="' + p.id + '" tabindex="0">' +
        '<div class="card__media">' +
          '<img loading="lazy" src="' + src(img, '480-0') + '" alt="' + esc(p.n) + '" />' +
          (img2 ? '<img loading="lazy" class="card__alt" src="' + src(img2, '480-0') + '" alt="" />' : '') +
          (p.vid.length ? '<span class="badge badge--video">▶ Video</span>' : '') +
          (p.last ? '<span class="badge badge--last">Últimas 10</span>' : '') +
          (p.s ? '' : '<span class="badge badge--out">Sin stock</span>') +
        '</div>' +
        '<div class="card__body">' +
          '<p class="card__cat">' + esc(p.c) + '</p>' +
          '<h3>' + esc(p.n) + '</h3>' +
          '<p class="card__price">' + (p.v.length > 1 && p.v.some(function (v) { return v.p !== p.min; }) ? '<small>desde</small> ' : '') + money(p.min) + '</p>' +
          (p.v.length > 1 ? '<p class="card__opts">' + p.v.length + ' opciones</p>' : '') +
        '</div>' +
      '</article>';
    }).join('');
  }

  // Ficha de producto
  var modal = $('#modal');
  var current = null;

  function mediaItems(p) {
    var items = p.img.map(function (u) { return { t: 'img', u: u }; });
    p.vid.forEach(function (id) { items.push({ t: 'vid', u: id }); });
    return items;
  }

  function showMedia(item) {
    var main = $('#mMain');
    if (item.t === 'img') {
      main.innerHTML = '<img src="' + src(item.u, '1024-1024') + '" alt="' + esc(current.n) + '" />';
    } else {
      main.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(item.u) + '?autoplay=1&rel=0" title="Video del producto" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    }
  }

  function selectThumb(i) {
    var items = mediaItems(current);
    showMedia(items[i]);
    Array.prototype.forEach.call($('#mThumbs').children, function (el, k) { el.classList.toggle('is-active', k === i); });
  }

  function setVariant(i) {
    var v = current.v[i];
    $('#mPrice').textContent = money(v ? v.p : current.min);
    var ok = v ? v.s : current.s;
    var last = current.last && ok;
    $('#mStock').textContent = last ? '¡Últimas 10 unidades!' : (ok ? 'Disponible' : 'Sin stock');
    $('#mStock').className = 'info__stock ' + (last ? 'is-last' : (ok ? 'is-ok' : 'is-out'));
    Array.prototype.forEach.call($('#mVariants').querySelectorAll('button'), function (b, k) { b.classList.toggle('is-active', k === i); });
  }

  function renderDesc(blocks) {
    return blocks.map(function (b) {
      if (b.t === 'h') return '<h4>' + esc(b.x) + '</h4>';
      if (b.t === 'ul') return '<ul>' + b.items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul>';
      return '<p>' + esc(b.x) + '</p>';
    }).join('');
  }

  function open(id) {
    current = P.filter(function (p) { return p.id === id; })[0];
    if (!current) return;
    var p = current;
    $('#mCat').textContent = p.c;
    $('#mName').textContent = p.n;
    $('#mThumbs').innerHTML = mediaItems(p).map(function (m, i) {
      if (m.t === 'img') return '<button data-i="' + i + '"><img loading="lazy" src="' + src(m.u, '100-0') + '" alt="" /></button>';
      return '<button data-i="' + i + '" class="is-video"><img loading="lazy" src="https://i.ytimg.com/vi/' + esc(m.u) + '/mqdefault.jpg" alt="Video" /><span>▶</span></button>';
    }).join('');
    $('#mVariants').innerHTML = p.v.length > 1 ? '<p>Opciones</p>' + p.v.map(function (v, i) {
      return '<button data-v="' + i + '"' + (v.s ? '' : ' class="is-out"') + '>' + esc(v.n) + '</button>';
    }).join('') : '';
    var first = p.v.findIndex(function (v) { return v.s && v.p === p.min; });
    setVariant(p.v.length ? (first >= 0 ? first : 0) : -1);
    $('#mDesc').innerHTML = renderDesc(p.d);
    selectThumb(0);
    modal.hidden = false;
    document.body.classList.add('no-scroll');
    history.replaceState(null, '', '#p-' + id);
  }

  function close() {
    modal.hidden = true;
    $('#mMain').innerHTML = '';
    document.body.classList.remove('no-scroll');
    history.replaceState(null, '', location.pathname + location.search);
  }

  // Eventos
  $('#chips').addEventListener('click', function (e) {
    var b = e.target.closest('.chip'); if (!b) return;
    state.cat = b.dataset.cat;
    Array.prototype.forEach.call(this.children, function (c) { c.classList.toggle('is-active', c === b); });
    render();
  });
  $('#search').addEventListener('input', function () {
    state.q = this.value; render();
    if (this.value && window.scrollY < $('#catalogo').offsetTop - 80) $('#catalogo').scrollIntoView({ behavior: 'smooth' });
  });
  $('#sort').addEventListener('change', function () { state.sort = this.value; render(); });
  $('#onlyStock').addEventListener('change', function () { state.stock = this.checked; render(); });
  $('#grid').addEventListener('click', function (e) {
    var c = e.target.closest('.card'); if (c) open(c.dataset.id);
  });
  $('#grid').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { var c = e.target.closest('.card'); if (c) open(c.dataset.id); }
  });
  $('#mThumbs').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) selectThumb(+b.dataset.i);
  });
  $('#mVariants').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (b) setVariant(+b.dataset.v);
  });
  modal.addEventListener('click', function (e) { if (e.target.hasAttribute('data-close')) close(); });
  document.addEventListener('keydown', function (e) {
    if (modal.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      var items = $('#mThumbs').children, n = items.length;
      var i = Array.prototype.findIndex.call(items, function (el) { return el.classList.contains('is-active'); });
      selectThumb((i + (e.key === 'ArrowRight' ? 1 : -1) + n) % n);
    }
  });
  $('#logo').addEventListener('click', function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); });

  render();
  var m = location.hash.match(/^#p-(\d+)/);
  if (m) open(m[1]);
})();
