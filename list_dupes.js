(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=Object.values(snap.val()||{}).filter(p=>p.name);
const check=['OD FLOWER','GH FLOWER','GD FLOWER','GD PREROLLS','GH PREROLLS','MISC'];
check.forEach(cat=>{
  const prods=all.filter(p=>(p.category||'').toUpperCase()===cat);
  console.log('\n--- '+cat+' ('+prods.length+') ---');
  prods.forEach(p=>console.log(' ',p.name));
});
})();
