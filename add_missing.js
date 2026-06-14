(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const existing=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());
const updates={};
let a=0;

const toAdd=[
  {name:"Outdoor Bulk for Packs/Rolling",category:"OD FLOWER",price:4,cost:4,qty:21,qtyWh:400},
  {name:"Swazi Gold 10g",category:"OD FLOWER",price:40,cost:0,qty:2,qtyWh:0},
  {name:"Swazi Gold 20g",category:"OD FLOWER",price:80,cost:0,qty:3,qtyWh:0},
  {name:"Lemon Orange GD Flower",category:"GD FLOWER",price:50,cost:0,qty:2,qtyWh:0},
  {name:"UK Cheese GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
];

toAdd.forEach(p=>{
  if(!existing.includes(p.name.toLowerCase())){
    const id='prod_'+Math.random().toString(36).slice(2,10);
    updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
    a++;
    console.log('Adding:',p.name);
  } else {
    console.log('Already exists:',p.name);
  }
});

// Also check GH FLOWER for Emerald Storm and Sunset Sherbert
const ghFlower=Object.values(all).filter(p=>p.name&&(p.category||'').toUpperCase()==='GH FLOWER');
console.log('GH FLOWER products:');
ghFlower.forEach(p=>console.log(' ',p.name));

await db.ref().update(updates);
console.log('Added:'+a);
})();
