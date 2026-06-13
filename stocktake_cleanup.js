(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};
let r=0,a=0;

// Remove by partial name match
const remove=["Jack Herer","Christiania Kush","J-Hustle GD","Sativa ID Tube","Hybrid ID Tube","Indica ID Tube","Sodaze","Dab 1g GH","Dab 1g ID"];

// But keep our new Dab 1g GH and Dab 1g ID if they have category OILS
Object.entries(all).forEach(([key,p])=>{
  if(!p.name) return;
  const nm=p.name.toLowerCase();
  if(remove.some(n=>nm.includes(n.toLowerCase()))){
    // Keep if it was recently added as proper product
    if((nm==='dab 1g gh'||nm==='dab 1g id') && p.category==='OILS & CONCENTRATES') return;
    updates['bizpos/products/'+key]=null;
    r++;
    console.log('Removing:',p.name);
  }
});

// Add missing new products
const existing=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());
const np=[
  {name:"Gummy Bears 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:4,qtyWh:0},
  {name:"Emerald Storm GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:12,qtyWh:0},
  {name:"Super Cheese GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:20,qtyWh:0}
];
np.forEach(p=>{
  if(!existing.includes(p.name.toLowerCase())){
    const id='prod_'+Math.random().toString(36).slice(2,10);
    updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
    a++;
    console.log('Adding:',p.name);
  }
});

await db.ref().update(updates);
console.log('Cleanup done - removed:'+r+' added:'+a);
})();
