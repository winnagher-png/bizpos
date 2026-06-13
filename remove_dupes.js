(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};
let r=0;

// Products to remove by exact name (old/duplicate/unwanted)
const removeExact=[
  // OD FLOWER duplicates
  "Outdoor Bulk for Packs/Rolling", // keep one - will add back
  "Swazi Gold 10G Bankies",
  "Swazi Gold 20G Bankies",
  // GH FLOWER - remove old ones not in current stock
  "Cotton candy GH Flower",
  "Garlic Sherbert",
  "Sunset sherbet",
  "Baked Zkittles GH Flower",
  "Cherry Pie GH Flower",
  "runtz gh flower",
  "Super Cheese GH Flower",
  "Lilac Diesel GH Flower",
  "OG Cheese GH Flower",
  "Purple Sunset GH Flower",
  "UK Cheese GH Flower", // remove both dupes, will keep one
  // GD FLOWER
  "Lemon orange GD Flower", // duplicate of Lemon Orange GD Flower
  "Lemon Meringue GD Flower",
  "Military Chocolate GD Flower",
  // GD PREROLLS - keep only what's in current stock
  "UK Cheese GD prerolls",
  "Face on fire GD Preroll",
  "Purple sunset GD Prerolls",
  "Wedding Cake GD prerolls",
  "Sunset Sherbert GD Preroll",
  "Lemon Meringue GD Prerolls",
  "Purple Punch GH Preroll",
  "J&J In- House Blend Preroll",
  "Greendoor Infused Prerolls",
  "Gelato Cookies",
  "Full gas GH Preroll",
  // GH PREROLLS - keep only what's in current stock
  "French Mac",
  "Snowball GH Prerolls",
  "Gas-nana GH Prerolls",
  "Critical cheese GH preroll",
  "Critical cheese GH Preroll",
  "Sunset sherbert",
  "Full gas GH Preroll",
  "Critical Cheese GH Prerolls",
  "Super Cheese GH Pre-rolls",
  "Purple Punch GH Preroll",
  "GH Blend - Sherbert, Biscotti, W/Cake , S. Cheese GH Preroll",
  "Purple Sunset  GH Preroll",
  "Poptartz GH preroll",
];

// Track seen names to handle remaining dupes
const seen={};
Object.entries(all).forEach(([key,p])=>{
  if(!p.name) return;
  const nm=p.name.toLowerCase().trim();
  if(removeExact.some(n=>n.toLowerCase()===nm)){
    updates['bizpos/products/'+key]=null;
    r++;
    console.log('Remove:',p.name);
  }
});

// Fix UK Cheese GH Flower - add back one clean copy
const ukCheese=Object.entries(all).filter(([k,p])=>p.name&&p.name.toLowerCase()==='uk cheese gh flower');
if(ukCheese.length>1){
  // Remove all but first
  ukCheese.slice(1).forEach(([k])=>{updates['bizpos/products/'+k]=null;r++;console.log('Remove dupe: UK Cheese GH Flower');});
}

await db.ref().update(updates);
console.log('Removed:'+r);
})();
