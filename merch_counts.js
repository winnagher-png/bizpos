(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};
let u=0;
const counts={
  "sunglasses large":0,"sunglasses medium":0,"straps / lanyards":2,
  "stash bags - striped":2,"stash bags - flowers print":1,"stash bags - makeup print":1,
  "stash bags - camp theme":2,"bivvy bags":2,"butt bucket ashtrays":4,
  "ceramic ashtrays":2,"bracelets - leaf design":1,"keyrings - mushrooms":11,
  "keyrings - leaf":0,"drawstring lighter holders":0
};
Object.entries(all).forEach(([key,p])=>{
  if(!p.name) return;
  const nm=p.name.toLowerCase();
  if(counts.hasOwnProperty(nm)){
    updates['bizpos/products/'+key+'/qty']=counts[nm];
    u++;
  }
});
await db.ref().update(updates);
console.log('Merch updated:',u);
})();
