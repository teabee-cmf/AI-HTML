(()=>{
'use strict';
// js\config.js
// Generated from data/config.json by build.mjs
const C = {
  "version": "1.5.0",
  "maxYear": 6,
  "turnsPerSeason": 5,
  "seasons": [
    "春",
    "夏",
    "秋",
    "冬"
  ],
  "modificationLimit": 3,
  "initialMoney": 100000,
  "seed": "SX2026-05",
  "tea": {
    "normalYield": 40,
    "firstYearFactor": 0.45,
    "processingRatio": 0.25,
    "minimumGrowth": 25,
    "harvestGrowthCost": 12,
    "seasonRecovery": 10,
    "unharvestedRecovery": 7,
    "pestGrowthCost": 6,
    "consecutiveHarvestExtraCost": 6,
    "harvestStreakCap": 3
  },
  "costs": {
    "tea": 6000,
    "forest": 3500,
    "grass": 1800,
    "terrace": 8000,
    "flat": 4500,
    "organic": 2500,
    "pomelo": 3000,
    "kumquat": 2500,
    "repair": 4000,
    "pest": 800,
    "cover": 600,
    "inspect": 500,
    "marketing": 1500,
    "processingPerKg": 12,
    "annualTeaUpkeep": 1500,
    "annualEngineeringUpkeep": 700
  },
  "land": {
    "slopes": [
      10,
      10,
      12,
      12,
      15,
      20,
      25,
      30
    ],
    "initialUse": [
      "tea",
      "tea",
      "tea",
      "tea",
      "tea",
      "tea",
      "tea",
      "forest"
    ],
    "downstream": [
      [],
      [],
      [
        0
      ],
      [
        1
      ],
      [
        1
      ],
      [
        2,
        3
      ],
      [
        4
      ],
      [
        5,
        6
      ]
    ],
    "map": [
      [
        0.35,
        0.75
      ],
      [
        0.6,
        0.75
      ],
      [
        0.77,
        0.56
      ],
      [
        0.52,
        0.56
      ],
      [
        0.27,
        0.56
      ],
      [
        0.65,
        0.36
      ],
      [
        0.36,
        0.36
      ],
      [
        0.52,
        0.16
      ]
    ],
    "terraceDirections": [
      "front",
      "front",
      "right",
      "front",
      "left",
      "right",
      "left",
      "front"
    ],
    "initialGrass": [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false
    ]
  },
  "disaster": {
    "baseRisk": {
      "10": 0.002,
      "12": 0.005,
      "15": 0.02,
      "20": 0.07,
      "25": 0.14,
      "30": 0.25
    },
    "weather": [
      {
        "id": "normal",
        "name": "普通颱風",
        "multiplier": 0.7
      },
      {
        "id": "strong",
        "name": "強烈颱風",
        "multiplier": 1
      },
      {
        "id": "extremeRain",
        "name": "極端豪雨",
        "multiplier": 1.2
      }
    ],
    "newMultiplier": 1.6666667,
    "forestMultiplier": 0.3,
    "grassMultiplier": 0.65,
    "terraceMultiplier": 0.6,
    "flatMultiplier": 1.15,
    "erosionRiskFactor": 0.6,
    "debrisErosion": 22,
    "sedimentTrigger": 2,
    "repairSoil": 30,
    "collapseSoil": 32,
    "debrisSoil": 15,
    "repairCost": 5000,
    "teaDebrisMultiplier": 1.5,
    "inspectionLandslideRepairCost": 5000,
    "inspectionErosionRepairCost": 1000,
    "inspectionRepairFactor": 0.5,
    "collapseChanceMultiplier": 1.96
  },
  "products": [
    {
      "id": "biluochun",
      "name": "碧螺春綠茶",
      "process": "green",
      "price": 1300
    },
    {
      "id": "white",
      "name": "白茶",
      "process": "white",
      "price": 1450
    },
    {
      "id": "pouchong",
      "name": "包種茶",
      "process": "partial",
      "price": 1400
    },
    {
      "id": "oolong",
      "name": "烏龍茶",
      "process": "partial",
      "price": 1500
    },
    {
      "id": "black",
      "name": "紅茶",
      "process": "black",
      "price": 1450
    },
    {
      "id": "honey",
      "name": "蜜香紅茶",
      "process": "honey",
      "price": 2600
    },
    {
      "id": "pomelo",
      "name": "柚香綠茶",
      "process": "pomelo",
      "price": 3200
    },
    {
      "id": "kumquat",
      "name": "金桔茶",
      "process": "kumquat",
      "price": 2800
    }
  ],
  "development": [
    {
      "id": "icecream",
      "name": "碧螺春冰淇淋",
      "cost": 5000,
      "bonus": 0.08
    },
    {
      "id": "croissant",
      "name": "茶香金牛角",
      "cost": 7000,
      "bonus": 0.1
    },
    {
      "id": "tour",
      "name": "茶園體驗",
      "cost": 8000,
      "bonus": 0.12
    },
    {
      "id": "jam",
      "name": "金桔茶果醬",
      "cost": 6000,
      "bonus": 0.06
    },
    {
      "id": "kombucha",
      "name": "蜜香康普紅茶",
      "cost": 7000,
      "bonus": 0.07
    },
    {
      "id": "milkTea",
      "name": "三角湧烏龍奶茶",
      "cost": 6500,
      "bonus": 0.06
    },
    {
      "id": "powder",
      "name": "養生碧螺春綠茶粉",
      "cost": 5500,
      "bonus": 0.05
    }
  ],
  "achievements": [
    {
      "id": "income",
      "name": "茶業經營",
      "metric": "money",
      "threshold": 150000,
      "cardTitle": "我是茶金王",
      "story": "這幾年下來經營順利，你成為了有錢的茶農！",
      "lesson": "六年結束時，扣除成本後的剩餘資金達到初始本金1.5倍，才是茶金王。累積營收不等於實際賺到的錢。",
      "artCell": 0
    },
    {
      "id": "processing",
      "name": "製茶職人",
      "metric": "teaVarieties",
      "threshold": 8,
      "cardTitle": "製茶小達人",
      "story": "所有種類的茶都做過一次，你具有不同製程的製茶實力。從綠茶到花果風味茶，你學會配合材料選擇製法。",
      "lesson": "同樣來自茶樹的葉子，經過不同加工，能成為不同商品；有些配方還需要特定的採收材料。",
      "artCell": 1
    },
    {
      "id": "soil",
      "name": "水土守護",
      "metric": "soil",
      "threshold": 80,
      "cardTitle": "茶山守護者",
      "story": "你照顧了山坡上的表土，讓茶樹有可以繼續生長的家。",
      "lesson": "草生、森林、巡檢與工程各有作用，防災還要考慮坡度、降雨及上游。",
      "artCell": 2
    },
    {
      "id": "ecology",
      "name": "生態共好",
      "metric": "ecology",
      "threshold": 70,
      "cardTitle": "蝴蝶的好鄰居",
      "story": "茶山裡留下了綠草和樹木，也多了鳥與蝴蝶的身影。",
      "lesson": "草生與有機可以搭配；仍要觀察病蟲害，生態共存不等於完全不管理。",
      "artCell": 3
    },
    {
      "id": "brand",
      "name": "茶鄉品牌",
      "metric": "brand",
      "threshold": 30,
      "cardTitle": "三峽茶明星",
      "story": "你用心介紹家鄉的茶，讓更多人認識三峽茶山的故事。",
      "lesson": "品牌靠產品、體驗與經營累積；有機草生茶園也能走向生態觀光。",
      "artCell": 4
    },
    {
      "id": "products",
      "name": "地方創新",
      "metric": "products",
      "threshold": 2,
      "cardTitle": "茶香創意家",
      "story": "你把茶香帶進甜點與體驗，讓地方產業多了新的可能。",
      "lesson": "商品開發要投入資金與時間。想想哪些創意能和你的茶園特色相配。",
      "artCell": 5
    },
    {
      "id": "volunteer",
      "name": "打工換宿",
      "metric": "volunteer",
      "threshold": 1,
      "cardTitle": "觀光農場遠近馳名",
      "story": "你利用了打工換宿，雖然他們觀光客都做得不太好，但你趁機推銷了更多茶產品回去。",
      "lesson": "剛接觸農務的旅人需要時間學習。打工換宿能增加人手與觀光交流，也需要安排住宿、教學和工作分配。",
      "artCell": 6
    },
    {
      "id": "firefly",
      "name": "生態保育",
      "cardTitle": "火金姑",
      "metric": "firefly",
      "threshold": 1,
      "artCell": 7,
      "story": "你的農園開始了生態保育，所以螢火蟲又回來了。四塊茶園保留草地覆蓋或採用有機耕種，夜裡出現點點光芒。",
      "lesson": "生態保育需要合適的棲地，也需要長期照顧。遊戲以四塊茶園作為成果條件；真實螢火蟲還受到水質、光害與棲地環境影響。"
    }
  ],
  "balance": {
    "brandPricePerPoint": 0.003,
    "marketingBrand": 8,
    "developmentBrand": 4,
    "mixedTeaFraction": 0.8,
    "fruitAnnualIncome": 0,
    "grassEcology": 4,
    "forestEcology": 10,
    "organicEcology": 3,
    "pestEcologyPenalty": 3,
    "pestResistanceLoss": 12,
    "organicResistanceRecovery": 16,
    "conventionalResistanceRecovery": 28,
    "inspectionSoilGain": 1
  },
  "knowledge": [
    {
      "id": "place",
      "title": "丘陵與地方產業",
      "text": "三峽的坡地是茶產業的生活空間。經營者需要同時考量坡度、土地利用、加工與收益。",
      "source": "茶及飲料作物改良場",
      "url": "https://www.tbrs.gov.tw/"
    },
    {
      "id": "new",
      "title": "開發的影響立即發生",
      "text": "新整地會擾動坡地；遊戲在當年就提高風險。真實工程與坡地安全需專業評估。",
      "source": "農村發展及水土保持署",
      "url": "https://246.ardswc.gov.tw/Bulletin/FAQ"
    },
    {
      "id": "chain",
      "title": "採茶不等於茶商品",
      "text": "採收取得茶菁，製茶還需要加工與時間。遊戲以兩個獨立回合呈現這條產業鏈。",
      "source": "茶及飲料作物改良場",
      "url": "https://www.tbrs.gov.tw/"
    },
    {
      "id": "erosion",
      "title": "表土去哪裡了？",
      "text": "地表覆蓋與土地利用會影響沖蝕。遊戲讓表土流失留下紀錄，接續影響坡地狀態。",
      "source": "農村發展及水土保持署",
      "url": "https://www.ardswc.gov.tw/"
    },
    {
      "id": "landslide",
      "title": "上坡與下坡是相連的",
      "text": "崩塌土砂可能沿坡移動，影響下游土地與道路。坡度、地表狀態與降雨要一起思考。",
      "source": "農村發展及水土保持署",
      "url": "https://246.ardswc.gov.tw/"
    },
    {
      "id": "warning",
      "title": "天晴不等於安全",
      "text": "真實災害時，依地方政府警戒與撤離指示行動，不為採收冒險進入受管制區域。遊戲災害機率不是預警工具。",
      "source": "農村發展及水土保持署",
      "url": "https://246.ardswc.gov.tw/Bulletin/FAQ"
    },
    {
      "source": "本遊戲教學機制",
      "id": "eco",
      "url": "https://www.tbrs.gov.tw/",
      "text": "遊戲中，草生搭配有機管理會降低病蟲壓力；所有茶園都採行時，解鎖生態茶園觀光品牌。鳥與蝴蝶是生態提示，不代表每隻蝴蝶都會吃害蟲。效果為教學參數，田間仍需觀察與管理。",
      "title": "草生、有機與生態茶園觀光"
    }
  ],
  "ecoFarming": {
    "pestPressureFactor": 0.2,
    "tourBrandBonus": 15,
    "organicBarePestFactor": 1.25
  },
  "pests": {
    "baseAttackChance": 0.25,
    "attackChanceMultiplier": 1.2,
    "attackResistanceLoss": 8,
    "attackGrowthLoss": 8,
    "unmanagedThreshold": 2,
    "unmanagedChanceFactor": 1.5,
    "unmanagedExtraPerSeason": 0.25,
    "unmanagedMaxFactor": 2.5,
    "unmanagedResistanceLoss": 6
  },
  "intercropping": {
    "pestChanceFactor": 0.8,
    "soilLossFactor": 0.75,
    "saleMin": 1,
    "saleMax": 1.2
  },
  "soil": {
    "healthyTopsoil": 95,
    "severeTopsoil": 55,
    "seasonRateMin": 0,
    "seasonRateMax": 0.03,
    "summerRateMin": 0.02,
    "summerRateMax": 0.08,
    "bareMultiplier": 2,
    "newLandMultiplier": 2,
    "terraceLossFactor": 0.5,
    "grassLossFactor": 0.5,
    "forestLossFactor": 0.2,
    "grassRecovery": 1,
    "drainageLossFactor": 0.5,
    "lateYearFactors": [
      1,
      1,
      1.25,
      1.5,
      1.75,
      2
    ]
  },
  "labor": {
    "personalPlots": 3,
    "fatigueStartYear": 3,
    "fatiguePlotLoss": 2,
    "maxWorkers": 2,
    "workerExtraPlots": 2,
    "workerPriceFactor": 0.9,
    "workerAnnualCost": 6000,
    "volunteerExtraPlots": 3,
    "volunteerYieldFactor": 0.5,
    "volunteerAnnualCost": 3000
  },
  "recipes": {
    "kumquatFruitFraction": 0.5,
    "kumquatFruitPerTea": 1,
    "kumquatFruitProductRatio": 0.25
  },
  "environment": {
    "initialEcology": 46,
    "restGain": 10,
    "grassSeasonGain": 1,
    "organicSeasonGain": 1,
    "pestManagementLoss": 5,
    "fireflyThreshold": 50,
    "fireflyMonthlyIncome": 3000
  },
  "operations": {
    "monthsPerSeason": 3,
    "monthlyCost": 1955,
    "monthlyCostCap": 40000
  }
};

// js\state\gameState.js

function createState(seed=C.seed){return {version:C.version,environment:{ecology:C.environment.initialEcology},game:{year:1,season:0,turn:1,phase:'annualPlanning',maxYear:C.maxYear,turnsPerSeason:C.turnsPerSeason},economy:{money:C.initialMoney,revenue:0,costs:0,brand:0},annual:{modifiedPlots:[],inspection:false,typhoonResolved:false,weather:null},land:C.land.slopes.map((slope,i)=>({id:i+1,slope,landUse:C.land.initialUse[i],newlyDeveloped:false,tea:{planted:C.land.initialUse[i]==='tea',cultivar:i===3?'oolong':'ganzai',plantYear:0,age:2,yieldStage:'normal',growth:85,lastHarvest:null},grassCover:!!C.land.initialGrass[i]||C.land.initialUse[i]==='grass',organic:false,intercropping:null,engineering:null,resistance:80,topsoil:95,disaster:{erosion:0,landslide:false,debrisFlow:false}})),progress:{madeTeas:[]},inventory:{kumquat:0,freshTea:[],processedTea:{},processedMixedTea:{},processedQualityValue:{},processedMixedQualityValue:{}},labor:{year:1,mode:'none',workers:0,confirmed:false},upgrades:{},achievements:[],knowledge:['place'],flags:{debrisFlow:false,roadClosed:false},totals:{harvested:0,processed:0,turns:0,pesticide:0,pestAttacks:0},seed:String(seed).slice(0,80),random:hashSeed(seed),history:[],logs:['接手三峽八塊坡地，開始六年茶園經營。']}}
function hashSeed(text){let n=2166136261;for(const c of String(text))n=Math.imul(n^c.charCodeAt(0),16777619);return n>>>0||1}
function randomValue(s){let n=s.random>>>0;n^=n<<13;n^=n>>>17;n^=n<<5;s.random=n>>>0;return s.random/4294967296}
function addLog(s,text){s.logs.unshift(`第${s.game.year}年${C.seasons[s.game.season]}・${text}`);s.logs=s.logs.slice(0,100)}
function unlock(s,id){if(!s.knowledge.includes(id))s.knowledge.push(id)}
function spend(s,cost){if(s.economy.money<cost)throw new Error('資金不足，請調整規劃或出售茶商品。');s.economy.money-=cost;s.economy.costs+=cost}
function seasonKey(s){return `${s.game.year}-${s.game.season}`}
function ecology(s){if(Number.isFinite(s.environment?.ecology))return s.environment.ecology;return Math.max(0,Math.min(100,Math.round(s.land.reduce((n,p)=>n+(p.landUse==='forest'?C.balance.forestEcology:0)+(p.grassCover?C.balance.grassEcology:0)+(p.organic?C.balance.organicEcology:0),0)-s.totals.pesticide*C.balance.pestEcologyPenalty)))}

// js\land\soilSystem.js


function seasonalErosionRate(p,roll,summer=false,year=1){
  const c=C.soil;let rate=(summer?c.summerRateMin:c.seasonRateMin)+Math.max(0,Math.min(1,roll))*((summer?c.summerRateMax:c.seasonRateMax)-(summer?c.summerRateMin:c.seasonRateMin));
  if(p.landUse==='tea'&&!p.grassCover)rate*=c.bareMultiplier;
  if(p.newlyDeveloped)rate*=c.newLandMultiplier;
  if(p.engineering==='terrace')rate*=c.terraceLossFactor;
  if(p.grassCover||p.landUse==='grass')rate*=c.grassLossFactor;
  if(p.intercropping)rate*=C.intercropping.soilLossFactor;
  if(p.landUse==='forest')rate*=c.forestLossFactor;
  rate*=c.lateYearFactors[Math.max(0,Math.min(C.maxYear-1,year-1))];
  if(p.disaster.drainageYear===year)rate*=p.disaster.drainageFactor??c.drainageLossFactor;
  return Math.min(1,rate);
}
function resolveSeasonErosion(s){
  const losses=s.land.map(p=>{const rate=seasonalErosionRate(p,randomValue(s),s.game.season===1,s.game.year),loss=p.topsoil*rate;p.topsoil=Math.max(0,p.topsoil-loss);p.disaster.erosion=Math.min(100,p.disaster.erosion+loss);const recovery=(p.grassCover||p.landUse==='grass')&&!p.disaster.landslide&&!p.disaster.debrisFlow?Math.min(C.soil.grassRecovery,100-p.topsoil):0;p.topsoil+=recovery;p.disaster.erosion=Math.max(0,p.disaster.erosion-recovery);return {id:p.id,rate,loss,recovery}});
  if(losses.some(x=>x.loss>0))unlock(s,'erosion');
  addLog(s,`本季表土累積流失：${losses.map(x=>String.fromCharCode(64+x.id)+' 流失'+x.loss.toFixed(2)+'／草生回復'+x.recovery.toFixed(2)+'點').join('、')}。草皮、梯田與混作只能減緩，不能保證零流失。`);
  return losses;
}
function soilSeverity(p){
  if(p.disaster.landslide||p.disaster.debrisFlow)return 'collapsed';
  if(p.topsoil<=C.soil.severeTopsoil)return 'severe';
  return p.disaster.erosion>0||p.topsoil<C.soil.healthyTopsoil?'light':'none';
}
function soilYieldFactor(p){
  const severity=soilSeverity(p);if(severity==='collapsed')return 0;
  const maintained=Math.max(0,Math.min(1,p.topsoil/100));
  return 1-(1-maintained)/2;
}

// js\ui\hillGeometry.js


function hillTier(id){const exits=C.land.downstream[id-1]||[];return exits.length?1+Math.max(...exits.map(index=>hillTier(index+1))):0}
function hillPerspectiveScale(id){return 1.06-hillTier(id)*.05}
// Pack the same eight plots around the hill's centre and foreground baseline.
// Only projection spacing changes; slopes, drainage and fixed terrace directions stay in C.land.
function hillPositions(){const centerX=468,frontY=.75*620*.82+78;return C.land.map.map(([x,y])=>[centerX+(x*900-centerX)*.78,frontY+(y*620*.82+78-frontY)*.88])}
function hillDrawOrder(land){const points=hillPositions();return [...land].sort((a,b)=>points[a.id-1][1]-points[b.id-1][1]||points[a.id-1][0]-points[b.id-1][0])}
function soilBlockGeometry(p,x,y,width=248){
  const half=width*.425,foot=width*.025,shoulder=y-width*.08,front=y+width*.12;
  const depth=width*(.15+hillTier(p.id)*.065);
  const left=[x-half,shoulder],tip=[x,front],right=[x+half,shoulder];
  return {depth,leftFace:[left,tip,[x,front+depth],[x-half-foot,shoulder+depth]],rightFace:[tip,right,[x+half+foot,shoulder+depth],[x,front+depth]],surface:[[x,y-width*.34],right,tip,left]};
}
function pointInHillPolygon(x,y,polygon){let inside=false;for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){const [xi,yi]=polygon[i],[xj,yj]=polygon[j];if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)inside=!inside}return inside}
function hitHill(land,x,y,scales=null){const points=hillPositions();return hillDrawOrder(land).reverse().find(p=>{const [px,py]=points[p.id-1],scale=scales?.[p.id-1]||1,hx=px+(x-px)/scale,hy=py+(y-py)/scale,shape=soilBlockGeometry(p,px,py);const canopy=p.landUse==='forest'&&Math.abs(hx-px)<85&&hy>py-103&&hy<py-20;return canopy||[shape.surface,shape.leftFace,shape.rightFace].some(poly=>pointInHillPolygon(hx,hy,poly))})?.id||0}

