class Password extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    this.variant = variant;
    this.color = color;
    this.radius = radius;
    this.variant = variant;
    this.color = color;
    this.radius = radius;
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
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
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
    const cfg = this.btp || {};
    const text = cfg.label || "";
    const align = cfg.align || "center"; // left, center, right
    const color = cfg.color || "neutral"; // neutral, primary, success, warning, error
    const thickness = cfg.thickness || "normal"; // thin, normal, thick
    const spacing = cfg.spacing || "normal"; // compact, normal, spacious

    if (text.trim()) {
      // Build CSS classes
      const lineClasses = ["mm_line", `mm_line--${align}`];
      if (color !== "neutral") lineClasses.push(`mm_line--${color}`);
      if (thickness !== "normal") lineClasses.push(`mm_line--${thickness}`);
      if (spacing !== "normal") lineClasses.push(`mm_line--${spacing}`);

      this.target = $(`
        <div class="${lineClasses.join(" ")}">
          <span class="mm_line__text">${text}</span>
        </div>
      `);
    } else {
      // Build CSS classes for plain line
      const plainClasses = ["mm_line--plain"];
      if (thickness !== "normal") plainClasses.push(`mm_line--${thickness}`);
      if (spacing !== "normal") plainClasses.push(`mm_line--${spacing}`);

      this.target = $(`<hr class="${plainClasses.join(" ")}"/>`);
    }
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
class Select extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Select";
    const placeholderText = cfg.placeholder || "Choose an option";
    const options = cfg.options || [
      { value: "", text: placeholderText },
      { value: "option1", text: "Option 1" },
      { value: "option2", text: "Option 2" },
      { value: "option3", text: "Option 3" },
    ];
    const multiple = cfg.multiple || false;
    const isDisabled = variant === "disable" || cfg.disabled;

    this.mode = multiple ? "multi" : "single";
    this.options = options;
    this.selectedValues = multiple ? [] : "";
    this.isDropdownOpen = false;

    // --- HTML ---
    const multiClass = multiple ? "mm_multiselect" : "mm_singleselect";
    const tagsArea = multiple ? `<div class="mm_multiselect_tags"></div>` : "";

    this.target = $(`
      <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius} mm_multiselect ${multiClass}">
        <div class="mm_multiselect_container" ${isDisabled ? "disabled" : ""}>
          ${tagsArea}
          <div class="mm_multiselect_input">
            <input type="text" class="mm_multiselect_search" placeholder="${placeholderText}" ${
      isDisabled ? "disabled" : ""
    } />
            <div class="mm_multiselect_arrow"></div>
          </div>
          <div class="mm_multiselect_dropdown">
            ${options
              .map(
                (o) =>
                  `<div class="mm_multiselect_option" data-value="${o.value}" tabindex="0" role="option">${o.text}</div>`
              )
              .join("")}
          </div>
        </div>
        <label>${labelText}</label>
      </div>
    `);

    this.initializeSelect(cfg);
    this.cTB();
    this.cTF();
  }

  // --- Unified initializer for both single & multi ---
  initializeSelect(cfg) {
    const container = this.target.find(".mm_multiselect_container");
    const dropdown = this.target.find(".mm_multiselect_dropdown");
    const searchInput = this.target.find(".mm_multiselect_search");
    const arrow = this.target.find(".mm_multiselect_arrow");
    const tagsContainer = this.target.find(".mm_multiselect_tags");
    const root = this.target;
    const searchable = cfg.searchable === true;

    const isMulti = this.mode === "multi";
    if (!searchable && !isMulti) {
      searchInput.prop("readonly", true).css({ cursor: "pointer" });
    }
    searchInput.css({ paddingRight: "28px" });

    const positionDropdown = () => {
      const rect = container[0].getBoundingClientRect();
      const vh = window.innerHeight;
      const below = vh - rect.bottom;
      const above = rect.top;
      const fitsBelow = below >= 200 || above <= below;
      dropdown.css({
        top: fitsBelow ? "calc(100% + 4px)" : "auto",
        bottom: fitsBelow ? "auto" : "100%",
        "max-height": Math.min(fitsBelow ? below - 20 : above - 20, 240) + "px",
      });
    };

    const toggleDropdown = () => {
      if (container.is("[disabled]")) return;
      this.isDropdownOpen = !this.isDropdownOpen;
      dropdown.toggleClass("open", this.isDropdownOpen);
      arrow.toggleClass("open", this.isDropdownOpen);
      if (this.isDropdownOpen) {
        positionDropdown();
        searchInput.focus();
      } else {
        searchInput.val("");
        filterOptions("");
      }
    };

    const closeDropdown = () => {
      this.isDropdownOpen = false;
      dropdown.removeClass("open");
      arrow.removeClass("open");
      filterOptions("");
    };

    const filterOptions = (term) => {
      dropdown.find(".mm_multiselect_option").each(function () {
        const text = $(this).text().toLowerCase();
        $(this).toggle(text.includes(term.toLowerCase()));
      });
    };

    // --- MULTI MODE ---
    const addTag = (value, text) => {
      if (this.selectedValues.includes(value)) return;
      this.selectedValues.push(value);
      const tag = $(`
        <div class="mm_multiselect_tag" data-value="${value}">
          <span class="mm_multiselect_tag_text">${text}</span>
          <span class="mm_multiselect_tag_remove" role="button" aria-label="Remove ${text}">×</span>
        </div>
      `);
      tagsContainer.append(tag);
      dropdown
        .find(`[data-value="${value}"]`)
        .addClass("mm_multiselect_option--selected");

      tag.find(".mm_multiselect_tag_remove").on("click", (e) => {
        e.stopPropagation();
        removeTag(value);
      });
      updateHasValue();
      if (cfg.onChange) cfg.onChange(this.selectedValues);
    };

    const removeTag = (value) => {
      this.selectedValues = this.selectedValues.filter((v) => v !== value);
      tagsContainer.find(`[data-value="${value}"]`).remove();
      dropdown
        .find(`[data-value="${value}"]`)
        .removeClass("mm_multiselect_option--selected");
      updateHasValue();
      if (cfg.onChange) cfg.onChange(this.selectedValues);
    };

    const updateHasValue = () => {
      const hasVal = isMulti
        ? this.selectedValues.length > 0
        : !!this.selectedValue;
      root.toggleClass("has-value", hasVal);
    };

    // --- EVENTS ---
    container.on("click", (e) => {
      if ($(e.target).closest(".mm_multiselect_tag").length) return;
      toggleDropdown();
    });

    searchInput.on("click", (e) => {
      e.stopPropagation();
      if (!this.isDropdownOpen) toggleDropdown();
    });

    if (searchable || isMulti)
      searchInput.on("input", (e) => filterOptions(e.target.value));

    searchInput.on("keydown", (e) => {
      if (e.key === "Escape") closeDropdown();
      if (isMulti && e.key === "Backspace" && !searchInput.val()) {
        const last = this.selectedValues[this.selectedValues.length - 1];
        if (last) removeTag(last);
      }
    });

    dropdown.on("click", ".mm_multiselect_option", (e) => {
      e.stopPropagation(); // جلوگیری از باز و بسته دوباره
      const opt = $(e.currentTarget);
      const value = opt.data("value");
      const text = opt.text();

      if (isMulti) {
        // حالت چند انتخابی
        this.selectedValues.includes(value)
          ? removeTag(value)
          : addTag(value, text);
        searchInput.focus();
      } else {
        // حالت تک انتخابی
        this.selectedValue = value;
        dropdown
          .find(".mm_multiselect_option")
          .removeClass("mm_multiselect_option--selected");
        opt.addClass("mm_multiselect_option--selected");
        searchInput.val(value ? text : "");
        updateHasValue();

        if (cfg.onChange) cfg.onChange(this.selectedValue);

        // 🔻 این خط اضافه شد تا بلافاصله dropdown بسته شود
        closeDropdown();
      }
    });

    $(document).on("click", (e) => {
      if (!container.is(e.target) && container.has(e.target).length === 0)
        closeDropdown();
    });

    $(window).on("resize scroll", () => {
      if (this.isDropdownOpen) positionDropdown();
    });

    // --- INIT SELECTED ---
    if (isMulti) {
      (cfg.selectedValues || []).forEach((v) => {
        const opt = this.options.find((o) => o.value === v);
        if (opt) addTag(opt.value, opt.text);
      });
    } else {
      const initial = this.options.find((o) => o.selected) || null;
      if (initial) {
        this.selectedValue = initial.value;
        searchInput.val(initial.text);
        dropdown
          .find(`[data-value="${initial.value}"]`)
          .addClass("mm_multiselect_option--selected");
      } else this.selectedValue = "";
      updateHasValue();
    }
  }

  // --- VALUE GETTER ---
  gV() {
    return this.mode === "multi"
      ? this.selectedValues
      : this.selectedValue || "";
  }

  // --- VALUE SETTER ---
  sV(value) {
    if (this.mode === "multi") {
      const tagsContainer = this.target.find(".mm_multiselect_tags");
      const dropdown = this.target.find(".mm_multiselect_dropdown");
      tagsContainer.empty();
      dropdown
        .find(".mm_multiselect_option")
        .removeClass("mm_multiselect_option--selected");

      this.selectedValues = Array.isArray(value) ? value : [];
      this.selectedValues.forEach((v) => {
        const opt = this.options.find((o) => o.value === v);
        if (opt) {
          const tag = $(`
            <div class="mm_multiselect_tag" data-value="${v}">
              <span class="mm_multiselect_tag_text">${opt.text}</span>
              <span class="mm_multiselect_tag_remove" role="button">×</span>
            </div>
          `);
          tagsContainer.append(tag);
          dropdown
            .find(`[data-value="${v}"]`)
            .addClass("mm_multiselect_option--selected");
        }
      });
      this.target.toggleClass("has-value", this.selectedValues.length > 0);
    } else {
      const searchInput = this.target.find(".mm_multiselect_search");
      const dropdown = this.target.find(".mm_multiselect_dropdown");
      this.selectedValue = value || "";
      dropdown
        .find(".mm_multiselect_option")
        .removeClass("mm_multiselect_option--selected");
      if (this.selectedValue) {
        const opt = this.options.find((o) => o.value === this.selectedValue);
        if (opt) {
          searchInput.val(opt.text);
          dropdown
            .find(`[data-value="${opt.value}"]`)
            .addClass("mm_multiselect_option--selected");
        }
      } else searchInput.val("");
      this.target.toggleClass("has-value", !!this.selectedValue);
    }
  }

  cSFSDTS() {
    return { status: this.lv != this.gV() };
  }
}
class Table extends Element {
  cT() {
    // Decode config from base64 like other components
    let cfg = this.btp || {};
    if (typeof cfg === "string") {
      try {
        cfg = JSON.parse(atob(cfg));
      } catch (e) {
        console.error("Failed to decode table config:", e);
        cfg = {};
      }
    }

    const variant = cfg.variant || "fill";
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";

    this.limit = Number(cfg.limit) > 0 ? Number(cfg.limit) : 10;
    this.currentpage = 1;
    this.defaultrowcount =
      Number(cfg.total) || (cfg.value ? cfg.value.length : 100000);
    this.v = Array.isArray(cfg.value) ? cfg.value : [];
    this.columns = cfg.c || {};

    this.target = $(`
			<div class="mm_table mm_table--${variant} mm_table--${color} mm_table--${radius}">
				<div class="mm_table__container">
					<table class="mm_table__table">
						<thead class="mm_table__head th"></thead>
						<tbody class="mm_table__body tb"></tbody>
					</table>
				</div>
				<div class="mm_table__footer footer">
        <div class="mm_table__tools">
          <button type="button" class="mm_button mm_button--ghost mm_button--sm mm_button--${color} mm_button--${radius} mm_table__print">چاپ</button>
          <button type="button" class="mm_button mm_button--ghost mm_button--sm mm_button--${color} mm_button--${radius} mm_table__csv">CSV</button>
          <button type="button" class="mm_button mm_button--ghost mm_button--sm mm_button--${color} mm_button--${radius} mm_table__excel">Excel</button>
        </div>
        <div class="mm_table__pager">
        <ul class="mm_table__pagination pagination-sm"></ul>
          <select class="mm_table__limit">
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
				</div>
			</div>
		`);

    this.table = this.target.find("table");
    this.ddlimit = this.target.find(".mm_table__limit");
    this.pagination = this.target.find(".mm_table__pagination");

    this.cH();
    this.cF();
    this.rG();

    // tools
    const _t = this;
    this.target.find(".mm_table__print").on("click", function () {
      if (typeof _t.target.printThis === "function") {
        _t.target.printThis();
      } else {
        _t.fallbackPrint();
      }
    });
    this.target.find(".mm_table__csv").on("click", function () {
      _t.gCSV();
    });
    this.target.find(".mm_table__excel").on("click", function () {
      _t.gExcel();
    });

    if (typeof this.cTB === "function") this.cTB();
    if (typeof this.cTF === "function") this.cTF();
  }

