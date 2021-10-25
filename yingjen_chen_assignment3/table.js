const tableInfo = [
  {
    studentName: "John",
    Age: 19,
    Phone: "455 - 983 - 0903",
    Address: "123 Ave, San Francisco, CA, 94011",
  },
  {
    studentName: "Alex",
    Age: 21,
    Phone: "455 - 983 - 0912",
    Address: "456 Rd, San Francisco, CA, 94012",
  },
  {
    studentName: "Josh",
    Age: 22,
    Phone: "455 - 345 - 0912",
    Address: "789 Dr, Newark, CA, 94016",
  },
  {
    studentName: "Matt",
    Age: 23,
    Phone: "321 - 345 - 0912",
    Address: "223 Dr, Sunnyvale, CA, 94016",
  },
];
let tbody = document.querySelector('tbody');
for (let i = 0; i < tableInfo.length; i++) {
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  for (let ele in tableInfo[i]) {
    let td = document.createElement('td');
    td.innerHTML = tableInfo[i][ele]
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.innerHTML = '<a href="javascript:;">Delete</a>';
  tr.appendChild(td);
}
var atag = document.querySelectorAll('a');
for (var i = 0; i < atag.length; i++) {
    atag[i].onclick = function() {
        tbody.removeChild(this.parentNode.parentNode)
    }
}
