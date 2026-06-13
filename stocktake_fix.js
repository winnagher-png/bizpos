(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};

// Check what's there
const names=Object.values(all).filter(p=>p.name).map(p=>p.name);
console.log('Current products:',names.length);

// Remove remaining bad ones
const remove=["Jack Herer OD Flower p/gram","Christiania Kush GD Flower","J-Hustle GD Flower","Sodaze 30mg Berry Haze","Sodaze 30mg Orange Cream","Sodaze 30mg Cherry Pop","Sodaze 30mg Blueberry Lemonade","Sodaze 30mg Tropical Punch","Sodaze 30mg Limonada","Dab 1g"];
const existing=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());

Object.entries(all).forEach(([key,p])=>{
  if(!p.name) return;
  if(remove.some(n=>n.toLowerCase()===p.name.toLowerCase())){
    updates['bizpos/products/'+key]=null;
    console.log('Removing:',p.name);
  }
});

// Add back Dab 1g GH and Gummy Bears
const toAdd=[
  {name:"Dab 1g GH",category:"OILS & CONCENTRATES",price:150,cost:0,qty:2,qtyWh:0},
  {name:"Gummy Bears 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:4,qtyWh:0},
  {name:"Emerald Storm GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:12,qtyWh:0}
];
toAdd.forEach(p=>{
  if(!existing.includes(p.name.toLowerCase())){
    const id='prod_'+Math.random().toString(36).slice(2,10);
    updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
    console.log('Adding:',p.name);
  }
});

await db.ref().update(updates);
console.log('Done');
})();