function paintSoilBlock(ctx,p,x,y,width){
  const shape=soilBlockGeometry(p,x,y,width),severity=soilSeverity(p),worn=['light','severe','collapsed'].includes(severity);
  const colors=severity==='severe'||severity==='collapsed'?['#ac7847','#815735','#c2975a','#70492e']:worn?['#9e6a3d','#795034','#b9874c','#65462e']:['#91603b','#6f4931','#b58149','#59402d'];
  const trace=points=>{ctx.beginPath();points.forEach(([px,py],i)=>i?ctx.lineTo(px,py):ctx.moveTo(px,py));ctx.closePath()};
  [shape.leftFace,shape.rightFace].forEach((face,side)=>{
    ctx.save();trace(face);ctx.fillStyle=colors[side];ctx.fill();ctx.clip();
    const startX=x-width/2,startY=y-width*.12,unit=Math.max(2,Math.round(width/100));
    const palette=side?['#785135','#805738','#6c4932','#8b5e3c','#98683e']:['#94653e','#a17247','#875e3b','#ad7b4c','#7e5738'];
    for(let row=0;row<Math.ceil((shape.depth+width*.25)/unit);row++)for(let col=0;col<Math.ceil(width/unit);col++){
      const coarse=(Math.imul((col>>2)+p.id*43,73856093)^Math.imul((row>>2)+side*17,19349663))>>>0;
      const fine=(Math.imul(col+p.id,83492791)^Math.imul(row+side,2971215073))>>>0;
      ctx.fillStyle=palette[(coarse+fine%3)%palette.length];ctx.globalAlpha=.34+(fine%4)*.08;ctx.fillRect(Math.round(startX+col*unit),Math.round(startY+row*unit),unit,unit);
      if(fine%83===0){ctx.globalAlpha=.8;ctx.fillStyle=fine%2?'#b19265':'#65533e';ctx.fillRect(Math.round(startX+col*unit),Math.round(startY+row*unit),unit*3,unit*2)}
    }
    ctx.globalAlpha=1;
    // A thin dark topsoil band and irregular roots keep the cut faces readable.
    ctx.strokeStyle='#59442d';ctx.lineWidth=Math.max(3,width*.025);ctx.beginPath();ctx.moveTo(...face[0]);ctx.lineTo(...face[1]);ctx.stroke();
    if(worn){for(let i=0;i<(severity==='light'?2:5);i++){const rx=x-width*.35+i*width*.16,ry=y-width*.03+i%2*width*.05;ctx.strokeStyle=i%2?'#674229':'#d4aa6d';ctx.lineWidth=unit;ctx.beginPath();ctx.moveTo(rx,ry);ctx.lineTo(rx+unit*2,ry+shape.depth*.25);ctx.lineTo(rx-unit*2,ry+shape.depth*.5);ctx.stroke()}}
    ctx.restore();trace(face);ctx.strokeStyle='#4c3c2c';ctx.lineWidth=Math.max(1,width/165);ctx.stroke();
  });
  return shape;
}

