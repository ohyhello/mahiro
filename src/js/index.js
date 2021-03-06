//"use strict";
var q, i = function() {
		for (x.clearRect(0, 0, w, h), q = [{
			x: 0,
			y: .7 * h + f
		}, {
			x: 0,
			y: .7 * h - f
		}]; q[1].x < w + f;) d(q[0], q[1])
	},
	d = function(e, t) {
		x.beginPath(), x.moveTo(e.x, e.y), x.lineTo(t.x, t.y);
		var o = t.x + (2 * z() - .25) * f,
			n = y(t.y);
		x.lineTo(o, n), x.closePath(), r -= u / -50, x.fillStyle = "#" + (127 * v(r) + 128 << 16 | 127 * v(r + u / 3) + 128 << 8 | 127 * v(r + u / 3 * 2) + 128).toString(16), x.fill(), q[0] = q[1], q[1] = {
			x: o,
			y: n
		}
	},
	y = function e(t) {
		var o = t + (2 * z() - 1.1) * f;
		return h < o || o < 0 ? e(t) : o
	},
	ribbons = function() {
		document.onclick = i, (document.ontouchstart = i)()
	},
	c = document.getElementById("ribbons"),
	x = c.getContext("2d"),
	pr = window.devicePixelRatio || 1,
	w = window.innerWidth,
	h = window.innerHeight,
	f = 90,
	m = Math,
	r = 0,
	u = 2 * m.PI,
	v = m.cos,
	z = m.random;

function isMobile() {
	for (var e = navigator.userAgent, t = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], o = 0; o < t.length; o++) for (var n = t[o]; - 1 != e.indexOf(n);) return !0;
	return !1
}
function liveTime(e) {
	if (!e) throw Error("未指定日期！");
	e = new Date(e);
	var t = Math.floor((new Date).getTime() - e.getTime()) / 864e5,
		o = Math.floor(t),
		n = 24 * (t - o),
		r = Math.floor(n),
		l = 60 * (n - r),
		c = Math.floor(60 * (n - r)),
		i = Math.floor(60 * (l - c));
	document.querySelector("#live-time").innerText = "( •̀ ω •́ ) 被续 " + o + " 天 " + r + " 小时 " + c + " 分 " + i + " 秒"
}
function request(e, t, o, n) {
	var r = new XMLHttpRequest;
	if (r.onreadystatechange = function() {
		4 === r.readyState && (200 <= r.status && r.status < 300 || r.status, n(r.responseText))
	}, "POST" === e.toLocaleUpperCase) {
		if (o && 0 < Object.keys(o).length) {
			var l = "";
			for (var c in o) l += "&" + c + "=" + o[c];
			o = l.slice(1)
		}
		r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	}
	r.open(e, t, !0), r.send(o)
}
c.width = w * pr, c.height = h * pr, x.scale(pr, pr), x.globalAlpha = .6;
var loadNextPagePost = function() {
		var r = document.querySelector("#posts"),
			l = document.querySelector(".next > a") && document.querySelector(".next > a").getAttribute("href"),
			c = !0;
		return function() {
			c && (!0, request("get", l + "?loadNextPagePost=true", null, function(e) {
				var t, o = document.createElement("div");
				if (o.innerHTML = e, !1, (t = o.querySelector(".next")) || o.querySelector(".post")) {
					if (t) l = t.getAttribute("href");
					else {
						var n = document.querySelector(".loading-more-post");
						n.innerText = "没有更多了", setTimeout(function() {
							n.parentElement.removeChild(n)
						}, 2e3), c = !1
					}
					r.appendChild(o)
				}
			}))
		}
	}();

