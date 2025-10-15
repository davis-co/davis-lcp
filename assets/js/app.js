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
            label: "upload file",
            accept: "image/png,image/jpeg",
            multiple: true,
            onChange: (file) => console.log("file have been choosen:", file),
          })
        ),
      },
    },
    {
      class: Line,
      config: {
        x0: 12,
        x2: 2,
        x6: 12,
        x19: false,
      },
      title: "Line Separator Component",
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