  // header
  cH() {
    const headerTr$ = $("<tr/>");
    for (const key in this.columns) {
      const col = this.columns[key];
      if (!col || !col.ha) continue;
      if (col.ha.style && col.ha.style.replace(/ /g, "").includes("width:0"))
        continue;

      // Use 'n' property for header text, fallback to key without 'o' prefix
      const headerText = col.ha.n || key.replace(/^o/, "");
      const th$ = $("<th/>")
        .attr("data-col-key", key.startsWith("o") ? key.substr(1) : key)
        .html(headerText);
      this.sca(th$, col.ha, key, headerText);
      headerTr$.append(th$);

      // enable sorting if requested
      const sortable =
        col.ha.sort === true || (col.ca && (col.ca.date || col.ca.datetime));
      if (sortable) {
        const _t = this;
        th$.css("cursor", "pointer").on("click", function () {
          const kwo = $(this).attr("data-col-key");
          if (_t.sortKey === kwo)
            _t.sortDir = _t.sortDir === "asc" ? "desc" : "asc";
          else {
            _t.sortKey = kwo;
            _t.sortDir = "asc";
          }
          _t.currentpage = 1;
          _t.rG();
        });
      }
    }
    this.target.find(".th").html("").append(headerTr$);
  }

  // render grid
  rG() {
    const setR = function (off, rows) {
      let r = off;
      for (let i = 0; i < rows.length; i++) rows[i].r = ++r;
    };

    // sort before pagination
    let data = (this.v || []).slice();
    if (!this.sortKey) {
      // no-op
    } else {
      const key = this.sortKey;
      const col = this.columns["o" + key] || this.columns[key] || {};
      const isDate = col.ca && (col.ca.date || col.ca.datetime);
      const parseDate = (val) => {
        if (val == null || val === "") return 0;
        if (typeof val === "number") return val;
        if (typeof val === "string") {
          if (/^\d+$/.test(val)) return parseInt(val, 10);
          const parts = val.split("/").map(Number);
          if (parts.length === 3)
            return new Date(parts[0], parts[1] - 1, parts[2]).getTime();
        }
        const t = new Date(val).getTime();
        return isNaN(t) ? 0 : t;
      };
      data.sort((a, b) => {
        let va = a[key];
        let vb = b[key];
        if (isDate) {
          va = parseDate(va);
          vb = parseDate(vb);
        }
        if (va == null) va = "";
        if (vb == null) vb = "";
        let cmp;
        if (typeof va === "number" && typeof vb === "number") cmp = va - vb;
        else
          cmp = String(va).localeCompare(String(vb), "fa", { numeric: true });
        return this.sortDir === "asc" ? cmp : -cmp;
      });
    }

    this.offset = (this.currentpage - 1) * this.limit;
    const rows = data.slice(this.offset, this.offset + this.limit);
    setR(this.offset, rows);
    this.cRFSIG(rows);
  }