// js\ui\artSystem.js



// User-fixed orientation: A/B/D/H front; E/G left; C/F right. Never infer from position.
function terraceDirection(p){return C.land.terraceDirections[p.id-1]}
function terrainSprite(p){
  const severity=soilSeverity(p),sheet=severity==='light'?'light':severity==='severe'?'severe':'unified';
  if(p.disaster.debrisFlow||p.disaster.landslide)return {sheet:'unified',cell:19,label:p.disaster.debrisFlow?'土石流':'崩塌'};
  if(p.landUse==='forest')return {sheet,cell:16,label:'森林'};
  if(p.landUse!=='tea')return {sheet,cell:17,label:'草地'};
  const species=p.tea.cultivar==='oolong'?1:0,cover=p.grassCover?1:0;
  if(p.engineering==='terrace')return {sheet,cell:(species*2+cover)*4+({left:1,right:2,front:3}[terraceDirection(p)]),label:(p.grassCover?'草生':'')+'階梯田'};
  if(p.tea.yieldStage==='low')return {sheet,cell:20+species*2+cover,label:'新植茶苗'};
  return {sheet,cell:(species*2+cover)*4,label:p.tea.cultivar==='oolong'?'青心烏龍':'青心柑仔'};
}
function visualLayers(p){const healthy=p.landUse==='tea'&&!p.disaster.landslide&&!p.disaster.debrisFlow;return {grass:healthy&&p.grassCover,organicWildlife:healthy&&p.organic,terrace:healthy&&p.engineering==='terrace',intercrop:healthy?p.intercropping:null,erosion:soilSeverity(p),young:healthy&&p.tea.yieldStage==='low'}}
function wildlife(ctx,img,x,y,w,h){const cw=img.naturalWidth/2,ch=img.naturalHeight,size=w*.19;ctx.drawImage(img,0,0,cw,ch,x+w*.27,y-h*.87,size,size);ctx.drawImage(img,cw,0,cw,ch,x-w*.43,y-h*.76,size,size)}
// Independent pixel ground vegetation stays visible beneath mixed crops and wildlife.
function paintGrassCover(ctx,p,x,y,w){
  const layers=visualLayers(p);if(!layers.grass)return;
  const damaged=layers.erosion==='severe',light=layers.erosion==='light',unit=w/180;
  const colors=damaged?['#637136','#929b43','#b0aa58']:light?['#3c6d2c','#69963c','#a1bd50']:['#28672d','#58a13b','#a0c94b'];
  const direction=p.engineering==='terrace'?terraceDirection(p):'left';
  // Four rows follow the same projected direction as the earth/terrace beds.
  for(let row=0;row<4;row++)for(let i=0;i<7;i++){
    if(damaged&&(i+row)%3===0)continue;
    const a=.13+row*.22,b=.12+i*.12,u=direction==='right'?b:a,v=direction==='right'?a:b;
    const gx=x+(u-v)*w*.40,gy=y-w*.22+(u+v)*w*.17;
    const px=Math.round(gx/unit)*unit,py=Math.round(gy/unit)*unit;
    ctx.fillStyle=colors[0];ctx.fillRect(px-3*unit,py,7*unit,2*unit);
    ctx.fillStyle=colors[1];ctx.fillRect(px-unit,py-3*unit,2*unit,5*unit);ctx.fillRect(px-3*unit,py-unit,unit,2*unit);ctx.fillRect(px+2*unit,py-2*unit,unit,3*unit);
    ctx.fillStyle=colors[2];ctx.fillRect(px,py-3*unit,unit,2*unit);
  }
}
function appearanceKey(p,width){return JSON.stringify([p.id,terrainSprite(p),visualLayers(p),p.artDirection,width])}
function createArt(onLoad){
  const soilCache=new Map(),highlightCache=new Map(),images={},sources={unified:'terrain-unified-v2.png',light:'terrain-erosion-light.png',severe:'terrain-erosion-severe.png',intercrop:'intercrop-overlays-v1.png',intercropDamage:'intercrop-erosion.png',wildlife:'organic-wildlife.png',world:'mountain-world.png'};let loaded=0;
  for(const [name,file] of Object.entries(sources)){const img=new Image();img.onload=()=>{loaded++;onLoad?.()};img.onerror=()=>onLoad?.();img.src='assets/'+file;images[name]=img}
  return {images,ready:()=>loaded===Object.keys(sources).length,
    paint(ctx,p,x,y,width=240,height=210,options={}){const sprite=terrainSprite(p),img=images[sprite.sheet];if(!img.complete||!img.naturalWidth)return false;
      const cw=img.naturalWidth/4,ch=img.naturalHeight/6,dh=width/2,layers=visualLayers(p);ctx.imageSmoothingEnabled=false;
      if(options.highlight&&loaded===Object.keys(sources).length){
        const key=appearanceKey(p,width);
        let item=highlightCache.get(key);
        if(!item){const depth=soilBlockGeometry(p,0,0,width).depth,tile=document.createElement('canvas');tile.width=Math.ceil(width*1.2+40);tile.height=Math.ceil(width*.7+depth+40);const ox=tile.width/2,oy=width*.53+20;this.paint(tile.getContext('2d'),p,ox,oy,width,height,{wildlife:false});const mask=document.createElement('canvas');mask.width=tile.width;mask.height=tile.height;const m=mask.getContext('2d');m.drawImage(tile,0,0);m.globalCompositeOperation='source-in';m.fillStyle='#ffe877';m.fillRect(0,0,mask.width,mask.height);item={tile,mask,ox,oy};highlightCache.set(key,item)}
        const line=options.highlight==='selected'?2:1,left=x-item.ox,top=y-item.oy;ctx.save();ctx.shadowColor=options.highlight==='selected'?'#ffdc56':'#f3ffb0';ctx.shadowBlur=options.highlight==='selected'?14:7;
        for(const [dx,dy] of [[-line,-line],[0,-line],[line,-line],[-line,0],[line,0],[-line,line],[0,line],[line,line]])ctx.drawImage(item.mask,left+dx,top+dy);
        ctx.restore();ctx.drawImage(item.tile,left,top);if(options.wildlife!==false&&layers.organicWildlife&&images.wildlife.complete)wildlife(ctx,images.wildlife,x,y,width,dh);return true;
      }
      const soilKey=[p.id,width,layers.erosion].join(':');let soil=soilCache.get(soilKey);if(!soil){const depth=soilBlockGeometry(p,0,0,width).depth,canvas=document.createElement('canvas');canvas.width=Math.ceil(width+6);canvas.height=Math.ceil(width*.245+depth+8);const originY=width*.115+3;paintSoilBlock(canvas.getContext('2d'),p,canvas.width/2,originY,width);soil={canvas,originY};soilCache.set(soilKey,soil)}ctx.drawImage(soil.canvas,x-soil.canvas.width/2,y-soil.originY);
      const insetY=Math.ceil(ch*.025);ctx.drawImage(img,sprite.cell%4*cw,Math.floor(sprite.cell/4)*ch+insetY,cw,ch-insetY*2,x-width/2,y-dh*.73+dh*insetY/ch,width,dh*(1-insetY*2/ch));
      paintGrassCover(ctx,p,x,y,width);
      const damaged=['light','severe'].includes(layers.erosion),overlay=images[damaged?'intercropDamage':'intercrop'];
      if(layers.intercrop&&overlay.complete&&overlay.naturalWidth){const sw=overlay.naturalWidth/2,split=Math.round(overlay.naturalHeight*.55),sy=damaged&&layers.erosion==='severe'?split:0,sh=damaged?(layers.erosion==='severe'?overlay.naturalHeight-split:split):overlay.naturalHeight,ow=width*.49,oh=damaged?ow*.85:ow;ctx.drawImage(overlay,layers.intercrop==='kumquat'?sw:0,sy,sw,sh,x-width*.18,y-dh*.89+(ow-oh),ow,oh)}
      if(options.wildlife!==false&&layers.organicWildlife&&images.wildlife.complete&&images.wildlife.naturalWidth)wildlife(ctx,images.wildlife,x,y,width,dh);
      return true;
    },
    preview(canvas,p){if(!canvas)return;const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);const depthRatio=soilBlockGeometry(p,0,0,1).depth,width=Math.min(canvas.width*.92,canvas.height*.9/(.57+depthRatio));this.paint(ctx,p,canvas.width/2,canvas.height*.06+width*.43,width,canvas.height)}
  };
}

