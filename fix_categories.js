
var fixes = {"Gh Prerolls": "GH Prerolls", "Gd Prerolls": "GD Prerolls", "GD prerolls": "GD Prerolls", "GD Preroll": "GD Prerolls", "GH Preroll": "GH Prerolls"};
var prods = STATE.products.filter(p => fixes[p.category]);
console.log('Products to fix:', prods.length);
var updates = {};
prods.forEach(p => {
  updates['bizpos/products/' + p.id + '/category'] = fixes[p.category];
});
if(Object.keys(updates).length > 0){
  fetch('https://bizpos-jj-default-rtdb.firebaseio.com/.json', {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(updates)
  }).then(r=>r.json()).then(d=>console.log('Fixed', Object.keys(updates).length, 'products'));
} else {
  console.log('Nothing to fix');
}