  // body
  cRFSIG(rows) {
    const body$ = this.target.find(".tb");
    body$.html("");

    for (let i = 0; i < rows.length; i++) {
      const rowHash = rows[i];
      const row$ = $("<tr/>");
      if (rowHash && rowHash.otag) row$.attr("otag", rowHash.otag);

      const createTD = (key, kwo, row$, _t) => {
        const td$ = $("<td/>").addClass(kwo).attr("data-col-key", kwo);
        let cV = kwo === "row" ? rowHash.r : rowHash[kwo];
        if (cV == null) cV = "";

        const col = _t.columns[key];
        _t.sca(td$, col.ca, kwo, cV, rowHash.otag);

        row$.append(td$);
      };

      for (const key in this.columns) {
        const col = this.columns[key];
        if (!col || !col.ha) continue;
        if (col.ha.style && col.ha.style.replace(/ /g, "").includes("width:0"))
          continue;

        // Determine field name: support both legacy 'o' prefix and plain keys
        const kwo = key.startsWith("o") ? key.substr(1) : key;
        createTD(key, kwo, row$, this);
      }

      body$.append(row$);
    }
  }

  // footer controls (pagination + limit)
  cF() {
    const _t = this;
    // init limit
    this.ddlimit.val(String(this.limit));
    this.ddlimit.on("change", function () {
      _t.limit = Number($(this).val()) || 10;
      _t.currentpage = 1;
      _t.buildPagination();
      _t.rG();
    });
    this.buildPagination();
  }

