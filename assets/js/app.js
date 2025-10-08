$(document).ready(function () {
  window.bpms = new BPMS();
  window.utils = new Utils();

  var testInt = function () {
    var addad = new Int({
      x0: 1,
      x1: "نمره",
      x2: 2,
      x4: ["bx_username"],
      x6: 4,
      x9: {
        v: "راهنمای دور کمر",
        id: 10684,
        icon: "/resource/files/1486222953647.png",
      },
      x19: false,
      x34: true,
    });
    $(".fj_maincontent").append(addad.gEFA());
  };

  var testPassword = function () {
    var password_section = new Password({
      x0: 2,
      x1: "رمز عبور",
      x2: 2,
      x4: ["bx_password"],
      x6: 4,
      x9: {
        v: "راهنمای دور کمر",
        id: 10684,
        icon: "/resource/files/1486222953647.png",
      },
      x19: false,
      x34: true,
    });
    $(".fj_maincontent").append(password_section.gEFA());
  };

  var testTextArea = function () {
    var addad = new TextArea({
      x0: 2,
      x2: 2,
      x4: ["bx_password"],
      x6: 12,
      x19: false,
    });
    $(".fj_maincontent").append(addad.gEFA());
  };

  var testUCG = function () {
    var ucg = new UCG({ x0: 2, x3: [{ v: 123 }], x2: 2, x6: 12, x19: false });
    $(".fj_maincontent").append(ucg.gEFA());
  };

  var textEditor = function () {
    var addad = new TextEditor({
      x0: 2,
      x2: 2,
      x4: ["bx_password"],
      x6: 12,
      x19: false,
    });
    $(".fj_maincontent").append(addad.gEFA());
  };

  var timepicker = function () {
    var timepicker_section = new TimePicker({
      x0: 6,
      x1: "ساعت",
      x2: 2,
      x6: 4,
      x19: false,
    });
    $(".fj_maincontent").append(timepicker_section.gEFA());
  };

  var radio = function () {
    var radiobutton_section = new Radio({
      x0: 12,
      x2: 2,
      x3: [{ id: 2, v: "عالی" }],
      x6: 12,
      x19: false,
    });
    $(".fj_maincontent").append(radiobutton_section.gEFA());
  };

  var checkbox = function () {
    var checkbox_section = new Checkbox({
      btp: btoa(
        JSON.stringify({
          type: "checkbox", // checkbox یا radio
          shape: "circle", // circle, rect, text
          color: "primary", // primary, secondary, success, info, warning, error, danger, neutral
          checked: false, // مقدار اولیه
          disabled: false, // حالت disabled
          checked_text: "فعال", // متن حالت فعال
          unchecked_text: "غیرفعال", // متن حالت غیرفعال
        })
      ),
    });
    $(".fj_maincontent").append(checkbox_section.gEFA());
  };

  var gridview = function () {
    var gridview_section = new GridView({
      x0: 6,
      x2: 2,
      x3: [{ id: 1, v: 2 }],
      x6: 2,
      x19: false,
    });
    $(".fj_maincontent").append(gridview_section.gEFA());
  };

  var chart = function () {
    var chart_section = new Chart({
      x0: 6,
      x2: 2,
      x3: [{ id: 1, v: 2 }],
      x6: 12,
      x19: false,
    });
    $(".fj_maincontent").append(chart_section.gEFA());
  };

  // var datepicker = function () {
  //   var datepicker_section = new DatePicker({
  //     x0: 6,
  //     x1: "تاریخ",
  //     x2: 2,
  //     x6: 4,
  //     x19: false,
  //   });
  //   $(".fj_maincontent").append(datepicker_section.gEFA());
  // };
  // datepicker();

  var button = new Button({
    btp: btoa(
      JSON.stringify({
        text: "send message",
        variant: "fill",
        color: "primary",
        radius: "radius-base",
      })
    ),
  });
  $(".fj_maincontent").append(button.gEFA());

  var test = function () {
    // testInt();
    // testPassword()
    // Demonstrate all button variants and colors
    // button is already created and appended above
    testTextArea();
    //textEditor();
    //testUCG();
    //timepicker();
    //radio();
    //gridview();
    // uploader();
    //chart();
    //utils.getFrame({x0:1,x1:'سلام', x4:1,mainSelector:'.fj_maincontent'});;
    console.log("test");
  };
  test();
});