// js\art-audit.js


const root=document.querySelector('#audit'),items=[];
for(const severity of ['none','light','severe'])for(const [direction,label] of [['none','無梯田'],['left','右後 → 左前'],['right','左後 → 右前'],['front','後方 → 正前']]){
  const section=document.createElement('section');section.innerHTML=`<h2>${({none:'正常',light:'輕度流失',severe:'嚴重流失'})[severity]}・${label}</h2><div class="audit-grid"></div>`;root.append(section);
  for(const cultivar of ['ganzai','oolong'])for(const grass of [false,true])for(const organic of [false,true])for(const mixed of [null,'pomelo','kumquat']){
    const p=structuredClone(createState().land[0]);p.tea.cultivar=cultivar;p.grassCover=grass;p.organic=organic;p.intercropping=mixed;p.engineering=direction==='none'?null:'terrace';p.id=direction==='left'?5:direction==='right'?3:1;p.topsoil=severity==='none'?95:severity==='light'?75:35;p.disaster.erosion=severity==='none'?0:severity==='light'?20:60;
    const card=document.createElement('article'),title=`${cultivar==='ganzai'?'柑仔':'烏龍'}・${grass?'草生':'裸地'}・${organic?'有機':'一般'}・${mixed==='pomelo'?'柚花':mixed==='kumquat'?'金桔':'無混作'}`;
    card.innerHTML=`<canvas width="320" height="210" aria-label="${title}"></canvas><p>${title}</p><small>基底 ${terrainSprite(p).cell}・混作 ${visualLayers(p).intercrop||'無'}・${p.engineering?terraceDirection(p):'無梯田'}</small>`;
    section.querySelector('.audit-grid').append(card);items.push({p,canvas:card.querySelector('canvas')});
  }
}
const art=createArt(render);
function render(){let count=0;for(const {p,canvas} of items){const ctx=canvas.getContext('2d');ctx.clearRect(0,0,320,210);if(art.paint(ctx,p,160,145,300,210))count++}document.querySelector('#status').textContent=`已繪製 ${count} / 288 種組合${art.ready()?' · 所需素材已全部載入':''}`}
render();

})();