  buildPagination() {
    const _t = this;
    const totalPages = Math.max(
      1,
      Math.ceil(this.defaultrowcount / this.limit)
    );

    if (this.pagination.data("twbs")) {
      try {
        this.pagination.twbsPagination("destroy");
      } catch (e) {}
    }

    if (typeof this.pagination.twbsPagination === "function") {
      this.pagination.twbsPagination({
        last: null,
        initiateStartPageClick: false,
        startPage: this.currentpage,
        totalPages: totalPages,
        visiblePages: 5,
        onPageClick: function (event, page) {
          _t.currentpage = page;
          _t.rG();
        },
      });
    } else {
      // Fallback: simple numbers
      this.pagination.html("");
      for (let p = 1; p <= Math.min(totalPages, 5); p++) {
        const li = $(
          `<li class="page-item"><a class="page-link">${p}</a></li>`
        );
        if (p === this.currentpage) li.addClass("active");
        li.on("click", () => {
          _t.currentpage = p;
          _t.rG();
          _t.buildPagination();
        });
        this.pagination.append(li);
      }
    }
  }

  // cell adapters
  sca(t$, a, k, v, otag) {
    const _t = this;

    a = this.normalizeActionCA(a || {});

    let actionButtons = [];
    for (const key in a || {}) {
      switch (key) {
        case "style":
          t$.attr("style", a[key]);
          break;
        case "money":
          if (
            a[key] &&
            typeof utils !== "undefined" &&
            utils.commaSeparateNumber
          ) {
            v = utils.commaSeparateNumber(v);
          }
          break;
        case "date":
          if (
            v &&
            !v.toString().includes("/") &&
            typeof Calendar !== "undefined"
          ) {
            v = Calendar.javaTimeToIranianDate(parseInt(v));
          }
          break;
        case "datetime":
          if (v && typeof Calendar !== "undefined") {
            v = Calendar.javaTimeToIranianDateTime(parseInt(v));
          }
          break;
        case "d": {
          const btn = $(
            `<button class="mm_button mm_button--ghost mm_button--sm mm_button--${this.color} mm_button--${this.radius}"><span>حذف</span></button>`
          );
          btn.on("click", function () {
            _t.dR(otag);
          });
          actionButtons.push(btn);
          break;
        }
        case "e": {
          const btn = $(
            `<button class="mm_button mm_button--ghost mm_button--sm mm_button--${this.color} mm_button--${this.radius}"><span>ویرایش</span></button>`
          );
          btn.on("click", function () {
            _t.enterEdit(otag);
          });
          actionButtons.push(btn);
          break;
        }
        case "ac": {
          const cfg = a.ac || {};
          const label = cfg.label || "اکشن";
          const color = cfg.color || this.color;
          const btn = $(
            `<button class="mm_button mm_button--ghost mm_button--sm mm_button--${color} mm_button--${this.radius}"><span>${label}</span></button>`
          );
          btn.on("click", function () {
            const row = _t.findRowByOtag(otag);
            console.log("mm_table custom action click", {
              action: cfg.action || "custom",
              row,
              otag,
            });
            $(document).trigger("mm_table_action", {
              action: cfg.action || "custom",
              row,
              otag,
              table: _t,
            });
          });
          actionButtons.push(btn);
          break;
        }
        case "n":
          // 'n' is for header text, skip for cells
          break;
        default:
          v = this.getModifcatedV(a, key, v);
      }
    }

    if (actionButtons.length > 0) {
      t$.html("").append(actionButtons);
    } else {
      t$.html("").append(v);
    }
  }

