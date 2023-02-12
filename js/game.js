"use strict";
function _typeof(t) {
  "@babel/helpers - typeof";
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function (t) {
          return typeof t;
        }
      : function (t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(t);
}
var GoogleAuth;
!(function () {
  const application = {};
  const aux = {};
  const extension = {};
  const inject = {};

  window.addEventListener("load", function () {
    //document.getElementById("game-wrap").style.display = "block";
    //document.getElementById("error-view").style.display = "block";
    inject.b = {
      c: function (t, a, e) {
        t.stop(), t.fadeIn(a, e);
      },
      d: function (t, a, e) {
        t.stop(), t.fadeOut(a, e);
      },
    };
    inject.e = (() => {
      var PIXI = new Function("return PIXI;")(),
        a = PIXI["BLEND_MODES"],
        i = PIXI["WRAP_MODES"];
      return {
        f: PIXI["Container"],
        g: PIXI["BaseTexture"],
        h: PIXI["Texture"],
        i: PIXI["Renderer"],
        j: PIXI["Graphics"],
        k: PIXI["Shader"],
        l: PIXI["Rectangle"],
        m: PIXI["Sprite"],
        n: PIXI["Text"],
        o: PIXI["Geometry"],
        p: PIXI["Mesh"],
        q: {
          r: a["ADD"],
          s: a["SCREEN"],
          t: a["MULTIPLY"],
        },
        u: {
          v: i["REPEAT"],
        },
        w: {
          z: function (t) {
            null != t.parent && t.parent.removeChild(t);
          },
        },
      };
    })();
    aux.A = {
      B: window["runtimeHash"],
      C: "https://gateway.wormate.io",
      D: "https://resources.wormate.io",
      F: "/images/linelogo-xmas2023.png",
      G: "/images/guest-avatar-xmas2023.png",
      H: "/images/confetti-xmas2023.png",
      I: "/images/bg-event-pattern-xmas2023.png",
    };
    aux.A.J = (function () {
      var t = window["I18N_LANG"];
      return t || (t = "en"), t;
    })();
    aux.A.K = (function () {
      var t;
      switch (aux.A.J) {
        case "uk":
          t = "uk_UA";
          break;
        case "de":
          t = "de_DE";
          break;
        case "fr":
          t = "fr_FR";
          break;
        case "es":
          t = "es_ES";
          break;
        default:
          t = "en_US";
      }
      return t;
    })();
    moment.locale(aux.A.K);
    aux.L = null;
    aux.M = 2 * Math.PI;
    aux.N = Math.PI(
      (function () {
        var t = window["I18N_MESSAGES"];
        extension.O = function (a) {
          return t[a];
        };
      })()
    );
    extension.P = function (t) {
      return t[aux.A.J]
        ? t[aux.A.J]
        : t["en"]
        ? t["en"]
        : t["x"];
    };
    extension.Q = function (t) {
      return encodeURI(t);
    };
    extension.R = function (t, a) {
      return setInterval(t, a);
    };
    extension.S = function (t, a) {
      return setTimeout(t, a);
    };
    extension.T = function (t) {
      clearTimeout(t);
    };
    extension.U = function (t) {
      const seconds = Math.floor(t);
      const days = Math.floor(seconds / 86400);
      const hours = Math.floor((seconds % 86400) / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const strings = [
        [days, extension.O("util.time.days")],
        [hours, extension.O("util.time.hours")],
        [minutes, extension.O("util.time.min")],
        [remainingSeconds, extension.O("util.time.sec")],
      ];

      const formattedStrings = strings
        .filter(([value]) => value > 0)
        .map(([value, label]) => `${value} ${label}`);

      return formattedStrings.join(" ");
    };
    extension.V = function (t) {
      return t.includes("href")
        ? t.replaceAll("href", 'target="_black" href')
        : t;
    };
    extension.loadScript = function loadScript(
      url,
      options = {},
      callback = null
    ) {
      const script = document.createElement("script");

      if (options.id) {
        script.id = options.id;
      }

      if (options.async) {
        script.async = true;
      }

      if (options.defer) {
        script.defer = true;
      }

      if (options.crossorigin) {
        script.crossOrigin = options.crossorigin;
      }

      script.type = "text/javascript";
      script.src = url;

      if (callback) {
        let finished = false;
        script.onload = script.onreadystatechange = () => {
          if (!finished) {
            finished = true;
            try {
              callback();
            } catch (e) {}
            script.onload = script.onreadystatechange = null;
          }
        };
      }

      const head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(script);
    };
    extension.X = function (t, a) {
      var e = a;
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        (e.parent = t),
        e
      );
    };
    extension.Y = function (t) {
      return (t %= aux.M), t < 0 ? t + aux.M : t;
    };
    extension.Z = function (t, a, i) {
      return extension.$(i, t, a);
    };
    extension.$ = function (t, a, e) {
      return t > e ? e : t < a ? a : Number.isFinite(t) ? t : 0.5 * (a + e);
    };
    extension._ = function (t, a, e, i) {
      return a > t ? Math.min(a, t + e * i) : Math.max(a, t - e * i);
    };
    extension.aa = function (t, a, e, i, c) {
      return a + (t - a) * Math.pow(1 - i, e / c);
    };
    extension.ba = function (t, a, e) {
      return t - (t - a) * e;
    };
    extension.ca = function (t, a, e, i) {
      var c = e,
        n = a,
        f = a + i;
      if (null == t) throw new TypeError();
      var o = t.length >>> 0,
        h = c >> 0,
        d = h < 0 ? Math.max(o + h, 0) : Math.min(h, o),
        s = n >> 0,
        b = s < 0 ? Math.max(o + s, 0) : Math.min(s, o),
        r = void 0 === f ? o : f >> 0,
        u = r < 0 ? Math.max(o + r, 0) : Math.min(r, o),
        p = Math.min(u - b, o - d),
        l = 1;
      for (
        b < d && d < b + p && ((l = -1), (b += p - 1), (d += p - 1));
        p > 0;

      )
        b in t ? (t[d] = t[b]) : delete t[d], (b += l), (d += l), p--;
      return t;
    };
    extension.da = function (t, a) {
      return t + (a - t) * Math.random();
    };
    extension.ea = function (t) {
      return t[parseInt(Math.random() * t.length)];
    };
    extension.fa = function () {
      return Math.random().toString(36).substring(2, 15);
    };
    extension.ga = function (t, a, e) {
      var i = (1 - Math.abs(2 * e - 1)) * a,
        c = i * (1 - Math.abs(((t / 60) % 2) - 1)),
        n = e - i / 2;
      return 0 <= t && t < 60
        ? [n + i, n + c, n]
        : 60 <= t && t < 120
        ? [n + c, n + i, n]
        : 120 <= t && t < 180
        ? [n, n + i, n + c]
        : 180 <= t && t < 240
        ? [n, n + c, n + i]
        : 240 <= t && t < 300
        ? [n + c, n, n + i]
        : [n + i, n, n + c];
    };
    extension.ha = function (t, a, e) {
      $.get(t).fail(a).done(e);
    };
    extension.ia = function (t, a, i, c) {
      $.ajax({
        type: "GET",
        url: t,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function (t) {
            t.lengthComputable && c((t.loaded / t.total) * 100);
          },
        },
      })
        .fail(a)
        .done(i);
    };
    extension.ja = function () {
      return Date.now();
    };
    extension.ka = function (t, a) {
      for (var e in t) t.hasOwnProperty(e) && a(e, t[e]);
    };
    extension.la = function (t) {
      for (var a = t.length - 1; a > 0; a--) {
        var e = Math.floor(Math.random() * (a + 1)),
          i = t[a];
        (t[a] = t[e]), (t[e] = i);
      }
      return t;
    };
    application.ma = new Function("return ArrayBuffer;")();
    application.na = new Function("return DataView;")();
    application.oa = (function () {
      function t(t) {
        (this.pa = t), (this.qa = 0);
      }
      var a = "getInt8";
      t.prototype.ra = function () {
        var t = this.pa[a](this.qa);
        return (this.qa += 1), t;
      };
      var i = "getInt16";
      t.prototype.sa = function () {
        var t = this.pa[i](this.qa);
        return (this.qa += 2), t;
      };
      var c = "getInt32";
      t.prototype.ta = function () {
        var t = this.pa[c](this.qa);
        return (this.qa += 4), t;
      };
      var n = "getFloat32";
      return (
        (t.prototype.ua = function () {
          var t = this.pa[n](this.qa);
          return (this.qa += 4), t;
        }),
        t
      );
    })()(
      (application.va = (function () {
        function t(t) {
          (this.pa = t), (this.qa = 0);
        }
        var a = "setInt8";
        t.prototype.wa = function (t) {
          this.pa[a](this.qa, t), (this.qa += 1);
        };
        var i = "setInt16";
        return (
          (t.prototype.xa = function (t) {
            this.pa[i](this.qa, t), (this.qa += 2);
          }),
          t
        );
      })())
    );
      (extension.ya = function () {
        function t() {
          $("#adbl-1").text(extension.O("index.game.antiadblocker.msg1")),
            $("#adbl-2").text(extension.O("index.game.antiadblocker.msg2")),
            $("#adbl-3").text(extension.O("index.game.antiadblocker.msg3")),
            $("#adbl-4").text(
              extension.O("index.game.antiadblocker.msg4").replace("{0}", 10)
            ),
            $("#adbl-continue span").text(
              extension.O("index.game.antiadblocker.continue")
            ),
            inject.b.d($("#adbl-continue"), 1),
            inject.b.c(s, 500);
          for (var t = 10, c = 0; c < 10; c++)
            extension.S(function () {
              if (
                (t--,
                $("#adbl-4").text(
                  extension.O("index.game.antiadblocker.msg4").replace("{0}", t)
                ),
                0 === t)
              ) {
                try {
                  ga(
                    "send",
                    "event",
                    "antiadblocker",
                    aux.A.B + "_complete"
                  );
                } catch (t) {}
                inject.b.c($("#adbl-continue"), 200);
              }
            }, 1e3 * (c + 1));
        }
        var c = !1,
          n = function () {},
          f = {},
          o = "1eaom01c3pxu9wd3",
          h = $("#" + o),
          d = "JDHnkHtYwyXyVgG9",
          s = $("#" + d);
        return (
          $("#adbl-continue").click(function () {
            s.fadeOut(500), n(!1);
          }),
          (f.za = function (t) {
            if (((n = t), !c))
              try {
                aiptag.cmd.player.push(function () {
                  var t = {};
                  (t["AD_WIDTH"] = 960),
                    (t["AD_HEIGHT"] = 540),
                    (t["AD_FULLSCREEN"] = !0),
                    (t["AD_CENTERPLAYER"] = !1),
                    (t["LOADING_TEXT"] = "loading advertisement"),
                    (t["PREROLL_ELEM"] = function () {
                      return document.getElementById(o);
                    }),
                    (t["AIP_COMPLETE"] = function (t) {
                      n(!0), inject.b.d(h, 1), inject.b.d(s, 1);
                      try {
                        ga(
                          "send",
                          "event",
                          "preroll",
                          aux.A.B + "_complete"
                        );
                      } catch (t) {}
                    }),
                    (t["AIP_REMOVE"] = function () {}),
                    (aiptag.adplayer = new aipPlayer(t));
                }),
                  (c = !0);
              } catch (t) {}
          }),
          (f.Aa = function () {
            if (_typeof(aiptag.adplayer) !== "undefined") {
              try {
                ga("send", "event", "preroll", aux.A.B + "_request");
              } catch (t) {}
              inject.b.c(h, 1),
                aiptag.cmd.player.push(function () {
                  aiptag.adplayer.startPreRoll();
                });
            } else {
              try {
                ga(
                  "send",
                  "event",
                  "antiadblocker",
                  aux.A.B + "_start"
                );
              } catch (t) {}
              t();
            }
          }),
          f
        );
      }),
      (extension.Ba = function (t, i) {
        var c = $("#" + t),
          n = i,
          f = {},
          o = !1;
        return (
          (f.za = function () {
            if (!o) {
              c.empty(), c.append("<div id='" + n + "'></div>");
              try {
                try {
                  ga("send", "event", "banner", aux.A.B + "_display");
                } catch (t) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(n);
                }),
                  (o = !0);
              } catch (t) {}
            }
          }),
          (f.Ca = function () {
            try {
              try {
                ga("send", "event", "banner", aux.A.B + "_refresh");
              } catch (t) {}
              aiptag.cmd.display.push(function () {
                aipDisplayTag.display(n);
              });
            } catch (t) {}
          }),
          f
        );
      }),
      (application.Da = (function () {
        function t(t, a, e, i, c, n, f, o, h, d) {
          (this.Ea = t),
            (this.Fa = a),
            (this.Ga = null),
            (this.Ha = !1),
            (this.Ia = e),
            (this.Ja = i),
            (this.Ka = c),
            (this.La = n),
            (this.Ma = f || (h || c) / 2),
            (this.Na = o || (d || n) / 2),
            (this.Oa = h || c),
            (this.Pa = d || n),
            (this.Qa = 0.5 - (this.Ma - 0.5 * this.Oa) / this.Ka),
            (this.Ra = 0.5 - (this.Na - 0.5 * this.Pa) / this.La),
            (this.Sa = this.Ka / this.Oa),
            (this.Ta = this.La / this.Pa);
        }
        return (
          (t.Ua = function () {
            return new t("", null, 0, 0, 0, 0, 0, 0, 0, 0);
          }),
          (t.Va = function (a, i, c) {
            return new t(
              a,
              i,
              c["x"],
              c["y"],
              c["w"],
              c["h"],
              c["px"],
              c["py"],
              c["pw"],
              c["ph"]
            );
          }),
          (t.prototype.Wa = function () {
            return this.Ha
              ? this.Ga
              : (null != this.Fa &&
                  (this.Ga = new inject.e.h(
                    this.Fa,
                    new inject.e.l(this.Ia, this.Ja, this.Ka, this.La)
                  )),
                (this.Ha = !0),
                this.Ga);
          }),
          (t.prototype.Xa = function () {
            null != this.Ga && this.Ga.destroy();
          }),
          t
        );
      })()),
      (application.Ya = (function () {
        function a(t, a, e, i, c, n, f, o, h, d, s, b, r, u, p, l, g, v) {
          (this.Za = t),
            (this.$a = a),
            (this._a = e),
            (this.ab = i),
            (this.bb = c),
            (this.cb = n),
            (this.db = f),
            (this.eb = o),
            (this.fb = h),
            (this.gb = d),
            (this.hb = s),
            (this.ib = b),
            (this.jb = r),
            (this.kb = u),
            (this.lb = p),
            (this.mb = l),
            (this.nb = g),
            (this.ob = v);
        }
        return (
          (a.prototype.Xa = function () {
            for (var t = 0; t < this.Za.length; t++)
              this.Za[t].dispose(), this.Za[t].destroy();
            this.Za = [];
            for (var a = 0; a < this.$a.length; a++) this.$a[a].Xa();
            this.$a = [];
          }),
          (a.Ua = function () {
            var i = new a.pb(application.rb.qb, application.rb.qb),
              c = new a.sb("#ffffff", [application.rb.qb], [application.rb.qb]);
            return new a(
              [],
              [],
              {},
              i,
              {},
              new a.tb(application.rb.qb),
              {},
              c,
              {},
              new a.ub("", c, i),
              {},
              new a.vb([application.rb.qb]),
              {},
              new a.vb([application.rb.qb]),
              {},
              new a.vb([application.rb.qb]),
              {},
              new a.vb([application.rb.qb])
            );
          }),
          (a.wb = function (i, c, n, f) {
            var o = new a.pb(application.rb.qb, application.rb.qb),
              h = new a.sb("#ffffff", [i], [c]);
            return new a(
              [],
              [],
              {},
              o,
              {},
              new a.tb(application.rb.qb),
              {},
              h,
              {},
              new a.ub("", h, o),
              {},
              new a.vb([n]),
              {},
              new a.vb([f]),
              {},
              new a.vb([application.rb.qb]),
              {},
              new a.vb([application.rb.qb])
            );
          }),
          (a.xb = function (t, i, c, n) {
            var f = {};
            extension.ka(t["colorDict"], function (t, a) {
              f[t] = "#" + a;
            });
            for (var o = {}, h = 0; h < t["skinArrayDict"].length; h++) {
              var d = t["skinArrayDict"][h];
              o[d["id"]] = new a.sb(
                f[d["prime"]],
                d["base"].map(function (t) {
                  return i[t];
                }),
                d["glow"].map(function (t) {
                  return i[t];
                })
              );
            }
            var s,
              b = t["skinUnknown"];
            s = new a.sb(
              f[b["prime"]],
              b["base"].map(function (t) {
                return i[t];
              }),
              b["glow"].map(function (t) {
                return i[t];
              })
            );
            var r = {};
            extension.ka(t["eyesDict"], function (t, c) {
              var n = parseInt(t);
              r[n] = new a.vb(
                c["base"].map(function (t) {
                  return i[t["region"]];
                })
              );
            });
            var u = new a.vb(
                t["eyesUnknown"]["base"].map(function (t) {
                  return i[t["region"]];
                })
              ),
              p = {};
            extension.ka(t["mouthDict"], function (t, c) {
              var n = parseInt(t);
              p[n] = new a.vb(
                c["base"].map(function (t) {
                  return i[t["region"]];
                })
              );
            });
            var l = new a.vb(
                t["mouthUnknown"]["base"].map(function (t) {
                  return i[t["region"]];
                })
              ),
              g = {};
            extension.ka(t["hatDict"], function (t, c) {
              var n = parseInt(t);
              g[n] = new a.vb(
                c["base"].map(function (t) {
                  return i[t["region"]];
                })
              );
            });
            var v = new a.vb(
                t["hatUnknown"]["base"].map(function (t) {
                  return i[t["region"]];
                })
              ),
              y = {};
            extension.ka(t["glassesDict"], function (t, c) {
              var n = parseInt(t);
              y[n] = new a.vb(
                c["base"].map(function (t) {
                  return i[t["region"]];
                })
              );
            });
            var j = new a.vb(
                t["glassesUnknown"]["base"].map(function (t) {
                  return i[t["region"]];
                })
              ),
              m = {};
            extension.ka(t["portionDict"], function (t, c) {
              (t = parseInt(t)), (m[t] = new a.pb(i[c["base"]], i[c["glow"]]));
            });
            var w,
              k = t["portionUnknown"];
            w = new a.pb(i[k["base"]], i[k["glow"]]);
            var L = {};
            extension.ka(t["abilityDict"], function (t, c) {
              (t = parseInt(t)), (L[t] = new a.tb(i[c["base"]]));
            });
            var C,
              M = t["abilityUnknown"];
            C = new a.tb(i[M["base"]]);
            var S = {};
            extension.ka(t["teamDict"], function (t, c) {
              (t = parseInt(t)),
                (S[t] = new a.ub(
                  c["title"],
                  new a.sb(
                    f[c["skin"]["prime"]],
                    null,
                    c["skin"]["glow"].map(function (t) {
                      return i[t];
                    })
                  ),
                  new a.pb(null, i[c["portion"]["glow"]])
                ));
            });
            var $ = new a.ub({}, s, w);
            return new a(c, n, m, w, L, C, o, s, S, $, r, u, p, l, g, v, y, j);
          }),
          (a.prototype.yb = function (a) {
            for (
              var i = extension.la(Object.keys(this.db)).slice(0, a),
                c = extension.la(Object.keys(this.hb)).slice(0, a),
                n = extension.la(Object.keys(this.jb)).slice(0, a),
                f = extension.la(Object.keys(this.lb)).slice(0, a),
                o = extension.la(Object.keys(this.nb)).slice(0, a),
                h = [],
                d = 0;
              d < a;
              d++
            ) {
              var s = i.length > 0 ? i[d % i.length] : 0,
                b = c.length > 0 ? c[d % c.length] : 0,
                r = n.length > 0 ? n[d % n.length] : 0,
                u = f.length > 0 ? f[d % f.length] : 0,
                p = o.length > 0 ? o[d % o.length] : 0;
              h.push(new application.zb(s, b, r, u, p));
            }
            return h;
          }),
          (a.prototype.Ab = function (t) {
            return this.db.hasOwnProperty(t) ? this.db[t] : this.eb;
          }),
          (a.prototype.Bb = function (t) {
            return this.fb.hasOwnProperty(t) ? this.fb[t] : this.gb;
          }),
          (a.prototype.Cb = function (t) {
            return this.hb.hasOwnProperty(t) ? this.hb[t] : this.ib;
          }),
          (a.prototype.Db = function (t) {
            return this.jb.hasOwnProperty(t) ? this.jb[t] : this.kb;
          }),
          (a.prototype.Eb = function (t) {
            return this.nb.hasOwnProperty(t) ? this.nb[t] : this.ob;
          }),
          (a.prototype.Fb = function (t) {
            return this.lb.hasOwnProperty(t) ? this.lb[t] : this.mb;
          }),
          (a.prototype.Gb = function (t) {
            return this._a.hasOwnProperty(t) ? this._a[t] : this.ab;
          }),
          (a.prototype.Hb = function (t) {
            return this.bb.hasOwnProperty(t) ? this.bb[t] : this.cb;
          }),
          (a.ub = (function () {
            function t(t, a, e) {
              (this.Ib = t), (this.Jb = a), (this.Kb = e);
            }
            return t;
          })()),
          (a.sb = (function () {
            function t(t, a, e) {
              (this.Lb = t), (this.Mb = a), (this.Nb = e);
            }
            return t;
          })()),
          (a.vb = (function () {
            function t(t) {
              this.Mb = t;
            }
            return t;
          })()),
          (a.pb = (function () {
            function t(t, a) {
              (this.Mb = t), (this.Nb = a);
            }
            return t;
          })()),
          (a.tb = (function () {
            function t(t) {
              this.Mb = t;
            }
            return t;
          })()),
          a
        );
      })()),
      (application.rb = (function () {
        function a() {
          var a = inject.e.g.from("/images/wear-ability.png");
          (this.Ob = new application.Da(
            "magnet_ability",
            a,
            158,
            86,
            67,
            124,
            148,
            63.5,
            128,
            128
          )),
            (this.Pb = new application.Da(
              "velocity_ability",
              a,
              158,
              4,
              87,
              74,
              203,
              63.5,
              128,
              128
            )),
            (this.Qb = new application.Da(
              "flex_ability",
              a,
              4,
              4,
              146,
              146,
              63.5,
              63.5,
              128,
              128
            ));
          var c = inject.e.g.from("/images/def-look.png"),
            n = new application.Da("def_eyes", c, 0, 0, 42, 80, 75, 64, 128, 128),
            f = new application.Da("def_mouth", c, 46, 0, 20, 48, 109, 63, 128, 128),
            o = new application.Da("def_skin_glow", c, 70, 0, 32, 32, 0, 0, 0, 0),
            h = new application.Da("def_skin_base", c, 46, 52, 64, 64, 0, 0, 0, 0),
            d = application.Ya.wb(h, o, n, f);
          (this.Rb = new application.Sb({}, d)),
            (this.Tb = -1e4),
            (this.Ub = -1e4),
            (this.Vb = (function () {
              var t = window.document.createElement("canvas");
              return (
                (t.width = 80),
                (t.height = 80),
                {
                  Wb: t,
                  Xb: t.getContext("2d"),
                  Ga: new inject.e.h(inject.e.g.from(t)),
                }
              );
            })()),
            (this.Yb = null),
            (this.Zb = []);
        }
        return (
          (a.qb = application.Da.Ua()),
          (a.prototype.za = function () {}),
          (a.prototype.$b = function (a, i, c) {
            var n = this,
              f = this.Rb._b();
            if (f > 0 && extension.ja() - this.Tb < 12e5)
              return void (null != a && a());
            if (null != this.Yb && !this.Yb.ac()) {
              if (extension.ja() - this.Tb < 3e5)
                return void (null != a && a());
              this.Yb.bc(), (this.Yb = null);
            }
            var o = new application.cc(f);
            o.dc(function (t, a) {
              o === n.Yb && null != c && c(t, a);
            }),
              o.ec(function (t) {
                o === n.Yb && null != i && i(t);
              }),
              o.fc(function () {
                o === n.Yb && null != i && i(new Error());
              }),
              o.gc(function () {
                o === n.Yb && null != a && a();
              }),
              o.hc(function (t) {
                if (o === n.Yb)
                  return (
                    (n.Ub = extension.ja()),
                    (n.Yb = null),
                    n.ic(),
                    n.Rb.jc().Xa(),
                    (n.Rb = t),
                    null != a && a(),
                    void n.kc()
                  );
                try {
                  t.jc().Xa();
                } catch (t) {}
              }),
              o.lc(),
              (this.Tb = extension.ja()),
              (this.Yb = o);
          }),
          (a.prototype.ic = function () {}),
          (a.prototype.mc = function () {
            return this.Rb._b() > 0;
          }),
          (a.prototype.nc = function () {
            return this.Rb.oc();
          }),
          (a.prototype.pc = function () {
            return this.Vb;
          }),
          (a.prototype.qc = function (t) {
            this.Zb.push(t);
          }),
          (a.prototype.kc = function () {
            for (var t = 0; t < this.Zb.length; t++) this.Zb[t]();
          }),
          (a.prototype.jc = function () {
            return this.Rb.jc();
          }),
          a
        );
      })()),
      (application.rc = (function () {
        function t(t) {
          this.sc = t;
        }
        return (
          (t.prototype.tc = function (t) {
            return this.sc[t];
          }),
          (t.uc = (function () {
            function a() {
              this.vc = [];
            }
            return (
              (a.prototype.wc = function (a, e) {
                for (var i = 0; i < this.vc.length; i++)
                  if (this.vc[i].xc === a) throw new Error();
                return this.vc.push(new t.yc(a, e)), this;
              }),
              (a.prototype.zc = function () {
                for (var a = 0, e = 0; e < this.vc.length; e++)
                  a += this.vc[e].Ac;
                for (var i = {}, c = 0, n = 0; n < this.vc.length; n++) {
                  var f = this.vc[n];
                  (f.Ac = f.Ac / a),
                    (f.Bc = c),
                    (f.Cc = c + f.Ac),
                    (c = f.Cc),
                    (i[f.xc] = f);
                }
                return new t(i);
              }),
              a
            );
          })()),
          (t.yc = (function () {
            function t(t, a) {
              (this.xc = t), (this.Ac = a), (this.Bc = 0), (this.Cc = 0);
            }
            return (
              (t.prototype.Dc = function (t) {
                return this.Bc + (this.Cc - this.Bc) * t;
              }),
              t
            );
          })()),
          t
        );
      })()),
      (application.Ec = (function () {
        function c() {
          (this.Fc = new inject.e.f()),
            (this.Fc.sortableChildren = !0),
            (this.Gc = new L()),
            (this.Gc.zIndex = n * (2 * (f + 1) + 1 + 3)),
            (this.Hc = 0),
            (this.Ic = new Array(f)),
            (this.Ic[0] = this.Jc(0, new application.Kc(), new application.Kc()));
          for (var a = 1; a < f; a++)
            this.Ic[a] = this.Jc(a, new application.Kc(), new application.Kc());
          (this.Lc = 0), (this.Mc = 0), (this.Nc = 0);
        }
        var n = 0.001,
          f = 797,
          o = 0.1 * Math.PI,
          h = -0.06640625,
          d = 0.84375,
          s = 0.2578125,
          b = -0.03515625,
          r = -0.0625,
          u = 0.5625,
          p = 3 * h + d,
          l = s - 3 * h,
          g = h + b,
          v = 0.375,
          y = 0.75,
          j = r + r,
          m = 3 * b + s,
          w = d - 3 * b,
          k = b + h;
        (c.Oc = f),
          (c.prototype.Jc = function (t, a, e) {
            var i = new C(a, e);
            return (
              (a.Pc.zIndex = n * (2 * (f - t) + 1 + 3)),
              (e.Pc.zIndex = n * (2 * (f - t) - 2 + 3)),
              i
            );
          }),
          (c.prototype.Qc = function (a, e, i, c, n, f, o, h) {
            var d = i.Mb,
              s = a === application.Sc.Rc ? e.Jb.Nb : i.Nb;
            if (d.length > 0 && s.length > 0)
              for (var b = 0; b < this.Ic.length; b++)
                this.Ic[b].Uc.Tc(d[b % d.length]),
                  this.Ic[b].Vc.Tc(s[b % s.length]),
                  this.Ic[b].Uc.Wc(h),
                  this.Ic[b].Vc.Wc(h);
            this.Gc.Qc(c, n, f, o);
          });
        var L = (function () {
          var c = extension.X(inject.e.f, function () {
            inject.e.f.call(this),
              (this.sortableChildren = !0),
              (this.Xc = []),
              (this.Yc = []),
              (this.Zc = []),
              (this.$c = []),
              (this._c = new inject.e.f()),
              (this.ad = []);
            for (var e = 0; e < 4; e++) {
              var c = new application.Kc();
              c.Tc(aux.L.bd.Ob),
                this._c.addChild(c.Pc),
                this.ad.push(c);
            }
            (this._c.zIndex = 0.0011),
              this.addChild(this._c),
              this.cd(),
              (this.dd = new application.Kc()),
              this.dd.Tc(aux.L.bd.Pb),
              (this.dd.Pc.zIndex = 0.001),
              this.addChild(this.dd.Pc),
              this.ed();
          });
          return (
            (c.prototype.Qc = function (t, a, e, i) {
              this.fd(0.002, this.Xc, t.Mb),
                this.fd(0.003, this.Yc, a.Mb),
                this.fd(0.004, this.$c, i.Mb),
                this.fd(0.005, this.Zc, e.Mb);
            }),
            (c.prototype.fd = function (a, e, i) {
              for (; i.length > e.length; ) {
                var c = new application.Kc();
                e.push(c), this.addChild(c.gd());
              }
              for (; i.length < e.length; ) {
                e.pop().z();
              }
              for (var n = a, f = 0; f < i.length; f++) {
                n += 1e-4;
                var o = e[f];
                o.Tc(i[f]), (o.Pc.zIndex = n);
              }
            }),
            (c.prototype.hd = function (t, a, e, i) {
              (this.visible = !0), this.position.set(t, a), (this.rotation = i);
              for (var c = 0; c < this.Xc.length; c++) this.Xc[c].jd(e);
              for (var n = 0; n < this.Yc.length; n++) this.Yc[n].jd(e);
              for (var f = 0; f < this.Zc.length; f++) this.Zc[f].jd(e);
              for (var o = 0; o < this.$c.length; o++) this.$c[o].jd(e);
            }),
            (c.prototype.kd = function () {
              this.visible = !1;
            }),
            (c.prototype.ld = function (t, a, e, i) {
              this._c.visible = !0;
              for (
                var c = e / 1e3, n = 1 / this.ad.length, f = 0;
                f < this.ad.length;
                f++
              ) {
                var o = 1 - ((c + n * f) % 1);
                (this.ad[f].Pc.alpha = 1 - o),
                  this.ad[f].jd(a * (0.5 + 4.5 * o));
              }
            }),
            (c.prototype.cd = function () {
              this._c.visible = !1;
            }),
            (c.prototype.md = function (t, a, i, c) {
              (this.dd.Pc.visible = !0),
                (this.dd.Pc.alpha = extension._(
                  this.dd.Pc.alpha,
                  t.nd ? 0.9 : 0.2,
                  c,
                  0.0025
                )),
                this.dd.jd(a);
            }),
            (c.prototype.ed = function () {
              this.dd.Pc.visible = !1;
            }),
            c
          );
        })();
        (c.prototype.od = function (t) {
          return this.Mc + this.Nc * Math.sin(t * o - this.Lc);
        }),
          (c.prototype.pd = function (a, e, c, n) {
            var f = 2 * a.qd,
              o = a.rd,
              L = a.sd,
              M = 4 * L - 3,
              S = M;
            (this.Lc = (e / 400) * Math.PI),
              (this.Mc = 1.5 * f),
              (this.Nc = 0.15 * f * a.td);
            var $, q, F, x, z, I, A, J;
            if (((q = o[0]), (I = o[1]), n(q, I))) {
              (F = o[2]), (A = o[3]), (x = o[4]), (J = o[5]);
              var P = Math.atan2(J + 2 * I - 3 * A, x + 2 * q - 3 * F);
              this.Gc.hd(q, I, f, P),
                this.Ic[0].hd(q, I, f, this.od(0), P),
                this.Ic[1].hd(
                  p * q + l * F + g * x,
                  p * I + l * A + g * J,
                  f,
                  this.od(1),
                  C.ud(this.Ic[0], this.Ic[2])
                ),
                this.Ic[2].hd(
                  v * q + y * F + j * x,
                  v * I + y * A + j * J,
                  f,
                  this.od(2),
                  C.ud(this.Ic[1], this.Ic[3])
                ),
                this.Ic[3].hd(
                  m * q + w * F + k * x,
                  m * I + w * A + k * J,
                  f,
                  this.od(3),
                  C.ud(this.Ic[2], this.Ic[4])
                );
            } else
              this.Gc.kd(),
                this.Ic[0].kd(),
                this.Ic[1].kd(),
                this.Ic[2].kd(),
                this.Ic[3].kd();
            for (var Y = 4, E = 2, X = 2 * L - 4; E < X; E += 2)
              (q = o[E]),
                (I = o[E + 1]),
                n(q, I)
                  ? (($ = o[E - 2]),
                    (z = o[E - 1]),
                    (F = o[E + 2]),
                    (A = o[E + 3]),
                    (x = o[E + 4]),
                    (J = o[E + 5]),
                    this.Ic[Y].hd(
                      q,
                      I,
                      f,
                      this.od(Y),
                      C.ud(this.Ic[Y - 1], this.Ic[Y + 1])
                    ),
                    Y++,
                    this.Ic[Y].hd(
                      h * $ + d * q + s * F + b * x,
                      h * z + d * I + s * A + b * J,
                      f,
                      this.od(Y),
                      C.ud(this.Ic[Y - 1], this.Ic[Y + 1])
                    ),
                    Y++,
                    this.Ic[Y].hd(
                      r * $ + u * q + u * F + r * x,
                      r * z + u * I + u * A + r * J,
                      f,
                      this.od(Y),
                      C.ud(this.Ic[Y - 1], this.Ic[Y + 1])
                    ),
                    Y++,
                    this.Ic[Y].hd(
                      b * $ + s * q + d * F + h * x,
                      b * z + s * I + d * A + h * J,
                      f,
                      this.od(Y),
                      C.ud(this.Ic[Y - 1], this.Ic[Y + 1])
                    ),
                    Y++)
                  : (this.Ic[Y].kd(),
                    Y++,
                    this.Ic[Y].kd(),
                    Y++,
                    this.Ic[Y].kd(),
                    Y++,
                    this.Ic[Y].kd(),
                    Y++);
            for (
              q = o[2 * L - 4],
                I = o[2 * L - 3],
                n(q, I)
                  ? (($ = o[2 * L - 6]),
                    (z = o[2 * L - 5]),
                    (F = o[2 * L - 2]),
                    (A = o[2 * L - 1]),
                    this.Ic[M - 5].hd(
                      q,
                      I,
                      f,
                      this.od(M - 5),
                      C.ud(this.Ic[M - 6], this.Ic[M - 4])
                    ),
                    this.Ic[M - 4].hd(
                      k * $ + w * q + m * F,
                      k * z + w * I + m * A,
                      f,
                      this.od(M - 4),
                      C.ud(this.Ic[M - 5], this.Ic[M - 3])
                    ),
                    this.Ic[M - 3].hd(
                      j * $ + y * q + v * F,
                      j * z + y * I + v * A,
                      f,
                      this.od(M - 3),
                      C.ud(this.Ic[M - 4], this.Ic[M - 2])
                    ),
                    this.Ic[M - 2].hd(
                      g * $ + l * q + p * F,
                      g * z + l * I + p * A,
                      f,
                      this.od(M - 2),
                      C.ud(this.Ic[M - 3], this.Ic[M - 1])
                    ),
                    this.Ic[M - 1].hd(
                      F,
                      A,
                      f,
                      this.od(M - 1),
                      C.ud(this.Ic[M - 2], this.Ic[M - 1])
                    ))
                  : (this.Ic[M - 5].kd(),
                    this.Ic[M - 4].kd(),
                    this.Ic[M - 3].kd(),
                    this.Ic[M - 2].kd(),
                    this.Ic[M - 1].kd()),
                0 === this.Hc && S > 0 && this.Fc.addChild(this.Gc),
                this.Hc > 0 && 0 === S && inject.e.w.z(this.Gc);
              this.Hc < S;

            )
              this.Fc.addChild(this.Ic[this.Hc].Uc.gd()),
                this.Fc.addChild(this.Ic[this.Hc].Vc.gd()),
                (this.Hc += 1);
            for (; this.Hc > S; )
              (this.Hc -= 1), this.Ic[this.Hc].Vc.z(), this.Ic[this.Hc].Uc.z();
            var O = a.vd[application.xd.wd];
            this.Ic[0].yd() && null != O && O.zd
              ? this.Gc.ld(a, f, e, c)
              : this.Gc.cd();
            var B = a.vd[application.xd.Ad];
            this.Ic[0].yd() && null != B && B.zd
              ? this.Gc.md(a, f, e, c)
              : this.Gc.ed();
          });
        var C = (function () {
          function t(t, a) {
            (this.Uc = t), this.Uc.Bd(!1), (this.Vc = a), this.Vc.Bd(!1);
          }
          return (
            (t.prototype.hd = function (t, a, e, i, c) {
              this.Uc.Bd(!0),
                this.Uc.Cd(t, a),
                this.Uc.jd(e),
                this.Uc.Dd(c),
                this.Vc.Bd(!0),
                this.Vc.Cd(t, a),
                this.Vc.jd(i),
                this.Vc.Dd(c);
            }),
            (t.prototype.kd = function () {
              this.Uc.Bd(!1), this.Vc.Bd(!1);
            }),
            (t.prototype.yd = function () {
              return this.Uc.yd();
            }),
            (t.ud = function (t, a) {
              return Math.atan2(
                t.Uc.Pc.position.y - a.Uc.Pc.position.y,
                t.Uc.Pc.position.x - a.Uc.Pc.position.x
              );
            }),
            t
          );
        })();
        return c;
      })()),
      (application.xd = (function () {
        function t(t) {
          (this.Ed = t), (this.zd = !1), (this.Fd = 1);
        }
        return (
          (t.Ad = 0),
          (t.Gd = 1),
          (t.wd = 2),
          (t.Hd = 6),
          (t.Id = 3),
          (t.Jd = 4),
          (t.Kd = 5),
          t
        );
      })()),
      (application.Sb = (function () {
        function a(t, a) {
          (this.Ld = t), (this.Md = a);
        }
        return (
          (a.Nd = new a({}, application.Ya.Ua())),
          (a.prototype._b = function () {
            return this.Ld["revision"];
          }),
          (a.prototype.oc = function () {
            return this.Ld;
          }),
          (a.prototype.jc = function () {
            return this.Md;
          }),
          a
        );
      })()),
      (application.cc = (function () {
        function c(t) {
          (this.Od = (function () {
            ++c.Pd;
            return function (t, a) {};
          })()),
            (this.Qd = t),
            (this.Rd = null),
            (this.Sd = null),
            (this.Td = null),
            (this.Ud = null),
            (this.Vd = null),
            (this.Wd = !1),
            (this.Xd = !1),
            (this.Yd = !1);
        }
        return (
          (c.Zd = {
            $d: "0x0",
            _d: "0x1",
            ae: "0x2",
            be: "0x3",
            ce: "0x4",
          }),
          (c.Pd = 1e5),
          (c.de = new application.rc.uc()
            .wc(c.Zd.$d, 1)
            .wc(c.Zd._d, 10)
            .wc(c.Zd.ae, 50)
            .wc(c.Zd.be, 15)
            .wc(c.Zd.ce, 5)
            .zc()),
          (c.prototype.hc = function (t) {
            this.Rd = t;
          }),
          (c.prototype.gc = function (t) {
            this.Sd = t;
          }),
          (c.prototype.ec = function (t) {
            this.Td = t;
          }),
          (c.prototype.fc = function (t) {
            this.Ud = t;
          }),
          (c.prototype.dc = function (t) {
            this.Vd = t;
          }),
          (c.prototype.ac = function () {
            return this.Yd;
          }),
          (c.prototype.bc = function () {
            this.Wd = !0;
          }),
          (c.prototype.lc = function () {
            if (!this.Xd) {
              if (((this.Xd = !0), this.Wd)) return void this.ee();
              this.fe();
            }
          }),
          (c.prototype.fe = function () {
            function t(t) {
              var a = c.Zd.$d;
              i.ge(a, c.de.tc(a).Dc(t));
            }
            var i = this;
            if (this.Wd) return void this.ee();
            $.ajax({
              type: "GET",
              url: aux.A.D + "/dynamic/assets/revision.json",
              xhrFields: {
                onprogress: function (a) {
                  a.lengthComputable && t(a.loaded / a.total);
                },
              },
            })
              .fail(function () {
                i.he(new Error());
              })
              .done(function (t) {
                if (t <= i.Qd) return void i.ie();
                i.je();
              });
          }),
          (c.prototype.je = function () {
            function t(t) {
              var a = c.Zd._d;
              i.ge(a, c.de.tc(a).Dc(t));
            }
            var i = this;
            if (this.Wd) return void this.ee();
            $.ajax({
              type: "GET",
              url: aux.A.D + "/dynamic/assets/registry.json",
              xhrFields: {
                onprogress: function (a) {
                  a.lengthComputable && t(a.loaded / a.total);
                },
              },
            })
              .fail(function () {
                i.he(new Error());
              })
              .done(function (t) {
                if (t["revision"] <= i.Qd) return void i.ie();
                i.ke(t);
              });
          }),
          (c.prototype.ke = function (t) {
            function i(t) {
              var a = c.Zd.ae;
              n.ge(a, c.de.tc(a).Dc(t));
            }
            var n = this;
            if (this.Wd) return void this.ee();
            var f = [],
              o = [],
              h = 0;
            for (var d in t["textureDict"])
              if (t["textureDict"].hasOwnProperty(d)) {
                var s = t["textureDict"][d],
                  b = aux.A.D + s["relativePath"],
                  r = s["fileSize"],
                  u = s["sha256"],
                  p = new c.le(d, b, r, u);
                f.push(p);
                o.push(p), (h += r);
              }
            var l,
              g = 0,
              v = function (t) {
                for (var a = 0; a < o.length; a++)
                  try {
                    window.URL.revokeObjectURL(o[a].me);
                  } catch (t) {}
                n.he(t);
              },
              y = function (t) {
                var a = Math.floor(l.ne * t);
                i((g + a) / h);
              },
              j = function (t) {
                var a = new Blob([t]);
                (l.me = window.URL.createObjectURL(a)), (g += l.ne), m();
              },
              m = function () {
                if (w < o.length) return (l = o[w++]), void n.oe(l, v, j, y);
                extension.S(function () {
                  return n.pe(t, f);
                }, 0);
              },
              w = 0;
            m();
          }),
          (c.prototype.oe = function (t, a, i, c) {
            $.ajax({
              type: "GET",
              url: t.qe,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function (t) {
                  t.lengthComputable && c(t.loaded / t.total);
                },
              },
            })
              .fail(function () {
                a(new Error());
              })
              .done(function (t) {
                i(t);
              });
          }),
          (c.prototype.pe = function (a, n) {
            function f(t) {
              var a = c.Zd.be;
              o.ge(a, c.de.tc(a).Dc(t));
            }
            var o = this;
            if (this.Wd) return void this.ee();
            var h,
              d,
              s = {},
              b = function () {
                for (var t = 0; t < n.length; t++)
                  try {
                    window.URL.revokeObjectURL(n[t].me);
                  } catch (t) {}
                o.he(new Error());
              },
              r = function () {
                f(p / n.length), (s[h.re] = new application.se(h.me, d)), u();
              },
              u = function () {
                if (p < n.length)
                  return (
                    (h = n[p++]),
                    (d = inject.e.g.from(h.me)),
                    d.on("error", b),
                    void d.on("loaded", r)
                  );
                extension.S(function () {
                  return o.te(a, s);
                }, 0);
              },
              p = 0;
            u();
          }),
          (c.prototype.te = function (a, i) {
            function n(t) {
              var a = c.Zd.ce;
              f.ge(a, c.de.tc(a).Dc(t));
            }
            var f = this,
              o = {},
              h = 0,
              d = Object.values(a["regionDict"]).length;
            extension.ka(a["regionDict"], function (a, c) {
              var f = application.Da.Va(c["texture"] + ":" + a, i[c["texture"]].Ga, c);
              (o[a] = f), ++h % 10 == 0 && n(h / d);
            });
            var s = Object.values(i).map(function (t) {
                return t.Ga;
              }),
              b = Object.values(o),
              r = new application.Sb(a, application.Ya.xb(a, o, s, b));
            extension.S(function () {
              return f.ue(r);
            }, 0);
          }),
          (c.le = (function () {
            function t(t, a, i, c) {
              (this.re = t),
                (this.qe = a),
                (this.ne = i),
                (this.ve = c),
                (this.me = "");
            }
            return t;
          })()),
          (c.prototype.ue = function (t) {
            if (this.Yd) return void t.jc().Xa();
            this.Yd = !0;
            var a = this;
            extension.S(function () {
              return a.Rd(t);
            }, 0);
          }),
          (c.prototype.ie = function () {
            if (!this.Yd) {
              this.Yd = !0;
              var t = this;
              extension.S(function () {
                return t.Sd();
              }, 0);
            }
          }),
          (c.prototype.he = function (t) {
            if (!this.Yd) {
              this.Yd = !0;
              var a = this;
              extension.S(function () {
                return a.Td(t);
              }, 0);
            }
          }),
          (c.prototype.ee = function () {
            if (!this.Yd) {
              this.Yd = !0;
              var t = this;
              extension.S(function () {
                return t.Ud();
              }, 0);
            }
          }),
          (c.prototype.ge = function (t, a) {
            if (!this.Yd && !this.Wd) {
              var i = this;
              extension.S(function () {
                return i.Vd(t, a);
              }, 0);
            }
          }),
          c
        );
      })()),
      (application.we = (function () {
        return {};
      })()),
      (application.xe = (function () {
        function e() {
          (this.ye = application.xe.Ae.ze),
            (this.Be = !1),
            (this.Ce = !1),
            (this.De = null),
            (this.Ee = null);
        }
        return (
          (e.prototype.za = function () {}),
          (e.prototype.Fe = function (t) {
            this.Ce = t;
          }),
          (e.prototype.Ge = function (t) {
            (this.ye = t), this.He();
          }),
          (e.prototype.Ie = function (t) {
            (this.Be = t), this.He();
          }),
          (e.prototype.He = function () {}),
          (e.prototype.Je = function (t, e) {
            if (!aux.L.bd.mc()) return null;
            var i = t[e];
            return null == i || 0 === i.length
              ? null
              : i[Math.floor(Math.random() * i.length)].cloneNode();
          }),
          (e.prototype.Ke = function (t, a, e) {
            if (this.Ce && !(e <= 0)) {
              var i = this.Je(t, a);
              null != i && ((i.volume = Math.min(1, e)), i.play());
            }
          }),
          (e.prototype.Le = function (t, a) {
            this.ye.Me && this.Ke(app.Oe.Ne, t, a);
          }),
          (e.prototype.Pe = function (t, a) {
            this.ye.Qe && this.Ke(app.Oe.Re, t, a);
          }),
          (e.prototype.Se = function () {}),
          (e.prototype.Te = function () {}),
          (e.prototype.Ue = function () {}),
          (e.prototype.Ve = function () {}),
          (e.prototype.We = function () {}),
          (e.prototype.Xe = function () {}),
          (e.prototype.Ye = function (t, a, e) {}),
          (e.prototype.Ze = function (t) {}),
          (e.prototype.$e = function (t) {}),
          (e.prototype._e = function (t) {}),
          (e.prototype.af = function (t) {}),
          (e.prototype.bf = function (t) {}),
          (e.prototype.cf = function (t) {}),
          (e.prototype.df = function (t) {}),
          (e.prototype.ef = function (t) {}),
          (e.prototype.ff = function (t) {}),
          (e.prototype.gf = function (t) {}),
          (e.prototype.hf = function (t) {}),
          (e.prototype.if = function (t) {}),
          (e.prototype.jf = function (t) {}),
          (e.prototype.kf = function (t) {}),
          (e.prototype.lf = function (t, a) {}),
          (e.prototype.mf = function (t) {}),
          (e.prototype.nf = function (t, a, e) {}),
          (e.Ae = {
            ze: {
              pf: !1,
              qf: !1,
              Qe: !0,
              Me: !1,
            },
            rf: {
              pf: !1,
              qf: !0,
              Qe: !0,
              Me: !1,
            },
            sf: {
              pf: !0,
              qf: !1,
              Qe: !1,
              Me: !0,
            },
            tf: {
              pf: !1,
              qf: !1,
              Qe: !0,
              Me: !1,
            },
            uf: {
              pf: !1,
              qf: !1,
              Qe: !1,
              Me: !1,
            },
          }),
          e
        );
      })()),
      (application.vf = (function () {
        function c(e) {
          (this.wf = e),
            (this.Wb = e.get()[0]),
            (this.xf = 1),
            (this.yf = 1),
            (this.zf = new application.Af(f, o, application.Cf.Bf)),
            (this.Df = new inject.e.i({
              view: this.Wb,
              backgroundColor: n,
              antialias: !0,
            })),
            (this.Ef = new inject.e.f()),
            (this.Ef.sortableChildren = !0),
            (this.Ff = new inject.e.f()),
            (this.Ff.zIndex = 0),
            this.Ef.addChild(this.Ff),
            (this.Gf = new application.Hf(aux.L.Oe.If)),
            (this.Gf.Jf.zIndex = 1),
            this.Ef.addChild(this.Gf.Jf);
          var c = this.zf.Kf();
          (c.zIndex = 2),
            this.Ef.addChild(c),
            (this.Lf = new inject.e.f()),
            (this.Lf.zIndex = 3),
            this.Ef.addChild(this.Lf),
            (this.Mf = []),
            (this.Nf = []),
            (this.Of = []),
            this.za();
        }
        var n = 0,
          f = 5,
          o = 40,
          h = [
            {
              Pf: 1,
              Qf: 0.5,
              Rf: 0.5,
            },
            {
              Pf: 1,
              Qf: 0.75,
              Rf: 0.5,
            },
            {
              Pf: 1,
              Qf: 1,
              Rf: 0.5,
            },
            {
              Pf: 0.75,
              Qf: 1,
              Rf: 0.5,
            },
            {
              Pf: 0.5,
              Qf: 1,
              Rf: 0.5,
            },
            {
              Pf: 0.5,
              Qf: 1,
              Rf: 0.75,
            },
            {
              Pf: 0.5,
              Qf: 1,
              Rf: 1,
            },
            {
              Pf: 0.5,
              Qf: 0.75,
              Rf: 1,
            },
            {
              Pf: 0.5,
              Qf: 0.5,
              Rf: 1,
            },
            {
              Pf: 0.75,
              Qf: 0.5,
              Rf: 1,
            },
            {
              Pf: 1,
              Qf: 0.5,
              Rf: 1,
            },
            {
              Pf: 1,
              Qf: 0.5,
              Rf: 0.75,
            },
          ];
        (c.prototype.za = function () {
          (this.Df.backgroundColor = n), (this.Mf = new Array(h.length));
          for (var t = 0; t < this.Mf.length; t++)
            (this.Mf[t] = new inject.e.m()),
              (this.Mf[t].texture = aux.L.Oe.Sf),
              this.Mf[t].anchor.set(0.5),
              this.Ff.addChild(this.Mf[t]);
          this.Nf = new Array(aux.L.Oe.Tf.length);
          for (var c = 0; c < this.Nf.length; c++)
            (this.Nf[c] = new inject.e.m()),
              (this.Nf[c].texture = aux.L.Oe.Tf[c]),
              this.Nf[c].anchor.set(0.5),
              this.Lf.addChild(this.Nf[c]);
          this.Of = new Array(this.Nf.length);
          for (var f = 0; f < this.Of.length; f++) {
            var o = [1, 1, 1];
            this.Of[f] = {
              Uf: extension.da(0, aux.M),
              Vf: 0.66 * extension.da(0.09, 0.16),
              Wf: extension.da(0, 1),
              Xf: extension.da(0, 1),
              Yf: 0,
              Pf: o[0],
              Qf: o[1],
              Rf: o[2],
            };
          }
          this.Zf(), this.$f();
        }),
          (c.zd = !1),
          (c._f = function (t) {
            c.zd = t;
          }),
          (c.prototype.ag = function (t) {
            this.zf._f(t);
          }),
          (c.prototype.$f = function () {
            var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
            (this.xf = this.wf.width()),
              (this.yf = this.wf.height()),
              this.Df.resize(this.xf, this.yf),
              (this.Df.resolution = t),
              (this.Wb.width = t * this.xf),
              (this.Wb.height = t * this.yf);
            for (
              var a = 0.6 * Math.max(this.xf, this.yf), e = 0;
              e < this.Mf.length;
              e++
            )
              (this.Mf[e].width = a), (this.Mf[e].height = a);
            this.Gf.bg(this.xf, this.yf), this.zf.$f();
          }),
          (c.prototype.cg = function (t, i) {
            if (c.zd) {
              for (
                var n = t / 1e3,
                  f = i / 1e3,
                  o = this.wf.width(),
                  d = this.wf.height(),
                  s = 0;
                s < this.Mf.length;
                s++
              ) {
                var b = h[s % h.length],
                  r = this.Mf[s],
                  u = (s / this.Mf.length) * aux.N,
                  p = 0.5 * n * 0.12,
                  l =
                    Math.cos(3 * (p + u)) * Math.cos(u) -
                    Math.sin(5 * (p + u)) * Math.sin(u),
                  g =
                    Math.cos(3 * (p + u)) * Math.sin(u) +
                    Math.sin(5 * (p + u)) * Math.cos(u),
                  v = 0.2 + 0.2 * Math.cos(u + 0.075 * n),
                  y =
                    (255 & (255 * b.Pf)) |
                    (65280 & ((255 * b.Qf) << 8)) |
                    (16711680 & ((255 * b.Rf) << 16));
                (r.tint = y),
                  (r.alpha = v),
                  r.position.set(
                    o * (0.2 + 0.5 * (l + 1) * 0.6),
                    d * (0.1 + 0.5 * (g + 1) * 0.8)
                  );
              }
              for (
                var j = 0.05 * Math.max(o, d), m = 0;
                m < this.Nf.length;
                m++
              ) {
                var w = this.Of[m],
                  k = this.Nf[m],
                  L = (aux.M * m) / this.Nf.length + w.Uf;
                (w.Xf += w.Vf * f),
                  w.Xf > 1.1 &&
                    ((w.Uf = Math.random() * aux.M),
                    (w.Vf = 0.66 * (0.09 + 0.07 * Math.random())),
                    (w.Wf = 0.15 + 0.7 * Math.random()),
                    (w.Xf = -0.1));
                var C = w.Wf + 0.03 * Math.sin(6 * Math.sin(L + 0.48 * n)),
                  M = w.Xf,
                  S = 0.5 * (0.4 + 0.5 * (1 + Math.sin(L + 0.12 * n)) * 1.2),
                  $ = L + 2 * w.Vf * n,
                  q = extension.$(Math.sin(Math.PI * M), 0.1, 1),
                  F =
                    (255 & (255 * w.Pf)) |
                    (65280 & ((255 * w.Qf) << 8)) |
                    (16711680 & ((255 * w.Rf) << 16));
                (k.alpha = q),
                  (k.tint = F),
                  k.position.set(o * C, d * M),
                  (k.rotation = $);
                var x = k.texture.width / k.texture.height;
                (k.width = S * j), (k.height = S * j * x);
              }
              this.dg(), this.Df.render(this.Ef, null, !0);
            }
          }),
          (c.prototype.eg = function () {
            if (aux.L.bd.mc())
              for (var t = aux.L.bd.jc().yb(f), i = 0; i < f; i++)
                this.zf.fg(i, t[i]);
            else
              for (var c = extension.da(0, 1), n = 0; n < f; n++) {
                var o = (c + n / f) % 1,
                  h = extension.ga(Math.floor(360 * o), 0.85, 0.5),
                  d =
                    (255 & (255 * h[0])) |
                    (65280 & ((255 * h[1]) << 8)) |
                    (16711680 & ((255 * h[2]) << 16)),
                  s = "000000" + d.toString(16);
                (s = "#" + s.substring(s.length - 6, s.length)),
                  this.zf.gg(n, s);
              }
          }),
          (c.prototype.Zf = function () {
            for (
              var t = Math.min(this.xf, this.yf), i = extension.ja(), c = 0;
              c < f;
              c++
            ) {
              var n = (c / f) * aux.M,
                o = d(i, 0.12, n);
              (o.Ia = 4 * o.Ia),
                (o.Ja = 4 * o.Ja),
                this.zf.hg(
                  c,
                  0.5 * (this.xf + o.Ia * t),
                  0.5 * (this.yf + o.Ja * t)
                );
            }
          }),
          (c.prototype.dg = function () {
            for (
              var t = Math.min(this.xf, this.yf), i = extension.ja(), c = 0;
              c < f;
              c++
            ) {
              var n = (c / f) * aux.M,
                o = d(i, 0.12, n);
              this.zf.ig(
                c,
                0.5 * (this.xf + o.Ia * t),
                0.5 * (this.yf + o.Ja * t)
              );
            }
            this.zf.jg();
          });
        var d = function (t, a, e) {
          var i = t / 1e3;
          return {
            Ia:
              0.8 *
              (Math.cos(a * i + e) +
                0.4 * Math.cos(-32 * a * i + e) +
                0.7 * Math.cos(7 * a * i + e)),
            Ja:
              0.8 *
              (Math.sin(a * i + e) +
                0.4 * Math.sin(-32 * a * i + e) +
                0.7 * Math.sin(7 * a * i + e)),
          };
        };
        return c;
      })()),
      (application.kg = (function () {
        function t() {}
        return (
          (t.lg = "consent_state_2"),
          (t.mg = "showPlayerNames"),
          (t.ng = "musicEnabled"),
          (t.og = "sfxEnabled"),
          (t.pg = "account_type"),
          (t.qg = "gameMode"),
          (t.rg = "nickname"),
          (t.sg = "skin"),
          (t.tg = "prerollCount"),
          (t.ug = "shared"),
          (t.vg = function (t, a, i) {
            var c = new Date();
            c.setTime(c.getTime() + 864e5 * i);
            var n = "expires=" + c.toUTCString();
            document.cookie = t + "=" + a + "; " + n;
          }),
          (t.wg = function (t) {
            for (
              var a = t + "=", i = document.cookie.split(";"), c = 0;
              c < i.length;
              c++
            ) {
              for (var n = i[c]; n.charAt(0) == " "; ) n = n.substring(1);
              if (0 == n.indexOf(a)) return n.substring(a.length, n.length);
            }
            return "";
          }),
          t
        );
      })()),
      (aux.xg = (function () {
        function t(t, a, e) {
          for (var i = !1, c = e.length, n = 0, f = c - 1; n < c; f = n++)
            e[n][1] > a != e[f][1] > a &&
              t <
                ((e[f][0] - e[n][0]) * (a - e[n][1])) / (e[f][1] - e[n][1]) +
                  e[n][0] &&
              (i = !i);
          return i;
        }
        var a = [
          [-28.06744, 64.95936],
          [-10.59082, 72.91964],
          [14.11773, 81.39558],
          [36.51855, 81.51827],
          [32.82715, 71.01696],
          [31.64063, 69.41897],
          [29.41419, 68.43628],
          [30.64379, 67.47302],
          [29.88281, 66.76592],
          [30.73975, 65.50385],
          [30.73975, 64.47279],
          [31.48682, 63.49957],
          [32.18994, 62.83509],
          [28.47726, 60.25122],
          [28.76221, 59.26588],
          [28.03711, 58.60833],
          [28.38867, 57.53942],
          [28.83955, 56.2377],
          [31.24512, 55.87531],
          [31.61865, 55.34164],
          [31.92627, 54.3037],
          [33.50497, 53.26758],
          [32.73926, 52.85586],
          [32.23389, 52.4694],
          [34.05762, 52.44262],
          [34.98047, 51.79503],
          [35.99121, 50.88917],
          [36.67236, 50.38751],
          [37.74902, 50.51343],
          [40.78125, 49.62495],
          [40.47363, 47.70976],
          [38.62799, 46.92028],
          [37.53193, 46.55915],
          [36.72182, 44.46428],
          [39.68218, 43.19733],
          [40.1521, 43.74422],
          [43.52783, 43.03678],
          [45.30762, 42.73087],
          [46.99951, 41.98399],
          [47.26318, 40.73061],
          [44.20009, 40.86309],
          [45.35156, 39.57182],
          [45.43945, 36.73888],
          [35.64789, 35.26481],
          [33.13477, 33.65121],
          [21.47977, 33.92486],
          [12.16268, 34.32477],
          [11.82301, 37.34239],
          [6.09112, 38.28597],
          [-1.96037, 35.62069],
          [-4.82156, 35.60443],
          [-7.6498, 35.26589],
          [-16.45237, 37.44851],
          [-28.06744, 64.95936],
        ];
        return {
          yg: function (e, i) {
            return t(i, e, a);
          },
        };
      })()),
      (application.zg = (function () {
        function t(t) {
          var a;
          a = t > 0 ? "+" + Math.floor(t) : t < 0 ? "-" + Math.floor(t) : "0";
          var i,
            c = Math.min(1.5, 0.5 + t / 600);
          if (t < 1) i = "0xFFFFFF";
          else if (t < 30) {
            var f = (t - 1) / 29;
            i = n(
              1 * (1 - f) + 0.96 * f,
              1 * (1 - f) + 0.82 * f,
              1 * (1 - f) + 0 * f
            );
          } else if (t < 300) {
            var h = (t - 30) / 270;
            i = n(
              0.96 * (1 - h) + 0.93 * h,
              0.82 * (1 - h) + 0.34 * h,
              0 * (1 - h) + 0.25 * h
            );
          } else if (t < 700) {
            var d = (t - 300) / 400;
            i = n(
              0.93 * (1 - d) + 0.98 * d,
              0.34 * (1 - d) + 0 * d,
              0.25 * (1 - d) + 0.98 * d
            );
          } else i = n(0.98, 0, 0.98);
          var s = Math.random(),
            b = 1 + 0.5 * Math.random();
          return new o(a, i, !0, 0.5, c, s, b);
        }
        function c(t, a) {
          var e, i;
          return (
            a
              ? ((e = 1.3), (i = n(0.93, 0.34, 0.25)))
              : ((e = 1.1), (i = n(0.96, 0.82, 0))),
            new o(t, i, !0, 0.5, e, 0.5, 0.7)
          );
        }
        function n(t, a, e) {
          return (
            (((255 * t) & 255) << 16) +
            (((255 * a) & 255) << 8) +
            ((255 * e) & 255)
          );
        }
        var f = extension.X(inject.e.f, function () {
          inject.e.f.call(this), (this.Ag = []), (this.Bg = 0);
        });
        (f.prototype.Cg = function (a) {
          if (((this.Bg += a), this.Bg >= 1)) {
            var e = Math.floor(this.Bg);
            this.Bg -= e;
            var i = t(e);
            this.addChild(i), this.Ag.push(i);
          }
        }),
          (f.prototype.Dg = function (t) {
            if (t) {
              var a = c(extension.O("index.game.floating.headshot"), !0);
              this.addChild(a), this.Ag.push(a);
            } else {
              var i = c(extension.O("index.game.floating.wellDone"), !1);
              this.addChild(i), this.Ag.push(i);
            }
          }),
          (f.prototype.jg = function (t, e) {
            for (
              var c = aux.L.Fg.sf.Eg,
                n = c.Df.width / c.Df.resolution,
                f = c.Df.height / c.Df.resolution,
                o = 0;
              o < this.Ag.length;

            ) {
              var h = this.Ag[o];
              (h.Gg = h.Gg + (e / 2e3) * h.Hg),
                (h.Ig = h.Ig + (e / 2e3) * h.Jg),
                (h.alpha = 0.5 * Math.sin(Math.PI * h.Ig)),
                h.scale.set(h.Gg),
                (h.position.x = n * (0.25 + 0.5 * h.Kg)),
                (h.position.y = h.Lg
                  ? f * (1 - 0.5 * (1 + h.Ig))
                  : f * (1 - 0.5 * (0 + h.Ig))),
                h.Ig > 1 && (inject.e.w.z(h), this.Ag.splice(o, 1), o--),
                o++;
            }
          });
        var o = (function () {
          return extension.X(inject.e.n, function (t, a, c, n, f, o, h) {
            inject.e.n.call(this, t, {
              fill: a,
              fontFamily: "PTSans",
              fontSize: 36,
            }),
              this.anchor.set(0.5),
              (this.Lg = c),
              (this.Gg = n),
              (this.Hg = f),
              (this.Kg = o),
              (this.Ig = 0),
              (this.Jg = h);
          });
        })();
        return f;
      })()),
      (application.se = (function () {
        function t(t, a) {
          (this.me = t), (this.Ga = a);
        }
        return t;
      })()),
      (application.Sc = {
        Mg: 0,
        Rc: 16,
      }),
      (application.Ng = (function () {
        function a() {
          (this.Og = application.Sc.Mg),
            (this.Pg = 0),
            (this.Qg = 500),
            (this.Rg = 4e3),
            (this.Sg = 7e3);
        }
        return (
          (a.Tg = 0),
          (a.prototype.Ug = function () {
            return 1.02 * this.Qg;
          }),
          a
        );
      })()),
      (application.Vg = (function () {
        function c(a) {
          (this.wf = a),
            (this.Wb = a.get()[0]),
            (this.Df = new inject.e.i({
              view: this.Wb,
              backgroundColor: n,
              antialias: !0,
            })),
            (this.Ef = new inject.e.f()),
            (this.Ef.sortableChildren = !0),
            (this.Wg = Math.floor(360 * Math.random())),
            (this.Xg = 0),
            (this.Yg = 0),
            (this.Zg = 15),
            (this.$g = 0.5),
            (this._g = 0),
            (this.ah = new application.bh()),
            (this.ch = new inject.e.j()),
            (this.dh = new inject.e.f()),
            (this.eh = new inject.e.f()),
            (this.eh.sortableChildren = !0),
            (this.fh = new inject.e.f()),
            (this.gh = new inject.e.f()),
            (this.gh.sortableChildren = !0),
            (this.hh = new inject.e.f()),
            (this.ih = new f()),
            (this.jh = new o()),
            (this.kh = new h()),
            (this.lh = new application.zg()),
            (this.mh = new inject.e.m()),
            (this.nh = {
              x: 0,
              y: 0,
            }),
            this.za();
        }
        var n = 0;
        (c.prototype.za = function () {
          (this.Df.backgroundColor = n),
            (this.ah.Jf.zIndex = 10),
            this.Ef.addChild(this.ah.Jf),
            (this.ch.zIndex = 20),
            this.Ef.addChild(this.ch),
            (this.dh.zIndex = 5e3),
            this.Ef.addChild(this.dh),
            (this.eh.zIndex = 5100),
            this.Ef.addChild(this.eh),
            (this.fh.zIndex = 1e4),
            this.Ef.addChild(this.fh),
            (this.mh.texture = aux.L.Oe.oh),
            this.mh.anchor.set(0.5),
            (this.mh.zIndex = 1),
            this.gh.addChild(this.mh),
            (this.hh.alpha = 0.6),
            (this.hh.zIndex = 2),
            this.gh.addChild(this.hh),
            (this.lh.zIndex = 3),
            this.gh.addChild(this.lh),
            (this.ih.alpha = 0.8),
            (this.ih.zIndex = 4),
            this.gh.addChild(this.ih),
            (this.jh.zIndex = 5),
            this.gh.addChild(this.jh),
            (this.kh.zIndex = 6),
            this.gh.addChild(this.kh),
            this.$f();
        }),
          (c.prototype.$f = function () {
            var t = window.devicePixelRatio ? window.devicePixelRatio : 1,
              a = this.wf.width(),
              e = this.wf.height();
            this.Df.resize(a, e),
              (this.Df.resolution = t),
              (this.Wb.width = t * a),
              (this.Wb.height = t * e),
              (this.$g = Math.min(Math.min(a, e), 0.625 * Math.max(a, e))),
              (this.mh.position.x = a / 2),
              (this.mh.position.y = e / 2),
              (this.mh.width = a),
              (this.mh.height = e),
              (this.ih.position.x = 60),
              (this.ih.position.y = 60),
              (this.jh.position.x = 110),
              (this.jh.position.y = 10),
              (this.kh.position.x = a - 225),
              (this.kh.position.y = 1);
          }),
          (c.prototype.jg = function (e, i) {
            (this.Zg = 15),
              this.dh.removeChildren(),
              this.eh.removeChildren(),
              this.fh.removeChildren(),
              this.hh.removeChildren(),
              this.ah.ph(
                e.Og === application.Sc.Mg ? aux.L.Oe.qh : aux.L.Oe.rh
              );
            var c = this.ch;
            c.clear(),
              c.lineStyle(0.2, 16711680, 0.3),
              c.drawCircle(0, 0, e.Qg),
              c.endFill(),
              (this.kh.sh = i),
              (this.hh.visible = i);
          }),
          (c.prototype.cg = function (i, c) {
            if (!(this.Df.width <= 5)) {
              var n = aux.L.uh.th,
                f = this.Df.width / this.Df.resolution,
                o = this.Df.height / this.Df.resolution;
              this.Zg = extension._(this.Zg, aux.L.uh.vh, c, 0.002);
              var h = this.$g / this.Zg,
                d = aux.L.uh.th.vd[application.xd.Hd],
                s = null != d && d.zd;
              (this._g = extension.$(
                this._g + (c / 1e3) * (0.1 * (s ? 1 : 0) - this._g),
                0,
                1
              )),
                (this.mh.alpha = this._g),
                (this.Wg = this.Wg + 0.01 * c),
                this.Wg > 360 && (this.Wg = this.Wg % 360),
                (this.Xg = Math.sin((i / 1200) * 2 * Math.PI));
              var b = n.wh();
              (this.nh.x = extension.aa(this.nh.x, b.Ia, c, 0.5, 33.333)),
                (this.nh.y = extension.aa(this.nh.y, b.Ja, c, 0.5, 33.333));
              var r = f / h / 2,
                u = o / h / 2;
              aux.L.uh.xh(
                this.nh.x - 1.3 * r,
                this.nh.x + 1.3 * r,
                this.nh.y - 1.3 * u,
                this.nh.y + 1.3 * u
              ),
                this.ah.jg(this.nh.x, this.nh.y, 2 * r, 2 * u);
              var p = aux.L.uh.yh.Qg;
              (this.Ef.scale.x = h),
                (this.Ef.scale.y = h),
                (this.Ef.position.x = f / 2 - this.nh.x * h),
                (this.Ef.position.y = o / 2 - this.nh.y * h);
              var l = Math.hypot(b.Ia, b.Ja);
              if (l > p - 10) {
                this.Yg = extension.$(1 + (l - p) / 10, 0, 1);
                var g =
                    Math.cos((this.Wg * aux.M) / 360) * (1 - this.Yg) +
                    1 * this.Yg,
                  v = Math.sin((this.Wg * aux.M) / 360) * (1 - this.Yg),
                  y =
                    (((Math.atan2(v, g) + aux.M) % aux.M) *
                      360) /
                    aux.M,
                  j = this.Yg * (0.5 + 0.5 * this.Xg),
                  m = extension.ga(Math.floor(y), 1, 0.75 - 0.25 * this.Yg);
                this.ah.Wc(m[0], m[1], m[2], 0.1 + 0.2 * j);
              } else {
                this.Yg = 0;
                var w = extension.ga(Math.floor(this.Wg), 1, 0.75);
                this.ah.Wc(w[0], w[1], w[2], 0.1);
              }
              for (var k = 0; k < this.hh.children.length; k++) {
                var L = this.hh.children[k];
                (L.position.x = f / 2 - (this.nh.x - L.zh.x) * h),
                  (L.position.y = o / 2 - (this.nh.y - L.zh.y) * h);
              }
              (this.ih.Ah.position.x = (b.Ia / p) * this.ih.Bh),
                (this.ih.Ah.position.y = (b.Ja / p) * this.ih.Bh),
                this.jh.Ch(i),
                this.lh.jg(i, c),
                this.Df.render(this.Ef, null, !0),
                this.Df.render(this.gh, null, !1);
            }
          }),
          (c.prototype.Dh = function (t, a) {
            (a.Eh.Uc.gd().zIndex = ((t + 2147483648) / 4294967296) * 5e3),
              this.dh.addChild(a.Eh.Vc.gd()),
              this.eh.addChild(a.Eh.Uc.gd());
          }),
          (c.prototype.Fh = function (t, e, i) {
            (e.Fc.zIndex = aux.L.uh.yh.Pg
              ? 0
              : 10 + ((t + 32768) / 65536) * 5e3),
              this.fh.addChild(e.Fc),
              t !== aux.L.uh.yh.Pg && this.hh.addChild(i);
          });
        var f = (function () {
            return extension.X(inject.e.f, function () {
              inject.e.f.call(this),
                (this.Bh = 40),
                (this.Gh = new inject.e.m()),
                this.Gh.anchor.set(0.5),
                (this.Ah = new inject.e.j());
              var t = new inject.e.j();
              t.beginFill("black", 0.4),
                t.drawCircle(0, 0, this.Bh),
                t.endFill(),
                t.lineStyle(2, 16225317),
                t.drawCircle(0, 0, this.Bh),
                t.moveTo(0, -this.Bh),
                t.lineTo(0, +this.Bh),
                t.moveTo(-this.Bh, 0),
                t.lineTo(+this.Bh, 0),
                t.endFill(),
                (this.Gh.alpha = 0.5),
                (this.Ah.zIndex = 2),
                (this.Ah.alpha = 0.9),
                this.Ah.beginFill(16225317),
                this.Ah.drawCircle(0, 0, 0.06 * this.Bh),
                this.Ah.endFill(),
                this.Ah.lineStyle(1, "black"),
                this.Ah.drawCircle(0, 0, 0.06 * this.Bh),
                this.Ah.endFill(),
                this.addChild(t),
                this.addChild(this.Gh),
                this.addChild(this.Ah);
            });
          })(),
          o = (function () {
            var t = extension.X(inject.e.f, function () {
              inject.e.f.call(this), (this.Hh = {});
            });
            (t.prototype.Ch = function (t) {
              var e = 0.5 + 0.5 * Math.cos(aux.M * (t / 1e3 / 1.6));
              for (var i in this.Hh) {
                var c = this.Hh[i],
                  n = c.Ih;
                c.alpha = 1 - n + n * e;
              }
            }),
              (t.prototype.jg = function (t) {
                for (var e in this.Hh)
                  (null != t[e] && t[e].zd) ||
                    (inject.e.w.z(this.Hh[e]), delete this.Hh[e]);
                var n = 0;
                for (var f in t) {
                  var o = t[f];
                  if (o.zd) {
                    var h = this.Hh[f];
                    if (!h) {
                      var d = aux.L.bd.jc().Hb(o.Ed).Mb;
                      (h = new c()),
                        (h.texture = d.Wa()),
                        (h.width = 40),
                        (h.height = 40),
                        (this.Hh[f] = h),
                        this.addChild(h);
                    }
                    (h.Ih = o.Fd), (h.position.x = n), (n += 40);
                  }
                }
              });
            var c = (function () {
              return extension.X(inject.e.m, function () {
                inject.e.m.call(this), (this.Ih = 0);
              });
            })();
            return t;
          })(),
          h = (function () {
            var c = extension.X(inject.e.f, function () {
              inject.e.f.call(this),
                (this.sh = !0),
                (this.Jh = 12),
                (this.Kh = 9),
                (this.Ag = []);
              for (var t = 0; t < 14; t++) this.Lh();
            });
            (c.prototype.jg = function (c) {
              var n = aux.L.uh.yh.Og === application.Sc.Rc,
                f = 0,
                o = 0;
              o >= this.Ag.length && this.Lh(),
                this.Ag[o].Mh(1, "white"),
                this.Ag[o].Nh(
                  "",
                  extension.O("index.game.leader.top10"),
                  "(".concat(aux.L.uh.Oh, " online)")
                ),
                (this.Ag[o].position.y = f),
                (f += this.Jh),
                (o += 1),
                c.Ph.length > 0 && (f += this.Kh);
              for (var h = 0; h < c.Ph.length; h++) {
                var d = c.Ph[h],
                  s = aux.L.bd.jc().Bb(d.Qh),
                  b = "",
                  r = aux.L.bd.nc()["textDict"][s.Ib];
                null != r && (b = extension.P(r)),
                  o >= this.Ag.length && this.Lh(),
                  this.Ag[o].Mh(0.8, s.Jb.Lb),
                  this.Ag[o].Nh(
                    "".concat(h + 1),
                    b,
                    "".concat(Math.floor(d.Rh))
                  ),
                  (this.Ag[o].position.y = f),
                  (f += this.Jh),
                  (o += 1);
              }
              c.Sh.length > 0 && (f += this.Kh);
              for (var u = 0; u < c.Sh.length; u++) {
                var p = c.Sh[u],
                  l = aux.L.uh.yh.Pg === p.Th,
                  g = void 0,
                  v = void 0;
                if (l) (g = "white"), (v = aux.L.uh.th.Uh.Ea);
                else {
                  var y = aux.L.uh.Vh[p.Th];
                  null != y
                    ? ((g = n
                        ? aux.L.bd.jc().Bb(y.Uh.Wh).Jb.Lb
                        : aux.L.bd.jc().Ab(y.Uh.Xh).Lb),
                      (v = this.sh ? y.Uh.Ea : "---"))
                    : ((g = "gray"), (v = "?"));
                }
                l && (f += this.Kh),
                  o >= this.Ag.length && this.Lh(),
                  this.Ag[o].Mh(l ? 1 : 0.8, g),
                  this.Ag[o].Nh(
                    "".concat(u + 1),
                    v,
                    "".concat(Math.floor(p.Rh))
                  ),
                  (this.Ag[o].position.y = f),
                  (f += this.Jh),
                  (o += 1),
                  l && (f += this.Kh);
              }
              for (
                aux.L.uh.Yh > c.Sh.length &&
                ((f += this.Kh),
                o >= this.Ag.length && this.Lh(),
                this.Ag[o].Mh(1, "white"),
                this.Ag[o].Nh(
                  "".concat(aux.L.uh.Yh),
                  aux.L.uh.th.Uh.Ea,
                  "".concat(Math.floor(aux.L.uh.th.Rh))
                ),
                (this.Ag[o].position.y = f),
                (f += this.Jh),
                (o += 1),
                (f += this.Kh));
                this.Ag.length > o;

              )
                inject.e.w.z(this.Ag.pop());
            }),
              (c.prototype.Lh = function () {
                var t = new n();
                (t.position.y = 0),
                  this.Ag.length > 0 &&
                    (t.position.y =
                      this.Ag[this.Ag.length - 1].position.y + this.Jh),
                  this.Ag.push(t),
                  this.addChild(t);
              });
            var n = (function () {
              var t = extension.X(inject.e.f, function () {
                inject.e.f.call(this),
                  (this.Zh = new inject.e.n("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white",
                  })),
                  (this.Zh.anchor.x = 1),
                  (this.Zh.position.x = 30),
                  this.addChild(this.Zh),
                  (this.$h = new inject.e.n("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white",
                  })),
                  (this.$h.anchor.x = 0),
                  (this.$h.position.x = 35),
                  this.addChild(this.$h),
                  (this._h = new inject.e.n("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white",
                  })),
                  (this._h.anchor.x = 1),
                  (this._h.position.x = 220),
                  this.addChild(this._h);
              });
              return (
                (t.prototype.Nh = function (t, a, i) {
                  (this.Zh.text = t), (this._h.text = i);
                  var c = a;
                  for (this.$h.text = c; this.$h.width > 100; )
                    (c = c.substring(0, c.length - 1)),
                      (this.$h.text = c + "..");
                }),
                (t.prototype.Mh = function (t, a) {
                  (this.Zh.alpha = t),
                    (this.Zh.style.fill = a),
                    (this.$h.alpha = t),
                    (this.$h.style.fill = a),
                    (this._h.alpha = t),
                    (this._h.style.fill = a);
                }),
                t
              );
            })();
            return c;
          })();
        return c;
      })()),
      (application.ai = (function () {
        function i(t) {
          (this.uh = t), (this.bi = []), (this.ci = 0);
        }
        (i.prototype.di = function (a) {
          this.bi.push(new application.oa(new application.na(a)));
        }),
          (i.prototype.ei = function () {
            (this.bi = []), (this.ci = 0);
          }),
          (i.prototype.fi = function () {
            for (var t = 0; t < 10; t++) {
              if (0 === this.bi.length) return;
              var a = this.bi.shift();
              try {
                this.gi(a);
              } catch (t) {
                throw t;
              }
            }
          }),
          (i.prototype.gi = function (t) {
            switch (255 & t.ra(0)) {
              case 0:
                return void this.hi(t);
              case 1:
                return void this.ii(t);
              case 2:
                return void this.ji(t);
              case 3:
                return void this.ki(t);
              case 4:
                return void this.li(t);
              case 5:
                return void this.mi(t);
            }
          }),
          (i.prototype.hi = function (t) {
            this.uh.yh.Og = t.ra();
            var e = t.sa();
            (this.uh.yh.Pg = e),
              (this.uh.th.Uh.re = e),
              (this.uh.yh.Qg = t.ua()),
              (this.uh.yh.Rg = t.ua()),
              (this.uh.yh.Sg = t.ua()),
              aux.L.Fg.sf.Eg.jg(this.uh.yh, aux.L.Fg.oi.ni());
          }),
          (i.prototype.ii = function (t) {
            var a,
              e = this.ci++,
              i = t.sa();
            a = this.pi(t);
            for (var c = 0; c < a; c++) this.qi(t);
            a = this.pi(t);
            for (var n = 0; n < a; n++) this.ri(t);
            a = this.pi(t);
            for (var f = 0; f < a; f++) this.si(t);
            a = this.pi(t);
            for (var o = 0; o < a; o++) this.ti(t);
            a = this.pi(t);
            for (var h = 0; h < a; h++) this.vi(t);
            a = this.pi(t);
            for (var d = 0; d < a; d++) this.wi(t);
            a = this.pi(t);
            for (var s = 0; s < a; s++) this.xi(t);
            a = this.pi(t);
            for (var b = 0; b < a; b++) this.yi(t);
            e > 0 && this.zi(t), this.uh.Ai(e, i);
          }),
          (i.prototype.ti = function (i) {
            var c = new application.Ci.Bi();
            (c.re = i.sa()),
              (c.Wh = this.uh.yh.Og === application.Sc.Rc ? i.ra() : application.Ng.Tg),
              (c.Xh = i.sa()),
              (c.Di = i.sa()),
              (c.Ei = i.sa()),
              (c.Fi = i.sa()),
              (c.Gi = i.sa());
            for (var n = i.ra(), f = "", o = 0; o < n; o++)
              f += String.fromCharCode(i.sa());
            if (((c.Ea = f), this.uh.yh.Pg === c.re)) this.uh.th.Hi(c);
            else {
              var h = this.uh.Vh[c.re];
              null != h && h.Ii();
              var d = new application.Ci(this.uh.yh);
              d.Ji(aux.L.Fg.sf.Eg), (this.uh.Vh[c.re] = d), d.Hi(c);
            }
          }),
          (i.prototype.vi = function (t) {
            var i = t.sa(),
              c = t.ra(),
              n = !!(1 & c),
              f = !!(2 & c),
              o = 0;
            n && (o = t.sa());
            var h = this.Ki(i);
            if (_typeof(h) !== "undefined" && ((h.Li = !1), h.Mi)) {
              var d = this.Ki(i);
              if (n && _typeof(d) !== "undefined" && d.Mi)
                if (o === this.uh.yh.Pg) {
                  var s = this.uh.th.wh(),
                    b = h.Ni(s.Ia, s.Ja);
                  Math.max(0, 1 - b.Oi / (0.5 * this.uh.vh));
                  b.Oi < 0.5 * this.uh.vh && aux.L.Fg.sf.Eg.lh.Dg(f);
                } else if (i === this.uh.yh.Pg);
                else {
                  var r = this.uh.th.wh(),
                    u = h.Ni(r.Ia, r.Ja);
                  Math.max(0, 1 - u.Oi / (0.5 * this.uh.vh));
                }
              else if (i === this.uh.yh.Pg);
              else {
                var p = this.uh.th.wh(),
                  l = h.Ni(p.Ia, p.Ja);
                Math.max(0, 1 - l.Oi / (0.5 * this.uh.vh));
              }
            }
          }),
          (i.prototype.yi = function (e) {
            var i = e.sa(),
              c = i === this.uh.yh.Pg ? null : this.uh.Vh[i],
              n = e.ra(),
              f = !!(1 & n);
            if (!!(2 & n)) {
              var o = e.ua();
              c && c.Pi(o);
            }
            var h = this.Qi(e.ra(), e.ra(), e.ra()),
              d = this.Qi(e.ra(), e.ra(), e.ra());
            if (c) {
              c.Ri(h, d, f);
              var s = this.uh.th.wh(),
                b = c.wh(),
                r = Math.max(
                  0,
                  1 - Math.hypot(s.Ia - b.Ia, s.Ja - b.Ja) / (0.5 * this.uh.vh)
                );
              aux.L.Si.nf(r, i, f);
            }
            var u = this.pi(e);
            if (c)
              for (var p in c.vd) {
                var l = c.vd[p];
                l && (l.zd = !1);
              }
            for (var g = 0; g < u; g++) {
              var v = e.ra(),
                y = e.ra();
              if (c) {
                var j = c.vd[v];
                j || (j = c.vd[v] = new application.xd(v)),
                  (j.zd = !0),
                  (j.Fd = Math.min(1, Math.max(0, y / 100)));
              }
            }
          }),
          (i.prototype.zi = function (e) {
            var i = this.uh.th,
              c = e.ra(),
              n = !!(1 & c),
              f = !!(2 & c),
              o = !!(4 & c);
            if (f) {
              var h = i.Rh;
              i.Pi(e.ua()),
                (h = i.Rh - h),
                h > 0 && aux.L.Fg.sf.Eg.lh.Cg(h);
            }
            o && (this.uh.Ti = e.ua());
            var d = this.Qi(e.ra(), e.ra(), e.ra()),
              s = this.Qi(e.ra(), e.ra(), e.ra());
            i.Ri(d, s, n), aux.L.Si.nf(0.5, this.uh.yh.Pg, n);
            var b = this.pi(e);
            for (var r in i.vd) {
              var u = i.vd[r];
              u && (u.zd = !1);
            }
            for (var p = 0; p < b; p++) {
              var l = e.ra(),
                g = e.ra(),
                v = i.vd[l];
              v || ((v = new application.xd(l)), (i.vd[l] = v)),
                (v.zd = !0),
                (v.Fd = Math.min(1, Math.max(0, g / 100)));
            }
            aux.L.Fg.sf.Eg.jh.jg(i.vd);
          }),
          (i.prototype.wi = function (t) {
            var e = this,
              i = t.sa(),
              c = this.Ki(i),
              n = t.ua(),
              f = this.pi(t);
            if (c) {
              c.Pi(n),
                c.Ui(function () {
                  return e.Qi(t.ra(), t.ra(), t.ra());
                }, f),
                c.Bd(!0);
              var o = this.uh.th.wh(),
                h = c.wh(),
                d = Math.max(
                  0,
                  1 - Math.hypot(o.Ia - h.Ia, o.Ja - h.Ja) / (0.5 * this.uh.vh)
                );
              aux.L.Si.lf(d, i);
            } else for (var s = 0; s < 6 * f; s++) t.ra();
          }),
          (i.prototype.xi = function (t) {
            var e = t.sa(),
              i = this.uh.Vh[e];
            i && i.Li && i.Bd(!1), aux.L.Si.mf(e);
          }),
          (i.prototype.qi = function (e) {
            var i = new application.Vi.Bi();
            (i.re = e.ta()),
              (i.Wh = this.uh.yh.Og === application.Sc.Rc ? e.ra() : application.Ng.Tg),
              (i.Wi = this.Qi(e.ra(), e.ra(), e.ra())),
              (i.Xh = e.ra());
            var c = this.uh.Xi[i.re];
            null != c && c.Ii();
            var n = new application.Vi(i, aux.L.Fg.sf.Eg);
            n.Yi(this.Zi(i.re), this.$i(i.re), !0), (this.uh.Xi[i.re] = n);
          }),
          (i.prototype.ri = function (t) {
            var a = t.ta(),
              e = this.uh.Xi[a];
            e && ((e._i = 0), (e.aj = 1.5 * e.aj), (e.bj = !0));
          }),
          (i.prototype.si = function (t) {
            var a = t.ta(),
              e = t.sa(),
              i = this.uh.Xi[a];
            if (i) {
              (i._i = 0), (i.aj = 0.1 * i.aj), (i.bj = !0);
              var c = this.Ki(e);
              if (c && c.Mi) {
                var n = (this.uh.yh.Pg, c.wh());
                i.Yi(n.Ia, n.Ja, !1);
              }
            }
          });
        var c = [
          34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6,
          6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
          0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8,
          9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34,
        ];
        return (
          (i.prototype.ji = function (t) {
            for (
              var e = aux.L.bd.pc().Xb,
                i = e.getImageData(0, 0, 80, 80),
                n = c[0],
                f = 80 - n,
                o = 0,
                h = 0;
              h < 628;
              h++
            )
              for (var d = t.ra(), s = 0; s < 8; s++) {
                var b = 0 != ((d >> s) & 1),
                  r = 4 * (n + 80 * o);
                b
                  ? ((i.data[r] = 255),
                    (i.data[r + 1] = 255),
                    (i.data[r + 2] = 255),
                    (i.data[r + 3] = 255))
                  : (i.data[r + 3] = 0),
                  ++n >= f && ++o < 80 && ((n = c[o]), (f = 80 - n));
              }
            e.putImageData(i, 0, 0);
            var u = aux.L.Fg.sf.Eg.ih.Gh;
            (u.texture = aux.L.bd.pc().Ga), u.texture.update();
          }),
          (i.prototype.li = function (t) {
            t.ta();
          }),
          (i.prototype.mi = function (t) {
            this.uh.cj();
          }),
          (i.prototype.ki = function (e) {
            (this.uh.Oh = e.sa()), (this.uh.Yh = e.sa());
            var i = new application.dj();
            i.Sh = [];
            for (var c = e.ra(), n = 0; n < c; n++) {
              var f = e.sa(),
                o = e.ua();
              i.Sh.push(application.dj.ej(f, o));
            }
            if (((i.Ph = []), this.uh.yh.Og === application.Sc.Rc))
              for (var h = e.ra(), d = 0; d < h; d++) {
                var s = e.ra(),
                  b = e.ua();
                i.Ph.push(application.dj.fj(s, b));
              }
            aux.L.Fg.sf.Eg.kh.jg(i);
          }),
          (i.prototype.Ki = function (t) {
            return t === this.uh.yh.Pg ? this.uh.th : this.uh.Vh[t];
          }),
          (i.prototype.Qi = function (t, a, e) {
            return (
              1e4 *
              ((16777215 &
                ((255 & e) | ((a << 8) & 65280) | ((t << 16) & 16711680))) /
                8388608 -
                1)
            );
          }),
          (i.prototype.Zi = function (t) {
            return ((65535 & t) / 32768 - 1) * this.uh.yh.Ug();
          }),
          (i.prototype.$i = function (t) {
            return (((t >> 16) & 65535) / 32768 - 1) * this.uh.yh.Ug();
          }),
          (i.prototype.pi = function (t) {
            var a = t.ra();
            if (0 == (128 & a)) return a;
            var e = t.ra();
            if (0 == (128 & e)) return e | ((a << 7) & 16256);
            var i = t.ra();
            if (0 == (128 & i))
              return i | ((e << 7) & 16256) | ((a << 14) & 2080768);
            var c = t.ra();
            return 0 == (128 & c)
              ? c |
                  ((i << 7) & 16256) |
                  ((e << 14) & 2080768) |
                  ((a << 21) & 266338304)
              : void 0;
          }),
          i
        );
      })()),
      (application.gj = (function () {
        function a(t) {
          this.hj = t;
        }
        return (
          (a.ij = function () {
            return new application.gj(null);
          }),
          (a.jj = function (a) {
            return new application.gj(a);
          }),
          (a.prototype.tc = function () {
            return this.hj;
          }),
          (a.prototype.kj = function () {
            return null != this.hj;
          }),
          (a.prototype.lj = function (t) {
            null != this.hj && t(this.hj);
          }),
          a
        );
      })()),
      (application.Vi = (function () {
        function i(e, i) {
          (this.Uh = e),
            (this.mj = e.Xh >= 80),
            (this.nj = 0),
            (this.oj = 0),
            (this.pj = 0),
            (this.qj = 0),
            (this.aj = this.mj ? 1 : e.Wi),
            (this._i = 1),
            (this.bj = !1),
            (this.rj = 0),
            (this.sj = 0),
            (this.tj = 1),
            (this.uj = 2 * Math.PI * Math.random()),
            (this.vj = new application.wj()),
            this.vj.Qc(
              aux.L.uh.yh.Og,
              this.Uh.Wh === application.Ng.Tg
                ? null
                : aux.L.bd.jc().Bb(this.Uh.Wh),
              aux.L.bd.jc().Gb(this.Uh.Xh)
            ),
            i.Dh(e.re, this.vj);
        }
        return (
          (i.prototype.Ii = function () {
            this.vj.Eh.Vc.z(), this.vj.Eh.Uc.z();
          }),
          (i.prototype.Yi = function (t, a, e) {
            (this.nj = t), (this.oj = a), e && ((this.pj = t), (this.qj = a));
          }),
          (i.prototype.xj = function (t, a) {
            var i = Math.min(0.5, 1 * this.aj),
              c = Math.min(2.5, 1.5 * this.aj);
            (this.rj = extension._(this.rj, i, a, 0.0025)),
              (this.sj = extension._(this.sj, c, a, 0.0025)),
              (this.tj = extension._(this.tj, this._i, a, 0.0025));
          }),
          (i.prototype.yj = function (t, a, i) {
            (this.pj = extension._(this.pj, this.nj, a, 0.0025)),
              (this.qj = extension._(this.qj, this.oj, a, 0.0025)),
              this.vj.jg(this, t, a, i);
          }),
          (i.Bi = (function () {
            function a() {
              (this.re = 0), (this.Wh = application.Ng.Tg), (this.Wi = 0), (this.Xh = 0);
            }
            return a;
          })()),
          i
        );
      })()),
      (application.wj = (function () {
        function a() {
          (this.Eh = new n(new application.Kc(), new application.Kc())),
            (this.Eh.Vc.Pc.blendMode = inject.e.q.r),
            (this.Eh.Vc.Pc.zIndex = c),
            (this.Eh.Uc.Pc.zIndex = e);
        }
        var e = 500,
          c = 100;
        (a.prototype.Qc = function (a, e, i) {
          var c = i.Mb;
          null != c && this.Eh.Uc.Tc(c);
          var n = a === application.Sc.Rc && null != e ? e.Kb.Nb : i.Nb;
          null != n && this.Eh.Vc.Tc(n);
        }),
          (a.prototype.jg = function (t, a, e, i) {
            if (!i(t.pj, t.qj)) return void this.Eh.kd();
            var c = t.sj * (1 + 0.3 * Math.cos(t.uj + a / 200));
            t.mj
              ? this.Eh.hd(t.pj, t.qj, 2 * t.rj, 1 * t.tj, 1.2 * c, 0.8 * t.tj)
              : this.Eh.hd(t.pj, t.qj, 2 * t.rj, 1 * t.tj, 2 * c, 0.3 * t.tj);
          });
        var n = (function () {
          function t(t, a) {
            (this.Uc = t), (this.Vc = a);
          }
          return (
            (t.prototype.hd = function (t, a, e, i, c, n) {
              this.Uc.Bd(!0),
                this.Uc.Cd(t, a),
                this.Uc.jd(e),
                this.Uc.zj(i),
                this.Vc.Bd(!0),
                this.Vc.Cd(t, a),
                this.Vc.jd(c),
                this.Vc.zj(n);
            }),
            (t.prototype.kd = function () {
              this.Uc.Bd(!1), this.Vc.Bd(!1);
            }),
            t
          );
        })();
        return a;
      })()),
      (application.Aj = (function () {
        function i() {
          (this.Bj = 0),
            (this.Cj = 0),
            (this.Dj = 0),
            (this.Ej = 0),
            (this.Fj = 0),
            (this.Gj = []);
        }
        function c(t, a) {
          for (var i = 0; i < t.length; i++)
            if (parseInt(t[i]["id"]) === a) return i;
          return -1;
        }
        return (
          (i.prototype.za = function () {}),
          (i.prototype.Hj = function (a) {
            switch (a) {
              case application.Jj.Ij:
                return this.Bj;
              case application.Jj.Kj:
                return this.Cj;
              case application.Jj.Lj:
                return this.Dj;
              case application.Jj.Mj:
                return this.Ej;
              case application.Jj.Nj:
                return this.Fj;
            }
            return 0;
          }),
          (i.prototype.Oj = function () {
            return new application.zb(this.Bj, this.Cj, this.Dj, this.Ej, this.Fj);
          }),
          (i.prototype.Pj = function (t) {
            this.Gj.push(t), this.Qj();
          }),
          (i.prototype.Rj = function () {
            if (!aux.L.bd.mc()) return extension.ea([32, 33, 34, 35]);
            for (
              var i = [], c = aux.L.bd.nc()["skinArrayDict"], n = 0;
              n < c.length;
              n++
            ) {
              var f = c[n];
              this.Sj(f["id"], application.Jj.Ij) && i.push(f);
            }
            return 0 === i.length
              ? 0
              : i[parseInt(i.length * Math.random())]["id"];
          }),
          (i.prototype.Tj = function () {
            if (aux.L.bd.mc()) {
              var i = aux.L.bd.nc()["skinArrayDict"],
                n = c(i, this.Bj);
              if (!(n < 0)) {
                for (var f = n + 1; f < i.length; f++)
                  if (this.Sj(i[f]["id"], application.Jj.Ij))
                    return (this.Bj = i[f]["id"]), void this.Qj();
                for (var o = 0; o < n; o++)
                  if (this.Sj(i[o]["id"], application.Jj.Ij))
                    return (this.Bj = i[o]["id"]), void this.Qj();
              }
            }
          }),
          (i.prototype.Uj = function () {
            if (aux.L.bd.mc) {
              var i = aux.L.bd.nc()["skinArrayDict"],
                n = c(i, this.Bj);
              if (!(n < 0)) {
                for (var f = n - 1; f >= 0; f--)
                  if (this.Sj(i[f]["id"], application.Jj.Ij))
                    return (this.Bj = i[f]["id"]), void this.Qj();
                for (var o = i.length - 1; o > n; o--)
                  if (this.Sj(i[o]["id"], application.Jj.Ij))
                    return (this.Bj = i[o]["id"]), void this.Qj();
              }
            }
          }),
          (i.prototype.Vj = function (e, i) {
            if (!aux.L.bd.mc() || this.Sj(e, i))
              switch (i) {
                case application.Jj.Ij:
                  return void (this.Bj !== e && ((this.Bj = e), this.Qj()));
                case application.Jj.Kj:
                  return void (this.Cj !== e && ((this.Cj = e), this.Qj()));
                case application.Jj.Lj:
                  return void (this.Dj !== e && ((this.Dj = e), this.Qj()));
                case application.Jj.Mj:
                  return void (this.Ej !== e && ((this.Ej = e), this.Qj()));
                case application.Jj.Nj:
                  return void (this.Fj !== e && ((this.Fj = e), this.Qj()));
              }
          }),
          (i.prototype.Sj = function (t, e) {
            var i = this.Wj(t, e);
            return (
              null != i &&
              (aux.L.Yj.Xj()
                ? (0 === i.Zj() && !i.$j()) || aux.L.Yj._j(t, e)
                : i.ak())
            );
          }),
          (i.prototype.Wj = function (i, n) {
            if (!aux.L.bd.mc()) return null;
            var f = aux.L.bd.nc();
            if (n === application.Jj.Ij) {
              var o = c(f["skinArrayDict"], i);
              return o < 0 ? null : application.ck.bk(f["skinArrayDict"][o]);
            }
            var h = null;
            switch (n) {
              case application.Jj.Kj:
                h = f["eyesDict"][i];
                break;
              case application.Jj.Lj:
                h = f["mouthDict"][i];
                break;
              case application.Jj.Mj:
                h = f["hatDict"][i];
                break;
              case application.Jj.Nj:
                h = f["glassesDict"][i];
            }
            return null != h ? application.ck.dk(h) : null;
          }),
          (i.prototype.Qj = function () {
            for (var t = 0; t < this.Gj.length; t++) this.Gj[t]();
          }),
          i
        );
      })()),
      (application.Jj = (function () {
        function t() {}
        return (
          (t.Ij = "SKIN"),
          (t.Kj = "EYES"),
          (t.Lj = "MOUTH"),
          (t.Nj = "GLASSES"),
          (t.Mj = "HAT"),
          t
        );
      })()),
      (application.ek = (function () {
        function t() {
          this.Sf = new inject.e.h(inject.e.g.from("/images/bg-obstacle.png"));
          var t = inject.e.g.from(aux.A.H),
            c = new inject.e.h(t, new inject.e.l(0, 0, 256, 256));
          this.Tf = new Array(36);
          for (var n = 0; n < this.Tf.length; n++) this.Tf[n] = c;
          (this.qh = new inject.e.h(
            (function () {
              var t = inject.e.g.from(
                "/images/bg-pattern-ukraine2-pow2-ARENA.png"
              );
              return (t.wrapMode = inject.e.u.v), t;
            })()
          )),
            (this.rh = new inject.e.h(
              (function () {
                var t = inject.e.g.from(
                  "/images/bg-pattern-ukraine2-pow2-TEAM2.png"
                );
                return (t.wrapMode = inject.e.u.v), t;
              })()
            )),
            (this.oh = new inject.e.h(inject.e.g.from("/images/lens.png"))),
            (this.If = new inject.e.h(
              (function () {
                var t = inject.e.g.from(aux.A.I);
                return (t.wrapMode = inject.e.u.v), t;
              })()
            )),
            (this.Vb = (function () {
              var t = window.document.createElement("canvas");
              return (
                (t.width = 80),
                (t.height = 80),
                {
                  Wb: t,
                  Xb: t.getContext("2d"),
                  Ga: new inject.e.h(inject.e.g.from(t)),
                }
              );
            })()),
            (this.Re = {}),
            (this.Ne = {}),
            (this.fk = []),
            (this.gk = null);
        }
        return (
          (t.prototype.za = function (t) {
            function a() {
              0 == --e && t();
            }
            var e = 4;
            (this.Re = {}),
              a(),
              (this.Ne = {}),
              a(),
              (this.fk = []),
              a(),
              (this.gk = null),
              a();
          }),
          t
        );
      })()),
      (application.hk = (function () {
        function a() {
          (this.ik = null),
            (this.sf = new application.jk()),
            (this.rf = new application.kk()),
            (this.lk = new application.mk()),
            (this.nk = new application.ok()),
            (this.pk = new application.qk()),
            (this.rk = new application.sk()),
            (this.tk = new application.uk()),
            (this.vk = new application.wk()),
            (this.oi = new application.xk()),
            (this.yk = new application.zk()),
            (this.Ak = new application.Bk()),
            (this.Ck = new application.Dk()),
            (this.Ek = new application.Fk()),
            (this.Gk = new application.Hk()),
            (this.ze = new application.Ik()),
            (this.Jk = new application.Kk()),
            (this.Lk = new application.Mk()),
            (this.Nk = new application.Ok()),
            (this.Pk = []);
        }
        function i(t, a) {
          if (0 !== a) {
            var i = t[a];
            extension.ca(t, 0, 1, a), (t[0] = i);
          }
        }
        function c(t, a) {
          if (a !== t.length + 1) {
            var i = t[a];
            extension.ca(t, a + 1, a, t.length - a - 1), (t[t.length - 1] = i);
          }
        }
        function n(t, a) {
          for (var e = 0; e < t.length; e++) if (t[e] === a) return e;
          return -1;
        }
        return (
          (a.prototype.za = function () {
            (this.ik = new application.vf(application.Cf.Bf)),
              (this.Pk = [
                this.sf,
                this.rf,
                this.lk,
                this.nk,
                this.pk,
                this.rk,
                this.tk,
                this.vk,
                this.oi,
                this.yk,
                this.Ak,
                this.Ck,
                this.Ek,
                this.Gk,
                this.ze,
                this.Jk,
                this.Lk,
                this.Nk,
              ]);
            for (var a = 0; a < this.Pk.length; a++) this.Pk[a].za();
          }),
          (a.prototype.Ch = function (t, a) {
            for (var e = this.Pk.length - 1; e >= 0; e--) this.Pk[e].cg(t, a);
            this.Pk[0] !== this.sf &&
              this.Pk[0] !== this.Nk &&
              null != this.ik &&
              this.ik.cg(t, a);
          }),
          (a.prototype.$f = function () {
            for (var t = this.Pk.length - 1; t >= 0; t--) this.Pk[t].$f();
            null != this.ik && this.ik.$f();
          }),
          (a.prototype.Qk = function (t) {
            var a = n(this.Pk, t);
            if (!(a < 0)) {
              this.Pk[0].Rk(), i(this.Pk, a), this.Sk();
            }
          }),
          (a.prototype.Tk = function () {
            this.Pk[0].Rk();
            do {
              c(this.Pk, 0);
            } while (this.Pk[0].Ed !== application.Vk.Uk);
            this.Sk();
          }),
          (a.prototype.Sk = function () {
            var t = this.Pk[0];
            t.Wk(), t.Xk(), this.Yk();
          }),
          (a.prototype.Zk = function () {
            return (
              0 !== this.Pk.length && this.Pk[0].Ed === application.Vk.Uk && this.Gk.$k()
            );
          }),
          (a.prototype._k = function () {
            return 0 === this.Pk.length ? null : this.Pk[0];
          }),
          (a.prototype.Yk = function () {
            this.Zk() && this.Qk(this.Gk);
          }),
          a
        );
      })()),
      (application.dj = (function () {
        function t() {
          (this.Sh = []), (this.Ph = []);
        }
        return (
          (t.ej = function (t, a) {
            return {
              Th: t,
              Rh: a,
            };
          }),
          (t.fj = function (t, a) {
            return {
              Qh: t,
              Rh: a,
            };
          }),
          t
        );
      })()),
      (application.al = (function () {
        function i() {
          (this.bl = []),
            (this.cl = []),
            (this.dl = !1),
            (this.el = c),
            (this.fl = {});
        }
        var c = "guest",
          n = "guest",
          f = "fb",
          o = "gg";
        return (
          (i.gl = new ((function () {
            function t() {}
            return (
              (t.hl = (function () {
                function t(t) {
                  this.il = t;
                }
                return t;
              })()),
              (t.prototype.jl = function () {
                return (
                  "undefined" !=
                  ("undefined" == typeof FB ? "undefined" : _typeof(FB))
                );
              }),
              (t.prototype.kl = function (t, a, i) {
                var c = "https://graph.facebook.com/me" + "?access_token=" + t;
                $.get(c)
                  .fail(function () {
                    a();
                  })
                  .done(function () {
                    i();
                  });
              }),
              (t.prototype.ll = function (a, i) {
                if (!this.jl()) return void a();
                this.ml(
                  function () {
                    FB.login(function (c) {
                      if (c.status !== "connected") return void a();
                      var n = c.authResponse.accessToken;
                      i(new t.hl(n));
                    });
                  },
                  function (t) {
                    i(t);
                  }
                );
              }),
              (t.prototype.ml = function (a, i) {
                var c = this;
                if (!this.jl()) return void a();
                FB.getLoginStatus(function (n) {
                  if (n.status !== "connected") return void a();
                  var f = n.authResponse.accessToken;
                  c.kl(
                    f,
                    function () {
                      a();
                    },
                    function () {
                      i(new t.hl(f));
                    }
                  );
                });
              }),
              (t.prototype.nl = function () {
                this.jl() && FB.logout();
              }),
              t
            );
          })())()),
          (i.ol = new ((function () {
            function t() {}
            return (
              (t.pl = (function () {
                function t(t, a) {
                  (this.il = t), (this.ql = a);
                }
                return t;
              })()),
              (t.prototype.jl = function () {
                return "undefined" != _typeof(GoogleAuth);
              }),
              (t.prototype.ll = function (a, i) {
                if ("undefined" == _typeof(GoogleAuth)) return void a();
                GoogleAuth.then(function () {
                  if (GoogleAuth.isSignedIn.get()) {
                    var c = GoogleAuth.currentUser.get(),
                      n = c.getAuthResponse().id_token,
                      f =
                        new Date().getTime() +
                        1e3 * c.getAuthResponse().expires_in;
                    if (new Date().getTime() < f) return void i(new t.pl(n, f));
                  }
                  GoogleAuth.signIn().then(function (c) {
                    if ("undefined" !== _typeof(c.error)) return void a();
                    if (!c.isSignedIn()) return void a();
                    var n = c.getAuthResponse().id_token,
                      f =
                        new Date().getTime() +
                        1e3 * c.getAuthResponse().expires_in;
                    i(new t.pl(n, f));
                  });
                });
              }),
              (t.prototype.ml = function (a, i) {
                if ("undefined" == _typeof(GoogleAuth)) return void a();
                GoogleAuth.then(function () {
                  if (GoogleAuth.isSignedIn.get()) {
                    var e = GoogleAuth.currentUser.get(),
                      c = e.getAuthResponse().id_token,
                      n =
                        new Date().getTime() +
                        1e3 * e.getAuthResponse().expires_in;
                    if (new Date().getTime() < n) return void i(new t.pl(c, n));
                  }
                  a();
                });
              }),
              (t.prototype.nl = function () {
                "undefined" != _typeof(GoogleAuth) && GoogleAuth.signOut();
              }),
              t
            );
          })())()),
          (i.prototype.za = function () {
            this.rl();
          }),
          (i.prototype.sl = function () {
            return this.dl ? this.fl["userId"] : "";
          }),
          (i.prototype.tl = function () {
            return this.dl ? this.fl["username"] : "";
          }),
          (i.prototype.ul = function () {
            return this.dl ? this.fl["nickname"] : "";
          }),
          (i.prototype.vl = function () {
            return this.dl ? this.fl["avatarUrl"] : aux.A.G;
          }),
          (i.prototype.wl = function () {
            return this.dl && this.fl["isBuyer"];
          }),
          (i.prototype.xl = function () {
            return this.dl && this.fl["isConsentGiven"];
          }),
          (i.prototype.yl = function () {
            return this.dl ? this.fl["coins"] : 0;
          }),
          (i.prototype.zl = function () {
            return this.dl ? this.fl["level"] : 1;
          }),
          (i.prototype.Al = function () {
            return this.dl ? this.fl["expOnLevel"] : 0;
          }),
          (i.prototype.Bl = function () {
            return this.dl ? this.fl["expToNext"] : 50;
          }),
          (i.prototype.Cl = function () {
            return this.dl ? this.fl["skinId"] : 0;
          }),
          (i.prototype.Dl = function () {
            return this.dl ? this.fl["eyesId"] : 0;
          }),
          (i.prototype.El = function () {
            return this.dl ? this.fl["mouthId"] : 0;
          }),
          (i.prototype.Fl = function () {
            return this.dl ? this.fl["glassesId"] : 0;
          }),
          (i.prototype.Gl = function () {
            return this.dl ? this.fl["hatId"] : 0;
          }),
          (i.prototype.Hl = function () {
            return this.dl ? this.fl["highScore"] : 0;
          }),
          (i.prototype.Il = function () {
            return this.dl ? this.fl["bestSurvivalTimeSec"] : 0;
          }),
          (i.prototype.Jl = function () {
            return this.dl ? this.fl["kills"] : 0;
          }),
          (i.prototype.Kl = function () {
            return this.dl ? this.fl["headShots"] : 0;
          }),
          (i.prototype.Ll = function () {
            return this.dl ? this.fl["sessionsPlayed"] : 0;
          }),
          (i.prototype.Ml = function () {
            return this.dl ? this.fl["totalPlayTimeSec"] : 0;
          }),
          (i.prototype.Nl = function () {
            return this.dl ? this.fl["regDate"] : {};
          }),
          (i.prototype.Ol = function (t) {
            this.bl.push(t), t();
          }),
          (i.prototype.Pl = function (t) {
            this.cl.push(t), t();
          }),
          (i.prototype._j = function (t, a) {
            var i = this.fl["propertyList"];
            if (null == i) return !1;
            for (var c = t.toString(), n = 0; n < i.length; n++) {
              var f = i[n];
              if (f["id"] === c && f["type"] === a) return !0;
            }
            return !1;
          }),
          (i.prototype.Xj = function () {
            return this.dl;
          }),
          (i.prototype.Ql = function () {
            return this.el;
          }),
          (i.prototype.Rl = function (i) {
            var c = this,
              n = this.sl(),
              f = this.yl(),
              o = this.zl();
            this.Sl(
              function () {
                null != i && i();
              },
              function (h) {
                (c.fl = h["user_data"]), c.Tl();
                var d = c.sl(),
                  s = c.yl(),
                  b = c.zl();
                if (n === d) {
                  b > 1 && b !== o && aux.L.Fg.Gk.Ul(new application.Vl(b));
                  var r = s - f;
                  r >= 20 && aux.L.Fg.Gk.Ul(new application.Wl(r));
                }
                null != i && i();
              }
            );
          }),
          (i.prototype.Sl = function (t, i) {
            var c = aux.A.C + "/pub/wuid/" + this.el + "/getUserData";
            extension.ha(c, t, function (a) {
              1200 !== a["code"] ? t() : i(a);
            });
          }),
          (i.prototype.Xl = function (t, i, c, n) {
            var f =
              aux.A.C +
              "/pub/wuid/" +
              this.el +
              "/buyProperty" +
              "?id=" +
              t +
              "&type=" +
              i;
            extension.ha(
              f,
              function () {
                c();
              },
              function (t) {
                1200 !== t["code"] ? c() : n();
              }
            );
          }),
          (i.prototype.Yl = function (t, i) {
            var c = aux.A.C + "/pub/wuid/" + this.el + "/deleteAccount";
            extension.ha(c, t, function (a) {
              1200 !== a["code"] ? t() : i();
            });
          }),
          (i.prototype.Zl = function (t) {
            var a = this;
            this.dl && this.$l(),
              i.gl.ll(
                function () {
                  t();
                },
                function (e) {
                  a._l(f, e.il, t);
                }
              );
          }),
          (i.prototype.am = function (t) {
            var a = this;
            this.dl && this.$l(),
              i.ol.ll(
                function () {
                  t();
                },
                function (e) {
                  a._l(o, e.il, t);
                }
              );
          }),
          (i.prototype._l = function (t, i, c) {
            var n = this,
              f = t + "_" + i,
              o = aux.A.C + "/pub/wuid/" + f + "/login";
            extension.ha(
              o,
              function () {
                n.bm();
              },
              function (a) {
                1200 !== a["code"]
                  ? n.bm()
                  : (n.cm(t, i, a["user_data"]), null != c && c());
              }
            );
          }),
          (i.prototype.$l = function () {
            try {
              this.dm(), this.em();
            } catch (t) {}
            this.fm();
          }),
          (i.prototype.gm = function () {
            this.dl &&
              this.Yl(
                function () {},
                function () {}
              );
          }),
          (i.prototype.bm = function () {
            aux.L.Fg.Qk(aux.L.Fg.Jk);
          }),
          (i.prototype.cm = function (a, i, c) {
            var f = this.dl ? this.fl["userId"] : n;
            (this.dl = !0),
              (this.el = a + "_" + i),
              (this.fl = c),
              application.kg.vg(application.kg.pg, a, 60),
              f !== this.fl["userId"] ? this.hm() : this.Tl();
          }),
          (i.prototype.fm = function () {
            var a = this.dl ? this.fl["userId"] : n;
            (this.dl = !1),
              (this.el = c),
              (this.fl = {}),
              application.kg.vg(application.kg.pg, "", 60),
              a !== this.fl["userId"] ? this.hm() : this.Tl();
          }),
          (i.prototype.rl = function () {
            var a = application.kg.wg(application.kg.pg),
              c = this;
            if (f === a) {
              var n = 1;
              !(function t() {
                if (!i.gl.jl() && n++ < 5) return void extension.S(t, 1e3);
                i.gl.ml(
                  function () {},
                  function (t) {
                    c._l(f, t.il);
                  }
                );
              })();
            } else if (o === a) {
              var h = 1;
              !(function t() {
                if (!i.ol.jl() && h++ < 5) return void extension.S(t, 1e3);
                i.ol.ml(
                  function () {},
                  function (t) {
                    c._l(o, t.il);
                  }
                );
              })();
            }
          }),
          (i.prototype.hm = function () {
            for (var t = 0; t < this.bl.length; t++) this.bl[t]();
            this.Tl();
          }),
          (i.prototype.Tl = function () {
            for (var t = 0; t < this.cl.length; t++) this.cl[t]();
          }),
          (i.prototype.dm = function () {
            i.gl.nl();
          }),
          (i.prototype.em = function () {
            i.ol.nl();
          }),
          i
        );
      })()),
      (application.Af = (function () {
        function a(a, e, c) {
          (this.wf = c),
            (this.zd = !1),
            (this.Fc = new inject.e.f()),
            (this.Fc.visible = !1),
            (this.im = new Array(a));
          for (var n = 0; n < this.im.length; n++) {
            var f = new application.jm(new Float32Array(3 * e));
            f.km(e), (this.im[n] = f), this.Fc.addChild(f.Kf());
          }
          (this.xf = 1), (this.yf = 1), this.$f();
        }
        return (
          (a.prototype.Kf = function () {
            return this.Fc;
          }),
          (a.prototype._f = function (t) {
            (this.zd = t), (this.Fc.visible = t);
          }),
          (a.prototype.$f = function () {
            (this.xf = this.wf.width()), (this.yf = this.wf.height());
            for (var t = this.yf / 30, a = 0; a < this.im.length; a++)
              this.im[a].lm(t);
          }),
          (a.prototype.jg = function () {
            if (this.zd)
              for (var t = 0; t < this.im.length; t++) this.im[t].jg(this.Df);
          }),
          (a.prototype.mm = function () {
            return this.xf;
          }),
          (a.prototype.nm = function () {
            return this.yf;
          }),
          (a.prototype.fg = function (t, a) {
            this.im[t].om(a);
          }),
          (a.prototype.gg = function (t, a) {
            this.im[t].pm(a);
          }),
          (a.prototype.hg = function (t, a, e) {
            for (var i = this.im[t], c = i.qm(), n = i.rm, f = 0; f < c; f++)
              (n[3 * f] = a), (n[3 * f + 1] = e), (n[3 * f + 2] = 0);
          }),
          (a.prototype.ig = function (t, a, e) {
            var i,
              c,
              n = this.im[t],
              f = n.qm(),
              o = n.rm,
              h = n.sm(),
              d = o[0],
              s = o[1],
              b = a - d,
              r = e - s,
              u = Math.hypot(b, r);
            if (u > 0) {
              (o[0] = a), (o[1] = e), (o[2] = Math.atan2(r, b));
              for (
                var p = (0.25 * h) / (0.25 * h + u),
                  l = 1 - 2 * p,
                  g = 1,
                  v = f;
                g < v;
                g++
              )
                (i = o[3 * g]),
                  (o[3 * g] = o[3 * g - 3] * l + (i + d) * p),
                  (d = i),
                  (c = o[3 * g + 1]),
                  (o[3 * g + 1] = o[3 * g - 2] * l + (c + s) * p),
                  (s = c),
                  (o[3 * g + 2] = Math.atan2(
                    o[3 * g - 2] - o[3 * g + 1],
                    o[3 * g - 3] - o[3 * g]
                  ));
            }
          }),
          a
        );
      })()),
      (application.tm = (function () {
        function c(e) {
          var c = this;
          (this.wf = e),
            (this.Wb = e.get()[0]),
            (this.Df = new inject.e.i({
              view: this.Wb,
              transparent: !0,
            })),
            (this.zd = !1),
            (this.um = new application.jm(new Float32Array(3 * n))),
            (this.xf = 1),
            (this.yf = 1),
            (this.vm = f.wm),
            (this.xm = f.wm),
            (this.ym = f.wm),
            (this.zm = f.wm),
            (this.Am = f.wm),
            this.$f(),
            aux.L.bd.qc(function () {
              c.um.Bm();
            });
        }
        var n = Math.min(100, application.Ec.Oc),
          f = {
            wm: "0lt0",
            Cm: "0lt1",
            Dm: "0lt2",
          };
        return (
          (c.prototype._f = function (t) {
            this.zd = t;
          }),
          (c.prototype.$f = function () {
            var t = window.devicePixelRatio ? window.devicePixelRatio : 1;
            (this.xf = this.wf.width()),
              (this.yf = this.wf.height()),
              this.Df.resize(this.xf, this.yf),
              (this.Df.resolution = t),
              (this.Wb.width = t * this.xf),
              (this.Wb.height = t * this.yf);
            var a = this.yf / 4;
            this.um.lm(a);
            var i = extension.$(2 * Math.floor(this.xf / a) - 5, 1, n);
            this.um.km(i);
          }),
          (c.prototype.cg = function () {
            if (this.zd) {
              var t = extension.ja(),
                a = t / 200,
                i = Math.sin(a);
              this.um.Em(this.Fm(this.vm, i), this.Gm(this.vm, i)),
                this.um.Hm(
                  this.Im(this.xm, i),
                  this.Im(this.ym, i),
                  this.Im(this.zm, i),
                  this.Im(this.Am, i)
                );
              for (
                var c = this.um.sm(),
                  n = this.um.qm(),
                  f = this.um.rm,
                  o = this.xf - 0.5 * (this.xf - 0.5 * c * (n - 1)),
                  h = 0.5 * this.yf,
                  d = 0,
                  s = 0,
                  b = -1;
                b < n;
                b++
              ) {
                var r = b,
                  u =
                    Math.cos(((1 * r) / 12) * Math.PI - a) *
                    (1 - Math.pow(16, (-1 * r) / 12));
                b >= 0 &&
                  ((f[3 * b] = o + -0.5 * c * r),
                  (f[3 * b + 1] = h + 0.5 * c * u),
                  (f[3 * b + 2] = Math.atan2(s - u, r - d))),
                  (d = r),
                  (s = u);
              }
              this.um.jg(), this.um.Jm(this.Df);
            }
          }),
          (c.prototype.om = function (t) {
            this.um.om(t);
          }),
          (c.prototype.Km = function (t) {
            (this.vm = t ? f.Dm : f.Cm),
              (this.xm = f.wm),
              (this.ym = f.wm),
              (this.zm = f.wm),
              (this.Am = f.wm);
          }),
          (c.prototype.Lm = function (t) {
            (this.vm = f.wm),
              (this.xm = t ? f.Dm : f.Cm),
              (this.ym = f.wm),
              (this.zm = f.wm),
              (this.Am = f.wm);
          }),
          (c.prototype.Mm = function (t) {
            (this.vm = f.wm),
              (this.xm = f.wm),
              (this.ym = t ? f.Dm : f.Cm),
              (this.zm = f.wm),
              (this.Am = f.wm);
          }),
          (c.prototype.Nm = function (t) {
            (this.vm = f.wm),
              (this.xm = f.wm),
              (this.ym = f.wm),
              (this.zm = t ? f.Dm : f.Cm),
              (this.Am = f.wm);
          }),
          (c.prototype.Om = function (t) {
            (this.vm = f.wm),
              (this.xm = f.wm),
              (this.ym = f.wm),
              (this.zm = f.wm),
              (this.Am = t ? f.Dm : f.Cm);
          }),
          (c.prototype.Fm = function (t, a) {
            switch (t) {
              case f.Cm:
                return 0.9 + 0.1 * a;
              case f.Dm:
                return 0.4 + 0.3 * a;
            }
            return 1;
          }),
          (c.prototype.Gm = function (t, a) {
            switch (t) {
              case f.Cm:
                return 0.6 + 0.5 * a;
              case f.Dm:
                return 0.3 + 0.3 * a;
            }
            return 1;
          }),
          (c.prototype.Im = function (t, a) {
            switch (t) {
              case f.Cm:
                return 0.9 + 0.1 * a;
              case f.Dm:
                return 0.6 + 0.4 * a;
            }
            return 1;
          }),
          c
        );
      })()),
      (application.ck = (function () {
        function t(t, a, e, i, c) {
          (this.Pm = t),
            (this.Qm = a),
            (this.Rm = e),
            (this.Sm = i),
            (this.Tm = c);
        }
        return (
          (t.bk = function (a) {
            return new t(
              a["price"],
              a["guest"],
              a["nonbuyable"],
              a["nonbuyableCause"],
              a["description"]
            );
          }),
          (t.dk = function (a) {
            return new t(
              a["price"],
              a["guest"],
              a["nonbuyable"],
              a["nonbuyableCause"],
              a["description"]
            );
          }),
          (t.prototype.Zj = function () {
            return this.Pm;
          }),
          (t.prototype.ak = function () {
            return this.Qm;
          }),
          (t.prototype.$j = function () {
            return this.Rm;
          }),
          (t.prototype.Um = function () {
            return this.Sm;
          }),
          (t.prototype.Vm = function () {
            return this.Tm;
          }),
          t
        );
      })()),
      (application.Hf = (function () {
        function t(t) {
          (this.Wm = {}), (this.Wm[o] = t);
          var a = inject.e.k.from(b, r, this.Wm);
          (this.Jf = new inject.e.p(s, a)), (this.Jf.blendMode = inject.e.q.t);
        }
        var a = "a1_" + extension.fa(),
          c = "a2_" + extension.fa(),
          n = "translationMatrix",
          f = "projectionMatrix",
          o = "u3_" + extension.fa(),
          h = "u4_" + extension.fa(),
          d = "v1_" + extension.fa(),
          s = new inject.e.o()
            .addAttribute(a, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2)
            .addAttribute(c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2),
          b = "precision mediump float;attribute vec2 "
            .concat(a, ";attribute vec2 ")
            .concat(c, ";uniform mat3 ")
            .concat(n, ";uniform mat3 ")
            .concat(f, ";uniform vec4 ")
            .concat(h, ";varying vec2 ")
            .concat(
              d,
              ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4(("
            )
            .concat(f, "*")
            .concat(n, "*vec3(")
            .concat(a, ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=")
            .concat(h, ";vec2 uv=")
            .concat(
              c,
              ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;"
            )
            .concat(d, "=uv;}"),
          r = "precision highp float;varying vec2 "
            .concat(d, ";uniform sampler2D ")
            .concat(o, ";void main(){gl_FragColor=texture2D(")
            .concat(o, ",")
            .concat(d, ");}");
        return (
          (t.prototype.bg = function (t, a) {
            (this.Jf.scale.x = t),
              (this.Jf.scale.y = a),
              (this.Wm[h] = [t, a, 1 / t + 1, 1 / a + 1]);
          }),
          t
        );
      })()),
      (application.bh = (function () {
        function t() {
          (this.Wm = {}),
            (this.Wm[o] = [1, 0.5, 0.25, 0.5]),
            (this.Wm[h] = inject.e.h.WHITE),
            (this.Wm[d] = [0, 0]),
            (this.Wm[s] = [0, 0]);
          var t = inject.e.k.from(u, p, this.Wm);
          this.Jf = new inject.e.p(r, t);
        }
        var a = "a1_" + extension.fa(),
          c = "a2_" + extension.fa(),
          n = "translationMatrix",
          f = "projectionMatrix",
          o = "u3_" + extension.fa(),
          h = "u4_" + extension.fa(),
          d = "u5_" + extension.fa(),
          s = "u6_" + extension.fa(),
          b = "v1_" + extension.fa(),
          r = new inject.e.o()
            .addAttribute(
              a,
              [
                -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5,
                0.5,
              ],
              2
            )
            .addAttribute(
              c,
              [
                -0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5,
                0.5,
              ],
              2
            ),
          u = "precision mediump float;attribute vec2 "
            .concat(a, ";attribute vec2 ")
            .concat(c, ";uniform mat3 ")
            .concat(n, ";uniform mat3 ")
            .concat(f, ";varying vec2 ")
            .concat(b, ";void main(){")
            .concat(b, "=")
            .concat(c, ";gl_Position=vec4((")
            .concat(f, "*")
            .concat(n, "*vec3(")
            .concat(a, ",1.0)).xy,0.0,1.0);}"),
          p = "precision highp float;varying vec2 "
            .concat(b, ";uniform vec4 ")
            .concat(o, ";uniform sampler2D ")
            .concat(h, ";uniform vec2 ")
            .concat(d, ";uniform vec2 ")
            .concat(s, ";void main(){vec2 coord=")
            .concat(b, "*")
            .concat(d, "+")
            .concat(s, ";vec4 v_color_mix=")
            .concat(o, ";gl_FragColor=texture2D(")
            .concat(h, ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}");
        return (
          (t.prototype.Wc = function (t, a, e, i) {
            var c = this.Wm[o];
            (c[0] = t), (c[1] = a), (c[2] = e), (c[3] = i);
          }),
          (t.prototype.ph = function (t) {
            this.Wm[h] = t;
          }),
          (t.prototype.jg = function (t, a, e, i) {
            (this.Jf.position.x = t),
              (this.Jf.position.y = a),
              (this.Jf.scale.x = e),
              (this.Jf.scale.y = i);
            var c = this.Wm[d];
            (c[0] = 0.2520615384615385 * e), (c[1] = 0.4357063736263738 * i);
            var n = this.Wm[s];
            (n[0] = 0.2520615384615385 * t), (n[1] = 0.4357063736263738 * a);
          }),
          t
        );
      })()),
      (application.Kc = (function () {
        function t() {
          (this.Pc = new inject.e.m()), (this.Xm = 0), (this.Ym = 0);
        }
        return (
          (t.prototype.Tc = function (t) {
            (this.Pc.texture = t.Wa()),
              this.Pc.anchor.set(t.Qa, t.Ra),
              (this.Xm = t.Sa),
              (this.Ym = t.Ta);
          }),
          (t.prototype.Wc = function (t) {
            this.Pc.tint = parseInt(t.substring(1), 16);
          }),
          (t.prototype.jd = function (t) {
            (this.Pc.width = t * this.Xm), (this.Pc.height = t * this.Ym);
          }),
          (t.prototype.Dd = function (t) {
            this.Pc.rotation = t;
          }),
          (t.prototype.Cd = function (t, a) {
            this.Pc.position.set(t, a);
          }),
          (t.prototype.Bd = function (t) {
            this.Pc.visible = t;
          }),
          (t.prototype.yd = function () {
            return this.Pc.visible;
          }),
          (t.prototype.zj = function (t) {
            this.Pc.alpha = t;
          }),
          (t.prototype.gd = function () {
            return this.Pc;
          }),
          (t.prototype.z = function () {
            inject.e.w.z(this.Pc);
          }),
          t
        );
      })()),
      (application.Ci = (function () {
        function c(a) {
          (this.yh = a),
            (this.Uh = new application.Ci.Bi()),
            (this.Mi = !1),
            (this.Li = !0),
            (this.nd = !1),
            (this.qd = 0),
            (this.Zm = 0),
            (this.tj = 1),
            (this.td = 0),
            (this.Rh = 0),
            (this.vd = {}),
            (this.sd = 0),
            (this.$m = new Float32Array(2 * n)),
            (this._m = new Float32Array(2 * n)),
            (this.rd = new Float32Array(2 * n)),
            (this.an = null),
            (this.bn = null),
            (this.cn = null),
            this.dn();
        }
        var n = 200;
        return (
          (c.prototype.Ii = function () {
            null != this.bn && inject.e.w.z(this.bn.Fc),
              null != this.cn && inject.e.w.z(this.cn);
          }),
          (c.prototype.dn = function () {
            this.Pi(0.25),
              (this.Uh.Ea = ""),
              (this.Li = !0),
              (this.vd = {}),
              this.Bd(!1);
          }),
          (c.prototype.Hi = function (t) {
            (this.Uh = t), this.en(this.Mi);
          }),
          (c.prototype.Bd = function (t) {
            var a = this.Mi;
            (this.Mi = t), this.en(a);
          }),
          (c.prototype.Pi = function (t) {
            this.Rh = 50 * t;
            var a = t;
            t > this.yh.Rg &&
              (a =
                Math.atan((t - this.yh.Rg) / this.yh.Sg) * this.yh.Sg +
                this.yh.Rg);
            var e = Math.sqrt(4 * Math.pow(5 * a, 0.707106781186548) + 25),
              i = Math.min(n, Math.max(3, 5 * (e - 5) + 1)),
              c = this.sd;
            if (
              ((this.qd = 0.025 * (5 + 0.9 * e)),
              (this.sd = Math.floor(i)),
              (this.Zm = i - this.sd),
              c > 0 && c < this.sd)
            )
              for (
                var f = this.$m[2 * c - 2],
                  o = this.$m[2 * c - 1],
                  h = this._m[2 * c - 2],
                  d = this._m[2 * c - 1],
                  s = this.rd[2 * c - 2],
                  b = this.rd[2 * c - 1],
                  r = c;
                r < this.sd;
                r++
              )
                (this.$m[2 * r] = f),
                  (this.$m[2 * r + 1] = o),
                  (this._m[2 * r] = h),
                  (this._m[2 * r + 1] = d),
                  (this.rd[2 * r] = s),
                  (this.rd[2 * r + 1] = b);
          }),
          (c.prototype.Ui = function (t, a) {
            this.sd = a;
            for (var e = 0; e < this.sd; e++)
              (this.$m[2 * e] = this._m[2 * e] = this.rd[2 * e] = t()),
                (this.$m[2 * e + 1] =
                  this._m[2 * e + 1] =
                  this.rd[2 * e + 1] =
                    t());
          }),
          (c.prototype.Ri = function (t, a, e) {
            this.nd = e;
            for (var i = 0; i < this.sd; i++)
              (this.$m[2 * i] = this._m[2 * i]),
                (this.$m[2 * i + 1] = this._m[2 * i + 1]);
            var c = t - this._m[0],
              n = a - this._m[1];
            this.gn(c, n, this.sd, this._m);
          }),
          (c.prototype.gn = function (t, a, e, i) {
            var c = Math.hypot(t, a);
            if (!(c <= 0)) {
              var n,
                f = i[0];
              i[0] += t;
              var o,
                h = i[1];
              i[1] += a;
              for (
                var d = this.qd / (this.qd + c),
                  s = 1 - 2 * d,
                  b = 1,
                  r = e - 1;
                b < r;
                b++
              )
                (n = i[2 * b]),
                  (i[2 * b] = i[2 * b - 2] * s + (n + f) * d),
                  (f = n),
                  (o = i[2 * b + 1]),
                  (i[2 * b + 1] = i[2 * b - 1] * s + (o + h) * d),
                  (h = o);
              (d = (this.Zm * this.qd) / (this.Zm * this.qd + c)),
                (s = 1 - 2 * d),
                (i[2 * e - 2] = i[2 * e - 4] * s + (i[2 * e - 2] + f) * d),
                (i[2 * e - 1] = i[2 * e - 3] * s + (i[2 * e - 1] + h) * d);
            }
          }),
          (c.prototype.wh = function () {
            return {
              Ia: this.rd[0],
              Ja: this.rd[1],
            };
          }),
          (c.prototype.Ni = function (t, a) {
            for (var e = 1e6, i = t, c = a, n = 0; n < this.sd; n++) {
              var f = this.rd[2 * n],
                o = this.rd[2 * n + 1],
                h = Math.hypot(t - f, a - o);
              h < e && ((e = h), (i = f), (c = o));
            }
            return {
              Ia: i,
              Ja: c,
              Oi: e,
            };
          }),
          (c.prototype.Ji = function (t) {
            this.an = t;
          }),
          (c.prototype.xj = function (t, a) {
            (this.tj = extension._(
              this.tj,
              this.Li
                ? this.nd
                  ? 0.9 + 0.1 * Math.cos((t / 400) * Math.PI)
                  : 1
                : 0,
              a,
              1 / 800
            )),
              (this.td = extension._(
                this.td,
                this.Li ? (this.nd ? 1 : 0) : 1,
                a,
                0.0025
              )),
              null != this.bn && (this.bn.Fc.alpha = this.tj),
              null != this.cn && (this.cn.alpha = this.tj);
          }),
          (c.prototype.yj = function (t, a, i, c) {
            if (this.Mi && this.Li)
              for (var n = Math.pow(0.11112, a / 95), f = 0; f < this.sd; f++) {
                var o = extension.ba(this.$m[2 * f], this._m[2 * f], i),
                  h = extension.ba(this.$m[2 * f + 1], this._m[2 * f + 1], i);
                (this.rd[2 * f] = extension.ba(o, this.rd[2 * f], n)),
                  (this.rd[2 * f + 1] = extension.ba(h, this.rd[2 * f + 1], n));
              }
            null != this.bn && this.Mi && this.bn.pd(this, t, a, c),
              null != this.cn &&
                ((this.cn.zh.x = this.rd[0]),
                (this.cn.zh.y = this.rd[1] - 3 * this.qd));
          }),
          (c.prototype.en = function (t) {
            this.Mi
              ? t || this.hn()
              : (null != this.bn && inject.e.w.z(this.bn.Fc),
                null != this.cn && inject.e.w.z(this.cn));
          }),
          (c.prototype.hn = function () {
            null == this.bn ? (this.bn = new application.Ec()) : inject.e.w.z(this.bn.Fc),
              this.bn.Qc(
                aux.L.uh.yh.Og,
                aux.L.bd.jc().Bb(this.Uh.Wh),
                aux.L.bd.jc().Ab(this.Uh.Xh),
                aux.L.bd.jc().Cb(this.Uh.Di),
                aux.L.bd.jc().Db(this.Uh.Ei),
                aux.L.bd.jc().Eb(this.Uh.Fi),
                aux.L.bd.jc().Fb(this.Uh.Gi),
                "#ffffff"
              ),
              null == this.cn
                ? ((this.cn = new application.in("")),
                  (this.cn.style.fontFamily = "PTSans"),
                  this.cn.anchor.set(0.5))
                : inject.e.w.z(this.cn),
              (this.cn.style.fontSize = 14),
              (this.cn.style.fill = aux.L.bd.jc().Ab(this.Uh.Xh).Lb),
              (this.cn.text = this.Uh.Ea),
              this.an.Fh(this.Uh.re, this.bn, this.cn);
          }),
          (c.Bi = (function () {
            function a() {
              (this.re = 0),
                (this.Wh = application.Ng.Tg),
                (this.Xh = 0),
                (this.Di = 0),
                (this.Ei = 0),
                (this.Fi = 0),
                (this.Gi = 0),
                (this.Ea = "");
            }
            return a;
          })()),
          c
        );
      })()),
      (application.in = (function () {
        return extension.X(inject.e.n, function (t, a, e) {
          inject.e.n.call(this, t, a, e),
            (this.zh = {
              x: 0,
              y: 0,
            });
        });
      })()),
      (application.zb = (function () {
        function t(t, a, e, i, c) {
          (this.Bj = t),
            (this.Cj = a),
            (this.Dj = e),
            (this.Ej = i),
            (this.Fj = c);
        }
        return (
          (t.prototype.jn = function (a) {
            return new t(a, this.Cj, this.Dj, this.Ej, this.Fj);
          }),
          (t.prototype.kn = function (a) {
            return new t(this.Bj, a, this.Dj, this.Ej, this.Fj);
          }),
          (t.prototype.ln = function (a) {
            return new t(this.Bj, this.Cj, a, this.Ej, this.Fj);
          }),
          (t.prototype.mn = function (a) {
            return new t(this.Bj, this.Cj, this.Dj, a, this.Fj);
          }),
          (t.prototype.nn = function (a) {
            return new t(this.Bj, this.Cj, this.Dj, this.Ej, a);
          }),
          t
        );
      })()),
      (application.jm = (function () {
        function i(a) {
          (this.pn = new application.Ec()),
            this.pn.Fc.addChild(this.pn.Gc),
            (this.qn = null),
            (this.rn = null),
            (this.rm = a),
            (this.Hc = 0),
            (this.Wi = 1),
            (this.sn = 1),
            (this.tn = 1),
            (this.un = 1),
            (this.vn = 1),
            (this.wn = 1),
            (this.xn = 1),
            this.pm("#ffffff");
        }
        var c = new application.zb(0, 0, 0, 0, 0);
        return (
          (i.prototype.Kf = function () {
            return this.pn.Fc;
          }),
          (i.prototype.km = function (t) {
            if (((this.Hc = t), this.pn.Hc !== t)) {
              for (var a = t; a < this.pn.Ic.length; a++) this.pn.Ic[a].kd();
              for (; this.pn.Hc > t; ) {
                this.pn.Hc -= 1;
                var e = this.pn.Ic[this.pn.Hc];
                e.Vc.z(), e.Uc.z();
              }
              for (; this.pn.Hc < t; ) {
                var i = this.pn.Ic[this.pn.Hc];
                (this.pn.Hc += 1),
                  this.pn.Fc.addChild(i.Uc.gd()),
                  this.pn.Fc.addChild(i.Vc.gd()),
                  i.Uc.zj(this.sn),
                  i.Vc.zj(this.tn);
              }
              for (var c = 0; c < this.pn.Gc.Xc.length; c++)
                this.pn.Gc.Xc[c].zj(this.un);
              for (var n = 0; n < this.pn.Gc.Yc.length; n++)
                this.pn.Gc.Yc[n].zj(this.vn);
              for (var f = 0; f < this.pn.Gc.$c.length; f++)
                this.pn.Gc.$c[f].zj(this.wn);
              for (var o = 0; o < this.pn.Gc.Zc.length; o++)
                this.pn.Gc.Zc[o].zj(this.xn);
            }
          }),
          (i.prototype.qm = function () {
            return this.Hc;
          }),
          (i.prototype.om = function (t) {
            (this.qn = t), (this.rn = "#ffffff"), this.Bm();
          }),
          (i.prototype.pm = function (t) {
            (this.qn = c), (this.rn = t), this.Bm();
          }),
          (i.prototype.Bm = function () {
            this.pn.Qc(
              application.Sc.Mg,
              null,
              aux.L.bd.jc().Ab(this.qn.Bj),
              aux.L.bd.jc().Cb(this.qn.Cj),
              aux.L.bd.jc().Db(this.qn.Dj),
              aux.L.bd.jc().Eb(this.qn.Fj),
              aux.L.bd.jc().Fb(this.qn.Ej),
              this.rn
            );
          }),
          (i.prototype.lm = function (t) {
            this.Wi = t;
          }),
          (i.prototype.sm = function () {
            return this.Wi;
          }),
          (i.prototype.Em = function (t, a) {
            (this.sn = t), (this.tn = a);
            for (var e = 0; e < this.Hc; e++) {
              var i = this.pn.Ic[e];
              i.Uc.zj(this.sn), i.Vc.zj(this.tn);
            }
          }),
          (i.prototype.Hm = function (t, a, e, i) {
            (this.un = t), (this.vn = a), (this.wn = e), (this.xn = i);
            for (var c = 0; c < this.pn.Gc.Xc.length; c++)
              this.pn.Gc.Xc[c].zj(this.un);
            for (var n = 0; n < this.pn.Gc.Yc.length; n++)
              this.pn.Gc.Yc[n].zj(this.vn);
            for (var f = 0; f < this.pn.Gc.$c.length; f++)
              this.pn.Gc.$c[f].zj(this.wn);
            for (var o = 0; o < this.pn.Gc.Zc.length; o++)
              this.pn.Gc.Zc[o].zj(this.xn);
          }),
          (i.prototype.jg = function () {
            var t = 2 * this.Wi,
              a = 2 * this.Wi * 1.5;
            if (this.Hc > 0) {
              var e = this.rm[0],
                i = this.rm[1],
                c = this.rm[2];
              this.pn.Ic[0].hd(e, i, t, a, c), this.pn.Gc.hd(e, i, t, c);
            }
            for (var n = 1; n < this.Hc; n++) {
              var f = this.rm[3 * n],
                o = this.rm[3 * n + 1],
                h = this.rm[3 * n + 2];
              this.pn.Ic[n].hd(f, o, t, a, h);
            }
          }),
          (i.prototype.Jm = function (t) {
            t.render(this.pn.Fc);
          }),
          i
        );
      })()),
      (application.Cf = (function () {
        function t(t) {
          this.Ed = t;
        }
        return (
          (t.Bf = $("#background-canvas")),
          (t.yn = $("#stretch-box")),
          (t.zn = $("#social-buttons")),
          (t.An = $("#markup-wrap")),
          (t.Bn = $("#game-view")),
          (t.Cn = $("#results-view")),
          (t.Dn = $("#main-menu-view")),
          (t.En = $("#popup-view")),
          (t.Fn = $("#toaster-view")),
          (t.Gn = $("#loading-view")),
          (t.Hn = $("#restricted-view")),
          (t.In = $("#error-gateway-connection-view")),
          (t.Jn = $("#error-game-connection-view")),
          (t.prototype.za = function () {}),
          (t.prototype.Wk = function () {}),
          (t.prototype.Xk = function () {}),
          (t.prototype.Rk = function () {}),
          (t.prototype.$f = function () {}),
          (t.prototype.cg = function (t, a) {}),
          t
        );
      })()),
      (application.jk = (function () {
        function c(t, a, i, c, n, f) {
          var o = `
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve">
                            <rect x="0" y="0" width="456" height="456" fill="#517AD1"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/>
                        </svg>
                        <span>${t}</span>
                    </div>`,
            h = $(o);
          return (
            h.click(function () {
              "undefined" !==
                ("undefined" == typeof FB ? "undefined" : _typeof(FB)) &&
                "undefined" != _typeof(FB.ui) &&
                FB.ui(
                  {
                    method: "feed",
                    display: "popup",
                    link: a,
                    name: i,
                    caption: c,
                    description: n,
                    picture: f,
                  },
                  function () {}
                );
            }),
            h
          );
        }
        var n = $("#final-caption"),
          f = $("#final-continue"),
          o = $("#congrats-bg"),
          h = $("#unl6wj4czdl84o9b"),
          d = $("#final-share-fb"),
          s = $("#final-message"),
          b = $("#final-score"),
          r = $("#final-place"),
          u = $("#final-board"),
          p = $("#game-canvas"),
          l = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Kn);
            var i = this,
              c = p.get()[0];
            d.toggle(aux.Mn.Ln),
              n.text(extension.O("index.game.result.title")),
              f.text(extension.O("index.game.result.continue")),
              f.click(function () {
                aux.L.Si.Se(),
                  aux.Mn.Nn.Ca(),
                  aux.L.Si.Ge(application.xe.Ae.rf),
                  aux.L.Fg.Qk(aux.L.Fg.rf);
              }),
              $("html")
                .keydown(function (t) {
                  32 === t.keyCode && (i.On = !0);
                })
                .keyup(function (t) {
                  32 === t.keyCode && (i.On = !1);
                }),
              c.addEventListener(
                "touchmove",
                function (t) {
                  (t = t || window.event) &&
                    ((t = t.touches[0]),
                    "undefined" != _typeof(t.clientX)
                      ? (i.Pn = Math.atan2(
                          t.clientY - 0.5 * c.offsetHeight,
                          t.clientX - 0.5 * c.offsetWidth
                        ))
                      : (i.Pn = Math.atan2(
                          t.pageY - 0.5 * c.offsetHeight,
                          t.pageX - 0.5 * c.offsetWidth
                        )));
                },
                !0
              ),
              c.addEventListener(
                "touchstart",
                function (t) {
                  (t = t || window.event) && (i.On = t.touches.length >= 2),
                    t.preventDefault();
                },
                !0
              ),
              c.addEventListener(
                "touchend",
                function (t) {
                  (t = t || window.event) && (i.On = t.touches.length >= 2);
                },
                !0
              ),
              c.addEventListener(
                "mousemove",
                function (t) {
                  (t =
                    t || (window.event && "undefined" != _typeof(t.clientX))) &&
                    (i.Pn = Math.atan2(
                      t.clientY - 0.5 * c.offsetHeight,
                      t.clientX - 0.5 * c.offsetWidth
                    ));
                },
                !0
              ),
              c.addEventListener(
                "mousedown",
                function (t) {
                  i.On = !0;
                },
                !0
              ),
              c.addEventListener(
                "mouseup",
                function (t) {
                  i.On = !1;
                },
                !0
              ),
              (this.Eg = new application.Vg(p)),
              (this.Qn = g.Rn),
              (this.Pn = 0),
              (this.On = !1);
          });
        (l.prototype.za = function () {}),
          (l.prototype.Wk = function () {
            application.vf._f(!1),
              inject.b.d(application.Cf.Bf, 50),
              inject.b.d(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.c(application.Cf.Bn, 500),
              this.Qn === g.Rn
                ? inject.b.d(application.Cf.Cn, 1)
                : inject.b.c(application.Cf.Cn, 500),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (l.prototype.Rn = function () {
            return (this.Qn = g.Rn), this;
          }),
          (l.prototype.Sn = function () {
            return (
              inject.b.d(o, 1),
              extension.S(function () {
                inject.b.c(o, 500);
              }, 3e3),
              inject.b.d(h, 1),
              extension.S(function () {
                inject.b.c(h, 500);
              }, 500),
              (this.Qn = g.Sn),
              this
            );
          }),
          (l.prototype.Xk = function () {
            (this.On = !1),
              this.Eg.$f(),
              this.Qn === g.Sn && aux.L.Si.We();
          }),
          (l.prototype.$f = function () {
            this.Eg.$f();
          }),
          (l.prototype.cg = function (t, a) {
            this.Eg.cg(t, a);
          }),
          (l.prototype.Tn = function (t, i, n) {
            var f, o, h;
            if (
              (i >= 1 && i <= 10
                ? ((f = extension.O("index.game.result.place.i" + i)),
                  (o = extension.O("index.game.result.placeInBoard")),
                  (h = extension
                    .O("index.game.social.shareResult.messGood")
                    .replace("{0}", n)
                    .replace("{1}", t)
                    .replace("{2}", f)))
                : ((f = ""),
                  (o = extension.O("index.game.result.tryHit")),
                  (h = extension
                    .O("index.game.social.shareResult.messNorm")
                    .replace("{0}", n)
                    .replace("{1}", t))),
              s.html(extension.O("index.game.result.your")),
              b.html(t),
              r.html(f),
              u.html(o),
              aux.Mn.Ln)
            ) {
              var p = extension.O("index.game.result.share");
              extension.O("index.game.social.shareResult.caption");
              d.empty().append(
                c(
                  p,
                  "https://wormate.io",
                  "wormate.io",
                  h,
                  h,
                  "https://wormate.io/images/og-share-img-new.jpg"
                )
              );
            }
          }),
          (l.prototype.Un = function () {
            return this.Pn;
          }),
          (l.prototype.Vn = function () {
            return this.On;
          });
        var g = {
          Rn: 0,
          Sn: 1,
        };
        return l;
      })()),
      (application.Ik = (function () {
        var c = $("#loading-progress-cont"),
          n = $("#loading-progress-bar"),
          f = $("#loading-progress-text"),
          o = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Kn), (this.Wn = -1), (this.Xn = "");
          });
        return (
          (o.prototype.za = function () {}),
          (o.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.c(application.Cf.Gn, 500),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (o.prototype.Xk = function () {
            aux.L.Si.Ge(application.xe.Ae.ze),
              aux.L.Fg.ik.eg(),
              aux.L.Fg.ik.ag(!0);
          }),
          (o.prototype.Rk = function () {
            aux.L.Fg.ik.ag(!1);
          }),
          (o.prototype.Yn = function () {
            this.Zn("", 0), inject.b.c(c, 100);
          }),
          (o.prototype.$n = function () {
            inject.b.d(c, 100);
          }),
          (o.prototype.Zn = function (t, a) {
            this.Xn !== t && (this.Xn = t);
            var i = extension.$(Math.floor(100 * a), 0, 100);
            this.Wn !== i && (n.css("width", i + "%"), f.html(i + " %"));
          }),
          o
        );
      })()),
      (application.kk = (function () {
        var c = $("#mm-line-top"),
          n =
            ($("#mm-line-center"),
            $("#mm-line-bottom"),
            $("#mm-bottom-buttons")),
          f = $("#mm-menu-cont"),
          o = $("#mm-loading"),
          h = $("#mm-loading-progress-bar"),
          d = $("#mm-loading-progress-text"),
          s = ($("#mm-event-text"), $("#mm-skin-canv")),
          b = $("#mm-skin-prev"),
          r = $("#mm-skin-next"),
          u = $("#mm-skin-over"),
          p = $("#mm-skin-over-button-list"),
          l = $("#mm-params-nickname"),
          g = $("#mm-params-game-mode"),
          v = $("#mm-action-play"),
          y = $("#mm-action-guest"),
          j = $("#mm-action-login"),
          m = $("#mm-player-info"),
          w = $("#mm-store"),
          k = $("#mm-leaders"),
          L = $("#mm-settings"),
          C = $("#mm-coins-box"),
          M = $("#mm-player-avatar"),
          S = $("#mm-player-username"),
          q = $("#mm-coins-val"),
          F = $("#mm-player-exp-bar"),
          x = $("#mm-player-exp-val"),
          z = $("#mm-player-level"),
          I = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Uk),
              (this.Wn = -1),
              (this.Xn = ""),
              (this._n = new application.tm(s)),
              g.click(function () {
                aux.L.Si.Se();
              }),
              s.click(function () {
                aux.L.Yj.Xj() &&
                  (aux.L.Si.Se(),
                  aux.L.Fg.Qk(aux.L.Fg.yk));
              }),
              b.click(function () {
                aux.L.Si.Se(), aux.L.ao.Uj();
              }),
              r.click(function () {
                aux.L.Si.Se(), aux.L.ao.Tj();
              }),
              l.keypress(function (t) {
                13 === t.keyCode && aux.L.bo();
              }),
              v.click(function () {
                aux.L.Si.Se(), aux.L.bo();
              }),
              y.click(function () {
                aux.L.Si.Se(), aux.L.bo();
              }),
              j.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.vk);
              }),
              L.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.oi);
              }),
              m.click(function () {
                aux.L.Yj.Xj() &&
                  (aux.L.Si.Se(),
                  aux.L.Fg.Qk(aux.L.Fg.tk));
              }),
              k.click(function () {
                aux.L.Yj.Xj() &&
                  (aux.L.Si.Se(),
                  aux.L.Fg.Qk(aux.L.Fg.rk));
              }),
              w.click(function () {
                aux.L.Yj.Xj() &&
                  (aux.L.Si.Se(),
                  aux.L.Fg.Qk(aux.L.Fg.Ak));
              }),
              C.click(function () {
                aux.L.Yj.Xj() &&
                  (aux.L.Si.Se(),
                  aux.L.Fg.Qk(aux.L.Fg.pk));
              }),
              this.co(),
              this.do();
            var i = application.kg.wg(application.kg.qg);
            i !== "ARENA" && i !== "TEAM2" && (i = "ARENA"), g.val(i);
          });
        return (
          (I.prototype.za = function () {
            var i = this;
            aux.L.Yj.Pl(function () {
              aux.L.Yj.Xj()
                ? (aux.L.ao.Vj(aux.L.Yj.Cl(), application.Jj.Ij),
                  aux.L.ao.Vj(aux.L.Yj.Dl(), application.Jj.Kj),
                  aux.L.ao.Vj(aux.L.Yj.El(), application.Jj.Lj),
                  aux.L.ao.Vj(aux.L.Yj.Fl(), application.Jj.Nj),
                  aux.L.ao.Vj(aux.L.Yj.Gl(), application.Jj.Mj))
                : (aux.L.ao.Vj(aux.L.eo(), application.Jj.Ij),
                  aux.L.ao.Vj(0, application.Jj.Kj),
                  aux.L.ao.Vj(0, application.Jj.Lj),
                  aux.L.ao.Vj(0, application.Jj.Nj),
                  aux.L.ao.Vj(0, application.Jj.Mj));
            }),
              aux.L.Yj.Pl(function () {
                v.toggle(aux.L.Yj.Xj()),
                  j.toggle(!aux.L.Yj.Xj()),
                  y.toggle(!aux.L.Yj.Xj()),
                  k.toggle(aux.L.Yj.Xj()),
                  w.toggle(aux.L.Yj.Xj()),
                  C.toggle(aux.L.Yj.Xj()),
                  m.toggle(!0),
                  L.toggle(!0),
                  aux.L.Yj.Xj()
                    ? (u.hide(),
                      S.html(aux.L.Yj.tl()),
                      M.attr("src", aux.L.Yj.vl()),
                      q.html(aux.L.Yj.yl()),
                      F.width(
                        (100 * aux.L.Yj.Al()) / aux.L.Yj.Bl() +
                          "%"
                      ),
                      x.html(
                        aux.L.Yj.Al() + " / " + aux.L.Yj.Bl()
                      ),
                      z.html(aux.L.Yj.zl()),
                      l.val(aux.L.Yj.ul()))
                    : (u.toggle(aux.Mn.Ln && !aux.L.fo()),
                      S.html(S.data("guest")),
                      M.attr("src", aux.A.G),
                      q.html("10"),
                      F.width("0"),
                      x.html(""),
                      z.html(1),
                      l.val(application.kg.wg(application.kg.rg)));
              }),
              aux.L.ao.Pj(function () {
                i._n.om(aux.L.ao.Oj());
              });
          }),
          (I.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.c(application.Cf.zn, 500),
              inject.b.c(application.Cf.An, 500),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.c(application.Cf.Dn, 500),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (I.prototype.go = function () {
            inject.b.c(c, 500),
              inject.b.c(n, 500),
              inject.b.c(f, 500),
              inject.b.d(o, 100);
          }),
          (I.prototype.ho = function () {
            inject.b.d(c, 100),
              inject.b.d(n, 100),
              inject.b.d(f, 100),
              inject.b.c(o, 500);
          }),
          (I.prototype.Zn = function (t, a) {
            this.Xn !== t && (this.Xn = t);
            var i = extension.$(Math.floor(100 * a), 0, 100);
            this.Wn !== i && (h.css("width", i + "%"), d.html(i + " %"));
          }),
          (I.prototype.Xk = function () {
            aux.L.Si.Te(), this._n._f(!0);
          }),
          (I.prototype.Rk = function () {
            this._n._f(!1);
          }),
          (I.prototype.$f = function () {
            this._n.$f();
          }),
          (I.prototype.cg = function (t, a) {
            this._n.cg();
          }),
          (I.prototype.ul = function () {
            return l.val();
          }),
          (I.prototype.io = function () {
            return g.val();
          }),
          (I.prototype.co = function () {
            var t = $("#mm-advice-cont").children(),
              a = 0;
            extension.R(function () {
              t.eq(a).fadeOut(500, function () {
                ++a >= t.length && (a = 0),
                  t.eq(a).fadeIn(500).css("display", "inline-block");
              });
            }, 3e3);
          }),
          (I.prototype.do = function () {
            function t() {
              aux.L.jo(!0),
                extension.S(function () {
                  u.hide();
                }, 3e3);
            }
            if (aux.Mn.Ln && !aux.L.fo()) {
              u.show();
              var i = extension.O("index.game.main.menu.unlockSkins.share"),
                c = encodeURIComponent(
                  extension.O("index.game.main.menu.unlockSkins.comeAndPlay") +
                    " https://wormate.io/ #wormate #wormateio"
                ),
                n = encodeURIComponent(
                  extension.O("index.game.main.menu.unlockSkins.comeAndPlay")
                );
              p.append(
                $(
                  '<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=" + c + "">" + "<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="/>" + "<span>" + i + "</span></a>'
                ).click(t)
              ),
                p.append(
                  $(
                    '<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + n + "">" + "<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>" + "<span>" + i + "</span></a>'
                  ).click(t)
                );
            }
          }),
          I
        );
      })()),
      (application.Ok = (function () {
        var a = extension.X(application.Cf, function () {
          application.Cf.call(this, application.Vk.Kn);
        });
        return (
          (a.prototype.za = function () {}),
          (a.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.d(application.Cf.Bf, 50),
              inject.b.d(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          a
        );
      })()),
      (application.Fk = (function () {
        var a = extension.X(application.Cf, function () {
          application.Cf.call(this, application.Vk.Kn);
        });
        return (
          (a.prototype.za = function () {}),
          (a.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.c(application.Cf.Hn, 500),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (a.prototype.Xk = function () {}),
          a
        );
      })()),
      (application.Hk = (function () {
        var c = $("#toaster-stack"),
          n = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Kn), (this.ko = []), (this.lo = null);
          });
        return (
          (n.prototype.za = function () {}),
          (n.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.c(application.Cf.An, 500),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.c(application.Cf.Fn, 500),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (n.prototype.Xk = function () {
            this.mo();
          }),
          (n.prototype.$k = function () {
            return null != this.lo || this.ko.length > 0;
          }),
          (n.prototype.no = function (t) {
            this.ko.unshift(t),
              extension.S(function () {
                aux.L.Fg.Yk();
              }, 0);
          }),
          (n.prototype.Ul = function (t) {
            this.ko.push(t),
              extension.S(function () {
                aux.L.Fg.Yk();
              }, 0);
          }),
          (n.prototype.mo = function () {
            var t = this;
            if (null == this.lo) {
              if (0 === this.ko.length) return void aux.L.Fg.Tk();
              var n = this.ko.shift();
              this.lo = n;
              var f = n.Kf();
              inject.b.c(f, 300),
                c.append(f),
                (n.oo = function () {
                  f.fadeOut(300),
                    extension.S(function () {
                      f.remove();
                    }, 300),
                    t.lo === n && (t.lo = null),
                    t.mo();
                }),
                n.Xk();
            }
          }),
          n
        );
      })()),
      (application.Vk = {
        Kn: 0,
        Uk: 1,
      }),
      (application.po = (function () {
        var n = $("#popup-menu-label"),
          f = $("#popup-menu-coins-box"),
          o = $("#popup-menu-coins-val");
        $("#popup-menu-back").click(function () {
          aux.L.Si.Se(), aux.L.Fg.Tk();
        }),
          f.click(function () {
            aux.L.Yj.Xj() &&
              (aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.pk));
          });
        var h = extension.X(application.Cf, function (a, e) {
          application.Cf.call(this, application.Vk.Uk),
            (this.Ea = a),
            (this.qo = e),
            (this.ro = []);
        });
        return (
          (h.prototype.za = function () {
            h.parent.prototype.za.call(this),
              h.so ||
                ((h.so = !0),
                aux.L.Yj.Pl(function () {
                  aux.L.Yj.Xj()
                    ? o.html(aux.L.Yj.yl())
                    : o.html("0");
                })),
              inject.b.d(application.po.to, 100);
          }),
          (h.uo = $("#coins-view")),
          (h.vo = $("#leaders-view")),
          (h.wo = $("#profile-view")),
          (h.xo = $("#login-view")),
          (h.yo = $("#settings-view")),
          (h.zo = $("#skins-view")),
          (h.Ao = $("#store-view")),
          (h.Bo = $("#wear-view")),
          (h.Co = $("#withdraw-consent-view")),
          (h.Do = $("#delete-account-view")),
          (h.to = $("#please-wait-view")),
          (h.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 1),
              inject.b.c(application.Cf.yn, 500),
              inject.b.c(application.Cf.zn, 200),
              inject.b.c(application.Cf.An, 200),
              inject.b.d(application.Cf.Bn, 200),
              inject.b.d(application.Cf.Cn, 200),
              inject.b.d(application.Cf.Dn, 200),
              inject.b.c(application.Cf.En, 200),
              inject.b.d(application.Cf.Fn, 200),
              inject.b.d(application.Cf.Gn, 200),
              inject.b.d(application.Cf.Hn, 200),
              inject.b.d(application.Cf.In, 200),
              inject.b.d(application.Cf.Jn, 200),
              n.html(this.Ea),
              f.toggle(this.qo),
              this.Eo();
          }),
          (h.prototype.Eo = function () {}),
          (h.prototype.Fo = function (a) {
            var n = this,
              f = 2147483647 & extension.da(0, 2147483647);
            return (
              this.ro.push(f),
              inject.b.c(application.po.to, 100),
              extension.S(function () {
                n.Go(f);
              }, a),
              new c(this, f)
            );
          }),
          (h.prototype.Go = function (a) {
            var e = this.ro.indexOf(a);
            e < 0 ||
              (this.ro.splice(e, 1),
              0 === this.ro.length && inject.b.d(application.po.to, 100));
          }),
          h
        );
      })());
    var c = (function () {
      function t(t, a) {
        (this.Ho = t), (this.Io = a);
      }
      return (
        (t.prototype.Jo = function () {
          this.Ho.Go(this.Io);
        }),
        t
      );
    })();
    (application.qk = (function () {
      var c = $("#store-buy-coins_125000"),
        n = $("#store-buy-coins_50000"),
        f = $("#store-buy-coins_16000"),
        o = $("#store-buy-coins_7000"),
        h = $("#store-buy-coins_3250"),
        d = $("#store-buy-coins_1250"),
        s = extension.X(application.po, function () {
          application.po.call(this, extension.O("index.game.popup.menu.coins.tab"), !1);
          var i = this;
          c.click(function () {
            aux.L.Si.Se(), i.Ko("coins_125000");
          }),
            n.click(function () {
              aux.L.Si.Se(), i.Ko("coins_50000");
            }),
            f.click(function () {
              aux.L.Si.Se(), i.Ko("coins_16000");
            }),
            o.click(function () {
              aux.L.Si.Se(), i.Ko("coins_7000");
            }),
            h.click(function () {
              aux.L.Si.Se(), i.Ko("coins_3250");
            }),
            d.click(function () {
              aux.L.Si.Se(), i.Ko("coins_1250");
            });
        });
      return (
        (s.prototype.za = function () {
          s.parent.prototype.za.call(this);
        }),
        (s.prototype.Eo = function () {
          inject.b.c(application.po.uo, 200),
            inject.b.d(application.po.vo, 50),
            inject.b.d(application.po.wo, 50),
            inject.b.d(application.po.xo, 50),
            inject.b.d(application.po.yo, 50),
            inject.b.d(application.po.zo, 50),
            inject.b.d(application.po.Ao, 50),
            inject.b.d(application.po.Bo, 50),
            inject.b.d(application.po.Co, 50),
            inject.b.d(application.po.Do, 50);
        }),
        (s.prototype.Xk = function () {
          aux.L.Si.Te();
        }),
        (s.prototype.Ko = function (t) {}),
        s
      );
    })()),
      (application.sk = (function () {
        var c = $("#highscore-table"),
          n = $("#leaders-button-level"),
          f = $("#leaders-button-highscore"),
          o = $("#leaders-button-kills"),
          h = "byLevel",
          d = "byHighScore",
          s = "byKillsAndHeadShots",
          b = extension.X(application.po, function () {
            application.po.call(
              this,
              extension.O("index.game.popup.menu.leaders.tab"),
              !0
            );
            var i = this;
            (this.Lo = {}),
              (this.Mo = {
                No: {
                  Oo: n,
                  Po: h,
                },
                Qo: {
                  Oo: f,
                  Po: d,
                },
                Ro: {
                  Oo: o,
                  Po: s,
                },
              }),
              n.click(function () {
                aux.L.Si.Se(), i.So(i.Mo.No);
              }),
              f.click(function () {
                aux.L.Si.Se(), i.So(i.Mo.Qo);
              }),
              o.click(function () {
                aux.L.Si.Se(), i.So(i.Mo.Ro);
              });
          });
        return (
          (b.prototype.za = function () {
            b.parent.prototype.za.call(this);
          }),
          (b.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.c(application.po.vo, 200),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (b.prototype.Xk = function () {
            var t = this;
            aux.L.Si.Te();
            var i = this.Fo(5e3),
              c = aux.A.C + "/pub/leaders";
            extension.ha(
              c,
              function () {
                var a = {};
                (a[h] = []),
                  (a[d] = []),
                  (a[s] = []),
                  (t.Lo = a),
                  t.So(null != t.To ? t.To : t.Mo.No),
                  i.Jo();
              },
              function (a) {
                (t.Lo = a), t.So(null != t.To ? t.To : t.Mo.No), i.Jo();
              }
            );
          }),
          (b.prototype.So = function (t) {
            this.To = t;
            for (var a in this.Mo)
              if (this.Mo.hasOwnProperty(a)) {
                var i = this.Mo[a];
                i.Oo.removeClass("pressed");
              }
            this.To.Oo.addClass("pressed");
            for (
              var n = this.Lo[this.To.Po], f = "", o = 0;
              o < n.length;
              o++
            ) {
              var h = n[o];
              f += '<div class="table-row"><span>'
                .concat(
                  o + 1,
                  '</span><span><img src="").concat(h["avatarUrl"], ""/></span><span>'
                )
                .concat(h["username"], "</span><span>")
                .concat(h["level"], "</span><span>")
                .concat(h["highScore"], " / ")
                .concat(h["kills"], "</span><span>")
                .concat(h["headShots"], "</span></div>");
            }
            c.empty(), c.append(f);
          }),
          b
        );
      })()),
      (application.wk = (function () {
        var c = $("#popup-login-gg"),
          n = $("#popup-login-fb"),
          f = extension.X(application.po, function () {
            var i = this;
            application.po.call(this, extension.O("index.game.popup.menu.login.tab"), !1),
              c.click(function () {
                aux.L.Si.Se();
                var t = i.Fo(1e4);
                extension.S(function () {
                  aux.L.Yj.am(function () {
                    aux.L.Yj.Xj() && aux.L.Si.We(), t.Jo();
                  });
                }, 500);
              }),
              n.click(function () {
                aux.L.Si.Se();
                var t = i.Fo(1e4);
                extension.S(function () {
                  aux.L.Yj.Zl(function () {
                    aux.L.Yj.Xj() && aux.L.Si.We(), t.Jo();
                  });
                }, 500);
              });
          });
        return (
          (f.prototype.za = function () {
            f.parent.prototype.za.call(this);
          }),
          (f.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.c(application.po.xo, 200),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (f.prototype.Xk = function () {
            aux.L.Si.Te();
          }),
          f
        );
      })()),
      (application.uk = (function () {
        var c = $("#profile-avatar"),
          n = $("#profile-username"),
          f = $("#profile-experience-bar"),
          o = $("#profile-experience-val"),
          h = $("#profile-level"),
          d = $("#profile-stat-highScore"),
          s = $("#profile-stat-bestSurvivalTime"),
          b = $("#profile-stat-kills"),
          r = $("#profile-stat-headshots"),
          u = $("#profile-stat-gamesPlayed"),
          p = $("#profile-stat-totalTimeSpent"),
          l = $("#profile-stat-registrationDate"),
          g = extension.X(application.po, function () {
            application.po.call(
              this,
              extension.O("index.game.popup.menu.profile.tab"),
              !0
            );
          });
        return (
          (g.prototype.za = function () {
            g.parent.prototype.za.call(this);
          }),
          (g.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.c(application.po.wo, 200),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (g.prototype.Xk = function () {
            aux.L.Si.Te();
            var t = aux.L.Yj.Nl(),
              i = moment([t.year, t.month - 1, t.day]).format("LL");
            n.html(aux.L.Yj.tl()),
              c.attr("src", aux.L.Yj.vl()),
              f.width(
                (100 * aux.L.Yj.Al()) / aux.L.Yj.Bl() + "%"
              ),
              o.html(aux.L.Yj.Al() + " / " + aux.L.Yj.Bl()),
              h.html(aux.L.Yj.zl()),
              d.html(aux.L.Yj.Hl()),
              s.html(extension.U(aux.L.Yj.Il())),
              b.html(aux.L.Yj.Jl()),
              r.html(aux.L.Yj.Kl()),
              u.html(aux.L.Yj.Ll()),
              p.html(extension.U(aux.L.Yj.Ml())),
              l.html(i);
          }),
          g
        );
      })()),
      (application.xk = (function () {
        var c = $("#settings-music-enabled-switch"),
          n = $("#settings-sfx-enabled-switch"),
          f = $("#settings-show-names-switch"),
          o = $("#popup-logout"),
          h = $("#popup-logout-container"),
          d = $("#popup-delete-account"),
          s = $("#popup-delete-account-container"),
          b = $("#popup-withdraw-consent"),
          r = extension.X(application.po, function () {
            application.po.call(
              this,
              extension.O("index.game.popup.menu.settings.tab"),
              !1
            );
            var i = this;
            c.click(function () {
              var i = !!c.prop("checked");
              application.kg.vg(application.kg.ng, i, 30),
                aux.L.Si.Ie(i),
                aux.L.Si.Se();
            }),
              n.click(function () {
                var i = !!n.prop("checked");
                application.kg.vg(application.kg.og, i, 30),
                  aux.L.Si.Fe(i),
                  aux.L.Si.Se();
              }),
              f.click(function () {
                aux.L.Si.Se();
              }),
              o.click(function () {
                aux.L.Si.Se(), i.Fo(500), aux.L.Yj.$l();
              }),
              d.click(function () {
                aux.L.Yj.Xj()
                  ? (aux.L.Si.Se(),
                    aux.L.Fg.Qk(aux.L.Fg.nk))
                  : aux.L.Si.Xe();
              }),
              b.click(function () {
                aux.L.Uo()
                  ? (aux.L.Si.Se(),
                    aux.L.Fg.Qk(aux.L.Fg.lk))
                  : aux.L.Si.Xe();
              });
          });
        return (
          (r.prototype.za = function () {
            r.parent.prototype.za.call(this);
            var i;
            switch (application.kg.wg(application.kg.ng)) {
              case "false":
                i = !1;
                break;
              default:
                i = !0;
            }
            c.prop("checked", i), aux.L.Si.Ie(i);
            var o;
            switch (application.kg.wg(application.kg.og)) {
              case "false":
                o = !1;
                break;
              default:
                o = !0;
            }
            n.prop("checked", o), aux.L.Si.Fe(o);
            var d;
            switch (application.kg.wg(application.kg.mg)) {
              case "false":
                d = !1;
                break;
              default:
                d = !0;
            }
            f.prop("checked", d),
              aux.L.Yj.Ol(function () {
                h.toggle(aux.L.Yj.Xj()),
                  s.toggle(aux.L.Yj.Xj());
              });
          }),
          (r.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.c(application.po.yo, 200),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (r.prototype.Xk = function () {
            aux.L.Si.Te(), aux.L.Uo() ? b.show() : b.hide();
          }),
          (r.prototype.ni = function () {
            return f.prop("checked");
          }),
          r
        );
      })()),
      (application.zk = (function () {
        var c = $("#store-view-canv"),
          n = $("#skin-description-text"),
          f = $("#skin-group-description-text"),
          o = $("#store-locked-bar"),
          h = $("#store-locked-bar-text"),
          d = $("#store-buy-button"),
          s = $("#store-item-price"),
          b = $("#store-groups"),
          r = $("#store-view-prev"),
          u = $("#store-view-next"),
          p = extension.X(application.po, function () {
            application.po.call(this, extension.O("index.game.popup.menu.skins.tab"), !0);
            var i = this;
            (this.Vo = null),
              (this.Wo = []),
              (this.Xo = {}),
              (this.Yo = new application.tm(c)),
              d.click(function () {
                aux.L.Si.Se(), i.Zo();
              }),
              r.click(function () {
                aux.L.Si.Se(), i.Vo.$o();
              }),
              u.click(function () {
                aux.L.Si.Se(), i.Vo._o();
              });
          });
        (p.prototype.za = function () {
          p.parent.prototype.za.call(this);
          var t = this;
          aux.L.bd.qc(function () {
            var i = aux.L.bd.nc();
            t.Wo = [];
            for (var c = 0; c < i["skinGroupArrayDict"].length; c++)
              t.Wo.push(new l(t, i["skinGroupArrayDict"][c]));
            t.Xo = {};
            for (var n = 0; n < i["skinArrayDict"].length; n++) {
              var f = i["skinArrayDict"][n];
              t.Xo[f["id"]] = f;
            }
            t.ap();
          }),
            this.bp(!1),
            aux.L.ao.Pj(function () {
              t.bp(!1);
            });
        }),
          (p.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.c(application.po.zo, 200),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (p.prototype.Xk = function () {
            aux.L.Si.Ge(application.xe.Ae.rf),
              aux.L.Si.Te(),
              this.ap(),
              this.Yo._f(!0);
          }),
          (p.prototype.Rk = function () {
            this.Yo._f(!1);
          }),
          (p.prototype.$f = function () {
            this.Yo.$f();
          }),
          (p.prototype.cg = function (t, a) {
            this.Yo.cg();
          }),
          (p.prototype.ap = function () {
            var i = this,
              c = this;
            b.empty();
            for (var n = 0; n < this.Wo.length; n++)
              !(function (t) {
                var n = i.Wo[t],
                  f = document.createElement("li");
                b.append(f);
                var o = $(f);
                o.html(n.cp()),
                  o.click(function () {
                    aux.L.Si.Se(), c.dp(n);
                  }),
                  (n.ep = o);
              })(n);
            if (this.Wo.length > 0) {
              for (
                var f = aux.L.ao.Hj(application.Jj.Ij), o = 0;
                o < this.Wo.length;
                o++
              )
                for (
                  var h = this.Wo[o], d = h.fp.list, s = 0;
                  s < d.length;
                  s++
                )
                  if (d[s] === f) return (h.gp = s), void this.dp(h);
              this.dp(this.Wo[0]);
            }
          }),
          (p.prototype.dp = function (t) {
            if (this.Vo !== t) {
              if (
                ((this.Vo = t),
                b.children().removeClass("pressed"),
                this.Vo.ep && this.Vo.ep.addClass("pressed"),
                f.html(""),
                null != t.fp)
              ) {
                var i = aux.L.bd.nc()["textDict"][t.fp["description"]];
                null != i && f.html(extension.V(extension.P(i)));
              }
              this.bp(!0);
            }
          }),
          (p.prototype.hp = function () {
            return null == this.Vo ? application.gj.ij() : this.Vo.ip();
          }),
          (p.prototype.Zo = function () {
            var t = this,
              a = this.hp();
            if (a.kj()) {
              var e = a.tc();
              t.jp(e);
            }
          }),
          (p.prototype.jp = function (e) {
            var i = aux.L.ao.Wj(e, application.Jj.Ij);
            if (null != i) {
              var c = i.Zj();
              if (!(aux.L.Yj.yl() < c)) {
                var n = aux.L.ao.Hj(application.Jj.Ij),
                  f = aux.L.ao.Hj(application.Jj.Kj),
                  o = aux.L.ao.Hj(application.Jj.Lj),
                  h = aux.L.ao.Hj(application.Jj.Nj),
                  d = aux.L.ao.Hj(application.Jj.Mj),
                  s = this.Fo(5e3);
                aux.L.Yj.Xl(
                  e,
                  application.Jj.Ij,
                  function () {
                    s.Jo(), aux.L.Fg.Qk(aux.L.Fg.Jk);
                  },
                  function () {
                    aux.L.Yj.Rl(function () {
                      aux.L.ao.Vj(n, application.Jj.Ij),
                        aux.L.ao.Vj(f, application.Jj.Kj),
                        aux.L.ao.Vj(o, application.Jj.Lj),
                        aux.L.ao.Vj(h, application.Jj.Nj),
                        aux.L.ao.Vj(d, application.Jj.Mj),
                        aux.L.ao.Vj(e, application.Jj.Ij),
                        s.Jo();
                    });
                  }
                );
              }
            }
          }),
          (p.prototype.bp = function (i) {
            var c = aux.L.ao.Oj(),
              f = this.hp();
            if (f.kj()) {
              var b = f.tc(),
                r = aux.L.ao.Wj(b, application.Jj.Ij),
                u = !1;
              if (aux.L.ao.Sj(b, application.Jj.Ij)) o.hide(), d.hide();
              else if (null == r || r.$j()) {
                if (
                  ((u = !0),
                  o.show(),
                  d.hide(),
                  h.text(extension.O("index.game.popup.menu.store.locked")),
                  null != r && r.$j())
                ) {
                  var p = aux.L.bd.nc()["textDict"][r.Um()];
                  null != p && h.text(extension.P(p));
                }
              } else o.hide(), d.show(), s.html(r.Zj());
              if ((n.html(""), null != r && null != r.Vm())) {
                var l = aux.L.bd.nc()["textDict"][r.Vm()];
                null != l && n.html(extension.V(extension.P(l)));
              }
              this.Yo.om(c.jn(b)),
                this.Yo.Km(u),
                i && aux.L.ao.Vj(b, application.Jj.Ij);
            }
          });
        var l = (function () {
          function a(t, a) {
            (this.kp = t), (this.gp = 0), (this.fp = a);
          }
          return (
            (a.prototype.$o = function () {
              --this.gp < 0 && (this.gp = this.fp.list.length - 1),
                this.kp.bp(!0);
            }),
            (a.prototype._o = function () {
              ++this.gp >= this.fp.list.length && (this.gp = 0), this.kp.bp(!0);
            }),
            (a.prototype.cp = function () {
              return extension.P(this.fp.name);
            }),
            (a.prototype.ip = function () {
              return this.gp >= this.fp.list.length
                ? application.gj.ij()
                : application.gj.jj(this.fp.list[this.gp]);
            }),
            a
          );
        })();
        return p;
      })()),
      (application.Bk = (function () {
        var c = $("#store-go-coins-button"),
          n = $("#store-go-skins-button"),
          f = $("#store-go-wear-button"),
          o = extension.X(application.po, function () {
            application.po.call(this, extension.O("index.game.popup.menu.store.tab"), !0),
              c.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.pk);
              }),
              n.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.yk);
              }),
              f.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.Ck);
              });
          });
        return (
          (o.prototype.za = function () {
            o.parent.prototype.za.call(this);
          }),
          (o.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.c(application.po.Ao, 200),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (o.prototype.Xk = function () {
            aux.L.Si.Te();
          }),
          o
        );
      })()),
      (application.Dk = (function () {
        var c = $("#wear-view-canv"),
          n = $("#wear-description-text"),
          f = $("#wear-locked-bar"),
          o = $("#wear-locked-bar-text"),
          h = $("#wear-buy-button"),
          d = $("#wear-item-price"),
          s = $("#wear-eyes-button"),
          b = $("#wear-mouths-button"),
          r = $("#wear-glasses-button"),
          u = $("#wear-hats-button"),
          p = $("#wear-tint-chooser"),
          l = $("#wear-view-prev"),
          g = $("#wear-view-next"),
          v = extension.X(application.po, function () {
            var i = this;
            application.po.call(this, extension.O("index.game.popup.menu.wear.tab"), !0);
            var n = this;
            (this.lp = []),
              (this.Kj = new y(this, application.Jj.Kj, s)),
              (this.Lj = new y(this, application.Jj.Lj, b)),
              (this.Nj = new y(this, application.Jj.Nj, r)),
              (this.Mj = new y(this, application.Jj.Mj, u)),
              (this.mp = null),
              (this.np = null),
              (this.op = null),
              (this.pp = null),
              (this.qp = null),
              (this.rp = null),
              (this.Yo = new application.tm(c)),
              h.click(function () {
                aux.L.Si.Se(), n.sp();
              }),
              l.click(function () {
                aux.L.Si.Se(), n.mp.tp();
              }),
              g.click(function () {
                aux.L.Si.Se(), n.mp.up();
              }),
              s.click(function () {
                aux.L.Si.Se(), n.vp(i.Kj);
              }),
              b.click(function () {
                aux.L.Si.Se(), n.vp(i.Lj);
              }),
              r.click(function () {
                aux.L.Si.Se(), n.vp(i.Nj);
              }),
              u.click(function () {
                aux.L.Si.Se(), n.vp(i.Mj);
              }),
              this.lp.push(this.Kj),
              this.lp.push(this.Lj),
              this.lp.push(this.Nj),
              this.lp.push(this.Mj);
          });
        (v.prototype.za = function () {
          v.parent.prototype.za.call(this);
          var t = this;
          aux.L.bd.qc(function () {
            var i = aux.L.bd.nc();
            (t.np = i["eyesDict"]),
              (t.op = i["mouthDict"]),
              (t.pp = i["glassesDict"]),
              (t.qp = i["hatDict"]),
              (t.rp = i["colorDict"]),
              t.Kj.wp(i["eyesVariantArray"]),
              t.Kj.xp(t.np),
              t.Lj.wp(i["mouthVariantArray"]),
              t.Lj.xp(t.op),
              t.Nj.wp(i["glassesVariantArray"]),
              t.Nj.xp(t.pp),
              t.Mj.wp(i["hatVariantArray"]),
              t.Mj.xp(t.qp);
          }),
            this.bp(!1),
            aux.L.ao.Pj(function () {
              t.bp(!1);
            });
        }),
          (v.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.c(application.po.Bo, 200),
              inject.b.d(application.po.Co, 50),
              inject.b.d(application.po.Do, 50);
          }),
          (v.prototype.Xk = function () {
            aux.L.Si.Ge(application.xe.Ae.rf),
              aux.L.Si.Te(),
              this.vp(null != this.mp ? this.mp : this.Kj),
              this.Yo._f(!0);
          }),
          (v.prototype.Rk = function () {
            this.Yo._f(!1);
          }),
          (v.prototype.$f = function () {
            this.Yo.$f();
          }),
          (v.prototype.cg = function (t, a) {
            this.Yo.cg();
          }),
          (v.prototype.vp = function (t) {
            this.mp = t;
            for (var a = 0; a < this.lp.length; a++)
              this.lp[a].Oo.removeClass("pressed");
            this.mp.Oo.addClass("pressed"), this.mp.Wk();
          }),
          (v.prototype.yp = function () {
            return null == this.mp
              ? application.gj.ij()
              : application.gj.jj({
                  re: this.mp.ip(),
                  Ed: this.mp.Ed,
                });
          }),
          (v.prototype.sp = function () {
            var t = this,
              a = this.yp();
            if (a.kj()) {
              var e = a.tc();
              t.zp(e.re, e.Ed);
            }
          }),
          (v.prototype.zp = function (e, i) {
            var c = aux.L.ao.Wj(e, i);
            if (null != c) {
              var n = c.Zj();
              if (!(aux.L.Yj.yl() < n)) {
                var f = aux.L.ao.Hj(application.Jj.Ij),
                  o = aux.L.ao.Hj(application.Jj.Kj),
                  h = aux.L.ao.Hj(application.Jj.Lj),
                  d = aux.L.ao.Hj(application.Jj.Nj),
                  s = aux.L.ao.Hj(application.Jj.Mj),
                  b = this.Fo(5e3);
                aux.L.Yj.Xl(
                  e,
                  i,
                  function () {
                    b.Jo(), aux.L.Fg.Qk(aux.L.Fg.Jk);
                  },
                  function () {
                    aux.L.Yj.Rl(function () {
                      aux.L.ao.Vj(f, application.Jj.Ij),
                        aux.L.ao.Vj(o, application.Jj.Kj),
                        aux.L.ao.Vj(h, application.Jj.Lj),
                        aux.L.ao.Vj(d, application.Jj.Nj),
                        aux.L.ao.Vj(s, application.Jj.Mj),
                        aux.L.ao.Vj(e, i),
                        b.Jo();
                    });
                  }
                );
              }
            }
          }),
          (v.prototype.bp = function (i) {
            var c = aux.L.ao.Oj(),
              s = this.yp();
            if (s.kj()) {
              var b = s.tc(),
                r = aux.L.ao.Wj(b.re, b.Ed),
                u = !1;
              if (aux.L.ao.Sj(b.re, b.Ed)) f.hide(), h.hide();
              else if (null == r || r.$j()) {
                if (
                  ((u = !0),
                  f.show(),
                  h.hide(),
                  o.text(extension.O("index.game.popup.menu.store.locked")),
                  null != r && r.$j())
                ) {
                  var p = aux.L.bd.nc()["textDict"][r.Um()];
                  null != p && o.text(extension.P(p));
                }
              } else f.hide(), h.show(), d.html(r.Zj());
              if ((n.html(""), null != r && null != r.Vm())) {
                var l = aux.L.bd.nc()["textDict"][r.Vm()];
                null != l && n.html(extension.V(extension.P(l)));
              }
              var g = this.Yo;
              switch (b.Ed) {
                case application.Jj.Kj:
                  g.om(c.kn(b.re)), g.Lm(u);
                  break;
                case application.Jj.Lj:
                  g.om(c.ln(b.re)), g.Mm(u);
                  break;
                case application.Jj.Nj:
                  g.om(c.nn(b.re)), g.Om(u);
                  break;
                case application.Jj.Mj:
                  g.om(c.mn(b.re)), g.Nm(u);
              }
              i && aux.L.ao.Vj(b.re, b.Ed);
            }
          });
        var y = (function () {
          function t(t, a, e) {
            (this.kp = t),
              (this.Ed = a),
              (this.Oo = e),
              (this.sc = {}),
              (this.Ap = [[]]),
              (this.Bp = -10),
              (this.Cp = -10);
          }
          return (
            (t.prototype.wp = function (t) {
              this.Ap = t;
            }),
            (t.prototype.xp = function (t) {
              this.sc = t;
            }),
            (t.prototype.Wk = function () {
              for (
                var t = aux.L.ao.Hj(this.Ed), e = 0;
                e < this.Ap.length;
                e++
              )
                for (var i = 0; i < this.Ap[e].length; i++)
                  if (this.Ap[e][i] === t) return this.Dp(e), void this.Ep(i);
              this.Dp(0), this.Ep(0);
            }),
            (t.prototype.tp = function () {
              var t = this.Bp - 1;
              t < 0 && (t = this.Ap.length - 1),
                this.Dp(t),
                this.Ep(this.Cp % this.Ap[t].length);
            }),
            (t.prototype.up = function () {
              var t = this.Bp + 1;
              t >= this.Ap.length && (t = 0),
                this.Dp(t),
                this.Ep(this.Cp % this.Ap[t].length);
            }),
            (t.prototype.Dp = function (t) {
              var i = this;
              if (!(t < 0 || t >= this.Ap.length)) {
                (this.Bp = t), p.empty();
                var c = this.Ap[this.Bp];
                if (c.length > 1)
                  for (var n = 0; n < c.length; n++)
                    !(function (t) {
                      var n = c[t],
                        f = i.sc[n],
                        o = "#" + i.kp.rp[f["prime"]],
                        h = $('<div style="border-color:" + o + ""></div>');
                      h.click(function () {
                        aux.L.Si.Se(), i.Ep(t);
                      }),
                        p.append(h);
                    })(n);
              }
            }),
            (t.prototype.Ep = function (t) {
              if (!(t < 0 || t >= this.Ap[this.Bp].length)) {
                (this.Cp = t),
                  p.children().css("background-color", "transparent");
                var a = p.children(":nth-child(" + (1 + t) + ")");
                a.css("background-color", a.css("border-color")),
                  this.kp.bp(!0);
              }
            }),
            (t.prototype.ip = function () {
              return this.Ap[this.Bp][this.Cp];
            }),
            t
          );
        })();
        return v;
      })()),
      (application.mk = (function () {
        var c = $("#withdraw-consent-yes"),
          n = $("#withdraw-consent-no"),
          f = extension.X(application.po, function () {
            application.po.call(
              this,
              extension.O("index.game.popup.menu.consent.tab"),
              !1
            ),
              c.click(function () {
                aux.L.Si.Se(),
                  aux.L.Uo()
                    ? (aux.L.Fg.Qk(aux.L.Fg.rf),
                      aux.L.Fp(!1, !0),
                      aux.L.Fg.Gk.no(new application.Gp()))
                    : aux.L.Fg.Tk();
              }),
              n.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Tk();
              });
          });
        return (
          (f.prototype.za = function () {
            f.parent.prototype.za.call(this);
          }),
          (f.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.c(application.po.Co, 200),
              inject.b.d(application.po.Do, 50);
          }),
          (f.prototype.Xk = function () {
            aux.L.Si.Te();
          }),
          f
        );
      })()),
      (application.ok = (function () {
        var c = $("#delete-account-timer"),
          n = $("#delete-account-yes"),
          f = $("#delete-account-no"),
          o = extension.X(application.po, function () {
            application.po.call(
              this,
              extension.O("index.game.popup.menu.delete.tab"),
              !1
            ),
              n.click(function () {
                aux.L.Si.Se(),
                  aux.L.Yj.Xj()
                    ? (aux.L.Yj.gm(), aux.L.Yj.$l())
                    : aux.L.Fg.Tk();
              }),
              f.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Tk();
              }),
              (this.Hp = []);
          });
        return (
          (o.prototype.za = function () {
            o.parent.prototype.za.call(this);
          }),
          (o.prototype.Eo = function () {
            inject.b.d(application.po.uo, 50),
              inject.b.d(application.po.vo, 50),
              inject.b.d(application.po.wo, 50),
              inject.b.d(application.po.xo, 50),
              inject.b.d(application.po.yo, 50),
              inject.b.d(application.po.zo, 50),
              inject.b.d(application.po.Ao, 50),
              inject.b.d(application.po.Bo, 50),
              inject.b.d(application.po.Co, 50),
              inject.b.c(application.po.Do, 200);
          }),
          (o.prototype.Xk = function () {
            aux.L.Si.Xe(),
              inject.b.d(n, 1),
              inject.b.c(c, 1),
              c.text(".. 10 .."),
              this.Ip(),
              this.Jp(function () {
                c.text(".. 9 ..");
              }, 1e3),
              this.Jp(function () {
                c.text(".. 8 ..");
              }, 2e3),
              this.Jp(function () {
                c.text(".. 7 ..");
              }, 3e3),
              this.Jp(function () {
                c.text(".. 6 ..");
              }, 4e3),
              this.Jp(function () {
                c.text(".. 5 ..");
              }, 5e3),
              this.Jp(function () {
                c.text(".. 4 ..");
              }, 6e3),
              this.Jp(function () {
                c.text(".. 3 ..");
              }, 7e3),
              this.Jp(function () {
                c.text(".. 2 ..");
              }, 8e3),
              this.Jp(function () {
                c.text(".. 1 ..");
              }, 9e3),
              this.Jp(function () {
                inject.b.c(n, 300), inject.b.d(c, 1);
              }, 1e4);
          }),
          (o.prototype.Jp = function (t, a) {
            var i = extension.S(t, a);
            this.Hp.push(i);
          }),
          (o.prototype.Ip = function () {
            for (var t = 0; t < this.Hp.length; t++) extension.T(this.Hp[t]);
            this.Hp = [];
          }),
          o
        );
      })()),
      (application.Kp = (function () {
        function t() {
          this.oo = function () {};
        }
        return (
          (t.prototype.Kf = function () {}),
          (t.prototype.Xk = function () {}),
          t
        );
      })()),
      (application.Wl = (function () {
        var i = extension.X(application.Kp, function (i) {
          application.Kp.call(this);
          var c = extension.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
          this.Lp = $(`<div id="${c}" class="toaster toaster-coins">
                <img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" />
                <div class="toaster-coins-val">${i}</div><div class="toaster-coins-close">${extension.O(
            "index.game.toaster.continue"
          )}</div></div>`);
          var n = this;
          this.Lp.find(".toaster-coins-close").click(function () {
            aux.L.Si.Se(), n.oo();
          });
        });
        return (
          (i.prototype.Kf = function () {
            return this.Lp;
          }),
          (i.prototype.Xk = function () {
            aux.L.Si.Ve();
          }),
          i
        );
      })()),
      (application.Vl = (function () {
        var i = extension.X(application.Kp, function (i) {
          application.Kp.call(this);
          var c = extension.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
          this.Lp = $(`
            <div id="${c}" class="toaster toaster-levelup">
                <img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" />
                <div class="toaster-levelup-val">${i}</div>
                <div class="toaster-levelup-text">${extension.O(
                  "index.game.toaster.levelup"
                )}</div>
                <div class="toaster-levelup-close">")${extension.O(
                  "index.game.toaster.continue"
                )}</div>
            </div>`);
          var n = this;
          this.Lp.find(".toaster-levelup-close").click(function () {
            aux.L.Si.Se(), n.oo();
          });
        });
        return (
          (i.prototype.Kf = function () {
            return this.Lp;
          }),
          (i.prototype.Xk = function () {
            aux.L.Si.Ue();
          }),
          i
        );
      })()),
      (application.Gp = (function () {
        var i = extension.X(application.Kp, function () {
          application.Kp.call(this);
          var i = this,
            c = extension.ja() + "_" + Math.floor(1e3 + 8999 * Math.random());
          (this.Lp = $(`
                <div id="${c}"
                    class="toaster toaster-consent-accepted"><img class="toaster-consent-accepted-logo"
                    src="${aux.A.F}" alt="Wormate.io logo"/>
                        <div class="toaster-consent-accepted-container">
                            <span class="toaster-consent-accepted-text">
                                ${extension
                                  .O("index.game.toaster.consent.text")
                                  .replaceAll(" ", "&nbsp;")
                                  .replaceAll("", "<br/>")}
                            </span>
                            <a class="toaster-consent-accepted-link" href="/privacy-policy">
                                ${extension.O(
                                  "index.game.toaster.consent.link"
                                )}
                            </a>
                        </div>
                    <div class="toaster-consent-close">
                        ${extension.O("index.game.toaster.consent.iAccept")}
                    </div>
                </div>`)),
            (this.Mp = this.Lp.find(".toaster-consent-close")),
            this.Mp.hide(),
            this.Mp.click(function () {
              aux.L.Si.Se(),
                aux.L.Uo() && aux.L.Fp(!0, !0),
                i.oo();
            });
        });
        return (
          (i.prototype.Kf = function () {
            return this.Lp;
          }),
          (i.prototype.Xk = function () {
            var t = this;
            aux.L.Uo() && !aux.L.xl()
              ? (aux.L.Si.Xe(),
                extension.S(function () {
                  t.Mp.fadeIn(300);
                }, 2e3))
              : extension.S(function () {
                  t.oo();
                }, 0);
          }),
          i
        );
      })()),
      (application.Kk = (function () {
        var c = $("#error-gateway-connection-retry"),
          n = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Kn),
              c.click(function () {
                aux.L.Si.Se(),
                  aux.L.Fg.ze.$n(),
                  aux.L.Fg.Qk(aux.L.Fg.ze),
                  extension.S(function () {
                    var t = aux.A.C + "/pub/healthCheck/ping";
                    extension.ha(
                      t,
                      function () {
                        aux.L.Fg.Qk(aux.L.Fg.Jk);
                      },
                      function (t) {
                        aux.L.Fg.ze.Yn(),
                          aux.L.bd.$b(
                            function () {
                              aux.L.Fg.Qk(aux.L.Fg.rf);
                            },
                            function (t) {
                              aux.L.Fg.Qk(aux.L.Fg.Jk);
                            },
                            function (t, e) {
                              var i = t;
                              aux.L.Fg.ze.Zn(i, e);
                            }
                          );
                      }
                    );
                  }, 2e3);
              });
          });
        return (
          (n.prototype.za = function () {}),
          (n.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.c(application.Cf.In, 500),
              inject.b.d(application.Cf.Jn, 50);
          }),
          (n.prototype.Xk = function () {
            aux.L.Si.Ge(application.xe.Ae.rf), aux.L.Si.Xe();
          }),
          n
        );
      })()),
      (application.Mk = (function () {
        var c = $("#error-game-connection-retry"),
          n = extension.X(application.Cf, function () {
            application.Cf.call(this, application.Vk.Kn),
              c.click(function () {
                aux.L.Si.Se(), aux.L.Fg.Qk(aux.L.Fg.rf);
              });
          });
        return (
          (n.prototype.za = function () {}),
          (n.prototype.Wk = function () {
            application.vf._f(!0),
              inject.b.c(application.Cf.Bf, 500),
              inject.b.c(application.Cf.yn, 1),
              inject.b.d(application.Cf.zn, 50),
              inject.b.d(application.Cf.An, 50),
              inject.b.d(application.Cf.Bn, 50),
              inject.b.d(application.Cf.Cn, 50),
              inject.b.d(application.Cf.Dn, 50),
              inject.b.d(application.Cf.En, 50),
              inject.b.d(application.Cf.Fn, 50),
              inject.b.d(application.Cf.Gn, 50),
              inject.b.d(application.Cf.Hn, 50),
              inject.b.d(application.Cf.In, 50),
              inject.b.c(application.Cf.Jn, 500);
          }),
          (n.prototype.Xk = function () {
            aux.L.Si.Ge(application.xe.Ae.rf), aux.L.Si.Xe();
          }),
          n
        );
      })()),
      (extension.Np = function () {
        function i(a) {
          var e = a + 37 * Math.floor(65535 * Math.random());
          application.kg.vg(application.kg.tg, e, 30);
        }
        function c() {
          return parseInt(application.kg.wg(application.kg.tg)) % 37;
        }
        return (function () {
          var n = c();
          (n >= 0 && n < aux.Mn.Op) ||
            (n = Math.max(0, aux.Mn.Op - 2));
          var f = {};
          (f.Pp = !1),
            (f.Qp = extension.ja()),
            (f.Rp = 0),
            (f.Sp = 0),
            (f.Tp = null),
            (f.Up = aux.A.K),
            (f.Vp = aux.A.J),
            (f.uh = null),
            (f.bd = null),
            (f.Oe = null),
            (f.Si = null),
            (f.Fg = null),
            (f.ao = null),
            (f.Yj = null);
          try {
            var o = navigator;
            if (o) {
              var h = o["geolocation"];
              h &&
                h.getCurrentPosition(
                  function (t) {
                    var a = t["coords"];
                    "undefined" != _typeof(a) &&
                      "undefined" != _typeof(a["latitude"]) &&
                      "undefined" != _typeof(a["longitude"]) &&
                      (f.Tp = t);
                  },
                  function (t) {}
                );
            }
          } catch (t) {}
          return (
            (f.za = function () {
              (f.uh = new application.Wp()),
                (f.uh.Xp = new application.ai(f.uh)),
                (f.bd = new application.rb()),
                (f.Oe = new application.ek()),
                (f.Si = new application.xe()),
                (f.Fg = new application.hk()),
                (f.ao = new application.Aj()),
                (f.Yj = new application.al());
              try {
                ga("send", "event", "app", aux.A.B + "_init");
              } catch (t) {}
              (f.uh.Yp = function () {
                f.Fg.Qk(f.Fg.Lk);
              }),
                (f.uh.Zp = function () {
                  var i = f.Fg.rf.io();
                  try {
                    ga("send", "event", "game", aux.A.B + "_start", i);
                  } catch (t) {}
                  f.Si.Ge(application.xe.Ae.sf), f.Fg.Qk(f.Fg.sf.Rn());
                }),
                (f.uh.$p = function () {
                  try {
                    ga("send", "event", "game", aux.A.B + "_end");
                  } catch (t) {}
                  $("body").height() >= 430 && aux.Mn._p.Ca(),
                    f.bd.$b(null, null, null),
                    (function () {
                      var t = Math.floor(f.uh.th.Rh),
                        a = f.uh.Yh;
                      f.Yj.Xj()
                        ? f.Yj.Rl(function () {
                            f.aq(t, a);
                          })
                        : f.aq(t, a);
                    })();
                }),
                (f.uh.bq = function (t) {
                  t(f.Fg.sf.Un(), f.Fg.sf.Vn());
                }),
                f.Yj.Ol(function () {
                  var a = f.Fg._k();
                  if (
                    (null != a &&
                      a.Ed === application.Vk.Uk &&
                      (f.Si.Ge(application.xe.Ae.rf), f.Fg.Qk(f.Fg.rf)),
                    f.Yj.Xj())
                  )
                    try {
                      var i = f.Yj.sl();
                      ga("set", "userId", i);
                    } catch (t) {}
                  f.Uo() && f.Yj.Xj() && !f.Yj.xl()
                    ? (f.Fp(!1, !1), f.Fg.Gk.no(new application.Gp()))
                    : f.cq(!0);
                }),
                f.uh.za(),
                f.Fg.za(),
                f.ao.za(),
                f.bd.za(),
                f.Fg.rf.ho(),
                f.Fg.Qk(f.Fg.rf),
                f.Oe.za(function () {
                  f.Si.za(),
                    f.Yj.za(),
                    f.bd.$b(
                      function () {
                        f.Fg.rf.go(), f.Fg.Qk(f.Fg.rf);
                      },
                      function (t) {
                        f.Fg.rf.go(), f.Fg.Qk(f.Fg.Jk);
                      },
                      function (t, a) {
                        var e = t;
                        f.Fg.ze.Zn(e, a), f.Fg.rf.Zn(e, a);
                      }
                    ),
                    f.Uo() && !f.xl() ? f.Fg.Gk.no(new application.Gp()) : f.cq(!0);
                });
            }),
            (f.dq = function (t) {
              if (f.Yj.Xj()) {
                var i = f.Yj.Ql(),
                  c =
                    aux.A.C +
                    "/pub/wuid/" +
                    i +
                    "/consent/change" +
                    "?value=" +
                    extension.Q(t);
                extension.ha(
                  c,
                  function () {},
                  function (t) {}
                );
              }
            }),
            (f.bo = function () {
              n++,
                !aux.Mn.fq && n >= aux.Mn.Op
                  ? (f.Fg.Qk(f.Fg.Nk),
                    f.Si.Ge(application.xe.Ae.uf),
                    aux.Mn.gq.Aa())
                  : (i(n), f.hq());
            }),
            (f.hq = function () {
              if (f.uh.iq()) {
                f.Fg.ze.$n(), f.Fg.Qk(f.Fg.ze);
                var a = f.Fg.rf.io();
                application.kg.vg(application.kg.qg, a, 30);
                var i = f.Fg.oi.ni();
                application.kg.vg(application.kg.mg, i, 30);
                var c = 0;
                if (null != f.Tp) {
                  var n = f.Tp["coords"]["latitude"],
                    o = f.Tp["coords"]["longitude"];
                  c =
                    1 |
                    (Math.max(0, Math.min(32767, ((n + 90) / 180) * 32768)) <<
                      1) |
                    (Math.max(0, Math.min(65535, ((o + 180) / 360) * 65536)) <<
                      16);
                }
                if (f.Yj.Xj()) f.jq(a, c);
                else {
                  var h = f.Fg.rf.ul();
                  application.kg.vg(application.kg.rg, h, 30);
                  var d = f.ao.Hj(application.Jj.Ij);
                  application.kg.vg(application.kg.sg, d, 30), f.kq(a, c);
                }
              }
            }),
            (f.jq = function (i, c) {
              var n = f.Yj.Ql(),
                o = f.Fg.rf.ul(),
                h = f.ao.Hj(application.Jj.Ij),
                d = f.ao.Hj(application.Jj.Kj),
                s = f.ao.Hj(application.Jj.Lj),
                b = f.ao.Hj(application.Jj.Nj),
                r = f.ao.Hj(application.Jj.Mj),
                u =
                  aux.A.C +
                  "/pub/wuid/" +
                  n +
                  "/start" +
                  "?gameMode=" +
                  extension.Q(i) +
                  "&gh=" +
                  c +
                  "&nickname=" +
                  extension.Q(o) +
                  "&skinId=" +
                  extension.Q(h) +
                  "&eyesId=" +
                  extension.Q(d) +
                  "&mouthId=" +
                  extension.Q(s) +
                  "&glassesId=" +
                  extension.Q(b) +
                  "&hatId=" +
                  extension.Q(r);
              extension.ha(
                u,
                function () {
                  f.Fg.Qk(f.Fg.Jk);
                },
                function (t) {
                  if (1460 === t["code"]) {
                    f.Fg.Qk(f.Fg.Ek);
                    try {
                      ga(
                        "send",
                        "event",
                        "restricted",
                        aux.A.B + "_tick"
                      );
                    } catch (t) {}
                  } else if (1200 !== t["code"]) f.Fg.Qk(f.Fg.Jk);
                  else {
                    var i = t["server_url"];
                    f.uh.lq(i, n);
                  }
                }
              );
            }),
            (f.kq = function (i, c) {
              var n = f.Fg.rf.ul(),
                o = f.ao.Hj(application.Jj.Ij),
                h =
                  aux.A.C +
                  "/pub/wuid/" +
                  "guest" +
                  "/start" +
                  "?gameMode=" +
                  extension.Q(i) +
                  "&gh=" +
                  c +
                  "&nickname=" +
                  extension.Q(n) +
                  "&skinId=" +
                  extension.Q(o);
              extension.ha(
                h,
                function () {
                  f.Fg.Qk(f.Fg.Jk);
                },
                function (t) {
                  if (1460 === t["code"]) {
                    f.Fg.Qk(f.Fg.Ek);
                    try {
                      ga(
                        "send",
                        "event",
                        "restricted",
                        aux.A.B + "_tick"
                      );
                    } catch (t) {}
                  } else if (1200 !== t["code"]) f.Fg.Qk(f.Fg.Jk);
                  else {
                    var i = t["server_url"];
                    f.uh.mq(i, n, o);
                  }
                }
              );
            }),
            (f.aq = function (a, e) {
              var i = f.Fg.rf.ul();
              f.Fg.sf.Tn(a, e, i), f.Si.Ge(application.xe.Ae.tf), f.Fg.Qk(f.Fg.sf.Sn());
            }),
            (f.eo = function () {
              if (!f.fo()) return f.ao.Rj();
              var a = parseInt(application.kg.wg(application.kg.sg));
              return null != a && f.ao.Sj(a, application.Jj.Ij) ? a : f.ao.Rj();
            }),
            (f.jo = function (a) {
              application.kg.vg(application.kg.ug, a ? "true" : "false", 1800);
            }),
            (f.fo = function () {
              return application.kg.wg(application.kg.ug) === "true";
            }),
            (f.cq = function (t) {
              if (t !== f.Pp) {
                f.Pp = t;
                var c = c || {};
                (c["consented"] = t),
                  (c["gdprConsent"] = t),
                  aux.Mn.Nn.za(),
                  aux.Mn._p.za(),
                  aux.Mn.gq.za(function (t) {
                    t && i((n = 0)), f.hq();
                  });
              }
            }),
            (f.Fp = function (a, i) {
              application.kg.vg(application.kg.lg, a ? "true" : "false"), i && f.dq(a), f.cq(a);
            }),
            (f.xl = function () {
              switch (application.kg.wg(application.kg.lg)) {
                case "true":
                  return !0;
                default:
                  return !1;
              }
            }),
            (f.Uo = function () {
              try {
                return (
                  !!window["isIPInEEA"] ||
                  !(
                    null == f.Tp ||
                    !aux.xg.yg(
                      f.Tp["coords"]["latitude"],
                      f.Tp["coords"]["longitude"]
                    )
                  )
                );
              } catch (t) {
                return !0;
              }
            }),
            (f.cg = function () {
              (f.Rp = extension.ja()),
                (f.Sp = f.Rp - f.Qp),
                f.uh.Ch(f.Rp, f.Sp),
                f.Fg.Ch(f.Rp, f.Sp),
                (f.Qp = f.Rp);
            }),
            (f.$f = function () {
              f.Fg.$f();
            }),
            f
          );
        })();
      }),
      (application.Wp = function () {
        var i = {
            nq: 0,
            oq: 1,
            pq: 2,
            qq: 3,
          },
          c = {};
        return (
          (c.rq = 30),
          (c.sq = new Float32Array(100)),
          (c.tq = 0),
          (c.uq = 0),
          (c.vq = 0),
          (c.wq = 0),
          (c.xq = 0),
          (c.yq = 0),
          (c.Qn = i.nq),
          (c.zq = null),
          (c.Aq = 300),
          (c.Zp = function () {}),
          (c.$p = function () {}),
          (c.bq = function () {}),
          (c.Yp = function () {}),
          (c.yh = new application.Ng()),
          (c.Xp = null),
          (c.th = null),
          (c.Xi = {}),
          (c.Vh = {}),
          (c.Ti = 12.5),
          (c.vh = 40),
          (c.Bq = 1),
          (c.Cq = -1),
          (c.Dq = 1),
          (c.Eq = 1),
          (c.Fq = -1),
          (c.Gq = -1),
          (c.Hq = 1),
          (c.Iq = 1),
          (c.Jq = -1),
          (c.Yh = 500),
          (c.Oh = 500),
          (c.yh.Qg = 500),
          (c.th = new application.Ci(c.yh)),
          (c.za = function () {
            c.th.Ji(aux.L.Fg.sf.Eg),
              extension.R(function () {
                c.bq(function (t, a) {
                  c.Kq(t, a);
                });
              }, 100);
          }),
          (c.xh = function (t, a, e, i) {
            (c.Cq = t), (c.Dq = a), (c.Eq = e), (c.Fq = i), c.Lq();
          }),
          (c.Mq = function (t) {
            (c.Bq = t), c.Lq();
          }),
          (c.Lq = function () {
            (c.Gq = c.Cq - c.Bq),
              (c.Hq = c.Dq + c.Bq),
              (c.Iq = c.Eq - c.Bq),
              (c.Jq = c.Fq + c.Bq);
          }),
          (c.Ch = function (t, a) {
            (c.vq += a),
              (c.uq -= 0.2 * c.tq * a),
              c.Xp.fi(),
              null == c.zq ||
                (c.Qn !== i.pq && c.Qn !== i.qq) ||
                (c.Nq(t, a), (c.vh = 4 + c.Ti * c.th.qd));
            for (
              var e = 1e3 / Math.max(1, a), n = 0, f = 0;
              f < c.sq.length - 1;
              f++
            )
              (n += c.sq[f]), (c.sq[f] = c.sq[f + 1]);
            (c.sq[c.sq.length - 1] = e), (c.rq = (n + e) / c.sq.length);
          }),
          (c.Oq = function (t, a) {
            return t > c.Gq && t < c.Hq && a > c.Iq && a < c.Jq;
          }),
          (c.Nq = function (t, a) {
            var e = c.vq + c.uq,
              i = (e - c.wq) / (c.xq - c.wq);
            c.th.xj(t, a), c.th.yj(t, a, i, c.Oq);
            var n = 0;
            for (var f in c.Vh) {
              var o = c.Vh[f];
              o.xj(t, a),
                o.yj(t, a, i, c.Oq),
                o.Mi && o.qd > n && (n = o.qd),
                o.Li ||
                  (!(o.tj < 0.005) && o.Mi) ||
                  (o.Ii(), delete c.Vh[o.Uh.re]);
            }
            c.Mq(3 * n);
            for (var h in c.Xi) {
              var d = c.Xi[h];
              d.xj(t, a),
                d.yj(t, a, c.Oq),
                d.bj &&
                  (d.tj < 0.005 || !c.Oq(d.nj, d.oj)) &&
                  (d.Ii(), delete c.Xi[d.Uh.re]);
            }
          }),
          (c.Ai = function (t, e) {
            c.Qn === i.oq && ((c.Qn = i.pq), c.Zp());
            var n = aux.L.Rp;
            (c.yq = t),
              0 === t
                ? ((c.wq = n - 95), (c.xq = n), (c.vq = c.wq), (c.uq = 0))
                : ((c.wq = c.xq), (c.xq = c.xq + e));
            var f = c.vq + c.uq;
            c.tq = (f - c.wq) / (c.xq - c.wq);
          }),
          (c.cj = function () {
            if (c.Qn === i.oq || c.Qn === i.pq) {
              c.Qn = i.qq;
              var t = c.zq;
              extension.S(function () {
                c.Qn === i.qq && (c.Qn = i.nq),
                  null != t && t === c.zq && (c.zq.close(), (c.zq = null));
              }, 5e3),
                c.$p();
            }
          }),
          (c.iq = function () {
            return (
              c.Qn !== i.pq &&
              ((c.Qn = i.oq),
              c.Xp.ei(),
              (c.Xi = {}),
              (c.Vh = {}),
              c.th.dn(),
              null != c.zq && (c.zq.close(), (c.zq = null)),
              !0)
            );
          }),
          (c.Pq = function () {
            (c.zq = null), c.Xp.ei(), c.Qn !== i.qq && c.Yp(), (c.Qn = i.nq);
          }),
          (c.lq = function (a, e) {
            c.Qq(a, function () {
              var a = Math.min(2048, e.length),
                i = new application.ma(6 + 2 * a),
                n = new application.va(new application.na(i));
              n.wa(129), n.xa(2800), n.wa(1), n.xa(a);
              for (var f = 0; f < a; f++) n.xa(e.charCodeAt(f));
              c.Rq(i);
            });
          }),
          (c.mq = function (a, e, i) {
            c.Qq(a, function () {
              var a = Math.min(32, e.length),
                n = new application.ma(7 + 2 * a),
                f = new application.va(new application.na(n));
              f.wa(129), f.xa(2800), f.wa(0), f.xa(i), f.wa(a);
              for (var o = 0; o < a; o++) f.xa(e.charCodeAt(o));
              c.Rq(n);
            });
          }),
          (c.Rq = function (t) {
            try {
              null != c.zq &&
                c.zq.readyState === WebSocket.OPEN &&
                c.zq.send(t);
            } catch (t) {
              c.Pq();
            }
          }),
          (c.Kq = function (i, n) {
            var f = n ? 128 : 0,
              o = ((extension.Y(i) / aux.M) * 128) & 127,
              h = 255 & (f | o);
            if (c.Aq !== h) {
              var d = new application.ma(1);
              new application.va(new application.na(d)).wa(h), c.Rq(d), (c.Aq = h);
            }
          }),
          (c.Qq = function (t, a) {
            let socket = new window.WebSocket(t);
            socket.binaryType = "arraybuffer";
            socket.onopen = function () {
              a();
            };
            socket.onclose = function () {
              c.Pq();
            };
            socket.onerror = function (t) {
              c.Pq();
            };
            socket.onmessage = function (t) {
              c.Xp.di(t.data);
            };
          }),
          c
        );
      }),
      (aux.Mn = (function (t) {
        var a = {};
        (a["main"] = {
          Nn: extension.Ba(
            "aqnvgcpz05orkobh",
            atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")
          ),
          _p: extension.Ba(
            "ltmolilci1iurq1i",
            atob("d29ybWF0ZS1pb185NzB4MjUw")
          ),
          gq: extension.ya(),
          Op: 4,
          fq: !1,
          Ln: !0,
        }),
          (a["miniclip"] = {
            Nn: extension.Ba(
              "aqnvgcpz05orkobh",
              atob("V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==")
            ),
            _p: extension.Ba(
              "ltmolilci1iurq1i",
              atob("d29ybWF0ZS1pb185NzB4MjUw")
            ),
            gq: extension.ya(),
            Op: 4,
            fq: !1,
            Ln: !1,
          });
        var i = a[t];
        return i || (i = a["main"]), i;
      })(window["ENV"])),
      $(function () {
        FastClick.attach(document.body);
      }),
      addEventListener("contextmenu", function (t) {
        return t.preventDefault(), t.stopPropagation(), !1;
      }),
      (window.fbAsyncInit = function () {
        FB.init({
          appId: atob("ODYxOTI2ODUwNjE5MDUx"),
          cookie: !0,
          xfbml: !0,
          status: !0,
          version: "v14.0",
        });
      }),
      extension.loadScript(
        "//connect.facebook.net/" + aux.A.K + "/sdk.js",
        {
          id: "facebook-jssdk",
          async: !0,
          defer: !0,
          crossorigin: "anonymous",
        }
      ),
      extension.loadScript(
        "//apis.google.com/js/api:client.js",
        null,
        function () {
          gapi.load("auth2", function () {
            GoogleAuth = gapi.auth2.init({
              client_id: atob(
                "OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t"
              ),
            });
          });
        }
      ),
      extension.loadScript("//platform.twitter.com/widgets.js", {
        id: "twitter-wjs",
      }),
      extension.loadScript("//apis.google.com/js/platform.js"),
      (function () {
        (aux.L = extension.Np()), aux.L.za();
      })(),
      (function () {
        function t() {
          requestAnimationFrame(t), aux.L.cg();
        }
        t();
      })(),
      (function () {
        function t() {
          var t = i.width(),
            o = i.height(),
            h = c.outerWidth(),
            d = c.outerHeight(),
            s = n.outerHeight(),
            b = f.outerHeight(),
            r = Math.min(1, Math.min((o - b - s) / d, t / h)),
            u = "translate(-50%, -50%) scale(".concat(r, ")");
          c.css("-webkit-transform", u),
            c.css("-moz-transform", u),
            c.css("-ms-transform", u),
            c.css("-o-transform", u),
            c.css("transform", u),
            aux.L.$f(),
            window.scrollTo(0, 1);
        }
        var i = $("body"),
          c = $("#stretch-box"),
          n = $("#markup-header"),
          f = $("#markup-footer");
        t(), $(window).resize(t);
      })();
  });
})();
