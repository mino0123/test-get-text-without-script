var assert = require('assert');

function getTextWithoutScript(el) {
	var text = el.textContent || el.innerText,
		scripts = el.getElementsByTagName('script'),
		i = 0, len = scripts.length, scriptEl, scriptText;
	for (; i < len; i++) {
		scriptEl = scripts[i];
		scriptText = scriptEl.textContent || scriptEl.innerText;
		text = text.replace(scriptText, '');
	}
	return text;
};

describe('テキストを取得', function () {
  it('', function () {
    var area = document.createElement('div');
    area.innerHTML = '\
  <div>text in div</div>\
  <span>text in span<span>\
  <script>//text in script</script>\
    ';
    var result = getTextWithoutScript(area);
    assert.equal(result, '\
  text in div\
  text in span\
\
');
  });
});
