class Element {
  get ov() {
    return this.gV();
  }
  constructor(arg) {
    if (new.target === Element) throw new Error("its abstract");

    this.id = utils.id;
    for (const [k, v] of Object.entries(arg)) this[k] = v;
    this.btp = this.btp ? utils.parse(utils.decodeBase64(this.btp)) : {};
    this.bct = this.bct ? utils.decodeBase64(this.bct) : "";
    this.lt = this.lt ? this.lt.trim() : "";
    this.cN();
  }
  cB() {
    /*createBox*/
    let offsetClass = this.bto ? " offset-md-" + (this.bto % 12) : "";
    let ihs = this.bih ? " mm_hs" : ""; /*isHiddenStyle*/
    this.box = $(
      '<div oi="' +
        this.oi +
        '" class="mm_box col-lg-' +
        (this.bt % 100) +
        " col-md-" +
        (this.bt % 100 <= 6 ? 6 : 12) +
        " col-sm-12" +
        offsetClass +
        ihs +
        '">'
    );
  }
  cL() {
    /*createLabel*/
    if (!this.lt) return;
    this.lt = this.lwb
      ? utils.breakTextAfterWordNumber(this.lt, this.lwb, "<br>")
      : this.lt;
    this.label = $(
      '<label class="mm_label" for="' +
        this.id +
        '" >' +
        (this.lt + " :" + (this.bir ? '<span style="bir">*</span>' : "")) +
        " </label>"
    );
    if (this.lcss)
      this.label.attr(
        "style",
        this.label.attr("style") + "; " + utils.decodeBase64(this.lcss)
      );
    this.box.append(this.label);
  }
  cT() {
    /*createTarget*/
    throw new Error("its abstract");
  }
  cSFSDTS() {
    /*checkStatusForSendDataToServer*/
    throw new Error("its abstract");
  }
  sRO(bro) {
    /*setReadOnly*/
    this.bro = bro;
    if (bro) {
      this.target.prop("readonly", "readonly");
      this.target.addClass("is-lock");
    } else {
      this.target.removeProp("readonly");
      this.target.removeClass("is-lock");
    }
  }
  gJACT() {
    /*generalJobAfterCreateTarget*/
    if (this.css)
      this.target.attr(
        "style",
        this.target.attr("style") + "; " + utils.decodeBase64(this.css)
      );
    if (this.v) this.sV(this.v);
    this.target.attr("id", this.id);
    this.target.attr("oi", this.oi);
    this.target.attr("target", true);
    this.sRO(this.bro);
    this.box.append(this.target);
  }
  cG() {
    /*createGuidence*/
    if (!this.g) return;
    this.guide = $(
      '<span title="' +
        this.g.v +
        '" i="' +
        this.g.id +
        '" class="mm_guide"></span>'
    );
    this.guide.css("background-image", "url(" + this.g.icon + ")");
    this.box.append(this.guide);
  }
  cAB() {
    /*createArchiveBox*/
    if (!this.bsa) return;
    this.archive = $('<span class="mm_archive"></span>');
    this.box.append(this.archive);
  }
  bE() {
    /*bindEvent*/
    const _t = this;
    if (_t.btp.et) {
      Object.entries(_t.btp.et).forEach(([eventKey, eventHandler]) => {
        _t.target.on(eventKey, { t: _t }, (e) => {
          const params = { e, t: e.data.t };
          if (_t.bro) return;
          eventHandler(params);
        });
      });
    }
    if (_t.btp.es) {
      /*{e1:{es:'selector',ev:{click:function(){},other:function(){}}},e2:...}*/
      Object.entries(_t.btp.es).forEach(([eventGroupKey, eventConfig]) => {
        const { es: selector, ev: eventMap } = eventConfig;
        Object.entries(eventMap).forEach(([eventType, handler]) => {
          $(document).off(eventType, selector); // حذف رویدادهای قبلی
          $(document).on(eventType, selector, { t: _t }, (e) => {
            const params = { e, t: e.data.t };
            if (_t.bro) return; // جلوگیری از اجرای رویداد در صورت وجود bro
            handler(params);
          });
        });
      });
    }
  }
  iSTS(flag) {
    /*isSendToServer*/
    if (flag) this.target.addClass("is-valid");
    else this.target.removeClass("is-valid");
  }
  sE(flag) {
    /*SetErrorAndRemoveError*/
    if (flag) this.target.addClass("is-invalid");
    else this.target.removeClass("is-invalid");
  }
  gV() {
    /*getElementValue*/
    return this.target.val();
  }
  sV(v) {
    this.target.val(v);
    this.lv = v;
  }
  sVDBS(v) {
    /*setValueDBS*/
    this.sV(v);
    this.lv = "";
    this.cSFSDTS();
  }
  cV() {
    /*clearValue*/
    this.sV("");
    this.iSTS(false);
    this.sE(false);
  }
  rEFD() {
    /*removeElementFromDom*/
    this.box.detach();
    $('div[data-offid="' + this.id + '"]').remove();
    $('div[data-nrid="' + this.id + '"]').remove();
  }
  gEFA() {
    /*getElementForAppend*/
    let tmp = $("<div></div>");
    let addRow = this.bt > 100 ? 1 : 0;
    for (let i = 0; i < Math.round(this.bto / 12) + addRow; i++)
      tmp.append($('<div class="row" data-offid="' + _t.id + '"></div>'));
    tmp.append(this.box);
    return tmp.children();
  }
  cN() {
    /*createNode*/
    this.cB();
    this.cL();
    this.cT();
    this.gJACT();
    this.cG();
    this.cAB();
    this.bE();
  }
}
class Input extends Element {
  cSFSDTS() {
    /*checkStatusForSendDataToServer*/
    return { status: this.lv != this.gv() };
  }
  cTF() {
    /*createTargetFocus*/
    let _t = this;
    this.target.on("focus", (e) => {
      if (_t.bro) return;
      _t.iSTS(false);
    });
  }
  cTB() {
    /*createTargetBlur*/
    let _t = this;
    this.target.on("blur", (e) => {
      _t.cSFSDTS();
    });
  }
  constructor(arg) {
    super(arg);
    this.lv = "";
    if (new.target === Input) throw new Error("its abstract");
  }
}
class selectableItems extends Element {
  rA() {
    /*rebindAnswer*/
    let cb = (_t, p, params, res, n) => {
      _t.o = res[0].values;
      _t.vA();
      _t.iO();
      _t.created = false;
      _t.cTID();
      n();
    };
    return { status: true, cb: cb };
  }
  vA() {
    /*validateAnswer*/
    if (!this.o) return;
    Object.entries(this.o).forEach(([key, row]) => {
      const exp = row.base_show_condition
        ? utils.decodeBase64(row.base_show_condition)
        : "";
      if (!exp || bpms.cE([exp])) this.o[key].ivfs = true;
    });
  }
  cSFSDTS() {
    return { status: this.lv != this.gv() && !this.sbsv };
  }
  gFV() {
    /*getFullValue*/
    let rs;
    let ids = this.gV();
    if (!(ids instanceof Array)) {
      ids = [ids];
      rs = this.o.filter(function (item) {
        return ids.indexOf(item.id) != -1;
      });
    } else rs = this.gV();
    return rs;
  }
  filterSubItem() {
    /*in kar dare dorost nashode*/
    var flag = false;
    for (var i in this.o) {
      var item = this.o[i];
      var exp = item.base_show_condition
        ? utils.decodeBase64(item.base_show_condition)
        : "";
      this.target
        .find('*[child_id="' + item.id + '"]')
        .addClass("mm_hs")
        .trigger("mm_hs");
      if (typeof this.gV() == "undefined") continue;
      else if (isNaN(this.gV())) continue;
      else if (typeof this.gV() == "object" && this.gV().indexOf(item.id) == -1)
        continue;
      else if (
        typeof this.gV() == "object" &&
        this.gV().indexOf(item.id) != -1
      ) {
        var t = this.gV().filter((item) => item !== item.id);
        this.sV(t);
      } else if (typeof this.gV() == "number" && this.gV() == item.id) {
        this.cV();
      }
      var flag = true;
    }
    if (flag) {
      bpms.manageForDBS(this);
    }
  }
  constructor(arg) {
    super(arg);
    this.lv = "";
    if (new.target === selectableItems) throw new Error("its abstract");
  }
}
