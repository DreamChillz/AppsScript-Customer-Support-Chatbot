function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
        .setTitle('Customer Support Chat')
        .setWidth(600)
        .setHeight(600);
  }
  
  function getBotResponse(message) {
    return "This is a simulated response for: " + message;
  }
  