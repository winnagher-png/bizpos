(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};
let r=0,m=0;

Object.entries(all).forEach(([key,p])=>{
  if(!p.name){updates['bizpos/products/'+key]=null;r++;return;}
  const cat=(p.category||'').toUpperCase();
  const nm=p.name.toLowerCase();

  // Remove Sodaze
  if(cat==='SODAZE'){updates['bizpos/products/'+key]=null;r++;console.log('Remove Sodaze:',p.name);return;}

  // Move ZG Edibles to FRIDGE EDIBLES
  if(cat==='ZG EDIBLES'){updates['bizpos/products/'+key+'/category']='FRIDGE EDIBLES';m++;console.log('Move to Fridge:',p.name);return;}

  // Move Natures Treatz to FRIDGE EDIBLES
  if(cat==='NATURES TREATZ EDIBLES'){updates['bizpos/products/'+key+'/category']='FRIDGE EDIBLES';m++;console.log('Move to Fridge:',p.name);return;}

  // Move GOBLIN TREATZ to GOBLIN TREATZ EDIBLES
  if(cat==='GOBLIN TREATZ'){updates['bizpos/products/'+key+'/category']='GOBLIN TREATZ EDIBLES';m++;console.log('Move to GT Edibles:',p.name);return;}

  // Remove NONE category products (no name match)
  if(!p.category||p.category==='NONE'||p.category===''){
    updates['bizpos/products/'+key]=null;r++;console.log('Remove no-category:',p.name);return;
  }

  // Fix EDIBLES to LIFTED EDIBLES if name matches lifted products
  if(cat==='EDIBLES'){updates['bizpos/products/'+key+'/category']='LIFTED EDIBLES';m++;console.log('Move to Lifted:',p.name);return;}
});

await db.ref().update(updates);
console.log('Done — removed:'+r+' moved:'+m);
})();
