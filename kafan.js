// ==UserScript==
// @name         屏蔽卡饭教程
// @namespace    https://greasyfork.org/zh-CN/users/18052-bin456789
// @version      0.0.3
// @description  屏蔽卡饭教程
// @author       bin456789
// @match        *://www.baidu.com/
// @match        *://www.baidu.com/s?*
// @match        *://www.baidu.com/baidu?*
// @match        *://www.google.com/
// @match        *
// @grant        none
// ==/UserScript==

(function () {
    var str = "result c-container ";

    function del(obj) {
        if (obj.className == str) {
            obj.innerHTML = "已屏蔽卡饭教程";
            obj.style.color = '#891';
        }
    }

    function find() {
        var gs = $('.g');
        for (var i = 0; i < gs.length; i++) {
            var g = gs[i];
            if (g.innerHTML.indexOf('www.kafan.cn/topic/') === 0 || g.innerHTML.indexOf('www.kafan.cn/edu/') === 0) {
                var result = g.parentNode.parentNode;
                if (result.className == str)
                    del(result);
                else {
                    result = result.parentNode.parentNode;
                    del(result);
                }
            }
        }
    };

    find();

    var observer = new MutationObserver(find);
    var wrapper = document.querySelector("#wrapper");
    observer.observe(wrapper, {
        "attributes": true,
        "attributesFilter": ["class"],
    });
})();
