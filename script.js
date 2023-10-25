function saveTextAsFile() {
    var emailToWrite = document.getElementById("exampleInputEmail1").value;
    var passwordToWrite = document.getElementById("exampleInputPassword1").value;
    if (exampleCheck1.checked == 1) {
        var checkToWrite = 'on';
    } else {
        var checkToWrite = 'off'
    }
    var textFileAsBlob = new Blob([emailToWrite, '\n', passwordToWrite, '\n', checkToWrite], {
    type: 'text/csv' //'text/plain' to .txt file
    });

    var fileNameToSaveAs = 'formulario';
  
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
  
    downloadLink.click();
  }
  
  function destroyClickedElement(event) {
    document.body.removeChild(event.target);
  }