/**
 * Created by jason on 10/05/16.
 */

function harvestYesterday() {
    chrome.tabs.query({active: true, currentWindow: true},
        function callback(tabs) {
            var currentTab = tabs[0];
            chrome.tabs.executeScript(
                currentTab.id,
                {
                    file:'scripts/adjust-harvest.js',
                    runAt: 'document_end'
                },
                function() {
                });
        });
}

function openTabs(urls) {
    for(var i in urls) {
        if(urls.hasOwnProperty(i)) {
            chrome.tabs.create({url: urls[i], pinned: true});
        }
    }
}

function openDevTabs() {
    var urls = [
        "https://portable.atlassian.net/secure/Dashboard.jspa",
        "https://portablecontent.harvestapp.com/time",
        "http://localhost:1095/#/timer/pdEQSsfVkR", // Tomato Timer
        "https://bitbucket.org/portable/",
        "https://calendar.google.com/calendar/b/1/render#main_7"
    ];
    openTabs(urls)
}
function openComTabs() {
    var urls = [
        "https://mail.google.com/mail/u/0/#inbox",
        "https://mail.google.com/mail/u/1/#inbox",
        "https://www.facebook.com/"
    ];
    openTabs(urls)
}

$(document).ready(function () {
    $('#harvest-adjust').click(harvestYesterday);
});

$(document).ready(function () {
    $('#dev-tabs').click(openDevTabs);
});

$(document).ready(function () {
    $('#com-tabs').click(openComTabs);
});