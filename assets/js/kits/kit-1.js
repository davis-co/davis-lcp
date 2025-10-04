class Password extends Input {
  cT() {
    this.target = $('<input type="password" class="mm_text"/>');
    this.cTB();
    this.cTF();
  }
}
class Text extends Input {
  cT() {
    this.target = $('<input type="text" class="mm_text"/>');
    this.cTB();
    this.cTF();
  }
}
class Int extends Input {
  cT() {
    this.target = $('<input type="int" class="mm_int"/>');
    this.target.keypress((e) => {
      let charCode = e.which ? e.which : e.keyCode;
      if (
        (charCode != 45 || $(this).val().indexOf("-") != -1) &&
        (charCode != 46 || $(this).val().indexOf(".") != -1) &&
        (charCode < 48 || charCode > 57)
      )
        return false;
      return true;
    });
    this.cTB();
    this.cTF();
  }
}
class DatePicker extends Input {
  cT() {
    this.target = $(
      '<input id="datepicker-valid" class="datepicker datepicker_icon" placeholder="--/--/----"/>'
    );
    this.target.mask("0000/00/00", { clearIfNotMatch: true });
    let _t = this;
    this.cTB();
    this.cTF();
    utils.loadResources([`${baseURL}/js/kitLib/kamaDatepicker.js&t=js`], () => {
      this.created = true;
      this.dp = kamaDatepicker(this.id.toString(), {
        markToday: true,
        gotoToday: true,
        markHolidays: true,
      });
    });
  }
}
class TextArea extends Input {
  cT() {
    this.target = $('<textarea rows="3"></textarea>');
    this.cTB();
    this.cTF();
  }
  sV(v) {
    this.lv = v.replace(/<br\s*[\/]?>/gi, "\n");
    this.target.val(this.lv);
  }
}
class TextEditor2 extends Input {
  cT() {
    this.target = $(
      '<textarea id="input" name="input" class="texteditor"></textarea>'
    );
  }
  cTB() {
    let _t = this;
    this.editor.on("blur", function () {
      $(".tox-pop").remove();
      return _t.cSFSDTS();
    });
  }
  cTID(arg) {
    let options = {
      costumImgSrc: "/LFFO?fid=",
      language: "fa_IR",
      directionality: "rtl",
      width: arg ? arg.width : 450,
      height: 300,
      max_height: arg && arg.height ? arg.height : 300,
      theme: "silver",
      skin_url: "/LFFO?fid=1567582147706&", //add & to bypass other path add with tinyMCE
      statusbar: false,
      plugins:
        "autoresize imagelffoupload quickbars imagelffo fullscreen paste print preview searchreplace directionality visualblocks visualchars link code template table charmap hr pagebreak nonbreaking anchor lists imagetools textpattern",
      toolbar:
        "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | ltr rtl | forecolor backcolor removeformat | pagebreak | imagelffo imagelffoupload | link unlink |   pastetext  template code | preview print fullscreen fullscreentitle",
      toolbar_drawer: "sliding",
      menubar: "file insert view format table tools",
      removed_menuitems:
        "undo,redo,bold,italic,underline,insertdatetime,formats,fontformats,fontsizes,align,strikethrough,fontselect,fontsizeselect,formatselect,alignleft,aligncenter,alignright,alignjustify,outdent,indent,numlist,bullist,checklist,ltr,rtl,forecolor,backcolor,permanentpen,formatpainter,removeformat,pagebreak,imagelffo,link,unlink,pastetext,template,code,preview,print,fullscreen",
      quickbars_insert_toolbar: false,
      contextmenu: "image imagetools table",
      font_formats:
        "Nazanin = nazanin;Mitra = mitra;Tahoma = tahoma;Helvetica = helvetica;Verdana = verdana;Arial Black=arial black,avant garde;Indie Flower=indie flower, cursive;Times New Roman=times new roman,georgia,times;",
      quickbars_selection_toolbar:
        "forecolor backcolor removeformat | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | ltr rtl | cut past copy selectall | searchreplace",
      valid_children: "+body[style],+body[script],+style[type],+*[*]",
      entity_encoding: "raw",
      apply_source_formatting: false,
      verify_html: false,
      setup: function (ed) {
        ed.ui.registry.addButton("fullscreentitle", {
          text: "<<<تمام صفحه",
          disabled: true,
          onAction: function (_) {},
        });
      },
    };
    if (this.bro) {
      options.plugins = "print preview noneditable";
      options.toolbar = "print | preview";
      (options.menubar = false),
        (options.setup = function (ed) {
          ed.on("PreInit", function (event) {
            var ed = event.target,
              dom = ed.dom;
            dom.setAttrib(ed.getBody(), "contenteditable", "false");
          });
        });
    }
    if (this.btp.options) $.extend(true, options, this.btp.options);
    this.target.tinymce(options);
    this.editor = tinymce.get(this.target[0].id);
    let _t = this;

    this.editor.on("Focus", function () {
      _t.iSTS(false);
    });
    this.cTB();
  }
  sV(v) {
    this.target.val(v);
  }
  gV() {
    if (this.editor)
      return this.editor
        .getContent()
        .replace(/\n/g, "")
        .replace(/\r/g, "")
        .replace(/\r\n/, "");
    else
      return this.target
        .val()
        .replace(/\n/g, "")
        .replace(/\r/g, "")
        .replace(/\r\n/, "");
  }
}
class ComputedValue extends Input {
  cT() {
    this.tip = "fldbs";
    this.target = $(
      '<span><input type="computedvalue" class="mm_computedvalue" readonly="readonly"/></span>'
    );
    let reqs = $('<span class="mm_computedvalueic" ></span>'); /*requestSender*/
    let _t = this;
    this.reqs.click(function () {
      _t.cSFSDTS();
    });
    this.target.append(reqs);
  }
  cSFSDTS() {
    let cb = (_t, p, res) => {
      _t.sV(res[0].answer[0].v);
    };
    return { status: !this.bro, cb: cb };
  }
}
class Button extends Input {
  cT() {
    const variant = this.btp.variant || "fill"; // fill, outline, ghost, link
    const color = this.btp.color || "primary"; // primary, secondary, danger, warning, link
    const radius = this.btp.radius || "md"; // 2xs(4px) -- xs(6px) -- 2sm(8px) -- sm(10px) -- md(12px) -- lg(16px), 2xl(24px) , 3xl(32px)
    this.target = $(
      `<input type="button" class="mm_button mm_button--${variant} mm_button--${color} mm_button--radius-${radius} mm_button--has-before mm_button--has-after"></input>`
    );

    // text
    this.target.val(this.btp.text);

    // icon
    this.target.css("--icon-before", `url("${this.btp.icon}")`);
    this.target.css("--icon-after", `url("${this.btp.icon}")`);
    let _t = this;
    this.target.click(function () {
      _t.doIt();
    });
  }

  cSFSDTS() {
    return { status: true };
  }
  doIt() {
    //should be completed;
  }
}
class Titr extends Element {
  cT() {
    if (this.btp.sl) {
      var v = this.bct ? this.bct : "";
    } else {
      v = this.lt;
      if (this.label) this.label.text("");
    }
    this.target = $('<span class="mm_titr" ></span>');
    this.sV(v);
  }
  sV(v) {
    this.v = v;
    this.target.html(v);
  }
}
class Line extends Element {
  cT() {
    this.label ? this.label.detach() : 1;
    this.target = $('<hr class="mm_hr"/>');
  }
  rE() {}
  sRO(bro) {}
}
