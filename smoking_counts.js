(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};

const smokingCounts={
  "Rolling Paper Hornet King Size Flavoured":7,
  "Rolling Paper Lady Hornet 1 1/4":3,
  "Rolling Paper Fruits Mix With Tips":0,
  "Grinder Metal Leaf 5cm":1,
  "Grinder Patterned 6cm":3,
  "Doob Tube Storage Holder":4,
  "Pipe Screens 5 Pack":2,
  "Lighter Flint":12,
  "Lighter Click":22,
  "Rasta Pipe Metal and Plastic":0,
  "Rolling Tray":2,
  "Matchboxes":10,
};

Object.entries(all).forEach(([key,p])=>{
  if(!p.name) return;
  const match=Object.entries(smokingCounts).find(([n])=>n.toLowerCase()===p.name.toLowerCase());
  if(match){
    updates['bizpos/products/'+key+'/qty']=match[1];
    console.log('Updated qty:',p.name,'=',match[1]);
  }
});

await db.ref().update(updates);
console.log('Smoking paraphernalia quantities updated');
})();
