function add(s, t) {
    var u = ``;
    var c = 0;
    while (s || t) {
      var a = Number(s.slice(-10));
      var b = Number(t.slice(-10));
      var d = a + b + c;
      c = Math.floor(d/1e10);
      u = ('0000000000' + d).slice(-10) + u;
      s = s.slice(0, -10);
      t = t.slice(0, -10);
    }
    if (c) u = c + u;
    while(u.charAt(0) == '0') u = u.slice(1);
    return u;
  }
  
  function rev(s) {
    var u = ``;
    while (s) {
      u = u + s.slice(-1);
      s = s.slice(0, -1);
    }
    while(u.charAt(0) == '0') u = u.slice(1);
    return u;
  }
  
  function pal(s) {
    while (s.length >= 2) {
      if (s.slice(0, 1) != s.slice(-1)) return 0;
      s = s.slice(1, -1);
    }
    return 1;
  }
  
  var n = 0;
  for (var i = 1; i <10000; i++) {
    var s = String(i);
    var j = 0;
    do {
      j = j + 1;
      if (j >= 50) {
        n = n + 1;
        break;
      }
      s = add(s, rev(s));
    } while (pal(s) == 0);
  }
  
  ans = n;
  document.write('ANS:', ans);