"use strict";
!isMobile() &&
function() {
	var e = document.querySelector(".sidebar-nav-toc ");
	if (e) {
		var a = document.querySelector(".toc-list"),
			i = document.querySelector(".sidebar-nav-overview"),
			t = document.querySelector(".post-toc-wrap"),
			s = document.querySelector(".site-overview-wrap "),
			c = document.querySelector(".post-content"),
			n = [].slice.call(c.querySelectorAll("h1, h2, h3, h4, h5, h6"));
		if (i.onclick = function() {
			var i = this;
			this.classList.add("sidebar-nav-active"), [].slice.call(this.parentElement.children).map(function(e) {
				e !== i && e.classList.remove("sidebar-nav-active")
			}), s.classList.add("sidebar-section-active"), t.classList.remove("sidebar-section-active")
		}, e.onclick = function() {
			var i = this;
			this.classList.add("sidebar-nav-active"), [].slice.call(this.parentElement.children).map(function(e) {
				e !== i && e.classList.remove("sidebar-nav-active")
			}), t.classList.add("sidebar-section-active"), s.classList.remove("sidebar-section-active")
		}, 0 < n.length) n.map(function(e) {
			var i = document.createElement("li"),
				t = document.createElement("a");
			t.href = "#" + e.innerText, t.innerHTML = e.id = e.innerText, i.appendChild(t), a.appendChild(i)
		});
		else {
			e.classList.remove("sidebar-nav-active"), t.classList.remove("sidebar-section-active"), i.classList.add("sidebar-nav-active"), s.classList.add("sidebar-section-active");
			var r = document.createElement("li");
			r.innerText = "居然没有目录", a.appendChild(r)
		}
	}
	var l = document.querySelector(".sider-other"),
		o = [].slice.call(l.querySelectorAll(".sidebar-nav > li")),
		d = [].slice.call(l.querySelectorAll("section"));
	1 < l.childElementCount && (o[0].classList.add("sidebar-nav-active"), d[0].classList.add("sidebar-section-active"), o.forEach(function(e, t) {
		e.onclick = function() {
			var i = this;
			this.classList.add("sidebar-nav-active"), Array.from(this.parentElement.children).map(function(e) {
				e !== i && e.classList.remove("sidebar-nav-active")
			}), d[t].classList.add("sidebar-section-active"), d.filter(function(e) {
				return e != d[t]
			}).forEach(function(e) {
				e.classList.remove("sidebar-section-active")
			})
		}
	}))
}();