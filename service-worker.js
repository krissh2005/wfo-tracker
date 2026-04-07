self.addEventListener("install",e=>{
e.waitUntil(caches.open("wfo-app").then(c=>c.addAll(["./","./index.html"])))
});