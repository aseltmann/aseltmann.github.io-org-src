{{- $searchData := resources.Get "search-data.js" | resources.ExecuteAsTemplate "search-data.js" . | resources.Minify | resources.Fingerprint }}

(function() {
  const input = document.querySelector('#book-search-input');
  const results = document.querySelector('#book-search-results');

  input.addEventListener('focus', init);
  input.addEventListener('keyup', search);

  function init() {
    input.removeEventListener('focus', init); //init once
    input.required = true;

    loadScript('{{ "flexsearch.light.js" | relURL }}');
    loadScript('{{ $searchData.RelPermalink }}', function() {
      input.required = false;
      search();
    });
  }

  function search() {
    while (results.firstChild) {
      results.removeChild(results.firstChild);
    }

    if (!input.value) {
      return;
    }

    let searchHits = window.bookSearch.index.search(input.value, 10);
    searchHits.forEach(function(hit) {
      const page = window.bookSearch.pages[hit];
      const li = document.createElement('li'),
            a = li.appendChild(document.createElement('a'));

      a.href = page.href;
      a.textContent = page.title;

      results.appendChild(li);
    });
  }

  function loadScript(src, callback) {
    const script = document.createElement('script');
    script.defer = true;
    script.async = false;
    script.src = src;
    script.onload = callback;

    document.head.append(script);
  }
})();