  normalizeActionCA(a) {
    // allow friendly action keys alongside legacy ones
    const na = Object.assign({}, a);
    if (na.delete) na.d = true;
    if (na.edit) na.e = true;
    if (na.custom || na.action) na.ac = na.custom || na.action;
    return na;
  }

  isActionsCol(col) {
    if (!col || !col.ca) return false;
    const ca = col.ca;
    return !!(
      ca.d ||
      ca.e ||
      ca.ac ||
      ca.delete ||
      ca.edit ||
      ca.custom ||
      ca.action
    );
  }

  getVisibleNonActionKeys() {
    const keys = [];
    for (const key in this.columns) {
      const col = this.columns[key];
      if (!col || !col.ha) continue;
      if (col.ha.style && col.ha.style.replace(/ /g, "").includes("width:0"))
        continue;
      if (this.isActionsCol(col)) continue;
      const kwo = key.startsWith("o") ? key.substr(1) : key;
      keys.push(kwo);
    }
    return keys;
  }

  getModifcatedV(a, key, v) {
    switch (key) {
      case "n":
        v = a[key];
        break;
      case "idv":
        if (typeof utils !== "undefined" && utils.gVFOFS) {
          v = utils.gVFOFS(v);
        }
        break;
    }
    return v;
  }

  findRowByOtag(otag) {
    const rows = this.v || [];
    for (let i = 0; i < rows.length; i++)
      if (rows[i].otag === otag) return rows[i];
    return null;
  }

