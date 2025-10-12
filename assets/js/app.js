$(document).ready(function () {
  window.bpms = new BPMS();
  window.utils = new Utils();

  $(".fj_maincontent").css({
    padding: "20px",
    "max-width": "1200px",
    margin: "0 auto",
    background: "#f8f9fa",
  });

  // Component wrapper function for better layout
  var createComponentWrapper = function (title, component) {
    var wrapper = $('<div class="component-wrapper">');
    wrapper.css({
      "margin-bottom": "30px",
      padding: "20px",
      background: "white",
      "border-radius": "8px",
      "box-shadow": "0 2px 4px rgba(0,0,0,0.1)",
      border: "1px solid #e9ecef",
      margin: "1rem",
      width: "50%",
    });

    var titleElement = $('<h3 class="component-title">').text(title);
    titleElement.css({
      margin: "0 0 15px 0",
      color: "#495057",
      "font-size": "16px",
      "font-weight": "600",
      "border-bottom": "2px solid #007bff",
      "padding-bottom": "8px",
    });

    wrapper.append(titleElement);
    wrapper.append(component);
    return wrapper;
  };

  var testInt = function () {
    var addad = new Int({
      x0: 1,
      x1: "نمره",
      x2: 2,
      x4: ["bx_username"],
      x6: 12, // Full width
      x9: {
        v: "راهنمای دور کمر",
        id: 10684,
        icon: "/resource/files/1486222953647.png",
      },
      x19: false,
      x34: true,
    });
    var wrapper = createComponentWrapper(
      "Input Number Component",
      addad.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var testPassword = function () {
    var password_section = new Password({
      x0: 2,
      x1: "رمز عبور",
      x2: 2,
      x4: ["bx_password"],
      x6: 12, // Full width
      x9: {
        v: "راهنمای دور کمر",
        id: 10684,
        icon: "/resource/files/1486222953647.png",
      },
      x19: false,
      x34: true,
    });
    var wrapper = createComponentWrapper(
      "Password Input Component",
      password_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var testTextArea = function () {
    var addad = new TextArea({
      x0: 2,
      x2: 2,
      x4: ["bx_password"],
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper("Text Area Component", addad.gEFA());
    $(".fj_maincontent").append(wrapper);
  };

  var button = function () {
    var button_section = new Button({
      btp: btoa(
        JSON.stringify({
          text: "send message",
          variant: "fill",
          color: "primary",
          radius: "radius-base",
        })
      ),
    });
    var wrapper = createComponentWrapper(
      "Button Component",
      button_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var checkbox = function () {
    var checkbox_section = new Checkbox({
      btp: btoa(
        JSON.stringify({
          type: "checkbox", // checkbox یا radio
          shape: "rect", // circle, rect, text
          color: "success", // primary, secondary, success, info, warning, error, danger, neutral
          checked: false, // مقدار اولیه
          disabled: false, // حالت disabled
          checked_text: "acttive", // متن حالت فعال
          unchecked_text: "inactive", // متن حالت غیرفعال
        })
      ),
    });
    var wrapper = createComponentWrapper(
      "Checkbox Component",
      checkbox_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var testUCG = function () {
    var ucg = new UCG({ x0: 2, x3: [{ v: 123 }], x2: 2, x6: 12, x19: false });
    var wrapper = createComponentWrapper("UCG Component", ucg.gEFA());
    $(".fj_maincontent").append(wrapper);
  };

  var textEditor = function () {
    var addad = new TextEditor({
      x0: 2,
      x2: 2,
      x4: ["bx_password"],
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper("Text Editor Component", addad.gEFA());
    $(".fj_maincontent").append(wrapper);
  };

  var timepicker = function () {
    var timepicker_section = new TimePicker({
      x0: 6,
      x1: "ساعت",
      x2: 2,
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Time Picker Component",
      timepicker_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var radio = function () {
    var radiobutton_section = new Radio({
      x0: 12,
      x2: 2,
      x3: [{ id: 2, v: "عالی" }],
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Radio Button Component",
      radiobutton_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var line = function () {
    var line_section = new Line({
      x0: 12,
      x2: 2,
      x6: 12,
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Line Separator Component",
      line_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var gridview = function () {
    var gridview_section = new GridView({
      x0: 6,
      x2: 2,
      x3: [{ id: 1, v: 2 }],
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Grid View Component",
      gridview_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var chart = function () {
    var chart_section = new Chart({
      x0: 6,
      x2: 2,
      x3: [{ id: 1, v: 2 }],
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Chart Component",
      chart_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  var datepicker = function () {
    var datepicker_section = new DatePicker({
      x0: 6,
      x1: "تاریخ",
      x2: 2,
      x6: 12, // Full width
      x19: false,
    });
    var wrapper = createComponentWrapper(
      "Date Picker Component",
      datepicker_section.gEFA()
    );
    $(".fj_maincontent").append(wrapper);
  };

  // Main function to render all components
  var renderStorybook = function () {
    // Add main title
    var mainTitle = $('<h1 class="storybook-title">').text("Components");
    mainTitle.css({
      width: "100%",
      padding: "1rem",
      background: "gray",
      "text-align": "center",
      color: "#fff",
      "margin-bottom": "30px",
      "font-size": "28px",
      "font-weight": "700",
    });
    $(".fj_maincontent").append(mainTitle);

    // Render all components
    testInt();
    testPassword();
    testTextArea();
    button();
    checkbox();
    // textEditor();
    // timepicker();
    // datepicker();
    // radio();
    // gridview();
    // chart();

    console.log("Storybook rendered successfully");
  };

  renderStorybook();
});
