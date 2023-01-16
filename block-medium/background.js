chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

  var activeTab = tabs[0].url;
  if (activeTab.includes("medium.com")) {
    getchecked()
  }
  else{
    var element = document.getElementsByClassName("container")[0]
    element.innerHTML = "<h1>Não estamos no medium</h1>"
  }
  
});

function getchecked(){
  var homePageCheckbox = document.getElementsByClassName('checkbox-homepage')[0];
  var staffPicksCheckbox = document.getElementsByClassName('checkbox-staffpicks')[0];
  var twitterCheckbox = document.getElementsByClassName('checkbox-twitter')[0];
  var recommendedCheckbox = document.getElementsByClassName('checkbox-recommended')[0];
  var followCheckbox = document.getElementsByClassName('checkbox-follow')[0];
  var savedCheckbox = document.getElementsByClassName('checkbox-saved')[0];

  var element = document.getElementsByClassName("result-test")[0]

  homePageCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 0, 'c he nh ly')
      removeElement(element, 0, 'ld y')
    } 
    else{
      addElement(element, 0, 'c he nh ly')
      addElement(element, 0, 'ld y')
    }
  });

  staffPicksCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 1, 'ma mb kp y')
    } 
    else{
      addElement(element, 1, 'ma mb kp y')
    }
  });

  twitterCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 0, 'ol nw kp y')
    } 
    else{
      addElement(element, 0, 'ol nw kp y')
    }
  });

  followCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 4, 'ma mb kp y')
    } 
    else{
      addElement(element, 4, 'ma mb kp y')
    }
  });

  recommendedCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 3, 'ma mb kp y')
    } 
    else{
      addElement(element, 3, 'ma mb kp y')
    }
  });

  savedCheckbox.addEventListener('change', function() {
    if(this.checked){
      removeElement(element, 5, 'ma mb kp y')
    } 
    else{
      addElement(element, 5, 'ma mb kp y')
    }
  });
}

function removeElement(element, n_el, selector){
  chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
    var activeTab = tabs[0];
    var activeTabId = activeTab.id;

    return chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        // injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
        func: DOMtoStringRemove,
         args: [selector, n_el]  // you can use this to target what element to get the html for
    });

  }).catch(function (error) {
    element.innerText = 'There was an error injecting script : \n' + error.message;
  });
}

function DOMtoStringRemove(selector, n_el) {
  if (selector) {
      selector = document.getElementsByClassName(selector)[n_el];
      if (!selector) return "ERROR: querySelector failed to find node"
  } else {
      selector = document.documentElement;
  }
  return selector.style.display = 'none';
}

function addElement(element, n_el, selector){
  chrome.tabs.query({ active: true, currentWindow: true }).then(function (tabs) {
    var activeTab = tabs[0];
    var activeTabId = activeTab.id;

    return chrome.scripting.executeScript({
        target: { tabId: activeTabId },
        // injectImmediately: true,  // uncomment this to make it execute straight away, other wise it will wait for document_idle
        func: DOMtoStringAdd,
         args: [selector, n_el]  // you can use this to target what element to get the html for
    });

  }).catch(function (error) {
    element.innerText = 'There was an error injecting script : \n' + error.message;
  });
}

function DOMtoStringAdd(selector, n_el) {
  if (selector) {
      selector = document.getElementsByClassName(selector)[n_el];
      if (!selector) return "ERROR: querySelector failed to find node"
  } else {
      selector = document.documentElement;
  }
  return selector.style.display = 'block';
}