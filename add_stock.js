(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const existing=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());
const updates={};
let a=0, s=0;

const toAdd=[
  // GH FLOWER
  {name:"Grandpa Cookies GH Flower",category:"GH FLOWER",price:40,cost:0,qty:0,qtyWh:0},
  {name:"Sour Diesel GH Flower",category:"GH FLOWER",price:40,cost:0,qty:0,qtyWh:0},
  {name:"UK Cheese GH Flower",category:"GH FLOWER",price:60,cost:0,qty:0,qtyWh:0},
  {name:"Purple Sunset GH Flower",category:"GH FLOWER",price:40,cost:0,qty:0,qtyWh:0},
  // LIFTED EDIBLES
  {name:"Gummy Bears 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:0,qty:0,qtyWh:0},
  {name:"Gummy Bears Singles",category:"LIFTED EDIBLES",price:30,cost:0,qty:0,qtyWh:0},
  // VAPES AND ACCESSORIES
  {name:"Cured Disposable Vape",category:"VAPES AND ACCESSORIES",price:0,cost:0,qty:0,qtyWh:0},
  // FRIDGE EDIBLES
  {name:"Sleep Shot",category:"FRIDGE EDIBLES",price:0,cost:0,qty:0,qtyWh:0},
  // OILS & CONCENTRATES
  {name:"Dab 1g ID",category:"OILS & CONCENTRATES",price:300,cost:0,qty:0,qtyWh:0},
  {name:"Dab 1g GH",category:"OILS & CONCENTRATES",price:150,cost:0,qty:0,qtyWh:0},
  {name:"Dab Cured Rosin 1g",category:"OILS & CONCENTRATES",price:0,cost:0,qty:0,qtyWh:0},
];

toAdd.forEach(p=>{
  if(existing.some(n=>n===p.name.toLowerCase())){
    console.log('Exists:',p.name); s++; return;
  }
  const id='prod_'+Math.random().toString(36).slice(2,10);
  updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
  console.log('Adding:',p.name); a++;
});

await db.ref().update(updates);
console.log('Done — added:'+a+' skipped:'+s);
})();