  enterEdit(otag) {
    const row = this.findRowByOtag(otag);
    if (!row) return;
    const tr$ = this.target.find('tr[otag="' + otag + '"]');

    // replace actions with Save/Cancel
    const actionsKey = Object.keys(this.columns).find((k) =>
      this.isActionsCol(this.columns[k])
    );
    if (actionsKey) {
      const actionsKwo = actionsKey.startsWith("o")
        ? actionsKey.substr(1)
        : actionsKey;
      const actionsTd$ = tr$.find('td[data-col-key="' + actionsKwo + '"]');
      const saveBtn = $(
        `<button class="mm_button mm_button--fill mm_button--sm mm_button--${this.color} mm_button--${this.radius}"><span>ذخیره</span></button>`
      );
      const cancelBtn = $(
        `<button class="mm_button mm_button--ghost mm_button--sm mm_button--${this.color} mm_button--${this.radius}"><span>انصراف</span></button>`
      );
      saveBtn.on("click", () => this.saveEdit(otag));
      cancelBtn.on("click", () => this.cancelEdit(otag));
      actionsTd$.html("").append(saveBtn, cancelBtn);
    }

    // turn editable cells into inputs (skip actions column and non-visible)
    for (const key in this.columns) {
      const col = this.columns[key];
      if (!col || !col.ha) continue;
      if (col.ha.style && col.ha.style.replace(/ /g, "").includes("width:0"))
        continue;
      const kwo = key.startsWith("o") ? key.substr(1) : key;
      if (kwo === "row" || this.isActionsCol(col)) continue;
      const td$ = tr$.find('td[data-col-key="' + kwo + '"]');
      if (!td$.length) continue;
      const current = row[kwo] == null ? "" : row[kwo];
      const input$ = $(`<input type="text" class="mm_table__edit" />`).val(
        current
      );
      td$.data("orig", current).html("").append(input$);
    }
  }

  saveEdit(otag) {
    const row = this.findRowByOtag(otag);
    if (!row) return;
    const tr$ = this.target.find('tr[otag="' + otag + '"]');
    for (const key in this.columns) {
      const col = this.columns[key];
      if (!col || !col.ha) continue;
      if (col.ha.style && col.ha.style.replace(/ /g, "").includes("width:0"))
        continue;
      const kwo = key.startsWith("o") ? key.substr(1) : key;
      if (kwo === "row" || this.isActionsCol(col)) continue;
      const td$ = tr$.find('td[data-col-key="' + kwo + '"]');
      const input$ = td$.find("input.mm_table__edit");
      if (input$.length) {
        row[kwo] = input$.val();
      }
    }
    this.rG();
  }

  cancelEdit(otag) {
    this.rG();
  }

  modificatedAllValue(rows) {
    for (let i = 0; i < rows.length; i++) {
      const rowHash = rows[i];
      for (const key in this.columns) {
        const r = this.columns[key];
        const kwo = key.startsWith("o") ? key.substr(1) : key;

        if (r.ha.style && r.ha.style.replace(/ /g, "").includes("width:0")) {
          delete rowHash[kwo];
          continue;
        }

        let cV = rowHash[kwo];
        if (cV == null) cV = "";

        for (const ck in r.ca) {
          cV = this.getModifcatedV(r.ca, ck, cV);
        }

        rowHash[kwo] = cV;
      }
    }
    return rows;
  }

