(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        root.RevealPlantUML = factory();
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.RevealPlantUML = factory();
    }
}(this, function () {

    var RevealPlantUML = {

        init: function () {
        },

        ready: function () {
            let encoder = require('plantuml-encoder');

            var config = Reveal.getConfig().plantuml || {};
            var server = config.serverPath || '//www.plantuml.com/plantuml/svg/';

            document.querySelectorAll('.reveal pre code.lang-plantuml').forEach(function (block) {
                let img = document.createElement("object");
                img.type="image/svg+xml";
                img.setAttribute("data", server + encoder.encode(block.innerText));

                let pre = block.parentElement;
                pre.parentNode.replaceChild(img, pre);
            });
        }
    }

    Reveal.registerPlugin('plantuml', RevealPlantUML);
    Reveal.addEventListener('ready', RevealPlantUML.ready);

    return RevealPlantUML;
}));
