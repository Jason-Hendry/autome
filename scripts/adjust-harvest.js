var date = new Date();
date.setDate(date.getDate()-1);

function moveActivity() {
    if (document.getElementsByClassName('js-edit-entry').length) {
        document.getElementsByClassName('js-edit-entry')[0].click();
        setTimeout(function() {
            document.getElementsByClassName('js-change-date')[0].click();
            setTimeout(function() {
                document.getElementsByClassName('js-spent-at')[0].value=date.toLocaleDateString();
                setTimeout(function() {
                    document.getElementsByClassName('js-save')[0].click();
                    setTimeout(moveActivity, 50);
                }, 50)
            }, 50)
        }, 50)
    }
}

moveActivity();