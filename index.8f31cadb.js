var t=document.querySelectorAll(".population"),e=[];t.forEach(function(t){return e.push(t.textContent)});var o=e.reduce(function(t,e){return t+ +e.replaceAll(",","")},0),n=o/t.length;document.querySelector(".total-population").textContent=o.toLocaleString(),document.querySelector(".average-population").textContent=n.toLocaleString();
//# sourceMappingURL=index.8f31cadb.js.map
