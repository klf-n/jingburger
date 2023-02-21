(function () {
  function t() {}
  function e(t) {
    return null == t ? (t === l ? d : y) : I && I in Object(t) ? n(t) : r(t);
  }
  function n(t) {
    var e = $.call(t, I),
      n = t[I];
    try {
      t[I] = l;
      var r = true;
    } catch (t) {}
    var o = _.call(t);
    return r && (e ? (t[I] = n) : delete t[I]), o;
  }
  function r(t) {
    return _.call(t);
  }
  function o(t, e, n) {
    function r(e) {
      var n = d,
        r = g;
      return (d = g = l), (x = e), (v = t.apply(r, n));
    }
    function o(t) {
      return (x = t), (O = setTimeout(c, e)), T ? r(t) : v;
    }
    function i(t) {
      var n = t - h,
        r = t - x,
        o = e - n;
      return w ? k(o, j - r) : o;
    }
    function f(t) {
      var n = t - h,
        r = t - x;
      return h === l || n >= e || n < 0 || (w && r >= j);
    }
    function c() {
      var t = D();
      return f(t) ? p(t) : ((O = setTimeout(c, i(t))), l);
    }
    function p(t) {
      return (O = l), S && d ? r(t) : ((d = g = l), v);
    }
    function s() {
      O !== l && clearTimeout(O), (x = 0), (d = h = g = O = l);
    }
    function y() {
      return O === l ? v : p(D());
    }
    function m() {
      var t = D(),
        n = f(t);
      if (((d = arguments), (g = this), (h = t), n)) {
        if (O === l) return o(h);
        if (w) return (O = setTimeout(c, e)), r(h);
      }
      return O === l && (O = setTimeout(c, e)), v;
    }
    var d,
      g,
      j,
      v,
      O,
      h,
      x = 0,
      T = false,
      w = false,
      S = true;
    if (typeof t != "function") throw new TypeError(b);
    return (
      (e = a(e) || 0),
      u(n) &&
        ((T = !!n.leading),
        (w = "maxWait" in n),
        (j = w ? M(a(n.maxWait) || 0, e) : j),
        (S = "trailing" in n ? !!n.trailing : S)),
      (m.cancel = s),
      (m.flush = y),
      m
    );
  }
  function i(t, e, n) {
    var r = true,
      i = true;
    if (typeof t != "function") throw new TypeError(b);
    return (
      u(n) &&
        ((r = "leading" in n ? !!n.leading : r),
        (i = "trailing" in n ? !!n.trailing : i)),
      o(t, e, { leading: r, maxWait: e, trailing: i })
    );
  }
  function u(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e);
  }
  function f(t) {
    return null != t && typeof t == "object";
  }
  function c(t) {
    return typeof t == "symbol" || (f(t) && e(t) == m);
  }
  function a(t) {
    if (typeof t == "number") return t;
    if (c(t)) return s;
    if (u(t)) {
      var e = typeof t.valueOf == "function" ? t.valueOf() : t;
      t = u(e) ? e + "" : e;
    }
    if (typeof t != "string") return 0 === t ? t : +t;
    t = t.replace(g, "");
    var n = v.test(t);
    return n || O.test(t) ? h(t.slice(2), n ? 2 : 8) : j.test(t) ? s : +t;
  }
  var l,
    p = "4.17.5",
    b = "Expected a function",
    s = NaN,
    y = "[object Null]",
    m = "[object Symbol]",
    d = "[object Undefined]",
    g = /^\s+|\s+$/g,
    j = /^[-+]0x[0-9a-f]+$/i,
    v = /^0b[01]+$/i,
    O = /^0o[0-7]+$/i,
    h = parseInt,
    x =
      typeof global == "object" && global && global.Object === Object && global,
    T = typeof self == "object" && self && self.Object === Object && self,
    w = x || T || Function("return this")(),
    S = typeof exports == "object" && exports && !exports.nodeType && exports,
    N = S && typeof module == "object" && module && !module.nodeType && module,
    E = Object.prototype,
    $ = E.hasOwnProperty,
    _ = E.toString,
    W = w.Symbol,
    I = W ? W.toStringTag : l,
    M = Math.max,
    k = Math.min,
    D = function () {
      return w.Date.now();
    };
  (t.debounce = o),
    (t.throttle = i),
    (t.isObject = u),
    (t.isObjectLike = f),
    (t.isSymbol = c),
    (t.now = D),
    (t.toNumber = a),
    (t.VERSION = p),
    typeof define == "function" && typeof define.amd == "object" && define.amd
      ? ((w._ = t),
        define(function () {
          return t;
        }))
      : N
      ? (((N.exports = t)._ = t), (S._ = t))
      : (w._ = t);
}.call(this));

let checkHeader = _.throttle(() => {
  console.log("checkHeader");

  // Detect scroll position
  let scrollPosition = Math.round(window.scrollY);

  // If we've scrolled 100px, add "sticky" class to the header
  if (scrollPosition > 100) {
    document.querySelector("header").classList.add("sticky");
  }
  // If not, remove "sticky" class from header
  else {
    document.querySelector("header").classList.remove("sticky");
  }
}, 300);

// 채고다 징버거 텍스트
// window.addEventListener('scroll', checkHeader);

// const content = '1995. 10. 8. 징버거님 생일 축하해요!!🍔'
// const txt = document.querySelector('.txt');
// let n = 0;

// const typing = function() {
//     txt.innerHTML += content[n++]; //.txt엘리먼트에 위에 content의 변수에 저장한 문자를 순차적으로 뿌리겠다.
//     if(n > content.length) { // content의의 변수 길이가 넘으면 제안을 설정한다.
//         txt.innerHTML = ''; // .txt엘리먼트에 위에 빈문자를 뿌리겠다.
//         n = 0;              // n번째를 0으로 초기화 하겠다.
//     }
// };

// setInterval(typing, 310);

var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);