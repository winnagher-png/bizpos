
var updates = {};
STATE.products.forEach(p => {
  if(p.category && p.category !== p.category.toUpperCase()){
    updates['bizpos/products/' + p.id + '/category'] = p.category.toUpperCase();
  }
});
console.log('Products needing category fix:', Object.keys(updates).length);
if(Object.keys(updates).length > 0){
  fetch('https://bizpos-jj-default-rtdb.firebaseio.com/.json',{
    method:'PATCH',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(updates)
  }).then(r=>r.json()).then(d=>console.log('All categories now uppercase!'));
} else {
  console.log('All categories already uppercase');
}
