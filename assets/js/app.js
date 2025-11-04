$(document).ready(function () {
  // Initialize global utilities
  window.bpms = new BPMS();
  window.utils = new Utils();

  // Style main content
  $(".fj_maincontent").css({
    padding: "20px",
    "max-width": "1200px",
    margin: "0 auto",
    background: "#f8f9fa",
  });

  // Component wrapper function
  var createComponentWrapper = function (title, component) {
    var wrapper = $('<div class="component-wrapper">').css({
      "margin-bottom": "30px",
      padding: "20px",
      background: "white",
      "border-radius": "8px",
      "box-shadow": "0 2px 4px rgba(0,0,0,0.1)",
      border: "1px solid #e9ecef",
      margin: "1rem",
      width: "50%",
    });

    var titleElement = $('<h3 class="component-title">').text(title).css({
      margin: "0 0 15px 0",
      color: "#495057",
      "font-size": "16px",
      "font-weight": "600",
      "border-bottom": "2px solid #007bff",
      "padding-bottom": "8px",
    });

    wrapper.append(titleElement).append(component);
    return wrapper;
  };

  // Generic function to render a component
  var renderComponent = function (ComponentClass, config, title) {
    try {
      var component = new ComponentClass(config);
      var wrapper = createComponentWrapper(title, component.gEFA());
      $(".fj_maincontent").append(wrapper);
    } catch (error) {
      console.error(`Error rendering ${title}:`, error);
    }
  };

  // Component configurations
  // Prepare table rows with unique otag for row-level actions
  var tableRows = [
    { name: "product", price: 125000, date: "2025/01/01" },
    { name: "product", price: 98000, date: "2025/02/11" },
    { name: "product", price: 452000, date: "2025/03/07" },
    { name: "product", price: 72000, date: "2025/03/22" },
    { name: "product", price: 310500, date: "2025/04/02" },
    { name: "product", price: 199900, date: "2025/04/18" },
    { name: "product", price: 85000, date: "2025/05/01" },
    { name: "product", price: 64000, date: "2025/05/15" },
    { name: "product", price: 100000, date: "2025/06/01" },
    { name: "product", price: 120000, date: "2025/06/15" },
    { name: "product", price: 140000, date: "2025/07/01" },
    { name: "product", price: 160000, date: "2025/07/15" },
    { name: "product", price: 180000, date: "2025/08/01" },
    { name: "product", price: 200000, date: "2025/08/15" },
    { name: "product", price: 220000, date: "2025/09/01" },
    { name: "product", price: 240000, date: "2025/09/15" },
    { name: "product", price: 260000, date: "2025/10/01" },
    { name: "product", price: 280000, date: "2025/10/15" },
    { name: "product", price: 300000, date: "2025/11/01" },
    { name: "product", price: 320000, date: "2025/11/15" },
    { name: "product", price: 340000, date: "2025/12/01" },
    { name: "product", price: 360000, date: "2025/12/15" },
    { name: "product", price: 380000, date: "2026/01/01" },
    { name: "product", price: 400000, date: "2026/01/15" },
    { name: "product", price: 420000, date: "2026/02/01" },
    { name: "product", price: 440000, date: "2026/02/15" },
    { name: "product", price: 460000, date: "2026/03/01" },
    { name: "product", price: 480000, date: "2026/03/15" },
    { name: "product", price: 500000, date: "2026/04/01" },
    { name: "product", price: 520000, date: "2026/04/15" },
    { name: "product", price: 540000, date: "2026/05/01" },
    { name: "product", price: 560000, date: "2026/05/15" },
    { name: "product", price: 580000, date: "2026/06/01" },
    { name: "product", price: 600000, date: "2026/06/15" },
    { name: "product", price: 620000, date: "2026/07/01" },
    { name: "product", price: 640000, date: "2026/07/15" },
    { name: "product", price: 660000, date: "2026/08/01" },
    { name: "product", price: 680000, date: "2026/08/15" },
    { name: "product", price: 700000, date: "2026/09/01" },
    { name: "product", price: 720000, date: "2026/09/15" },
    { name: "product", price: 740000, date: "2026/10/01" },
    { name: "product", price: 760000, date: "2026/10/15" },
    { name: "product", price: 780000, date: "2026/11/01" },
    { name: "product", price: 800000, date: "2026/11/15" },
    { name: "product", price: 820000, date: "2026/12/01" },
    { name: "product", price: 840000, date: "2026/12/15" },
    { name: "product", price: 860000, date: "2027/01/01" },
    { name: "product", price: 880000, date: "2027/01/15" },
    { name: "product", price: 900000, date: "2027/02/01" },
    { name: "product", price: 920000, date: "2027/02/15" },
    { name: "product", price: 940000, date: "2027/03/01" },
    { name: "product", price: 960000, date: "2027/03/15" },
    { name: "product", price: 980000, date: "2027/04/01" },
    { name: "product", price: 1000000, date: "2027/04/15" },
    { name: "product", price: 1020000, date: "2027/05/01" },
    { name: "product", price: 1040000, date: "2027/05/15" },
    { name: "product", price: 1060000, date: "2027/06/01" },
    { name: "product", price: 1080000, date: "2027/06/15" },
    { name: "product", price: 1100000, date: "2027/07/01" },
    { name: "product", price: 1120000, date: "2027/07/15" },
    { name: "product", price: 1140000, date: "2027/08/01" },
    { name: "product", price: 1160000, date: "2027/08/15" },
    { name: "product", price: 1180000, date: "2027/09/01" },
    { name: "product", price: 1200000, date: "2027/09/15" },
    { name: "product", price: 1220000, date: "2027/10/01" },
    { name: "product", price: 1240000, date: "2027/10/15" },
    { name: "product", price: 1260000, date: "2027/11/01" },
    { name: "product", price: 1280000, date: "2027/11/15" },
    { name: "product", price: 1300000, date: "2027/12/01" },
    { name: "product", price: 1320000, date: "2027/12/15" },
    { name: "product", price: 1340000, date: "2028/01/01" },
    { name: "product", price: 1360000, date: "2028/01/15" },
    { name: "product", price: 1380000, date: "2028/02/01" },
    { name: "product", price: 1400000, date: "2028/02/15" },
    { name: "product", price: 1420000, date: "2028/03/01" },
    { name: "product", price: 1440000, date: "2028/03/15" },
    { name: "product", price: 1460000, date: "2028/04/01" },
    { name: "product", price: 1480000, date: "2028/04/15" },
    { name: "product", price: 1500000, date: "2028/05/01" },
    { name: "product", price: 1520000, date: "2028/05/15" },
    { name: "product", price: 1540000, date: "2028/06/01" },
    { name: "product", price: 1560000, date: "2028/06/15" },
    { name: "product", price: 1580000, date: "2028/07/01" },
    { name: "product", price: 1600000, date: "2028/07/15" },
    { name: "product", price: 1620000, date: "2028/08/01" },
    { name: "product", price: 1640000, date: "2028/08/15" },
    { name: "product", price: 1660000, date: "2028/09/01" },
    { name: "product", price: 1680000, date: "2028/09/15" },
    { name: "product", price: 1700000, date: "2028/10/01" },
    { name: "product", price: 1720000, date: "2028/10/15" },
  ].map(function (row, idx) {
    return Object.assign({ otag: "row-" + (idx + 1) }, row);
  });

  var components = [
    {
      class: Int,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "number",
            placeholder: "Enter number your phone number",
            // placeholderText: "enter your phone number",
            variant: "fill",
            color: "primary",
            radius: "radius-base",
            disabled: false,
            allowNegative: false,
            allowDecimal: false,
          })
        ),
      },
      title: "Number Input Component",
    },
    {
      class: Password,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "password",
            variant: "fill", // fill, outline, ghost, disable
            color: "primary", // primary, secondary, danger, warning, success
            radius: "radius-base",
            labelText: "password",
            disabled: false,
          })
        ),
      },
      title: "Password Input Component",
    },
    {
      class: TextEditor,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "descriptions",
            placeholder: "text Here..",
            height: "250px",
            onChange: (val) => console.log("Editor content:", val),
          })
        ),
      },
      title: "Password Input Component",
    },
    {
      class: Text,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "username",
            variant: "fill", // fill, outline, ghost, disable
            color: "primary", // primary, secondary, danger, warning, success
            radius: "radius-base",
            disabled: false,
          })
        ),
      },
      title: "txt Input Component",
    },
    {
      class: TextArea,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "description",
            placeholder: "Type your message...",
            variant: "fill",
            color: "primary",
            radius: "radius-base",
            rows: 4,
            disabled: false,
          })
        ),
      },
      title: "Text Area Component",
    },
    {
      class: Button,
      config: {
        btp: btoa(
          JSON.stringify({
            text: "send message",
            variant: "fill",
            color: "primary",
            radius: "radius-base",
          })
        ),
      },
      title: "Button Component",
    },
    {
      class: Checkbox,
      config: {
        btp: btoa(
          JSON.stringify({
            labelText: "option-1",
            elementId: "unique-element-id",
            required: true,
            type: "checkbox",
            shape: "rect",
            color: "primary",
            checked: false,
            disabled: false,
            checkedText: "accepted",
            uncheckedText: "not accepted",
            positionClass: "nicelabel-default-position",
            events: {
              change: function (params) {
                console.log("status changed to:", params.t.gv());
              },
            },
          })
        ),
      },
      title: "Checkbox Component",
    },
    {
      class: DatePicker,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "Date",
            placeholder: "----/--/--",
            variant: "fill",
            color: "primary",
            radius: "radius-base",
            disabled: false,
          })
        ),
      },
      title: "Date Picker Component",
    },
    {
      class: FileUploader,
      config: {
        btp: btoa(
          JSON.stringify({
            color: "primary",
            label: "upload file",
            accept: "image/png,image/jpeg",
            multiple: true,
            onChange: (file) => console.log("file have been choosen:", file),
          })
        ),
      },
      title: "File Uploader Component",
    },
    {
      class: Select,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "Country",
            placeholder: "Select your country",
            color: "primary",
            radius: "radius-base",
            disabled: false,
            required: true,
            options: [
              { value: "", text: "Select your country" },
              { value: "us", text: "United States" },
              { value: "uk", text: "United Kingdom" },
              { value: "ca", text: "Canada" },
              { value: "au", text: "Australia" },
              { value: "de", text: "Germany" },
              { value: "fr", text: "France" },
              { value: "jp", text: "Japan" },
            ],
            onChange: (value) => console.log("Selected country:", value),
          })
        ),
      },
      title: "Select Component",
    },
    {
      class: Select,
      config: {
        btp: btoa(
          JSON.stringify({
            label: "Skills",
            placeholder: "Select your skills",
            variant: "fill",
            color: "secondary",
            radius: "radius-lg",
            disabled: false,
            multiple: true,
            options: [
              { value: "js", text: "JavaScript" },
              { value: "react", text: "React" },
              { value: "vue", text: "Vue.js" },
              { value: "angular", text: "Angular" },
              { value: "node", text: "Node.js" },
              { value: "python", text: "Python" },
              { value: "java", text: "Java" },
              { value: "csharp", text: "C#" },
            ],
            // selectedValues: ["js", "react"], // Pre-selected values
            onChange: (values) => console.log("Selected skills:", values),
          })
        ),
      },
      title: "Multiple Select Component",
    },
    {
      class: Line,
      config: {
        btp: btoa(JSON.stringify({})),
      },
      title: "simple line",
    },
    {
      class: Table,
      config: {
        btp: btoa(
          JSON.stringify({
            color: "primary",
            radius: "radius-base",
            limit: 10,
            c: {
              row: { ha: { n: "#" }, ca: {} },
              name: { ha: { n: "name" }, ca: {} },
              price: { ha: { n: "price" }, ca: { money: true } },
              date: { ha: { n: "date" }, ca: { date: true } },
              actions: {
                ha: { n: "actions" },
                // actions: delete, inline edit, and a custom action button
                ca: {
                  delete: true,
                  edit: true,
                  custom: { label: "action", action: "custom_action" },
                },
              },
            },
            value: tableRows,
          })
        ),
      },
      title: "Table Component",
    },
  ];

  // Main function to render all components
  var renderStorybook = function () {
    // Add main title
    var mainTitle = $('<h1 class="storybook-title">').text("Components").css({
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
    components.forEach(function ({ class: ComponentClass, config, title }) {
      renderComponent(ComponentClass, config, title);
    });
  };

  renderStorybook();
});
