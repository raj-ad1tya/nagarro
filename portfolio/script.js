prevTabId = "";

window.onload = function initialize() {
    toggleTab("about");
}

function toggleTab(tabId) {
    if(prevTabId!="") {
        document.getElementById(prevTabId+"-btn").classList.remove("active");
        document.getElementById(prevTabId).style = "display: none; height:0;";
    }

    document.getElementById(tabId+"-btn").classList.add("active");
    document.getElementById(tabId).style.display = "contents";

    prevTabId = tabId;
}
