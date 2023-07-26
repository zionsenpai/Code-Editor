document.addEventListener("DOMContentLoaded", function () {
    const resetButton = document.getElementById("resetButton");
    const htmlInput = document.getElementById("html");
    const cssInput = document.getElementById("css");
    const jsInput = document.getElementById("js");
    const outputFrame = document.getElementById("outputFrame");
    const loader = document.getElementById("loader");
  
    resetButton.addEventListener("click", resetCode);
    htmlInput.addEventListener("input", updateOutput);
    cssInput.addEventListener("input", updateOutput);
    jsInput.addEventListener("input", updateOutput);
  
    function resetCode() {
      htmlInput.value = "";
      cssInput.value = "";
      jsInput.value = "";
      updateOutput();
    }
  
    function updateOutput() {
      loader.style.display = "flex";
      outputFrame.contentDocument.open();
      outputFrame.contentDocument.write(getOutputHTML());
      outputFrame.contentDocument.write(getOutputCSS());
      outputFrame.contentDocument.write(`<script>${getOutputJS()}</script>`);
      outputFrame.contentDocument.close();
      loader.style.display = "none";
    }
  
    function getOutputHTML() {
      return htmlInput.value;
    }
  
    function getOutputCSS() {
      return `<style>${cssInput.value}</style>`;
    }
  
    function getOutputJS() {
      return jsInput.value;
    }
  
    function copyCode(code) {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  
    const copyButtons = document.querySelectorAll(".copy");
    copyButtons.forEach(button => {
      button.addEventListener("click", () => {
        const codeType = button.getAttribute("data-code");
        const codeInput = document.getElementById(codeType);
        copyCode(codeInput.value);
        alert(`${codeType.toUpperCase()} code copied to clipboard!`);
      });
    });
  });
  