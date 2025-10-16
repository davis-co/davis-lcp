class Password extends Input {
  cT() {
    const cfg = this.btp || {};
    const variant = "outline"; // force single visual style
    const color = cfg.color || "primary";
    const radius = cfg.radius || "radius-base";
    const labelText = cfg.label || "Password";
    const placeholderText = cfg.placeholder || "Enter your password";

    const isDisabled = cfg.variant === "disable" || cfg.disabled;

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
    const required = cfg.required || false;
    const isDisabled = variant === "disable" || cfg.disabled;

    // --- MULTI SELECT ---
    if (multiple) {
      this.mode = "multi";
      this.selectedValues = [];
      this.options = options.filter((opt) => opt.value !== "");

      this.target = $(`
        <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius} mm_multiselect">
          <div class="mm_multiselect_container" ${isDisabled ? "disabled" : ""}>
            <div class="mm_multiselect_tags"></div>
            <div class="mm_multiselect_input">
              <input type="text" class="mm_multiselect_search" placeholder="${placeholderText}" ${
        isDisabled ? "disabled" : ""
      } />
              <div class="mm_multiselect_arrow"></div>
            </div>
            <div class="mm_multiselect_dropdown">
              ${this.options
                .map(
                  (option) =>
                    `<div class="mm_multiselect_option" data-value="${option.value}" tabindex="0" role="option">${option.text}</div>`
                )
                .join("")}
            </div>
          </div>
          <label>${labelText}</label>
        </div>
      `);

      this.initializeMultiselect(cfg);
    }

    // --- SINGLE SELECT ---
    else {
      this.mode = "single";
      this.options = options;

      this.target = $(`
        <div class="float-label mm_input mm_input--${variant} mm_input--${color} mm_input--${radius} mm_multiselect mm_singleselect">
          <div class="mm_multiselect_container" ${isDisabled ? "disabled" : ""}>
            <div class="mm_multiselect_input">
              <input type="text" class="mm_multiselect_search" placeholder="${placeholderText}" ${
        isDisabled ? "disabled" : ""
      } />
              <div class="mm_multiselect_arrow"></div>
            </div>
            <div class="mm_multiselect_dropdown">
              ${this.options
                .map(
                  (opt) =>
                    `<div class=\"mm_multiselect_option\" data-value=\"${opt.value}\" tabindex=\"0\" role=\"option\">${opt.text}</div>`
                )
                .join("")}
            </div>
          </div>
          <label>${labelText}</label>
        </div>
      `);

      this.initializeSingleselect(cfg);
    }

    this.cTB();
    this.cTF();
  }

  // --- MULTI SELECT HANDLER ---
  initializeMultiselect(cfg) {
    const container = this.target.find(".mm_multiselect_container");
    const root = this.target;
    const tagsContainer = this.target.find(".mm_multiselect_tags");
    const searchInput = this.target.find(".mm_multiselect_search");
    const dropdown = this.target.find(".mm_multiselect_dropdown");
    const arrow = this.target.find(".mm_multiselect_arrow");

    // وضعیت dropdown
    this.isDropdownOpen = false;

    // Prevent text/arrow overlap (moved to CSS ideally; keep as fallback)
    if (!searchInput[0].style.paddingRight)
      searchInput.css({ paddingRight: "28px" });

    const toggleDropdown = () => {
      if (container.is("[disabled]")) return;

      this.isDropdownOpen = !this.isDropdownOpen;
      dropdown.toggleClass("open", this.isDropdownOpen);
      arrow.toggleClass("open", this.isDropdownOpen);

      if (this.isDropdownOpen) {
        searchInput.focus();
        // موقعیت‌یابی dropdown
        positionDropdown();
      } else {
        searchInput.val("");
        filterOptions("");
      }
    };

    const closeDropdown = () => {
      this.isDropdownOpen = false;
      dropdown.removeClass("open");
      arrow.removeClass("open");
      searchInput.val("");
      filterOptions("");
    };

    const positionDropdown = () => {
      const containerRect = container[0].getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const spaceBelow = viewportHeight - containerRect.bottom;
      const spaceAbove = containerRect.top;

      // اگر فضای کافی در پایین نیست، dropdown را بالا نمایش بده
      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        dropdown.css({
          top: "auto",
          bottom: "100%",
          "max-height": Math.min(spaceAbove - 20, 240) + "px",
        });
      } else {
        dropdown.css({
          top: "calc(100% + 4px)",
          bottom: "auto",
          "max-height": Math.min(spaceBelow - 20, 240) + "px",
        });
      }
    };

    const updateHasValue = () => {
      if (this.selectedValues.length > 0) root.addClass("has-value");
      else root.removeClass("has-value");
    };

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

      tag.find(".mm_multiselect_tag_remove").on("click", (e) => {
        e.stopPropagation();
        removeTag(value);
      });

      dropdown
        .find(`[data-value="${value}"]`)
        .addClass("mm_multiselect_option--selected");

      updateHasValue();
      if (typeof cfg.onChange === "function") cfg.onChange(this.selectedValues);
    };

    const removeTag = (value) => {
      this.selectedValues = this.selectedValues.filter((v) => v !== value);
      tagsContainer.find(`[data-value="${value}"]`).remove();
      dropdown
        .find(`[data-value="${value}"]`)
        .removeClass("mm_multiselect_option--selected");

      updateHasValue();
      if (typeof cfg.onChange === "function") cfg.onChange(this.selectedValues);
    };

    const filterOptions = (term) => {
      let visibleCount = 0;
      dropdown.find(".mm_multiselect_option").each(function () {
        const text = $(this).text().toLowerCase();
        const matches = text.includes(term.toLowerCase());
        $(this).toggle(matches);
        if (matches) visibleCount++;
      });

      // Show/hide empty state
      dropdown.find(".mm_multiselect_empty").remove();
      if (visibleCount === 0 && term) {
        dropdown.append(
          '<div class="mm_multiselect_empty">No options found</div>'
        );
      }
    };

    // Event Listeners
    container.on("click", (e) => {
      // اگر روی تگ کلیک شده، dropdown باز نشود
      if ($(e.target).closest(".mm_multiselect_tag").length) return;
      toggleDropdown();
    });

    searchInput.on("click", (e) => {
      e.stopPropagation();
      if (!this.isDropdownOpen) toggleDropdown();
    });

    searchInput.on("input", (e) => filterOptions(e.target.value));

    searchInput.on("keydown", (e) => {
      if (e.key === "Escape") {
        closeDropdown();
      } else if (
        e.key === "Backspace" &&
        !searchInput.val() &&
        this.selectedValues.length > 0
      ) {
        // حذف آخرین تگ با Backspace
        const lastValue = this.selectedValues[this.selectedValues.length - 1];
        removeTag(lastValue);
      } else if (e.key === "Enter") {
        e.preventDefault();
        // اگر گزینه‌ای هایلایت شده است، آن را انتخاب کن
        const highlightedOption = dropdown
          .find(".mm_multiselect_option:hover")
          .first();
        if (highlightedOption.length) {
          highlightedOption.click();
        }
      }
    });

    dropdown.on("click", ".mm_multiselect_option", (e) => {
      e.stopPropagation();
      const opt = $(e.currentTarget);
      const value = opt.data("value");
      const text = opt.text();

      if (this.selectedValues.includes(value)) {
        removeTag(value);
      } else {
        addTag(value, text);
      }

      // بعد از انتخاب، focus به search input برگردد
      searchInput.focus();
    });

    dropdown.on("keydown", ".mm_multiselect_option", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        $(e.currentTarget).click();
      }
    });

    // بستن dropdown با کلیک خارج
    $(document).on("click", (e) => {
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        closeDropdown();
      }
    });

    // مدیریت resize برای موقعیت‌یابی مجدد dropdown
    $(window).on("resize", () => {
      if (this.isDropdownOpen) {
        positionDropdown();
      }
    });

    // مدیریت scroll برای موقعیت‌یابی مجدد dropdown
    $(window).on("scroll", () => {
      if (this.isDropdownOpen) {
        positionDropdown();
      }
    });

    // مقداردهی اولیه
    if (cfg.selectedValues && Array.isArray(cfg.selectedValues)) {
      cfg.selectedValues.forEach((value) => {
        const opt = this.options.find((o) => o.value === value);
        if (opt) addTag(value, opt.text);
      });
    }

    updateHasValue();
  }

  // --- GET VALUE ---
  gV() {
    if (this.mode === "multi" || this.target.hasClass("mm_multiselect")) {
      return this.selectedValues || [];
    }
    if (this.mode === "single") {
      return this.selectedValue != null ? this.selectedValue : "";
    }
    const select = this.target.find("select");
    return select.val() || "";
  }

  // --- SET VALUE ---
  sV(value) {
    if (this.mode === "multi" || this.target.hasClass("mm_multiselect")) {
      // ابتدا همه تگ‌های فعلی را پاک کنید
      const tagsContainer = this.target.find(".mm_multiselect_tags");
      const dropdown = this.target.find(".mm_multiselect_dropdown");

      tagsContainer.empty();
      dropdown
        .find(".mm_multiselect_option")
        .removeClass("mm_multiselect_option--selected");

      // مقدار جدید را تنظیم کنید
      this.selectedValues = Array.isArray(value) ? [...value] : [];

      // تگ‌های جدید را اضافه کنید
      this.selectedValues.forEach((val) => {
        const opt = this.options.find((o) => o.value === val);
        if (opt) {
          const tag = $(`
            <div class="mm_multiselect_tag" data-value="${val}">
              <span class="mm_multiselect_tag_text">${opt.text}</span>
              <span class="mm_multiselect_tag_remove" role="button" aria-label="Remove ${opt.text}">×</span>
            </div>
          `);
          tagsContainer.append(tag);

          tag.find(".mm_multiselect_tag_remove").on("click", (e) => {
            e.stopPropagation();
            this.selectedValues = this.selectedValues.filter((v) => v !== val);
            tag.remove();
            dropdown
              .find(`[data-value="${val}"]`)
              .removeClass("mm_multiselect_option--selected");

            if (this.selectedValues.length > 0)
              this.target.addClass("has-value");
            else this.target.removeClass("has-value");
          });

          dropdown
            .find(`[data-value="${val}"]`)
            .addClass("mm_multiselect_option--selected");
        }
      });

      if (this.selectedValues.length > 0) this.target.addClass("has-value");
      else this.target.removeClass("has-value");
      return;
    }

    if (this.mode === "single") {
      const dropdown = this.target.find(".mm_multiselect_dropdown");
      const searchInput = this.target.find(".mm_multiselect_search");
      this.selectedValue = value || "";

      dropdown
        .find(".mm_multiselect_option")
        .removeClass("mm_multiselect_option--selected");
      if (this.selectedValue !== "") {
        const opt = this.options.find((o) => o.value === this.selectedValue);
        if (opt) {
          dropdown
            .find(`[data-value="${this.selectedValue}"]`)
            .addClass("mm_multiselect_option--selected");
          searchInput.val(opt.text);
          this.target.addClass("has-value");
        } else {
          searchInput.val("");
          this.target.removeClass("has-value");
        }
      } else {
        searchInput.val("");
        this.target.removeClass("has-value");
      }
      return;
    }

    const select = this.target.find("select");
    select.val(value);
    if (value) this.target.addClass("has-value");
    else this.target.removeClass("has-value");
  }

  cSFSDTS() {
    return { status: this.lv != this.gV() };
  }
}

// Single-select initializer to mirror multiselect UI/UX
Select.prototype.initializeSingleselect = function (cfg) {
  const container = this.target.find(".mm_multiselect_container");
  const searchInput = this.target.find(".mm_multiselect_search");
  const dropdown = this.target.find(".mm_multiselect_dropdown");
  const arrow = this.target.find(".mm_multiselect_arrow");

  this.isDropdownOpen = false;
  const searchable = cfg && cfg.searchable === true;

  // Prevent text/arrow overlap and make non-searchable behave like a button
  searchInput.css({ paddingRight: "28px" });
  if (!searchable) {
    searchInput.prop("readonly", true);
    searchInput.css({ cursor: "pointer" });
  }

  const toggleDropdown = () => {
    if (container.is("[disabled]")) return;
    this.isDropdownOpen = !this.isDropdownOpen;
    dropdown.toggleClass("open", this.isDropdownOpen);
    arrow.toggleClass("open", this.isDropdownOpen);
    if (this.isDropdownOpen) {
      searchInput.focus();
      positionDropdown();
    } else {
      if (!this.selectedValue) searchInput.val("");
      filterOptions("");
    }
  };

  const closeDropdown = () => {
    this.isDropdownOpen = false;
    dropdown.removeClass("open");
    arrow.removeClass("open");
    filterOptions("");
  };

  const positionDropdown = () => {
    const containerRect = container[0].getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const spaceBelow = viewportHeight - containerRect.bottom;
    const spaceAbove = containerRect.top;
    if (spaceBelow < 200 && spaceAbove > spaceBelow) {
      dropdown.css({
        top: "auto",
        bottom: "100%",
        "max-height": Math.min(spaceAbove - 20, 240) + "px",
      });
    } else {
      dropdown.css({
        top: "calc(100% + 4px)",
        bottom: "auto",
        "max-height": Math.min(spaceBelow - 20, 240) + "px",
      });
    }
  };

  const filterOptions = (term) => {
    dropdown.find(".mm_multiselect_option").each(function () {
      const text = $(this).text().toLowerCase();
      const matches = text.includes(term.toLowerCase());
      $(this).toggle(matches);
    });
  };

  // Initialize from preselected option
  const initialSelected = this.options.find((o) => o.selected) || null;
  if (initialSelected && initialSelected.value !== "") {
    this.selectedValue = initialSelected.value;
    searchInput.val(initialSelected.text);
    this.target.addClass("has-value");
    dropdown
      .find(`[data-value="${this.selectedValue}"]`)
      .addClass("mm_multiselect_option--selected");
  } else {
    this.selectedValue = "";
  }

  container.on("click", (e) => {
    if ($(e.target).closest(".mm_multiselect_dropdown").length) return;
    toggleDropdown();
  });

  searchInput.on("click", (e) => {
    e.stopPropagation();
    if (!this.isDropdownOpen) toggleDropdown();
  });

  if (searchable) {
    searchInput.on("input", (e) => filterOptions(e.target.value));
  }

  searchInput.on("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
    } else if (e.key === "Enter") {
      e.preventDefault();
      const highlightedOption = dropdown
        .find(".mm_multiselect_option:hover")
        .first();
      if (highlightedOption.length) highlightedOption.click();
    }
  });

  dropdown.on("click", ".mm_multiselect_option", (e) => {
    e.stopPropagation();
    const opt = $(e.currentTarget);
    const value = opt.data("value");
    const text = opt.text();

    dropdown
      .find(".mm_multiselect_option")
      .removeClass("mm_multiselect_option--selected");
    opt.addClass("mm_multiselect_option--selected");

    this.selectedValue = value;
    searchInput.val(value ? text : "");
    if (value) this.target.addClass("has-value");
    else this.target.removeClass("has-value");

    if (typeof cfg.onChange === "function") cfg.onChange(this.selectedValue);

    closeDropdown();
  });

  dropdown.on("keydown", ".mm_multiselect_option", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      $(e.currentTarget).click();
    }
  });

  $(document).on("click", (e) => {
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      closeDropdown();
    }
  });

  $(window).on("resize", () => {
    if (this.isDropdownOpen) positionDropdown();
  });

  $(window).on("scroll", () => {
    if (this.isDropdownOpen) positionDropdown();
  });
};
