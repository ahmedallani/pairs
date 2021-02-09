function each(coll, func) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for (var key in coll) {
      func(coll[key], key);
    }
  }
}
function filter(array, predicate) {
  var acc = [];
  each(array, function(elm, key) {
    if (predicate(elm, key)) {
      acc.push(elm);
    }
  });
  return acc;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function range(n) {
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr.push(i);
  }
  return arr;
}

function rand(n, times) {
  var rtn = [];
  for (var j = 0; j < times; j++) {
    rtn.push([]);
  }
  var i, f, vi, vf;
  var obj = {};
  for (var i = 0; i < n; i++) {
    obj[i] = [];
  }
  for (var d = 0; d < times; d++) {
    var arr = range(n);
    while (arr.length > 0) {
      i = getRandomInt(0, arr.length); //choose random index from arr
      vi = arr[i]; //get elm of that index
      arr.splice(i, 1); //delete elm from the arr
      var flt = filter(arr, function(elm) {
        return !obj[vi].includes(elm);
      }); //filter the elements that not associete with the first elm before
      f = getRandomInt(0, flt.length);
      vf = flt[f]; // get new associete for the first elm
      arr = filter(arr, function(elm) {
        return elm !== vf;
      }); //delete the second elm from the array
      rtn[d].push([vi, vf]); //push two elm to array
      obj[vi].push(vf); //save the new associete with the first elm
      obj[vf].push(vi); //save the new associete with the second elm
    }
  }
  return rtn;
}

function display(arr, times) {
  var lst = rand(arr.length, times);
  groups = document.getElementById("groups");
  for (var i = 0; i < lst.length; i++) {
    var p = i + 1;
    var group = document.createElement("div");
    group.setAttribute("id", "group" + p);
    var h1 = document.createElement("h1");
    var h1txt = document.createTextNode("Group" + p);
    h1.appendChild(h1txt);
    group.appendChild(h1);
    each(lst[i], function(elm) {
      var pair = document.createElement("div");
      var txt = document.createTextNode(
        arr[elm[0]] + " :handshake: " + arr[elm[1]]
      ); // Create a text node
      pair.appendChild(txt);
      group.appendChild(pair);
    });
    groups.appendChild(group);
  }
}
display(names, times);