function postScroll() {
	var e;
	e = isMobile() ? 180 : 500;
	var t = document.body.scrollTop || document.documentElement.scrollTop,
		o = document.body.clientHeight || document.documentElement.clientHeight,
		n = document.body.scrollHeight || document.documentElement.scrollHeight;
	document.body.scrollTop < 500 && (document.body.scrollTop += 10), document.documentElement.scrollTop < 500 && (document.documentElement.scrollTop += 10), (e <= t || n - 1 <= o + t) && clearInterval(postScrolltimer)
}
function animateScrollTo(o) {
	var e = document.body.scrollTop || document.documentElement.scrollTop,
		t = document.body.scrollHeight || document.documentElement.scrollHeight,
		n = document.body.clientHeight || document.documentElement.clientHeight;
	if ("string" == typeof o) {
		var r = document.querySelector(o);
		o = Math.floor(r.getBoundingClientRect().top + e)
	} else o.nodeName && (o = Math.floor(o.getBoundingClientRect().top + e));
	if (o == e) return !1;
	if (t - n < o && (o = Math.floor(t - n)), o < e) var l = setInterval(function() {
		var e = document.body.scrollTop || document.documentElement.scrollTop,
			t = Math.floor(-e / 30);
		document.documentElement.scrollTop = t + e, e <= o && (document.body.scrollTop = document.documentElement.scrollTop = o, clearTimeout(l))
	}, 10);
	else if (e < o) l = setInterval(function() {
		var e = document.body.scrollTop || document.documentElement.scrollTop,
			t = o / 30;
		document.documentElement.scrollTop = document.body.scrollTop = t + e, o <= e && (document.body.scrollTop = document.documentElement.scrollTop = o, clearTimeout(l))
	}, 10)
}
function fixSider(o) {
	var n = document.querySelector(".sidebar-inner");
	document.addEventListener("scroll", function(e) {
		var t = e.target.body.scrollTop || e.target.documentElement.scrollTop;
		o <= t ? n.classList.add("affix") : n.classList.remove("affix")
	})
}
function hasBanner() {
	var o = document.querySelector(".site-nav"),
		e = navigator.userAgent;
	/.*Firefox.*/.test(e) ? document.addEventListener("DOMMouseScroll", function(e) {
		var t = (e = e || window.event).detail;
		o.style.transform = 0 < t ? "translateY(-100%)" : "translateY(0%)"
	}, {
		passive: !0
	}) : document.onmousewheel = function(e) {
		var t = (e = e || window.event).wheelDelta;
		o.style.transform = 0 < t ? "translateY(0%)" : "translateY(-100%)"
	};
	var n = document.querySelector(".sidebar-inner"),
		r = document.querySelector(".site-nav");
	document.addEventListener("scroll", function(e) {
		var t = e.target.body.scrollTop || e.target.documentElement.scrollTop;
		!isMobile() && 500 <= t ? (r.style.background = "rgba(255,255,255,.8)", r.style.boxShadow = "0 0 2px 2px rgba(172,172,172,.4)", n.classList.add("affix")) : isMobile() && 200 <= t ? (r.style.background = "rgba(255,255,255,.8)", r.style.boxShadow = "0 0 2px 2px rgba(172,172,172,.4)") : (r.style.background = "rgba(255, 255, 255, 0.1)", r.style.boxShadow = "none", !isMobile() && n.classList.remove("affix"))
	}, {
		passive: !0
	})
}!
function() {
	var e = document.querySelector(".btn-pay"),
		t = document.querySelector(".site-config");
	e && e.addEventListener("click", function(e) {
		var t = document.querySelector(".qr");
		"0px" == t.style.height ? t.style.height = "auto" : t.style.height = 0
	}), t || fixSider(50);
	var o = [].slice.call(document.querySelectorAll("img")),
		n = document.querySelector(".img-view"),
		r = document.querySelector(".img-view > img");
	o.forEach(function(e) {
		e.onclick = function() {
			r.src = this.src, r.alt = this.alt, "block" == n.style.display ? (n.classList.add("remove"), setTimeout(function() {
				n.classList.remove("remove"), n.style.display = "none"
			}, 300)) : n.style.display = "block"
		}
	}), console.info(" %c Oolong %c https://github.com/ohyhello/Oolong ", "background: #ed143d7d; padding:5px 0;", "background: #40b3ec;padding:5px 5px 5px 0;")
}();


// typed.js
    document.addEventListener('DOMContentLoaded', function(){

        Typed.new("#typed", {
            stringsElement: document.getElementById('typed-strings'),
            typeSpeed: 30,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            // defaults to null for infinite loop
            loopCount: null,
            callback: function(){ foo(); },
            resetCallback: function() { newTyped(); }
        });

        var resetElement = document.querySelector('.reset');
        if(resetElement) {
            resetElement.addEventListener('click', function() {
                document.getElementById('typed')._typed.reset();
            });
        }

    });

    function newTyped(){ /* A new typed object */ }

    function foo(){ console.log("Callback"); }

	