  gCSV() {
    const h = this.columns;
    let r = this.v || [];
    r = this.modificatedAllValue(r);
    if (typeof createCSVAndD === "function") {
      createCSVAndD(h, r);
      return;
    }
    // Fallback simple CSV export
    const allowed = this.getVisibleNonActionKeys();
    const header = allowed.map((k) => {
      const col = h["o" + k] || h[k];
      return col && col.ha && col.ha.n ? col.ha.n : k;
    });
    const rows = r.map((row) => {
      return allowed
        .map((field) => {
          let val = row[field];
          if (val == null) val = "";
          const s = String(val).replace(/"/g, '""');
          return `"${s}"`;
        })
        .join(",");
    });
    const csvContent = [header.join(","), ...rows].join("\n");
    const blob = new Blob(["\ufeff" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  gExcel() {
    // Simple Excel export using HTML table data URI (supported by Excel)
    const allowed = this.getVisibleNonActionKeys();
    const tableClone = this.target.find("table").clone();
    tableClone.find("thead th").each(function () {
      const k = $(this).attr("data-col-key");
      if (k && allowed.indexOf(k) === -1) $(this).remove();
    });
    tableClone.find("tbody tr").each(function () {
      $(this)
        .find("td")
        .each(function () {
          const k = $(this).attr("data-col-key");
          if (k && allowed.indexOf(k) === -1) $(this).remove();
        });
    });
    const tableHtml = tableClone[0].outerHTML;
    const blob = new Blob(
      [
        `\ufeff<html><head><meta charset="UTF-8"></head><body>${tableHtml}</body></html>`,
      ],
      { type: "application/vnd.ms-excel" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "table.xls";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  fallbackPrint() {
    const w = window.open("");
    if (!w) return;
    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((el) => el.outerHTML)
      .join("\n");
    const allowed = this.getVisibleNonActionKeys();
    const tableClone = this.target.find(".mm_table__table").clone();
    tableClone.find("thead th").each(function () {
      const k = $(this).attr("data-col-key");
      if (k && allowed.indexOf(k) === -1) $(this).remove();
    });
    tableClone.find("tbody tr").each(function () {
      $(this)
        .find("td")
        .each(function () {
          const k = $(this).attr("data-col-key");
          if (k && allowed.indexOf(k) === -1) $(this).remove();
        });
    });
    w.document.write(
      `<!doctype html><html><head>${styles}<meta charset="utf-8"></head><body>${tableClone[0].outerHTML}</body></html>`
    );
    w.document.close();
    w.focus();
    w.print();
    w.close();
  }

  // API
  sV(v) {
    this.v = Array.isArray(v) ? v : [];
    this.defaultrowcount = this.v.length;
    this.currentpage = 1;
    this.buildPagination();
    this.rG();
  }

  gV() {
    return this.v || [];
  }

  cV() {
    this.v = [];
    this.defaultrowcount = 0;
    this.currentpage = 1;
    this.buildPagination();
    this.rG();
    if (typeof this.iSTS === "function") this.iSTS(false);
  }

  dR(otag) {
    const cb = function (_t, p, res) {
      const rows = _t.v || [];
      for (let i = 0; i < rows.length; i++) {
        if (rows[i].otag === otag) {
          rows.splice(i, 1);
          _t.target.find('tr[otag="' + otag + '"]').remove();
          break;
        }
      }
      _t.v = rows;
      _t.defaultrowcount = _t.v.length;
      _t.buildPagination();
    };

    if (
      typeof bpms !== "undefined" &&
      typeof bpms.manageForDBS === "function"
    ) {
      try {
        const result = bpms.manageForDBS(this, cb, { d: true, otag: otag });
        // If handler returns a promise, honor it; on failure, fallback to client-side delete
        if (result && typeof result.then === "function") {
          result.catch(() => cb(this));
          return result;
        }
        // If handler returns falsy/undefined (no-op), fallback to client-side delete
        if (result == null || result === false) cb(this);
        return result;
      } catch (e) {
        // On any error in handler, fallback
        cb(this);
        return;
      }
    } else {
      cb(this);
    }
  }

  cSFSDTS() {
    return { status: false };
  }
}
