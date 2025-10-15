class Password extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Password";
    const placeholderText = cfg.placeholder || "Enter your password";

    const isDisabled = variant === "disable" || cfg.disabled;

    this.target = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius}">
        <input type="password" class="mm_text" placeholder="${placeholderText}" ${
      isDisabled ? "disabled" : ""
    }/>
        <label>${labelText}</label>
      </div>
    `);

    const input = this.target.find("input");

    input.on("focus", function () {
      $(this).attr("placeholder", "");
    });

    input.on("blur", function () {
      if (!$(this).val()) {
        $(this).attr("placeholder", placeholderText);
      }
    });

    this.cTB();
    this.cTF();
  }
}
class Text extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Text";
    const placeholderText = cfg.placeholder || "Enter text";
    const type = cfg.type || "text"; // allow text/password/email etc.

    const isDisabled = variant === "disable" || cfg.disabled;

    this.target = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius}">
        <input type="${type}" class="mm_text" placeholder="${placeholderText}" ${
      isDisabled ? "disabled" : ""
    }/>
        <label>${labelText}</label>
      </div>
    `);

    const input = this.target.find("input");

    input.on("focus", function () {
      $(this).attr("placeholder", "");
    });

    input.on("blur", function () {
      if (!$(this).val()) {
        $(this).attr("placeholder", placeholderText);
      }
    });

    this.cTB();
    this.cTF();
  }
}
class Int extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Number";
    const placeholderText = cfg.placeholder || "Enter number";
    const allowNegative = cfg.allowNegative === true;
    const allowDecimal = cfg.allowDecimal === true;

    const isDisabled = variant === "disable" || cfg.disabled;

    this.target = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius}">
        <input type="text" class="mm_int" placeholder="${placeholderText}" ${
      isDisabled ? "disabled" : ""
    }/>
        <label>${labelText}</label>
      </div>
    `);

    const input = this.target.find("input");

    input.on("keypress", function (e) {
      const charCode = e.which ? e.which : e.keyCode;
      const charStr = String.fromCharCode(charCode);
      const value = $(this).val();
      if (charCode >= 48 && charCode <= 57) return true; // digits
      if (
        allowNegative &&
        charStr === "-" &&
        value.indexOf("-") === -1 &&
        value.length === 0
      )
        return true; // leading minus
      if (allowDecimal && charStr === "." && value.indexOf(".") === -1)
        return true; // single dot
      e.preventDefault();
      return false;
    });

    input.on("focus", function () {
      $(this).attr("placeholder", "");
    });

    input.on("blur", function () {
      if (!$(this).val()) {
        $(this).attr("placeholder", placeholderText);
      }
    });

    this.cTB();
    this.cTF();
  }
}
class TextArea extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Textarea";
    const placeholderText = cfg.placeholder || "Enter text";
    const rows = Number(cfg.rows) > 0 ? Number(cfg.rows) : 3;

    const isDisabled = variant === "disable" || cfg.disabled;

    this.target = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius}">
        <textarea class="mm_textarea" rows="${rows}" placeholder="${placeholderText}" ${
      isDisabled ? "disabled" : ""
    }></textarea>
        <label>${labelText}</label>
      </div>
    `);

    const textarea = this.target.find("textarea");

    textarea.on("focus", function () {
      $(this).attr("placeholder", "");
    });

    textarea.on("blur", function () {
      if (!$(this).val()) {
        $(this).attr("placeholder", placeholderText);
      }
    });

    this.cTB();
    this.cTF();
  }
  sV(v) {
    this.lv = v.replace(/<br\s*[\/]?>/gi, "\n");
    this.target.val(this.lv);
  }
}
class DatePicker extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Date";
    const placeholderText = cfg.placeholder || "----/--/--";
    const isDisabled = variant === "disable" || cfg.disabled;

    this.target = $(`
      <input
        type="text"
        class="datepicker datepicker_icon"
        placeholder="${placeholderText}"
        autocomplete="off"
        ${isDisabled ? "disabled" : ""}
      />
    `);

    this.inputElement = this.target;
    this.placeholderText = placeholderText;
    this.labelText = labelText;

    this.wrapper = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius}"></div>
    `);

    this.labelElement = $(`<label>${labelText}</label>`);
  }

  gJACT() {
    super.gJACT();
    if (this.id !== undefined && this.id !== null) {
      this.target.attr("id", String(this.id));
    }

    this.target.detach();
    this.wrapper.append(this.target);
    this.wrapper.append(this.labelElement);

    this.box.append(this.wrapper);

    if (typeof this.target.mask === "function") {
      this.target.mask("0000/00/00", { clearIfNotMatch: true });
    }

    this.target.on("focus", () => {
      this.target.attr("placeholder", "");
    });

    this.target.on("blur", () => {
      if (!this.target.val()) {
        this.target.attr("placeholder", this.placeholderText);
      }
    });

    this.setupEvents();

    setTimeout(() => {
      this.initializePicker();
    }, 0);
  }

  setupEvents() {
    const _t = this;
    this.target.on("change.datepicker", function () {
      const newValue = $(this).val();
      if (_t.lv !== newValue) {
        _t.lv = newValue;

        if (_t.btp?.events?.change) {
          _t.btp.events.change({ t: _t });
        }
      }
    });
  }

  initializePicker() {
    const _t = this;

    const doInit = () => {
      _t.dp = window.kamaDatepicker(String(_t.id), {
        markToday: true,
        gotoToday: true,
        markHolidays: true,
        placeholder: _t.btp?.placeholder || "----/--/--",
        closeAfterSelect: true,
        sync: false,
        twodigit: true,
        forceFarsiDigits: false,
      });

      _t.created = true;
    };

    if (window.kamaDatepicker) doInit();
  }

  gv() {
    return this.target ? this.target.val() : "";
  }

  sv(value) {
    if (this.target) {
      this.target.val(value);
      this.lv = value;
      this.target.trigger("change");
    }
  }

  getDateObject() {
    const dateStr = this.gv();
    if (!dateStr) return null;

    const parts = dateStr.split("/");
    if (parts.length !== 3) return null;

    return {
      year: parseInt(parts[0]),
      month: parseInt(parts[1]),
      day: parseInt(parts[2]),
    };
  }

  setDateObject(dateObj) {
    if (!dateObj || !dateObj.year || !dateObj.month || !dateObj.day) {
      return;
    }

    const year = dateObj.year.toString().padStart(4, "0");
    const month = dateObj.month.toString().padStart(2, "0");
    const day = dateObj.day.toString().padStart(2, "0");

    this.sv(`${year}/${month}/${day}`);
  }

  reset() {
    this.sv("");
    this.lv = "";
  }

  cV() {
    this.reset();
    this.iSTS(false);
    this.sE(false);
  }

  setDisabled(disabled) {
    if (this.target) {
      if (disabled) {
        this.target.attr("disabled", "disabled");
        if (this.wrapper) {
          this.wrapper.addClass("mm_input--disable");
        }
      } else {
        this.target.removeAttr("disabled");
        if (this.wrapper) {
          this.wrapper.removeClass("mm_input--disable");
        }
      }
    }
  }

  sRO(bro) {
    this.bro = bro;
    if (bro) {
      this.target.prop("readonly", "readonly");
      this.target.addClass("is-lock");
      if (this.wrapper) {
        this.wrapper.addClass("is-lock");
      }
    } else {
      this.target.removeProp("readonly");
      this.target.removeClass("is-lock");
      if (this.wrapper) {
        this.wrapper.removeClass("is-lock");
      }
    }
  }

  destroy() {
    if (this.target) {
      this.target.off(".datepicker");
    }
    if (this.dp) {
      // this.dp.destroy();
    }

    const bdRoot = $("#bd-root-" + this.id);
    if (bdRoot.length) {
      bdRoot.remove();
    }

    this.rEFD();
  }
}
class FileUploader extends Input {
  cT() {
    const cfg = this.btp || {};
    const accept = cfg.accept || "*/*";
    const multiple = cfg.multiple || false;
    const labelText = cfg.label || "آپلود فایل";
    const variant = cfg.variant || "fill"; // fill, outline, ghost, disable
    const color = cfg.color || "primary"; // primary, secondary, danger, warning, success, info, neutral
    const radius = cfg.radius || "radius-base";

    // ساخت عنصر فایل
    const input = $("<input>", {
      type: "file",
      accept,
      multiple,
    });

    // اضافه کردن label (در صورت نیاز)
    const label = $("<label>", {
      class: "fj_label text-sm font-medium mb-1",
      text: labelText,
    });

    // ساخت wrapper
    const wrapper = $("<div>", {
      class: `fj_fileuploader mm_input mm_input--${variant} mm_input--${color} mm_input--${radius} flex flex-col`,
    }).append(label, input);

    // تبدیل به FilePond
    input.filepond({
      allowMultiple: multiple,
      acceptedFileTypes: accept.split(","),
      labelIdle: "فایل‌ها را اینجا بکشید یا کلیک کنید",
      credits: false,
      onaddfile: (err, file) => {
        if (!err && typeof cfg.onChange === "function") {
          cfg.onChange(file);
        }
      },
    });

    this.target = wrapper;
    return wrapper;
  }
}
class TextEditor extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "snow"; // تم Quill
    const placeholder = cfg.placeholder || "متن خود را بنویسید...";
    const height = cfg.height || "200px";
    const readOnly = cfg.readOnly || false;
    const toolbar = cfg.toolbar || [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ];

    // container اصلی
    const wrapper = $("<div>", {
      class: `fj_texteditor fj_variant-${variant}`,
    });

    // ناحیه برای ادیتور
    const editorContainer = $("<div>", {
      class: "fj_editor",
      css: { height },
    });

    wrapper.append(editorContainer);

    // مقدار اولیه
    this.target = wrapper;
    setTimeout(() => {
      const quill = new Quill(editorContainer[0], {
        theme: variant,
        modules: { toolbar },
        placeholder,
        readOnly,
      });

      if (cfg.value) quill.root.innerHTML = cfg.value;

      quill.on("text-change", () => {
        const html = quill.root.innerHTML;
        if (typeof cfg.onChange === "function") cfg.onChange(html);
      });

      this.quill = quill;
    }, 0);

    return wrapper;
  }

  getValue() {
    return this.quill ? this.quill.root.innerHTML : "";
  }

  setValue(html) {
    if (this.quill) this.quill.root.innerHTML = html;
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
    const variant = this.btp.variant || "fill"; // fill, outline, ghost, link, disable
    const color = this.btp.color || "primary"; // primary, secondary, danger, warning, link
    const radius = this.btp.radius || "radius-base"; // 2xs(4px) -- xs(6px) -- 2sm(8px) -- sm(10px) -- md(12px) -- lg(16px), 2xl(24px) , 3xl(32px)

    // اگر variant = "disable" باشد، دکمه را disabled می‌کنیم
    const isDisabled = variant === "disable" || this.btp.disabled;

    this.target = $(
      `<input type="button" class="mm_button mm_button--${variant} mm_button--${color} mm_button--${radius} mm_button--has-before mm_button--has-after" ${
        isDisabled ? "disabled" : ""
      }></input>`
    );

    // text
    this.target.val(this.btp.text);

    // icon
    if (this.btp.icon) {
      this.target.css("--icon-before", `url("${this.btp.icon}")`);
      this.target.css("--icon-after", `url("${this.btp.icon}")`);
    }

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
class Checkbox extends Input {
  cT() {
    const type = this.btp.type || "checkbox";
    const shape = this.btp.shape || "rect";
    const color = this.btp.color || "primary";
    const position = this.btp.position_class || "nicelabel-default-position";

    const baseClass = `${shape}-nicelabel`;
    let cssClasses = baseClass;

    if (color && color !== "primary") {
      cssClasses += ` ${baseClass}--${color}`;
    }

    this.target = $(`<input type="${type}" class="${cssClasses}">`);

    if (this.btp.checked) this.target.prop("checked", true);
    if (this.btp.disabled) this.target.prop("disabled", true);

    const nicelabelData = {
      position_class: position,
      checked_text: this.btp.checked_text || "فعال",
      unchecked_text: this.btp.unchecked_text || "غیرفعال",
    };

    this.target.attr("data-nicelabel", JSON.stringify(nicelabelData));
    this.box.append(this.target);
  }

  gJACT() {
    super.gJACT();
    setTimeout(() => {
      if ($.fn.nicelabel) {
        this.target.nicelabel({
          checked_text: this.btp.checked_text || "فعال",
          unchecked_text: this.btp.unchecked_text || "غیرفعال",
          uselabel: false,
        });
      }
    }, 0);
  }

  gV() {
    return this.target.is(":checked");
  }

  sV(v) {
    this.target.prop("checked", !!v);
  }

  cSFSDTS() {
    return { status: this.lv != this.gV() };
  }
}
