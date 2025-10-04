class Utils {
  #splashCounter;
  #keyStr;
  #addedResource;
  #serverHost;
  #id;
  get id() {
    return this.#id++;
  }
  constructor() {
    this.#id = 0;
    this.#splashCounter = 0;
    this.#keyStr =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    this.#addedResource = [];
    this.#serverHost = window.location.origin;
  }
  appearSplash() {
    if (++this.#splashCounter > 1) return;
    const splash = $(
      `<div class="splash"><span class="splash_logo" alt="DAVIS Logo"></span><div>`
    );
    $("body").append(splash);
  }
  disAppearSplash() {
    if (--this.#splashCounter > 0) return;
    $("body .splash").remove();
  }

  setSession(key, obj) {
    if (obj == "null" || obj == null) sessionStorage.removeItem(key);
    else sessionStorage.setItem(key, JSON.stringify(obj));
  }
  getSession(key) {
    try {
      return this.parse(sessionStorage.getItem(key));
    } catch (error) {
      return null;
    }
  }
  setLocalStorage(key, obj) {
    if (obj == "null" || obj == null) localStorage.removeItem(key);
    else localStorage.setItem(key, JSON.stringify(obj));
  }
  getLocalStorage(key) {
    try {
      return this.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }
  }

  encodeUTF8(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
      var c = string.charCodeAt(n);
      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }
    }
    return utftext;
  }
  decodeUTF8(utftext) {
    var string = "";
    var i = 0;
    var c1;
    var c = (c1 = c2 = 0);
    while (i < utftext.length) {
      c = utftext.charCodeAt(i);
      if (c < 128) {
        string += String.fromCharCode(c);
        i++;
      } else if (c > 191 && c < 224) {
        var c2 = utftext.charCodeAt(i + 1);
        string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
        i += 2;
      } else {
        c2 = utftext.charCodeAt(i + 1);
        var c3 = utftext.charCodeAt(i + 2);
        string += String.fromCharCode(
          ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
        );
        i += 3;
      }
    }
    return string;
  }
  encodeBase64(input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = this.encodeUTF8(input);
    while (i < input.length) {
      chr1 = input.charCodeAt(i++);
      chr2 = input.charCodeAt(i++);
      chr3 = input.charCodeAt(i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
        enc4 = 64;
      }
      output =
        output +
        this.#keyStr.charAt(enc1) +
        this.#keyStr.charAt(enc2) +
        this.#keyStr.charAt(enc3) +
        this.#keyStr.charAt(enc4);
    }
    return output;
  }
  decodeBase64(input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < input.length) {
      enc1 = this.#keyStr.indexOf(input.charAt(i++));
      enc2 = this.#keyStr.indexOf(input.charAt(i++));
      enc3 = this.#keyStr.indexOf(input.charAt(i++));
      enc4 = this.#keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64) {
        output = output + String.fromCharCode(chr2);
      }
      if (enc4 != 64) {
        output = output + String.fromCharCode(chr3);
      }
    }
    output = this.decodeUTF8(output);
    return output;
  }
  encodeUrlSafe(str) {
    return str.toString().replace(/\+/g, "-").replace(/\//g, "_");
  }
  decodeUrlSafe(str) {
    return str.toString().replace(/-/g, "+").replace(/_/g, "/");
  }

  loadResources(resources, callback, params) {
    var _t = this;
    callback = typeof callback === "function" ? callback : () => {};
    const getStylesheet = (srcWithBypassCache) => {
      const $deferred = $.Deferred();
      const $link = $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: srcWithBypassCache,
      }).appendTo("head");
      $deferred.resolve($link);
      return $deferred.promise();
    };
    const loadNextResource = (i) => {
      const logResource = (src) => {
        _t.#addedResource.push(src);
        loadNextResource();
      };
      if (i == resources.length) return callback(params);
      var src = resources[i];
      i++;
      if (_t.#addedResource.includes(src)) loadNextResource(i);
      else {
        var bypassCache =
          (src.indexOf("?") != -1 ? "&" : "?") + new Date().getTime();
        if (src.indexOf(".js") != -1 || src.indexOf("=js") != -1) {
          $.getScript(src + bypassCache).done(() => {
            logResource(src);
          });
        } else {
          getStylesheet(src + bypassCache);
          logResource(src);
        }
      }
    };
    loadNextResource(0);
  }

  sendRequest(arg, params) {
    var _t = this;
    if (arg.appearSplash) this.appearSplash();
    var formData = new FormData();
    arg.data.token = this.getSession("token");
    formData.append("params", JSON.stringify(arg.data));
    for (var key in arg.multipart) formData.append(key, arg.multipart[key]);
    arg.success = arg.success ? arg.success : () => {};
    arg.error = arg.error ? arg.error : () => {};
    arg.progressUpload = arg.progressUpload ? arg.progressUpload : () => {};
    $.ajax({
      type: "Post",
      url: _t.#serverHost + "/" + arg.url + "/" + "?" + new Date().getTime(),
      data: formData,
      dataType: "text",
      processData: false,
      contentType: false,
      cache: false,
      async: true,
      success: (res) => {
        if (arg.disAppearSplashForce) _t.disAppearSplash();
        res = _t.parse(res);
        if (res.token) _t.setSession("token", res.token);
        if (res.error) return arg.error(res, params);
        arg.success(res.data, params);
      },
      error: (res) => {
        if (arg.disAppearSplashForce) _t.disAppearSplash();
        return arg.error(res, params);
      },
      progressUpload: (response) => {
        if (arg.progressUpload) arg.progressUpload(response, params);
      },
    });
  }
  parse(res) {
    var n = {};
    if (typeof res == "string")
      try {
        res = res.replace(/X@X@/g, "\\n");
        n = JSON.parse(res);
      } catch (E) {
        try {
          n = eval("(" + res + ")");
        } catch (E) {
          try {
            res = res.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
            n = JSON.parse(res);
          } catch (E) {
            n = eval("(" + res + ")");
          }
        }
      }
    else n = res;
    return n;
  }

  saveFileToLocalStorage(oi) {
    let source = "/LFFO/?fid=" + oi + "&" + Math.random();
    return new Promise((resolve, reject) => {
      const processFile = (file) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const base64String = event.target.result.split(",")[1];
          localStorage.setItem(
            oi,
            JSON.stringify({
              content: base64String,
              type: file.type || "application/octet-stream",
              name: file.name || `file_${oi}.bin`,
            })
          );
          resolve();
        };
        reader.onerror = function () {
          reject(new Error("خطا در خواندن فایل."));
        };
        reader.readAsDataURL(file);
      };

      if (source instanceof File) {
        processFile(source);
      } else if (typeof source === "string" && source.startsWith("http")) {
        fetch(source)
          .then((response) => {
            if (!response.ok) throw new Error("دانلود فایل ناموفق بود.");
            return response.blob();
          })
          .then((blob) => {
            const file = new File(
              [blob],
              `downloaded_${oi}.${blob.type.split("/")[1] || "bin"}`,
              { type: blob.type }
            );
            processFile(file);
          })
          .catch((error) => reject(error));
      } else {
        reject(new Error("منبع باید یک فایل یا URL معتبر باشد."));
      }
    });
  }
  readFileFromLocalStorage(oi) {
    return new Promise((resolve, reject) => {
      const data = localStorage.getItem(key);

      const { content, type, name } = JSON.parse(data);
      const byteCharacters = atob(content);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type });

      if (type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(blob);
        document.body.appendChild(img);
      } else if (type === "text/plain" || type === "application/pdf") {
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank");
      }
      resolve();
    });
  }

  breakTextAfterWordNumber(txt, step, chbr) {
    let splittext = txt.match(/\S+/g);
    let newtext = "";
    for (let index = 0; index < splittext.length; index += step) {
      newtext += splittext.slice(index, index + step).join(" ");
      if (index + step < splittext.length) newtext += chbr;
    }
    return newtext;
  }
  commaSeparateNumber(val) {
    if (val) {
      while (/(\d+)(\d{3})/.test(val.toString())) {
        val = val.toString().replace(/(\d+)(\d{3})/, "$1" + "," + "$2");
      }
    } else val = "";
    return val;
  }
  getValueFromObjectForShow(o) {
    let cfs = "<ul>";
    if (o instanceof Array)
      for (let i in o) cfs += '<li class="cfs">' + o[i].v + "</li>";
    else if (o instanceof Object) cfs += '<li class="cfs">' + o.v + "</li>";
    cfs += "</ul>";
    return cfs;
  }
  getCaptcha(img) {
    let s = function (res) {
      let src = "data:image/png;base64," + res.value;
      img.attr("src", src);
    };
    this.sendRequest({
      url: "EGW",
      success: s,
      data: {
        gwt: "5A6EE3BD8C843EC9AB3D064A2AB0F7BB",
        detail: "e30=",
        jobId: 3,
      },
    });
  }

  /*ina bayad dar heyne ejra kamel beshe*/
  showObjectInModal(o) {
    alertify.alert("");
    $(".alertify .msg").append(o);
    $("div.alertify div.dialog")
      .children()
      .eq(0)
      .children()
      .eq(0)
      .css({ "text-align": "right", padding: "0px", "padding-top": "8px" });
    $("div.alertify div.dialog").find("nav").css("text-align", "left");
    $("div.alertify div.dialog").find(".ok").css("background-color", "#8cf0b3");
  }
  showGeneralInputMessage(mT) {
    alertify.alert(mT);
    $("div.alertify div.dialog")
      .children()
      .eq(0)
      .css({
        width: "550px",
        "border-radius": "8px",
        "background-color": "rgba(225, 255, 215, 0.901961)",
      });
    $("div.alertify div.dialog")
      .children()
      .eq(0)
      .children()
      .eq(0)
      .css("text-align", "right");
    $("div.alertify div.dialog").find("nav").css("text-align", "left");
    $("div.alertify div.dialog").find(".ok").css("background-color", "#8cf0b3");
    $(".alertify").scrollTop(0);
  }
  showGeneralInputError(eT) {
    var c =
      '<table cellpadding="2" cellspacing="2" border="1px"><tbody><tr><td><img src="/LFFO/?fid=5091"></td><td style="text-align: center;"><span style="font-family: nazanin; font-size: large;">' +
      eT +
      "</span></td></tr></tbody></table>";
    alertify.alert(c);
    $("div.alertify div.dialog")
      .children()
      .eq(0)
      .css({
        width: "600px",
        "border-radius": "8px",
        "background-color": "rgba(255,255,215,0.9)",
      });
    $("div.alertify div.dialog").find("nav").css("text-align", "left");
    $("div.alertify div.dialog").find(".ok").css("background-color", "khaki");
    $(".alertify").scrollTop(0);
  }
  showGeneralConfirm(cT, oc, cc, p) {
    var c =
      '<table cellpadding="2" cellspacing="2" border="1px"><tbody><tr><td><img src="/LFFO/?fid=6056"></td><td style="text-align: center;"><span style="font-family: nazanin; font-size: large;">' +
      cT +
      "</span></td></tr></tbody></table>";
    p = p ? p : {};
    p.obt = p.obt ? p.obt : "بلی";
    p.cbt = p.cbt ? p.cbt : "خیر";
    alertify
      .okBtn(p.obt)
      .cancelBtn(p.cbt)
      .confirm(
        c,
        function (ev) {
          ev.preventDefault();
          if (oc) oc();
        },
        function (ev) {
          ev.preventDefault();
          if (cc) cc();
        }
      );
    $("div.alertify div.dialog")
      .children()
      .eq(0)
      .css({
        width: "600px",
        "border-radius": "8px",
        "background-color": "rgba(246, 255, 242, 0.901961)",
      });
    $("div.alertify div.dialog").find("nav").css("text-align", "left");
    $("div.alertify div.dialog")
      .find("nav button")
      .css("background-color", "rgba(255, 111, 112, 0.56)");
    $(".alertify").scrollTop(0);
  }
}
