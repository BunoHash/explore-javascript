function getBrowserInfo() {
    var userAgent = navigator.userAgent;
    var browserName, browserVersion;
    if (userAgent.indexOf("Edge") > -1) {
      browserName = "Microsoft Edge";
      browserVersion = userAgent.substring(userAgent.indexOf("Edge") + 5).split(" ")[0];
    }
    else if (userAgent.indexOf("Chrome") > -1) {
      browserName = "Google Chrome";
      browserVersion = userAgent.substring(userAgent.indexOf("Chrome") + 7).split(" ")[0];
    }
    else if (userAgent.indexOf("Safari") > -1) {
      browserName = "Safari";
      browserVersion = userAgent.substring(userAgent.indexOf("Version") + 8).split(" ")[0];
    }
    else if (userAgent.indexOf("Firefox") > -1) {
      browserName = "Mozilla Firefox";
      browserVersion = userAgent.substring(userAgent.indexOf("Firefox") + 8);
    }
  else if (userAgent.indexOf("Opera") > -1 || userAgent.indexOf("OPR") > -1) {
      browserName = "Opera";
      browserVersion = userAgent.indexOf("Opera") > -1 ? userAgent.substring(userAgent.indexOf("Opera") + 6) : userAgent.substring(userAgent.indexOf("OPR") + 4);
    }
    // Default to unknown browser
    else {
      browserName = "Unknown";
      browserVersion = "Unknown";
    }
    return { name: browserName, version: browserVersion};
  }
  
  // Usage
  var browserInfo = getBrowserInfo();
  console.log("Browser Name:", browserInfo.name);
  console.log("Browser Version:", browserInfo.version);
  