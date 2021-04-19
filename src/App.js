const { dialog } = require('electron');
class DbDiagram {
    #webContent;
    constructor (webContent) {
        this.#webContent = webContent;
    }

    getUrl () {
        return this.#webContent.getURL();
    }

    goForward () {
        if (this.#webContent.canGoForward()) {
            this.#webContent.goForward();
            return true;
        } else {
            dialog.showErrorBox("Navigation Error", "Cannot go forward");
            return false;
        }
    }

    goBack () {
        if (this.#webContent.canGoBack()) {
            this.#webContent.goBack();
            return true;
        } else {
            dialog.showErrorBox("Navigation Error", "Cannot go back");
            return false;
        }
    }

    reload () {
        this.#webContent.reloadIgnoringCache()
        return true;
    }

    sampleName () {
        this.#webContent.executeJavaScript(
            `
                document.getElementsByClassName("input")[1].value = 'SampleDB';
                document.getElementsByTagName("title")[0].innerText = 'SampleDB - dbdiagram.io';
            `
        );
    }

};

module.exports = DbDiagram;