(async function(){
console.log('Starting master reset...');

// THE COMPLETE CORRECT PRODUCT LIST
const masterProducts = [
  // OD FLOWER
  {name:"Outdoor Bulk for Packs/Rolling",category:"OD FLOWER",price:4,cost:4,qty:21,qtyWh:400},
  {name:"Swazi Gold 10g",category:"OD FLOWER",price:40,cost:0,qty:2,qtyWh:0},
  {name:"Swazi Gold 20g",category:"OD FLOWER",price:80,cost:0,qty:3,qtyWh:0},
  // GH FLOWER
  {name:"Big Buddha Cheese GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"Sour Diesel GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"Green Sunset Sherbert GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"Headbanger GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"Critical Cheese GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"UK Cheese GH Flower",category:"GH FLOWER",price:60,cost:16,qty:16,qtyWh:0},
  {name:"Lemon Tree GH Flower",category:"GH FLOWER",price:60,cost:17,qty:0,qtyWh:0},
  {name:"Gorilla Glue GH Flower",category:"GH FLOWER",price:40,cost:15,qty:0,qtyWh:0},
  {name:"Emerald Storm GH Flower",category:"GH FLOWER",price:40,cost:15,qty:3,qtyWh:0},
  {name:"Sunset Sherbert GH Flower",category:"GH FLOWER",price:40,cost:15,qty:12,qtyWh:0},
  // GD FLOWER
  {name:"Purple Punch GD Flower",category:"GD FLOWER",price:80,cost:40,qty:0,qtyWh:0},
  {name:"Lemon Orange GD Flower",category:"GD FLOWER",price:50,cost:0,qty:2,qtyWh:0},
  // ID FLOWER
  {name:"Biscotti ID Flower",category:"ID FLOWER",price:100,cost:50,qty:0,qtyWh:0},
  {name:"Diamonds In The Dirt ID Flower",category:"ID FLOWER",price:100,cost:60,qty:3,qtyWh:0},
  {name:"Neon Sunshine ID Flower",category:"ID FLOWER",price:120,cost:45,qty:0,qtyWh:0},
  {name:"Zkittles ID Flower",category:"ID FLOWER",price:120,cost:50,qty:0,qtyWh:0},
  {name:"Tropicana Runtz ID Flower",category:"ID FLOWER",price:140,cost:0,qty:0,qtyWh:0},
  {name:"Runtz ID Flower",category:"ID FLOWER",price:140,cost:60,qty:0,qtyWh:0},
  {name:"Papaya Frosting ID Flower",category:"ID FLOWER",price:120,cost:45,qty:0,qtyWh:0},
  {name:"Tropicana Cherry ID Flower",category:"ID FLOWER",price:140,cost:45,qty:0,qtyWh:0},
  {name:"Chocolate Runtz ID Flower",category:"ID FLOWER",price:140,cost:60,qty:0,qtyWh:0},
  {name:"Face On Fire ID Flower",category:"ID FLOWER",price:100,cost:0,qty:13,qtyWh:0},
  {name:"Orange Kush Cake ID Flower",category:"ID FLOWER",price:100,cost:0,qty:3,qtyWh:0},
  {name:"Demon Slayer ID Flower",category:"ID FLOWER",price:140,cost:0,qty:7,qtyWh:0},
  {name:"Persian Pie ID Flower",category:"ID FLOWER",price:120,cost:0,qty:8,qtyWh:0},
  {name:"Dipz ID Flower",category:"ID FLOWER",price:120,cost:0,qty:10,qtyWh:8},
  {name:"Atomic Jelly ID Flower",category:"ID FLOWER",price:120,cost:0,qty:6,qtyWh:0},
  // OD PREROLLS
  {name:"Swazi Gold 1g Preroll",category:"OD PREROLLS",price:30,cost:6,qty:21,qtyWh:0},
  {name:"Swazi Gold DW Preroll",category:"OD PREROLLS",price:20,cost:3,qty:51,qtyWh:0},
  // GH PREROLLS
  {name:"UK Cheese GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"Sour Diesel GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"Big Buddha Cheese GH Preroll",category:"GH PREROLLS",price:50,cost:20,qty:0,qtyWh:0},
  {name:"Choc Thai Dye GH Preroll",category:"GH PREROLLS",price:50,cost:0,qty:0,qtyWh:0},
  {name:"Afghani Kush GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"Slurricane GH Preroll",category:"GH PREROLLS",price:50,cost:0,qty:0,qtyWh:0},
  {name:"Garlic Sherbert GH Preroll",category:"GH PREROLLS",price:50,cost:0,qty:0,qtyWh:0},
  {name:"Black Cherry Punch GH Preroll",category:"GH PREROLLS",price:50,cost:20,qty:0,qtyWh:0},
  {name:"Face On Fire GH Preroll",category:"GH PREROLLS",price:50,cost:20,qty:0,qtyWh:0},
  {name:"Gelato GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"OG Glue GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"Platinum Kush Breath GH Preroll",category:"GH PREROLLS",price:50,cost:15,qty:0,qtyWh:0},
  {name:"Emerald Storm GH Pre",category:"GH PREROLLS",price:50,cost:15,qty:10,qtyWh:0},
  {name:"Lilac Diesel GH Pre",category:"GH PREROLLS",price:50,cost:15,qty:8,qtyWh:0},
  {name:"Super Cheese GH Pre",category:"GH PREROLLS",price:50,cost:15,qty:11,qtyWh:0},
  // GD PREROLLS
  {name:"Bananas In Pajamas GD Preroll",category:"GD PREROLLS",price:60,cost:20,qty:0,qtyWh:0},
  {name:"Grape Diamonds GD Preroll",category:"GD PREROLLS",price:60,cost:20,qty:0,qtyWh:0},
  {name:"Astro Grape GD Preroll",category:"GD PREROLLS",price:60,cost:20,qty:0,qtyWh:0},
  {name:"Gelato Cookies GD Preroll",category:"GD PREROLLS",price:60,cost:20,qty:33,qtyWh:0},
  {name:"Infused GD Preroll",category:"GD PREROLLS",price:150,cost:0,qty:0,qtyWh:0},
  {name:"Sunset Sherb GD Pre",category:"GD PREROLLS",price:60,cost:20,qty:2,qtyWh:0},
  {name:"Biscotti GD Pre",category:"GD PREROLLS",price:60,cost:20,qty:6,qtyWh:0},
  {name:"UK Cheese GD Pre",category:"GD PREROLLS",price:60,cost:20,qty:18,qtyWh:0},
  // ID PREROLLS
  {name:"Runtz Blend ID Preroll",category:"ID PREROLLS",price:100,cost:20,qty:0,qtyWh:0},
  {name:"Diamonds In The Dirt ID Preroll",category:"ID PREROLLS",price:100,cost:20,qty:0,qtyWh:0},
  {name:"Tropicana Cherry ID Preroll",category:"ID PREROLLS",price:100,cost:45,qty:0,qtyWh:0},
  {name:"Papaya Frosting ID Preroll",category:"ID PREROLLS",price:100,cost:45,qty:0,qtyWh:0},
  {name:"Grandaddy Purple ID Preroll",category:"ID PREROLLS",price:100,cost:45,qty:0,qtyWh:0},
  {name:"Super Lemon Haze ID Preroll",category:"ID PREROLLS",price:100,cost:45,qty:0,qtyWh:0},
  {name:"Citrus Sap ID Preroll",category:"ID PREROLLS",price:100,cost:45,qty:0,qtyWh:0},
  {name:"Apple Fritter ID Preroll",category:"ID PREROLLS",price:100,cost:0,qty:1,qtyWh:0},
  {name:"Violet Cake ID Preroll",category:"ID PREROLLS",price:100,cost:0,qty:18,qtyWh:0},
  {name:"Motorbreath ID Preroll",category:"ID PREROLLS",price:100,cost:0,qty:5,qtyWh:0},
  {name:"Jacks Cleaner ID Preroll",category:"ID PREROLLS",price:100,cost:0,qty:4,qtyWh:0},
  {name:"Rotten Apples ID Preroll",category:"ID PREROLLS",price:100,cost:0,qty:3,qtyWh:0},
  {name:"Infused ID Preroll",category:"ID PREROLLS",price:200,cost:0,qty:2,qtyWh:0},
  // LIFTED EDIBLES
  {name:"CBD Jellies 250mg Pack",category:"LIFTED EDIBLES",price:300,cost:150,qty:1,qtyWh:0},
  {name:"Rainbow Strips 200mg Pack",category:"LIFTED EDIBLES",price:240,cost:120,qty:1,qtyWh:0},
  {name:"OG Gummies 330mg Pack",category:"LIFTED EDIBLES",price:300,cost:200,qty:6,qtyWh:0},
  {name:"Wacky Worms 300mg Pack",category:"LIFTED EDIBLES",price:300,cost:180,qty:8,qtyWh:0},
  {name:"Heart Stoppers 400mg Pack",category:"LIFTED EDIBLES",price:400,cost:240,qty:4,qtyWh:0},
  {name:"Peanut Brittle 100mg Pack",category:"LIFTED EDIBLES",price:160,cost:70,qty:1,qtyWh:0},
  {name:"OG Gummies 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:11,qtyWh:0},
  {name:"Wacky Worms 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:8,qtyWh:0},
  {name:"Coconut Wheels 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:1,qtyWh:0},
  {name:"Heart Stoppers 200mg Pack",category:"LIFTED EDIBLES",price:240,cost:120,qty:7,qtyWh:0},
  {name:"Choc Chip Cookies 90mg Pack",category:"LIFTED EDIBLES",price:130,cost:65,qty:3,qtyWh:0},
  {name:"Gummy Bears 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:4,qtyWh:0},
  {name:"Peanut Brittle 20mg Single",category:"LIFTED EDIBLES",price:20,cost:14,qty:3,qtyWh:0},
  {name:"Rainbow Strips 20mg Single",category:"LIFTED EDIBLES",price:20,cost:12,qty:0,qtyWh:0},
  {name:"OG Gummies 22.5mg Single",category:"LIFTED EDIBLES",price:30,cost:13,qty:13,qtyWh:0},
  {name:"Wacky Worms 30mg Single",category:"LIFTED EDIBLES",price:30,cost:18,qty:4,qtyWh:0},
  {name:"Coconut Wheels 30mg Single",category:"LIFTED EDIBLES",price:30,cost:18,qty:4,qtyWh:0},
  {name:"Heart Stoppers 40mg Single",category:"LIFTED EDIBLES",price:40,cost:24,qty:2,qtyWh:0},
  {name:"Choc Chip Cookies 30mg Single",category:"LIFTED EDIBLES",price:30,cost:22,qty:1,qtyWh:0},
  // SGB EDIBLES
  {name:"40mg Rosin Gummies",category:"SGB EDIBLES",price:40,cost:20,qty:16,qtyWh:0},
  {name:"80mg Rosin Gummies",category:"SGB EDIBLES",price:80,cost:35,qty:14,qtyWh:0},
  {name:"200mg Rosin Gummies",category:"SGB EDIBLES",price:120,cost:80,qty:8,qtyWh:0},
  {name:"50mg Rosin Cheeky Chocs",category:"SGB EDIBLES",price:50,cost:25,qty:9,qtyWh:0},
  // GOBLIN TREATZ EDIBLES
  {name:"Hot Chocolate 25mg",category:"GOBLIN TREATZ EDIBLES",price:80,cost:42,qty:2,qtyWh:0},
  {name:"Hot Chocolate 50mg",category:"GOBLIN TREATZ EDIBLES",price:100,cost:56,qty:2,qtyWh:0},
  {name:"Milkshake Strawberry 15mg",category:"GOBLIN TREATZ EDIBLES",price:100,cost:52,qty:1,qtyWh:0},
  {name:"Milkshake Chocolate 15mg",category:"GOBLIN TREATZ EDIBLES",price:100,cost:52,qty:2,qtyWh:0},
  {name:"Milkshake Strawberry 50mg",category:"GOBLIN TREATZ EDIBLES",price:120,cost:63,qty:0,qtyWh:0},
  {name:"Milkshake Chocolate 50mg",category:"GOBLIN TREATZ EDIBLES",price:120,cost:63,qty:0,qtyWh:0},
  {name:"Coconut Ice 80mg",category:"GOBLIN TREATZ EDIBLES",price:70,cost:0,qty:5,qtyWh:0},
  {name:"Snap Bars 40mg",category:"GOBLIN TREATZ EDIBLES",price:40,cost:0,qty:3,qtyWh:0},
  {name:"Goblin Lollipops 100mg",category:"GOBLIN TREATZ EDIBLES",price:50,cost:0,qty:0,qtyWh:0},
  // FRIDGE EDIBLES
  {name:"Fudge 100mg",category:"FRIDGE EDIBLES",price:85,cost:40,qty:11,qtyWh:0},
  {name:"Lollipops 50mg Strawberry Kiwi",category:"FRIDGE EDIBLES",price:50,cost:25,qty:15,qtyWh:0},
  {name:"Lollipops 50mg Cream Soda",category:"FRIDGE EDIBLES",price:50,cost:25,qty:0,qtyWh:0},
  {name:"Dessert Squares 100mg",category:"FRIDGE EDIBLES",price:70,cost:35,qty:17,qtyWh:0},
  {name:"Millionaire Shortbread 100mg",category:"FRIDGE EDIBLES",price:70,cost:35,qty:0,qtyWh:0},
  {name:"Caramel Oreo Biscoff Balls 90mg",category:"FRIDGE EDIBLES",price:70,cost:0,qty:0,qtyWh:0},
  // GREENT GIANT EDIBLES
  {name:"GG Soda 30mg Orange",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:0,qtyWh:0},
  {name:"GG Soda 30mg Cherry",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:4,qtyWh:0},
  {name:"GG Soda 30mg Lemon Lime",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:0,qtyWh:0},
  {name:"GG Soda 30mg Watermelon",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:5,qtyWh:0},
  {name:"GG Soda 30mg Pineapple",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:0,qtyWh:0},
  {name:"GG Soda 30mg Ginger Beer",category:"GREENT GIANT EDIBLES",price:60,cost:25,qty:4,qtyWh:0},
  {name:"GG Shot 30mg Energy",category:"GREENT GIANT EDIBLES",price:50,cost:30,qty:2,qtyWh:0},
  {name:"GG Shot 30mg Boner",category:"GREENT GIANT EDIBLES",price:50,cost:30,qty:0,qtyWh:0},
  {name:"GG Shot 30mg Glow",category:"GREENT GIANT EDIBLES",price:50,cost:30,qty:1,qtyWh:0},
  {name:"GG Coffee Boost 30mg",category:"GREENT GIANT EDIBLES",price:50,cost:30,qty:23,qtyWh:0},
  // OILS & CONCENTRATES
  {name:"Dab 1g GH",category:"OILS & CONCENTRATES",price:150,cost:0,qty:2,qtyWh:0},
  {name:"Dab 1g ID",category:"OILS & CONCENTRATES",price:300,cost:0,qty:3,qtyWh:0},
  {name:"FECO Oil 1ml",category:"OILS & CONCENTRATES",price:300,cost:150,qty:2,qtyWh:0},
  // VAPES AND ACCESSORIES
  {name:"Vape 510 Thread Battery",category:"VAPES AND ACCESSORIES",price:160,cost:80,qty:4,qtyWh:0},
  {name:"Sativa Distillate Cart 1ml",category:"VAPES AND ACCESSORIES",price:250,cost:130,qty:4,qtyWh:0},
  {name:"Hybrid Distillate Cart 1ml",category:"VAPES AND ACCESSORIES",price:250,cost:130,qty:5,qtyWh:0},
  {name:"Indica Distillate Cart 1ml",category:"VAPES AND ACCESSORIES",price:250,cost:130,qty:8,qtyWh:0},
  {name:"Sativa Cured Resin Cart 1ml",category:"VAPES AND ACCESSORIES",price:350,cost:160,qty:3,qtyWh:0},
  {name:"Hybrid Cured Resin Cart 1ml",category:"VAPES AND ACCESSORIES",price:350,cost:160,qty:2,qtyWh:0},
  {name:"Indica Cured Resin Cart 1ml",category:"VAPES AND ACCESSORIES",price:350,cost:160,qty:1,qtyWh:0},
  {name:"Lifted Disposable Vape 1ml",category:"VAPES AND ACCESSORIES",price:600,cost:280,qty:1,qtyWh:0},
  // SMOKING PARAPHERNALIA
  {name:"Rolling Paper Hornet King Size Flavoured",category:"SMOKING PARAPHENALIA",price:25,cost:18,qty:7,qtyWh:0},
  {name:"Rolling Paper Lady Hornet 1 1/4",category:"SMOKING PARAPHENALIA",price:20,cost:10,qty:3,qtyWh:0},
  {name:"Rolling Paper Fruits Mix With Tips",category:"SMOKING PARAPHENALIA",price:30,cost:15,qty:0,qtyWh:0},
  {name:"Grinder Metal Leaf 5cm",category:"SMOKING PARAPHENALIA",price:120,cost:90,qty:1,qtyWh:0},
  {name:"Grinder Patterned 6cm",category:"SMOKING PARAPHENALIA",price:250,cost:120,qty:3,qtyWh:0},
  {name:"Doob Tube Storage Holder",category:"SMOKING PARAPHENALIA",price:80,cost:45,qty:4,qtyWh:0},
  {name:"Pipe Screens 5 Pack",category:"SMOKING PARAPHENALIA",price:5,cost:1,qty:2,qtyWh:0},
  {name:"Lighter Flint",category:"SMOKING PARAPHENALIA",price:10,cost:5,qty:12,qtyWh:0},
  {name:"Lighter Click",category:"SMOKING PARAPHENALIA",price:20,cost:10,qty:22,qtyWh:0},
  {name:"Rasta Pipe Metal and Plastic",category:"SMOKING PARAPHENALIA",price:80,cost:50,qty:0,qtyWh:0},
  {name:"Rolling Tray",category:"SMOKING PARAPHENALIA",price:100,cost:60,qty:2,qtyWh:0},
  {name:"Matchboxes",category:"SMOKING PARAPHENALIA",price:5,cost:3,qty:10,qtyWh:0},
  // MERCH (keep all existing merch as-is)
  // MISC
  {name:"DELIVERY SERVICE",category:"MISC",price:0,cost:0,qty:0,qtyWh:0},
  {name:"Micro M Caps 10pk",category:"MISC",price:0,cost:0,qty:0,qtyWh:0},
  // ROLLING STOCK
  {name:"Emerald Storm GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:12,qtyWh:0},
  {name:"Super Cheese GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:20,qtyWh:0},
];

// Step 1: Get all existing products
const snap = await db.ref('bizpos/products').once('value');
const all = snap.val()||{};
const updates = {};

// Step 2: Delete EVERYTHING except MERCH (keep merch as-is)
Object.entries(all).forEach(([key,p])=>{
  if(!p.name) { updates['bizpos/products/'+key]=null; return; }
  const cat=(p.category||'').toUpperCase();
  if(cat!=='MERCH'){
    updates['bizpos/products/'+key]=null;
  }
});

// Step 3: Add all master products fresh
masterProducts.forEach(p=>{
  const id='prod_'+Math.random().toString(36).slice(2,12);
  updates['bizpos/products/'+id]={
    id,name:p.name,category:p.category,price:p.price,cost:p.cost,
    qty:p.qty,qtyWh:p.qtyWh,active:true,reorderAt:0,
    createdAt:new Date().toISOString()
  };
});

await db.ref().update(updates);
console.log('MASTER RESET DONE - '+masterProducts.length+' products set');
})();
