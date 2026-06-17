(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const existing=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());
const updates={};
let a=0;

const toAdd=[
  {name:"Grandpa Cookies GH Flower",category:"GH FLOWER",price:40,cost:0,qty:0,qtyWh:0},
  {name:"Face Off OG GH Preroll",category:"GH PREROLLS",price:50,cost:0,qty:0,qtyWh:0},
  {name:"Jozi Buddha GH Preroll",category:"GH PREROLLS",price:50,cost:0,qty:0,qtyWh:0},
  {name:"Rotten Apples GD Preroll",category:"GD PREROLLS",price:60,cost:0,qty:0,qtyWh:0},
];

toAdd.forEach(p=>{
  if(!existing.includes(p.name.toLowerCase())){
    const id='prod_'+Math.random().toString(36).slice(2,10);
    updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
    a++;
    console.log('Added:',p.name);
  } else {
    console.log('Already exists:',p.name);
  }
});

await db.ref().update(updates);
console.log('Done, added:'+a);
})();
