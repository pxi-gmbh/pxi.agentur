function getElementsByClass(e,t){var n=new Array,a=document.getElementsByTagName(e);for(i=0;i<a.length;i++)a[i].className==t&&(n[n.length]=a[i]);return n}function myEmail(){var e="agentur";e+="@",e+="pxi.gmbh";var t=document.createElement("a");t.setAttribute("href","mailto:"+e),t.appendChild(document.createTextNode(e));for(var n=getElementsByClass("span","js--email"),a=0;a<n.length;a++)n[a].parentNode.replaceChild(t.cloneNode(!0),n[a])}function datenschutzEmail(){var e="datenschutz";e+="@",e+="pxi.gmbh";var t=document.createElement("a");t.setAttribute("href","mailto:"+e),t.appendChild(document.createTextNode(e));for(var n=getElementsByClass("span","js--datenschutz-email"),a=0;a<n.length;a++)n[a].parentNode.replaceChild(t.cloneNode(!0),n[a])}function frameBreaker(){top.location!=location&&(top.location.href=document.location.href)}function toggleButtonClick(){toggleButton(event.target)}function toggleButtonKeyPress(){" "!==event.key&&"Enter"!==event.key&&"Spacebar"!==event.key||(event.preventDefault(),event.target.click())}function toggleButton(){"false"===event.target.getAttribute("aria-pressed")?event.target.setAttribute("aria-pressed","true"):event.target.setAttribute("aria-pressed","false")}!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],a=n.length,r=window.console=window.console||{};a--;)r[e=n[a]]||(r[e]=t)}();