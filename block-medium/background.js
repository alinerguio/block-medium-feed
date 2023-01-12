chrome((tab) => {
    if (tab.url.includes("medium.com")) {
        document.getElementsByClassName("kv")[0].style.display = 'none'; // hide feed
    }
  });

// document.getElementsByClassName("ls")[1].style.display = 'none'; // hide staff picks
// document.getElementsByClassName("ls")[3].style.display = 'none'; // hide connect twitter
// document.getElementsByClassName("ls")[3].style.display = 'none'; // hide recommended topics
// document.getElementsByClassName("ls")[4].style.display = 'none'; // hide who to follow
// document.getElementsByClassName("ls")[5].style.display = 'none'; // hide recently saved
