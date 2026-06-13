(async function(){
const snap=await db.ref('bizpos/products').once('value');
const all=snap.val()||{};
const updates={};
let u=0,r=0,a=0;

const counts={
"Outdoor Bulk for Packs/Rolling":{qty:21,qtyWh:400},
"Swazi Gold 10g":{qty:2,qtyWh:0},
"Swazi Gold 20g":{qty:3,qtyWh:0},
"Big Buddha Cheese GH Flower":{qty:0,qtyWh:0},
"Sour Diesel GH Flower":{qty:0,qtyWh:0},
"Green Sunset Sherbert GH Flower":{qty:0,qtyWh:0},
"Headbanger GH Flower":{qty:0,qtyWh:0},
"Critical Cheese GH Flower":{qty:0,qtyWh:0},
"UK Cheese GH Flower":{qty:16,qtyWh:0},
"Lemon Tree GH Flower":{qty:0,qtyWh:0},
"Gorilla Glue GH Flower":{qty:0,qtyWh:0},
"Emerald Storm GH Flower":{qty:3,qtyWh:0},
"Sunset Sherbert GH Flower":{qty:12,qtyWh:0},
"Purple Punch GD Flower":{qty:0,qtyWh:0},
"Lemon Orange GD Flower":{qty:2,qtyWh:0},
"Biscotti ID Flower":{qty:0,qtyWh:0},
"Diamonds In The Dirt ID Flower":{qty:3,qtyWh:0},
"Neon Sunshine ID Flower":{qty:0,qtyWh:0},
"Zkittles ID Flower":{qty:0,qtyWh:0},
"Tropicana Runtz ID Flower":{qty:0,qtyWh:0},
"Runtz ID Flower":{qty:0,qtyWh:0},
"Papaya Frosting ID Flower":{qty:0,qtyWh:0},
"Tropicana Cherry ID Flower":{qty:0,qtyWh:0},
"Chocolate Runtz ID Flower":{qty:0,qtyWh:0},
"Face On Fire ID Flower":{qty:13,qtyWh:0},
"Orange Kush Cake ID Flower":{qty:3,qtyWh:0},
"Demon Slayer ID Flower":{qty:7,qtyWh:0},
"Persian Pie ID Flower":{qty:8,qtyWh:0},
"Dipz ID Flower":{qty:10,qtyWh:8},
"Atomic Jelly ID Flower":{qty:6,qtyWh:0},
"Swazi Gold 1g Preroll":{qty:21,qtyWh:0},
"Swazi Gold DW Preroll":{qty:51,qtyWh:0},
"UK Cheese GH Preroll":{qty:0,qtyWh:0},
"Sour Diesel GH Preroll":{qty:0,qtyWh:0},
"Big Buddha Cheese GH Preroll":{qty:0,qtyWh:0},
"Choc Thai Dye GH Preroll":{qty:0,qtyWh:0},
"Afghani Kush GH Preroll":{qty:0,qtyWh:0},
"Slurricane GH Preroll":{qty:0,qtyWh:0},
"Garlic Sherbert GH Preroll":{qty:0,qtyWh:0},
"Black Cherry Punch GH Preroll":{qty:0,qtyWh:0},
"Face On Fire GH Preroll":{qty:0,qtyWh:0},
"Gelato GH Preroll":{qty:0,qtyWh:0},
"OG Glue GH Preroll":{qty:0,qtyWh:0},
"Platinum Kush Breath GH Preroll":{qty:0,qtyWh:0},
"Emerald Storm GH Pre":{qty:10,qtyWh:0},
"Lilac Diesel GH Pre":{qty:8,qtyWh:0},
"Super Cheese GH Pre":{qty:11,qtyWh:0},
"Bananas In Pajamas GD Preroll":{qty:0,qtyWh:0},
"Grape Diamonds GD Preroll":{qty:0,qtyWh:0},
"Astro Grape GD Preroll":{qty:0,qtyWh:0},
"Gelato Cookies GD Preroll":{qty:33,qtyWh:0},
"Infused GD Preroll":{qty:0,qtyWh:0},
"Sunset Sherb GD Pre":{qty:2,qtyWh:0},
"Biscotti GD Pre":{qty:6,qtyWh:0},
"UK Cheese GD Pre":{qty:18,qtyWh:0},
"Runtz Blend ID Preroll":{qty:0,qtyWh:0},
"Diamonds In The Dirt ID Preroll":{qty:0,qtyWh:0},
"Tropicana Cherry ID Preroll":{qty:0,qtyWh:0},
"Papaya Frosting ID Preroll":{qty:0,qtyWh:0},
"Grandaddy Purple ID Preroll":{qty:0,qtyWh:0},
"Super Lemon Haze ID Preroll":{qty:0,qtyWh:0},
"Citrus Sap ID Preroll":{qty:0,qtyWh:0},
"Apple Fritter ID Preroll":{qty:1,qtyWh:0},
"Violet Cake ID Preroll":{qty:18,qtyWh:0},
"Motorbreath ID Preroll":{qty:5,qtyWh:0},
"Jacks Cleaner ID Preroll":{qty:4,qtyWh:0},
"Rotten Apples ID Preroll":{qty:3,qtyWh:0},
"Infused ID Preroll":{qty:2,qtyWh:0},
"CBD Jellies 250mg Pack":{qty:1,qtyWh:0},
"Rainbow Strips 200mg Pack":{qty:1,qtyWh:0},
"OG Gummies 330mg Pack":{qty:6,qtyWh:0},
"Wacky Worms 300mg Pack":{qty:8,qtyWh:0},
"Heart Stoppers 400mg Pack":{qty:4,qtyWh:0},
"Peanut Brittle 100mg Pack":{qty:1,qtyWh:0},
"OG Gummies 150mg Pack":{qty:11,qtyWh:0},
"Wacky Worms 150mg Pack":{qty:8,qtyWh:0},
"Coconut Wheels 150mg Pack":{qty:1,qtyWh:0},
"Heart Stoppers 200mg Pack":{qty:7,qtyWh:0},
"Choc Chip Cookies 90mg Pack":{qty:3,qtyWh:0},
"Peanut Brittle 20mg Single":{qty:3,qtyWh:0},
"Rainbow Strips 20mg Single":{qty:0,qtyWh:0},
"OG Gummies 22.5mg Single":{qty:13,qtyWh:0},
"Wacky Worms 30mg Single":{qty:4,qtyWh:0},
"Coconut Wheels 30mg Single":{qty:4,qtyWh:0},
"Heart Stoppers 40mg Single":{qty:2,qtyWh:0},
"Choc Chip Cookies 30mg Single":{qty:1,qtyWh:0},
"40mg Rosin Gummies":{qty:16,qtyWh:0},
"80mg Rosin Gummies":{qty:14,qtyWh:0},
"200mg Rosin Gummies":{qty:8,qtyWh:0},
"50mg Rosin Cheeky Chocs":{qty:9,qtyWh:0},
"Hot Chocolate 25mg":{qty:2,qtyWh:0},
"Hot Chocolate 50mg":{qty:2,qtyWh:0},
"Milkshake Strawberry 15mg":{qty:1,qtyWh:0},
"Milkshake Chocolate 15mg":{qty:2,qtyWh:0},
"Milkshake Strawberry 50mg":{qty:0,qtyWh:0},
"Milkshake Chocolate 50mg":{qty:0,qtyWh:0},
"Coconut Ice 80mg":{qty:5,qtyWh:0},
"Snap Bars 40mg":{qty:3,qtyWh:0},
"Fudge 100mg":{qty:11,qtyWh:0},
"Lollipops 50mg Strawberry Kiwi":{qty:15,qtyWh:0},
"Lollipops 50mg Cream Soda":{qty:0,qtyWh:0},
"Dessert Squares 100mg":{qty:17,qtyWh:0},
"Millionaire Shortbread 100mg":{qty:0,qtyWh:0},
"Caramel Oreo Biscoff Balls 90mg":{qty:0,qtyWh:0},
"GG Soda 30mg Orange":{qty:0,qtyWh:0},
"GG Soda 30mg Cherry":{qty:4,qtyWh:0},
"GG Soda 30mg Lemon Lime":{qty:0,qtyWh:0},
"GG Soda 30mg Watermelon":{qty:5,qtyWh:0},
"GG Soda 30mg Pineapple":{qty:0,qtyWh:0},
"GG Soda 30mg Ginger Beer":{qty:4,qtyWh:0},
"GG Shot 30mg Energy":{qty:2,qtyWh:0},
"GG Shot 30mg Boner":{qty:0,qtyWh:0},
"GG Shot 30mg Glow":{qty:1,qtyWh:0},
"GG Coffee Boost 30mg":{qty:23,qtyWh:0},
"FECO Oil 1ml":{qty:2,qtyWh:0},
"Vape 510 Thread Battery":{qty:4,qtyWh:0},
"Sativa Distillate Cart 1ml":{qty:4,qtyWh:0},
"Hybrid Distillate Cart 1ml":{qty:5,qtyWh:0},
"Indica Distillate Cart 1ml":{qty:8,qtyWh:0},
"Sativa Cured Resin Cart 1ml":{qty:3,qtyWh:0},
"Hybrid Cured Resin Cart 1ml":{qty:2,qtyWh:0},
"Indica Cured Resin Cart 1ml":{qty:1,qtyWh:0},
"Lifted Disposable Vape 1ml":{qty:1,qtyWh:0}
};

const remove=["Jack Herer OD Flower p/gram","Jack Herer 5g Bankie","Christiania Kush GD Flower","J-Hustle GD Flower","Sativa ID Tube 1.4g Preroll","Hybrid ID Tube 1.4g Preroll","Indica ID Tube 1.4g Preroll","Sodaze 30mg Berry Haze","Sodaze 30mg Orange Cream","Sodaze 30mg Cherry Pop","Sodaze 30mg Blueberry Lemonade","Sodaze 30mg Tropical Punch","Sodaze 30mg Limonada","Dab 1g"];

Object.entries(all).forEach(([key,p])=>{
  if(!p.name){updates['bizpos/products/'+key]=null;return;}
  if(remove.some(n=>n.toLowerCase()===p.name.toLowerCase())){updates['bizpos/products/'+key]=null;r++;return;}
  const m=Object.entries(counts).find(([n])=>n.toLowerCase()===p.name.toLowerCase());
  if(m){updates['bizpos/products/'+key+'/qty']=m[1].qty;updates['bizpos/products/'+key+'/qtyWh']=m[1].qtyWh;u++;}
  else{updates['bizpos/products/'+key+'/qty']=0;updates['bizpos/products/'+key+'/qtyWh']=0;}
});

const np=[
  {name:"Gummy Bears 150mg Pack",category:"LIFTED EDIBLES",price:160,cost:90,qty:4,qtyWh:0},
  {name:"Dab 1g GH",category:"OILS & CONCENTRATES",price:150,cost:0,qty:2,qtyWh:0},
  {name:"Dab 1g ID",category:"OILS & CONCENTRATES",price:300,cost:0,qty:3,qtyWh:0},
  {name:"Emerald Storm GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:12,qtyWh:0},
  {name:"Super Cheese GH Rolling Stock",category:"ROLLING STOCK",price:0,cost:0,qty:20,qtyWh:0}
];
const ex=Object.values(all).filter(p=>p.name).map(p=>p.name.toLowerCase());
np.forEach(p=>{
  if(!ex.some(n=>n.includes(p.name.toLowerCase().slice(0,10)))){
    const id='prod_'+Math.random().toString(36).slice(2,10);
    updates['bizpos/products/'+id]={id,...p,active:true,reorderAt:0,createdAt:new Date().toISOString()};
    a++;
  }
});

await db.ref().update(updates);
console.log('DONE updated:'+u+' removed:'+r+' added:'+a);
})();
