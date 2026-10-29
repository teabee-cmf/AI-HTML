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

// js\achievement\milestones.js


function madeTeaIds(s){return [...new Set([...(s.progress?.madeTeas||[]),...Object.keys(s.inventory.processedTea)])].filter(id=>C.products.some(p=>p.id===id))}
function fireflyFarmCount(s){return s.land.filter(p=>p.landUse==='tea'&&p.tea.planted&&(p.grassCover||p.organic)&&!p.disaster.landslide&&!p.disaster.debrisFlow).length}
function syncMilestones(s){s.progress??={madeTeas:[]};s.progress.madeTeas=madeTeaIds(s);if(s.progress.madeTeas.length===C.products.length&&!s.flags.teaMasterAchievement){s.flags.teaMasterAchievement=true;addLog(s,'收集成果「製茶小達人」：八種茶都做過一次！')}if(fireflyFarmCount(s)>=4&&!s.flags.fireflyAchievement){s.flags.fireflyAchievement=true;addLog(s,'收集成果「火金姑」：四塊茶園保留草地或採有機管理，螢火蟲又回來了。')}}

// js\ui\catalogData.js
// Text and references are also exported as the classroom Markdown handout.
const catalogEntries = [
  {id:'biluochun',name:'碧螺春',kind:'tea',cell:0,tag:'捲捲的綠茶',text:'碧螺春是三峽有名的綠茶。製茶時會加熱，讓茶葉停止氧化，再揉成彎彎的樣子，像小螺旋。泡開後，可以觀察淺綠的茶湯。',question:'為什麼綠茶要先加熱，紅茶卻要先讓葉子氧化呢？',recipe:'採收茶菁 → 工坊選「綠茶」。',sources:[['茶及飲料作物改良場：碧螺春','https://www.tbrs.gov.tw/ws.php?id=3782']]},
  {id:'white',name:'白茶',kind:'tea',cell:1,tag:'慢慢失水的茶',text:'白茶不是用白色的茶樹做的！採下的嫩芽葉先攤開，慢慢失去水分，這叫「萎凋」，接著再乾燥。傳統白茶不經殺菁，通常也不大力揉捻。',question:'如果天氣太濕，茶葉失水的速度會怎麼變？',recipe:'採收茶菁 → 工坊選「白茶」。',sources:[['茶及飲料作物改良場：臺灣特色茶分類及加工製程','https://www.tbrs.gov.tw/ws.php?id=5273&print=Y'],['文化部收錄茶業研究：白茶的萎凋','https://tcmb.culture.tw/zh-tw/detail?id=264380&indexCode=Culture_Event']]},
  {id:'pouchong',name:'包種茶',kind:'tea',cell:2,tag:'茶葉自己帶花香',text:'包種茶是輕度氧化的茶，乾茶常是彎彎的長條。製茶師讓茶葉慢慢失水，適時翻動，再加熱、揉捻與乾燥。即使不加入花朵，也可能聞到清雅的花香。',question:'包種茶的花香，一定是放了花才有的嗎？',recipe:'採收茶菁 → 工坊選「部分氧化」，滑桿低於50%。這是遊戲分類，不是真實茶類的分界。',sources:[['茶及飲料作物改良場：文山包種茶','https://www.tbrs.gov.tw/ws.php?id=3781&print=Y']]},
  {id:'oolong',name:'烏龍茶',kind:'tea',cell:3,tag:'翻動與揉捻的功夫',text:'烏龍茶屬於部分氧化的茶，香氣會隨製法改變。有些烏龍茶會反覆用布包起來揉，做成一顆顆球形或半球形。泡茶時，捲起來的葉子會慢慢展開。',question:'同一種茶樹，用不同製法，能做出不同的茶嗎？',recipe:'採收茶菁 → 工坊選「部分氧化」，滑桿50%以上。遊戲只簡化成兩種分類。',sources:[['茶及飲料作物改良場：臺灣特色茶分類及加工製程','https://www.tbrs.gov.tw/ws.php?id=4748']]},
  {id:'black',name:'紅茶',kind:'tea',cell:4,tag:'氧化帶來紅色茶湯',text:'紅茶的製法會讓茶葉充分氧化，常被稱作「全發酵茶」。茶葉先失水，再揉捻，讓葉子裡的物質接觸空氣、發生變化，最後乾燥。泡出的茶湯常是明亮的紅色或金紅色。',question:'紅茶的「發酵」，和微生物製作康普茶一樣嗎？',recipe:'採收茶菁 → 工坊選「紅茶」。',sources:[['茶及飲料作物改良場：紅茶','https://www.tbrs.gov.tw/ws.php?id=3788']]},
  {id:'honey',name:'蜜香紅茶',kind:'tea',cell:5,tag:'小昆蟲參與的香氣',text:'蜜香紅茶的蜜香，不一定是加了蜂蜜！小綠葉蟬吸食茶芽後，茶葉會產生變化，再配合適當製茶工夫，就可能出現蜜香。原來昆蟲和茶農，也能有特別的合作關係。',question:'昆蟲都只有壞處嗎？茶農還要觀察哪些事？',recipe:'工坊選「蜜香紅茶」，只使用採收時符合有機條件的茶菁。這是遊戲簡化；真實有機茶不保證有蜜香。',sources:[['茶及飲料作物改良場：蜜香茶','https://www.tbrs.gov.tw/ws.php?id=4803']]},
  {id:'pomelo',name:'柚香綠茶',kind:'tea',cell:6,tag:'採的是柚花',text:'柚樹不只可以收果實，香香的柚花也能和茶葉搭配。讓茶葉吸收花香的做法，叫作「窨（ㄧㄣˋ）製」。這款遊戲商品把柚花和綠茶結合，並不是把柚子果肉直接當茶葉。',question:'茶園旁種柚樹，除了果實，還能帶來什麼新商品？',recipe:'先安排柚花混作，再採收該地塊茶菁 → 工坊選「柚香綠茶」，只加工符合條件的批次。',sources:[['花蓮區農業改良場：柚香茶生產技術（實例以烏龍茶為茶底）','https://www.hdares.gov.tw/upload/hdares/files/web_structure/7769/132_101-103.pdf'],['文化部收錄茶業資料：薰花茶的茶胚','https://tcmb.culture.tw/zh-tw/detail?id=334864&indexCode=Culture_Object']]},
  {id:'kumquat',name:'金桔茶',kind:'tea',cell:7,tag:'金黃果實加茶香',text:'小小的金桔是柑橘家族的一員，果皮有香氣，果肉帶酸味。這款遊戲商品把金桔和茶葉搭配，做出帶果香的茶飲。種不同作物，收成和商品也能更多樣。',question:'同一塊田要分給茶樹和果樹，茶葉收成會有什麼取捨？',recipe:'金桔混作採收物一半為茶菁、一半為金桔。工坊用茶菁與金桔各一份製作金桔茶；果實可跨季保存。',sources:[['農業部食農教育：金棗（金柑）與小果柑橘','https://fae.moa.gov.tw/map/food_item.php?id=143&type=AS01']]},
  {id:'icecream',name:'碧螺春冰淇淋',kind:'creative',cell:8,tag:'把茶香放進甜點',text:'想像把碧螺春的茶香加入冰淇淋，變成茶鄉的小點心。遊客除了買茶，也能認識茶的不同吃法。這是本遊戲的創意商品構想。',question:'你會怎樣讓客人一看就知道它來自三峽？',recipe:'「商品開發」完成本項，即可收藏；屬永久開發加成，不另生產庫存。',sources:[]},
  {id:'croissant',name:'茶香金牛角',kind:'creative',cell:9,tag:'茶與地方點心相遇',text:'把茶香和金牛角麵包結合，替茶鄉設計一份伴手禮。外形、包裝和在地故事，都能幫助客人記住商品。這是本遊戲的創意商品構想。',question:'除了味道，包裝還能怎麼介紹茶農的故事？',recipe:'「商品開發」完成本項，即可收藏；屬永久開發加成，不另生產庫存。',sources:[]},
  {id:'jam',name:'金桔茶果醬',kind:'creative',cell:10,tag:'把混作變成伴手禮',text:'想像用金桔的果香搭配茶香，做成可以抹麵包的果醬。把收成加工成不同商品，是茶農增加商品選擇的一種方法。這是遊戲創意配方。',question:'果實除了直接賣掉，還能變成哪些商品？',recipe:'「商品開發」完成本項，即可收藏；遊戲不另外扣除茶菁與金桔庫存。',sources:[]},
  {id:'kombucha',name:'蜜香康普紅茶',kind:'creative',cell:0,sheet:'extra',tag:'認識微生物發酵',text:'康普茶是讓酵母菌和醋酸菌等微生物，改變加糖茶湯而成的飲品。這和紅茶製程中常說的「發酵」（主要是茶葉氧化）不同。這款遊戲創意商品，設想以蜜香紅茶作茶底。',question:'茶葉氧化和微生物發酵，是同一件事嗎？',recipe:'「商品開發」完成本項，即可收藏；只模擬商品開發，不是實作釀製教學。',sources:[['國立臺灣海洋大學：康普茶飲品開發研究','https://fs.ntou.edu.tw/var/file/73/1073/attach/46/pta_56385_9846407_28107.pdf']]},
  {id:'milkTea',name:'三角湧烏龍奶茶',kind:'creative',cell:1,sheet:'extra',tag:'茶鄉風味的新組合',text:'以烏龍茶搭配牛奶，想像一杯帶有茶鄉故事的奶茶。「三角湧」的名稱讓客人想到三峽，也讓商品更有地方特色。這是本遊戲的創意商品構想。',question:'你會用哪一個在地故事，替商品取名字？',recipe:'「商品開發」完成本項，即可收藏；屬永久開發加成，不另生產庫存。',sources:[]},
  {id:'powder',name:'養生碧螺春綠茶粉',kind:'creative',cell:2,sheet:'extra',tag:'讓茶葉換個模樣',text:'把碧螺春綠茶研磨成粉，是這款商品的點子。茶粉可以用來設計餅乾、麵包等茶點，讓茶葉有更多用途。「養生」是遊戲商品名稱，不代表具有治療效果。',question:'茶粉和泡過後取出的茶湯，用在點心裡有什麼不同？',recipe:'「商品開發」完成本項，即可收藏；屬永久開發加成，不另生產庫存。',sources:[]}
];

// js\ui\catalogUI.js


const PRODUCT_KEY='sanxia-product-catalog-v1';
let catalogMemory=[];
function catalogCollection(s){let ids=catalogMemory;try{const raw=JSON.parse(localStorage.getItem(PRODUCT_KEY)||'[]');if(Array.isArray(raw))ids=raw}catch{}const now=[...madeTeaIds(s),...catalogEntries.filter(e=>e.kind==='creative'&&s.upgrades[e.id]).map(e=>e.id)];ids=[...new Set([...ids,...now])].filter(id=>catalogEntries.some(e=>e.id===id));catalogMemory=ids;try{localStorage.setItem(PRODUCT_KEY,JSON.stringify(ids))}catch{}return ids}
function productIcon(e){const columns=e.sheet==='extra'?3:4,rows=e.sheet==='extra'?1:3;return `<span class="product-icon ${e.sheet==='extra'?'extra-sheet':''}" role="img" aria-label="${e.name}像素插畫" style="--bx:${(e.cell%columns)/(columns-1)*100}%;--by:${rows===1?0:Math.floor(e.cell/columns)/(rows-1)*100}%"></span>`}
function catalogMarkup(s){const collected=catalogCollection(s),made=madeTeaIds(s);return `<p class="modal-sub">小小茶鄉收藏家 · 已收藏 ${collected.length} / ${catalogEntries.length} 項。每張圖都能點開閱讀，還沒做過也能先認識！</p><div class="modal-notice"><b>製茶小達人：本輪 ${made.length} / 8 種茶</b><p>八種茶各製作一次就能取得成果。創意商品由「商品開發」收藏，不計入八種茶。</p><progress value="${made.length}" max="8" aria-label="本輪製茶種類"></progress></div>${['tea','creative'].map(kind=>`<h3>${kind==='tea'?'八種茶品':'六款創意商品'}</h3><div class="product-catalog">${catalogEntries.filter(e=>e.kind===kind).map(e=>`<button class="catalog-card ${collected.includes(e.id)?'collected':'uncollected'}" data-catalog="${e.id}">${productIcon(e)}<strong>${e.name}</strong><small>${e.tag}</small><span class="catalog-status">${collected.includes(e.id)?'★ 已收藏':'◇ 尚未收藏'}${made.includes(e.id)?' · 本輪已製作':e.kind==='creative'&&s.upgrades[e.id]?' · 本輪已開發':''}</span><small>點開讀一讀 →</small></button>`).join('')}</div>`).join('')}<p class="modal-sub">收藏留在本瀏覽器，重新開局仍可閱讀；單局製茶紀錄會隨存檔匯出。真實茶知識與遊戲規則分開說明，創意商品為遊戲設計。</p>`}
function catalogStory(s,id){const e=catalogEntries.find(e=>e.id===id);if(!e)return null;const collected=catalogCollection(s).includes(id);return {title:e.name,html:`<article class="catalog-story">${productIcon(e)}<p class="card-status">${collected?'★ 已收藏':'◇ 尚未收藏 · 可以先讀一讀'}</p><h3>${e.tag}</h3><p class="child-reading">${e.text}</p><div class="modal-notice"><b>想一想</b><p>${e.question}</p></div><div class="modal-notice"><b>遊戲裡怎麼收藏？</b><p>${e.recipe}</p></div>${e.sources.length?`<details class="catalog-sources"><summary>老師的資料來源 ↗</summary>${e.sources.map(([title,url])=>`<p><a href="${url}" target="_blank" rel="noopener">${title} ↗</a></p>`).join('')}</details>`:'<p class="modal-sub">這是本遊戲設計的創意商品，不是官方既有產品或標準配方。</p>'}</article><div class="modal-footer"><button class="primary" id="catalog-back">回到產品圖鑑 →</button></div>`}}

// js\tea\laborSystem.js


function seasonalLabor(s){return s.game.year>=C.labor.fatigueStartYear}
function laborPlan(s){return s.labor?.year===s.game.year&&(!seasonalLabor(s)||s.labor.prepaidYear===s.game.year||s.labor.season===s.game.season)?s.labor:{year:s.game.year,season:s.game.season,mode:'none',workers:0,confirmed:false}}
function laborCost(s,mode,workers=1){const annual=mode==='worker'?workers*C.labor.workerAnnualCost:mode==='volunteer'?C.labor.volunteerAnnualCost:0;return annual/(seasonalLabor(s)?C.seasons.length:1)}
function harvestCapacity(s){const plan=laborPlan(s),personal=Math.max(0,C.labor.personalPlots-(seasonalLabor(s)?C.labor.fatiguePlotLoss:0));return Math.min(8,personal+(plan.mode==='worker'?plan.workers*C.labor.workerExtraPlots:plan.mode==='volunteer'?C.labor.volunteerExtraPlots:0))}
function harvestedPlots(s){return s.land.filter(p=>p.tea.lastHarvest===seasonKey(s)).length}
function remainingHarvestCapacity(s){return Math.max(0,harvestCapacity(s)-harvestedPlots(s))}
function laborYieldFactor(s){return laborPlan(s).mode==='volunteer'?C.labor.volunteerYieldFactor:1}
function laborPriceFactor(s){return laborPlan(s).mode==='worker'?C.labor.workerPriceFactor:1}
function canHireLabor(s){return !s.annual.inspectionPending&&!laborPlan(s).confirmed&&(s.game.phase==='annualPlanning'||seasonalLabor(s)&&s.game.phase==='playerAction'&&harvestedPlots(s)===0)}
function hireLabor(s,mode,workers=1){
  if(laborPlan(s).confirmed)throw new Error(seasonalLabor(s)?'本季已確認聘工方案，下季可重新安排。':'今年已確認聘工方案，明年可重新安排。');
  if(!canHireLabor(s))throw new Error(seasonalLabor(s)?'本季首次採收前可確認人力；巡檢期間請先完成巡檢。':'聘工方案在年度規劃時決定。');
  if(!['none','worker','volunteer'].includes(mode))throw new Error('請選擇聘工方案。');
  if(mode==='worker'&&(!Number.isInteger(workers)||workers<1||workers>C.labor.maxWorkers))throw new Error('每次最多聘請兩名工人。');
  const count=mode==='worker'?workers:0,cost=laborCost(s,mode,count);if(cost>0)spend(s,cost);s.labor={year:s.game.year,season:s.game.season,mode,workers:count,confirmed:true};
  if(mode==='volunteer'){s.flags.volunteerAchievement=true;s.upgrades.tour=true}
  const period=seasonalLabor(s)?'本季':'本年度';addLog(s,`${period}${mode==='worker'?'聘請 '+count+' 名新進工人':mode==='volunteer'?'安排打工換宿':'由本人照顧'}，每季可採 ${harvestCapacity(s)} 塊地，費用 $${cost}。`);
  return `${period}人力已確認：每季最多採 ${harvestCapacity(s)} 塊地，仍需每塊用一回合；不占土地開發額度。`;
}

// js\disaster\disasterSystem.js
function typhoonAlreadyResolved(s){return !!s.annual.typhoonResolved||s.history.some(h=>h.year===s.game.year)}


function riskFor(s,p,w){const d=C.disaster;let risk=d.baseRisk[p.slope]*w.multiplier*d.collapseChanceMultiplier;if(p.newlyDeveloped)risk*=d.newMultiplier;if(p.landUse==='forest')risk*=d.forestMultiplier;if(p.grassCover)risk*=d.grassMultiplier;if(p.engineering==='terrace')risk*=d.terraceMultiplier;if(p.engineering==='flat')risk*=d.flatMultiplier;if(p.disaster.protectionYear===s.game.year)risk*=p.disaster.protectionFactor??d.inspectionRepairFactor;risk*=1+p.disaster.erosion/100*d.erosionRiskFactor;return Math.min(.95,risk)}
// Existing mass-sediment triggers remain certain; this roll models additional tea-field exposure.
function teaDebrisChance(s,p,w,incoming=0,multiplier=C.disaster.teaDebrisMultiplier){if(p.landUse!=='tea'||!p.tea.planted||(!p.disaster.landslide&&incoming<=0))return 0;return Math.min(1,riskFor(s,p,w)*multiplier)}
function forecastYear(s){s.annual.weather=C.disaster.weather[Math.floor(randomValue(s)*C.disaster.weather.length)]}
function resolveTyphoon(s){if(typhoonAlreadyResolved(s))return null;const w=s.annual.weather,d=C.disaster;const events=[],incoming=Array(8).fill(0);for(let i=7;i>=0;i--){const p=s.land[i];const before=p.disaster.erosion;const risk=riskFor(s,p,w);if(randomValue(s)<risk){p.disaster.landslide=true;p.topsoil=Math.min(p.topsoil,d.collapseSoil);p.tea.growth=0;events.push(`${String.fromCharCode(65+i)}（${p.slope}°）崩塌`);unlock(s,'landslide');for(const next of C.land.downstream[i])incoming[next]++}const mandatory=p.disaster.landslide&&w.id==='extremeRain'&&(before>=d.debrisErosion||incoming[i]>=d.sedimentTrigger)||incoming[i]>=d.sedimentTrigger;const debrisChance=teaDebrisChance(s,p,w,incoming[i]);if(mandatory||debrisChance>0&&randomValue(s)<debrisChance){p.disaster.debrisFlow=true;p.topsoil=Math.min(p.topsoil,d.debrisSoil);s.flags.debrisFlow=true;s.flags.roadClosed=true;events.push(`${String.fromCharCode(65+i)} 土石流，影響下游道路`);for(const next of C.land.downstream[i])incoming[next]+=d.sedimentTrigger}}const report={year:s.game.year,weather:w.name,events,soil:Math.round(s.land.reduce((n,p)=>n+p.topsoil,0)/8)};s.annual.typhoonResolved=true;s.history.push(report);addLog(s,`${w.name}結算：${events.length?events.join('；'):'未發生崩塌；逐季表土變化另列日誌'}。`);return report}

// js\disaster\inspectionSystem.js



function inspectionPreview(s){
  const weather=C.disaster.weather.find(w=>w.id==='strong');
  // A separate deterministic stream tests the slope without changing real weather or its dice.
  const risks=s.land.map(p=>{const rng={random:hashSeed(s.seed+'|inspection|'+s.game.year+'|'+p.id)},chance=riskFor(s,p,weather);return {id:p.id,chance,growth:p.tea.growth,danger:p.disaster.landslide||p.disaster.debrisFlow||randomValue(rng)<chance,choice:null}});
  return {year:s.game.year,weather:weather.name,risks};
}
function performInspection(s){
  if(s.annual.inspection)throw new Error('今年已巡檢，請查看原巡檢結果。');
  spend(s,C.costs.inspect);s.annual.inspection=true;s.annual.inspectionReport=inspectionPreview(s);s.annual.inspectionPending=true;
  return '已完成坡地健康檢查。可依地塊結果選擇修繕或排水維護，再完成本回合；本次檢查不造成實際災損。';
}
function inspectionMeasure(s,id,choice){
  if(!s.annual.inspectionPending||s.game.phase!=='playerAction')throw new Error('請先進行本年巡檢。');
  const report=s.annual.inspectionReport,row=report?.risks.find(r=>r.id===id),p=s.land[id-1];
  if(!row||report.year!==s.game.year)throw new Error('找不到本年巡檢地塊。');
  if(row.choice)throw new Error('這塊地已完成本次維護，不會重複扣款或疊加效果。');
  if(choice!==(row.danger?'repair':'drainage'))throw new Error('請依檢查結果選擇適合的措施。');
  const cost=row.danger?C.disaster.inspectionLandslideRepairCost:C.disaster.inspectionErosionRepairCost;spend(s,cost);
  if(row.danger){p.disaster.protectionYear=s.game.year;p.disaster.protectionFactor=C.disaster.inspectionRepairFactor}
  else {p.disaster.drainageYear=s.game.year;p.disaster.drainageFactor=C.soil.drainageLossFactor}
  row.choice=choice;addLog(s,String.fromCharCode(64+id)+' 地塊'+(row.danger?'完成危機修繕，本年後續崩塌率減半':'完成排水維護，本年剩餘季節沖蝕率減半')+'，費用 $'+cost+'。');
  return '已完成 '+String.fromCharCode(64+id)+' 地塊'+(row.danger?'修繕':'排水維護')+'，支付 $'+cost+'，不另耗農務回合。';
}
function finishInspection(s){if(!s.annual.inspectionPending)throw new Error('沒有待完成的巡檢。');s.annual.inspectionPending=false;return '本次巡檢與維護安排完成，使用一個農務回合；實際風雨仍依原年度天氣於夏季結算。'}

// js\tea\ecologySystem.js


function syncFirefly(s){if(ecology(s)<=C.environment.fireflyThreshold||s.flags.fireflyUnlocked)return false;s.flags.fireflyUnlocked=true;addLog(s,'生態度高於50，開啟螢火蟲夜間觀光；符合生態條件且道路暢通時可取得月收入。');return true}
function adjustEcology(s,amount,reason){s.environment??={ecology:ecology(s)};s.environment.ecology=Math.max(0,Math.min(100,s.environment.ecology+amount));syncFirefly(s);if(reason)addLog(s,`${reason}：生態度 ${amount>=0?'+':''}${amount}，目前 ${s.environment.ecology}。`)}
function accumulateEcology(s){const grass=s.land.filter(p=>p.grassCover||p.landUse==='grass').length,organic=s.land.filter(p=>p.landUse==='tea'&&p.organic).length;adjustEcology(s,grass*C.environment.grassSeasonGain+organic*C.environment.organicSeasonGain,'季末草皮與有機累積')}
function ecoPestFactor(p){if(p.landUse!=='tea'||!p.organic)return 1;return p.grassCover?C.ecoFarming.pestPressureFactor:C.ecoFarming.organicBarePestFactor}
function ecoTourismReady(s){const plots=s.land.filter(p=>p.landUse==='tea'&&p.tea.planted);return plots.length>0&&plots.every(p=>p.organic&&p.grassCover&&!p.disaster.landslide&&!p.disaster.debrisFlow)}
function syncEcoTourism(s){if(s.flags.ecoTourismUnlocked||!ecoTourismReady(s))return false;s.flags.ecoTourismUnlocked=true;s.upgrades.tour=true;s.economy.brand=Math.min(100,s.economy.brand+C.ecoFarming.tourBrandBonus);unlock(s,'eco');addLog(s,`所有茶園均採草生＋有機，解鎖「生態茶園觀光」，品牌 +${C.ecoFarming.tourBrandBonus}。森林可保留，不須開發。`);return true}

// js\economy\economySystem.js


function salePrice(s,p){const bonus=C.development.filter(d=>s.upgrades[d.id]).reduce((n,d)=>n+d.bonus,0);return Math.round(p.price*(1+s.economy.brand*C.balance.brandPricePerPoint+bonus))}
function sellTea(s,id){if(s.flags.roadClosed)throw new Error('道路中斷，暫時無法出貨。請先修復道路。');const p=C.products.find(x=>x.id===id),qty=s.inventory.processedTea[id]||0;if(!p||qty<=0)throw new Error('此商品沒有庫存。');const mixed=Math.min(qty,s.inventory.processedMixedTea?.[id]||0),saleFactor=mixed?C.intercropping.saleMin+randomValue(s)*(C.intercropping.saleMax-C.intercropping.saleMin):1;const qualityValue=s.inventory.processedQualityValue?.[id]??qty,mixedQualityValue=s.inventory.processedMixedQualityValue?.[id]??mixed;const income=Math.round(salePrice(s,p)*(qualityValue-mixedQualityValue+mixedQualityValue*saleFactor));s.economy.money+=income;s.economy.revenue+=income;s.inventory.processedTea[id]=0;if(s.inventory.processedMixedQualityValue)s.inventory.processedMixedQualityValue[id]=0;if(s.inventory.processedQualityValue)s.inventory.processedQualityValue[id]=0;if(s.inventory.processedMixedTea)s.inventory.processedMixedTea[id]=0;return `出售 ${p.name} ${qty} kg，收入 $${income.toLocaleString()}。${mixed?`其中 ${Math.round(mixed*10)/10} kg 混作茶得到 ${Math.round(saleFactor*100)}% 售價。`:'固定基價不隨機波動。'}`}
function developProduct(s,id){const p=C.development.find(x=>x.id===id);if(!p)throw new Error('找不到商品。');if(s.upgrades[id])throw new Error('商品已永久解鎖，不必再次開發。');spend(s,p.cost);s.upgrades[id]=true;s.economy.brand=Math.min(100,s.economy.brand+C.balance.developmentBrand);return `永久解鎖「${p.name}」，以後年度不必重購。`}
function marketBrand(s){spend(s,C.costs.marketing);s.economy.brand=Math.min(100,s.economy.brand+C.balance.marketingBrand);return '完成地方展售推廣，品牌提升。'}
function repairRoad(s){if(!s.flags.roadClosed)throw new Error('道路目前暢通。');spend(s,C.disaster.repairCost);s.flags.roadClosed=false;return '道路恢復通行，商品可以出貨；土石流歷史紀錄仍保留。'}
function settleYear(s){const tea=s.land.filter(p=>p.landUse==='tea').length,engineering=s.land.filter(p=>p.engineering).length,fruit=s.land.filter(p=>p.intercropping&&!p.disaster.landslide&&!p.disaster.debrisFlow).length;const cost=tea*C.costs.annualTeaUpkeep+engineering*C.costs.annualEngineeringUpkeep;const income=s.flags.roadClosed?0:fruit*C.balance.fruitAnnualIncome;s.economy.money+=income-cost;s.economy.costs+=cost;s.economy.revenue+=income;return {cost,income}}


function settleMonths(s){const key=seasonKey(s);s.economy.monthlySettlements??=[];if(s.economy.monthlySettlements.includes(key))return {income:0,cost:0};s.economy.monthlySettlements.push(key);const active=s.flags.fireflyUnlocked&&ecology(s)>C.environment.fireflyThreshold&&!s.flags.roadClosed,income=active?C.environment.fireflyMonthlyIncome*C.operations.monthsPerSeason:0,cost=Math.min(C.operations.monthlyCostCap,C.operations.monthlyCost)*C.operations.monthsPerSeason;s.economy.money+=income-cost;s.economy.revenue+=income;s.economy.costs+=cost;s.economy.fireflyRevenue=(s.economy.fireflyRevenue||0)+income;s.economy.operatingCosts=(s.economy.operatingCosts||0)+cost;addLog(s,'本季三個月：螢火蟲收入 $'+income+'、營業成本 $'+cost+'，淨額 $'+(income-cost)+'。');return {income,cost}}

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

// js\tea\recipeSystem.js

function honeyBatchEligible(s,b){return b.organicAtHarvest!==undefined?b.organicAtHarvest:!!b.honeyEligible||!!s.land[b.plotId-1]?.organic}
function pomeloBatchEligible(s,b){return b.intercropAtHarvest!==undefined?b.intercropAtHarvest==='pomelo':s.land[b.plotId-1]?.intercropping==='pomelo'}
function recipePlan(s,process){
  const selected=s.inventory.freshTea.filter(b=>process==='honey'?honeyBatchEligible(s,b):process==='pomelo'?pomeloBatchEligible(s,b):true);
  const total=selected.reduce((n,b)=>n+b.amount,0),fruit=process==='kumquat'?Math.min(s.inventory.kumquat||0,total*C.recipes.kumquatFruitPerTea):0;
  const tea=process==='kumquat'?fruit/C.recipes.kumquatFruitPerTea:total;
  return {tea,fruit,cost:Math.ceil(tea*C.costs.processingPerKg),batches:selected.map(b=>({source:b,amount:total?b.amount*tea/total:0})).filter(b=>b.amount>0),product:Math.round((tea*C.tea.processingRatio+fruit*C.recipes.kumquatFruitProductRatio)*10)/10};
}
function honeyEligibleAmount(s){return recipePlan(s,'honey').tea}
function harvestComposition(s,p,amount){const fruit=p.intercropping==='kumquat'?amount*C.recipes.kumquatFruitFraction:0;return {tea:amount-fruit,fruit}}

// js\tea\pestSystem.js



function unmanagedPestFactor(p){const n=p.pestSeasonsUnmanaged||0;return n<C.pests.unmanagedThreshold?1:Math.min(C.pests.unmanagedMaxFactor,C.pests.unmanagedChanceFactor+(n-C.pests.unmanagedThreshold)*C.pests.unmanagedExtraPerSeason)}
function pestPressureFactor(p){return ecoPestFactor(p)*(p.intercropping?C.intercropping.pestChanceFactor:1)*unmanagedPestFactor(p)}
function pestAttackChance(p,multiplier=C.pests.attackChanceMultiplier){
  if(p.landUse!=='tea'||!p.tea.planted||p.disaster.landslide||p.disaster.debrisFlow)return 0;
  return Math.min(1,C.pests.baseAttackChance*multiplier*pestPressureFactor(p));
}
function resolvePestAttack(s,p){
  const chance=pestAttackChance(p);
  if(!chance||randomValue(s)>=chance)return false;
  p.resistance=Math.max(25,p.resistance-C.pests.attackResistanceLoss);
  p.tea.growth=Math.max(0,p.tea.growth-C.pests.attackGrowthLoss);
  s.totals.pestAttacks=(s.totals.pestAttacks||0)+1;
  addLog(s,`${String.fromCharCode(64+p.id)} 地塊發生病蟲害，抗病蟲與生長勢各下降 ${C.pests.attackGrowthLoss}。可觀察土地資料，安排全場管理。`);
  return true;
}

// js\tea\teaSystem.js









function nextHarvestStreak(s,p){const prior=p.tea.lastHarvest?.split('-').map(Number);return prior&&prior[0]*4+prior[1]===(s.game.year*4+s.game.season-1)?Math.min(C.tea.harvestStreakCap,(p.tea.harvestStreak||1)+1):1}
function harvestGrowthCost(s,p){return C.tea.harvestGrowthCost+(nextHarvestStreak(s,p)-1)*C.tea.consecutiveHarvestExtraCost}
function expectedYield(s,p){if(remainingHarvestCapacity(s)<=0||p.landUse!=='tea'||!p.tea.planted||p.disaster.landslide||p.disaster.debrisFlow||p.tea.growth<C.tea.minimumGrowth||p.tea.lastHarvest===seasonKey(s))return 0;return Math.max(1,Math.round(C.tea.normalYield*(p.tea.plantYear===s.game.year?C.tea.firstYearFactor:1)*(p.tea.growth/100)*soilYieldFactor(p)*laborYieldFactor(s)*(p.resistance/100)*(p.intercropping?C.balance.mixedTeaFraction:1)))}
function harvestPlot(s,id){const p=s.land[id-1],amount=p&&expectedYield(s,p);if(remainingHarvestCapacity(s)<=0)throw new Error('本季人力已用完，請留待下一季；第三年起可在下季首次採收前重新安排聘工。');if(!amount)throw new Error('本地尚不可採收：確認土地、受災狀態、生長勢與本季採收紀錄。');const composition=harvestComposition(s,p,amount);s.inventory.kumquat=(s.inventory.kumquat||0)+composition.fruit;s.inventory.freshTea.push({plotId:id,cultivar:p.tea.cultivar,amount:composition.tea,intercropAtHarvest:p.intercropping,season:seasonKey(s),mixed:!!p.intercropping,qualityFactor:laborPriceFactor(s),organicAtHarvest:p.organic,honeyEligible:p.organic});const growthCost=harvestGrowthCost(s,p);p.tea.harvestStreak=nextHarvestStreak(s,p);p.tea.growth=Math.max(0,p.tea.growth-growthCost);p.tea.lastHarvest=seasonKey(s);s.totals.harvested+=composition.tea;unlock(s,'chain');return `採收 ${String.fromCharCode(64+id)} 地塊茶菁 ${composition.tea} kg${composition.fruit?'、金桔 '+composition.fruit+' kg':''}，健康度下降 ${growthCost}；連續採收 ${p.tea.harvestStreak} 季，尚需另外製茶。`}
function processTea(s,process,oxidation=25){
  if(!['green','white','partial','black','honey','pomelo','kumquat'].includes(process))throw new Error('請選擇製茶方式。');
  const plan=recipePlan(s,process);if(!plan.tea)throw new Error(process==='honey'?'沒有符合有機條件的茶菁。':process==='pomelo'?'沒有柚花混作茶菁。':process==='kumquat'?'金桔茶需要茶菁與金桔各一份。':'尚無茶菁，先採收一塊茶園。');
  spend(s,plan.cost);
  const id=process==='green'?'biluochun':process==='white'?'white':process==='partial'?(Number(oxidation)<50?'pouchong':'oolong'):process==='honey'?'honey':process==='pomelo'?'pomelo':process==='kumquat'?'kumquat':'black';
  const yieldKg=plan.product,priorQty=s.inventory.processedTea[id]||0,priorMixed=s.inventory.processedMixedTea?.[id]||0;
  const mixed=plan.batches.filter(b=>b.source.mixed).reduce((n,b)=>n+b.amount,0)/plan.tea;
  const quality=plan.batches.reduce((n,b)=>n+b.amount*(b.source.qualityFactor??1),0)/plan.tea;
  const mixedQuality=plan.batches.filter(b=>b.source.mixed).reduce((n,b)=>n+b.amount*(b.source.qualityFactor??1),0)/plan.tea;
  s.inventory.processedTea[id]=Math.round((priorQty+yieldKg)*10)/10;
  s.inventory.processedMixedTea??={};s.inventory.processedMixedTea[id]=priorMixed+yieldKg*mixed;
  s.inventory.processedQualityValue??={};s.inventory.processedQualityValue[id]=(s.inventory.processedQualityValue[id]??priorQty)+yieldKg*quality;
  s.inventory.processedMixedQualityValue??={};s.inventory.processedMixedQualityValue[id]=(s.inventory.processedMixedQualityValue[id]??priorMixed)+yieldKg*mixedQuality;
  const consumed=new Map(plan.batches.map(b=>[b.source,b.amount]));s.inventory.freshTea=s.inventory.freshTea.map(b=>({...b,amount:Math.max(0,b.amount-(consumed.get(b)||0))})).filter(b=>b.amount>1e-8);
  s.inventory.kumquat=Math.max(0,(s.inventory.kumquat||0)-plan.fruit);s.totals.processed+=yieldKg;unlock(s,'chain');s.progress??={madeTeas:[]};if(!s.progress.madeTeas.includes(id))s.progress.madeTeas.push(id);syncMilestones(s);
  return '製成 '+C.products.find(p=>p.id===id).name+' '+yieldKg+' kg，使用茶菁 '+plan.tea+' kg'+(plan.fruit?'、金桔 '+plan.fruit+' kg':'')+'；其餘材料保留，商品可在工坊出售。';
}
function manageFarm(s,action){if(action==='pest'){spend(s,C.costs.pest);let conventional=0;s.land.filter(p=>p.landUse==='tea').forEach(p=>{p.pestSeasonsUnmanaged=0;p.lastPestManaged=seasonKey(s);p.resistance=Math.min(100,p.resistance+(p.organic?C.balance.organicResistanceRecovery:C.balance.conventionalResistanceRecovery));if(!p.organic)conventional++});if(conventional)s.totals.pesticide++;adjustEcology(s,-C.environment.pestManagementLoss,'病蟲管理');return '完成全場病蟲管理；有機茶園採非農藥管理。'}if(action==='cover'){spend(s,C.costs.cover);s.land.filter(p=>p.landUse==='tea').forEach(p=>{p.tea.growth=Math.min(100,p.tea.growth+5)});return '完成全場除草／草生維護；保留既有覆蓋，有機狀態獨立計算。'}if(action==='inspect'){const result=performInspection(s);unlock(s,'warning');return result}throw new Error('未知全場行動。')}
function seasonEnd(s){let lost=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0);s.inventory.freshTea=[];for(const p of s.land){if(p.landUse!=='tea')continue;p.pestSeasonsUnmanaged=p.lastPestManaged===seasonKey(s)?0:(p.pestSeasonsUnmanaged||0)+1;p.tea.growth=Math.min(100,p.tea.growth+C.tea.seasonRecovery+(p.tea.lastHarvest!==seasonKey(s)?C.tea.unharvestedRecovery:0));p.resistance=Math.max(25,p.resistance-(C.balance.pestResistanceLoss+(p.pestSeasonsUnmanaged>=C.pests.unmanagedThreshold?C.pests.unmanagedResistanceLoss:0))*pestPressureFactor(p));resolvePestAttack(s,p);if(p.resistance<50)p.tea.growth=Math.max(0,p.tea.growth-C.tea.pestGrowthCost)}accumulateEcology(s);return lost}


// js\achievement\achievementSystem.js



function endingResolver(s){const metrics={teaVarieties:madeTeaIds(s).length,firefly:s.flags.fireflyAchievement||fireflyFarmCount(s)>=4?1:0,money:s.economy.money,revenue:s.economy.revenue,processed:s.totals.processed,soil:Math.round(s.land.reduce((n,p)=>n+p.topsoil,0)/8),ecology:ecology(s),brand:s.economy.brand,products:Object.keys(s.upgrades).length,volunteer:s.flags.volunteerAchievement?1:0};const achievements=C.achievements.filter(a=>metrics[a.metric]>=a.threshold).map(a=>a.id);const negative=[];if(s.flags.debrisFlow)negative.push('土石流：土地災害影響了下游生活與道路。');if(s.economy.money<0)negative.push('入不敷出：期末資金無法支付經營成本。');return {type:negative.length?'negative':'positive',title:negative.length?'茶山的警訊':s.economy.money>=C.initialMoney*1.5?'我是茶金王':'六年茶山成果',negative,achievements,metrics}}

// js\state\engine.js










function startSeasons(s){if(s.game.phase!=='annualPlanning')throw new Error('目前不是年度規劃。');if(!s.annual.weather)forecastYear(s);s.game.phase='playerAction';addLog(s,'年度規劃完成，開始春季。每季僅有 5 回合。')}
function consumeTurn(s){s.totals.turns++;s.game.phase='turnResolve';if(s.game.turn<C.turnsPerSeason){s.game.turn++;s.game.phase='playerAction';return}const expired=seasonEnd(s);resolveSeasonErosion(s);if(expired)addLog(s,`季末 ${expired} kg 未製茶茶菁失效。`);if(s.game.season===1){s.game.phase='typhoonResolve';resolveTyphoon(s)}settleMonths(s);if(s.game.season<3){s.game.season++;s.game.turn=1;s.game.phase='playerAction';addLog(s,`進入${C.seasons[s.game.season]}季。`);return}s.game.phase='yearEnd';addLog(s,'本年農務結束，可先出售最後一批茶商品，再確認年度結算。')}
function finishYear(s){if(s.game.phase!=='yearEnd')throw new Error('尚未到年度結算階段。');const settlement=settleYear(s);addLog(s,`年度維護 $${settlement.cost}、混作收入 $${settlement.income}。`);if(s.game.year===C.maxYear){s.game.phase='ending';s.ending=endingResolver(s);s.achievements=s.ending.achievements;return}s.game.year++;s.game.season=0;s.game.turn=1;s.game.phase='annualPlanning';s.annual={modifiedPlots:[],inspection:false,typhoonResolved:false,weather:null};s.land.forEach(p=>{p.newlyDeveloped=false;if(p.tea.planted){p.tea.age=s.game.year-p.tea.plantYear+1;p.tea.yieldStage='normal'}});forecastYear(s);addLog(s,'新年度開始，最多可改造 3 塊土地。')}
function executeAction(s,action,payload={}){if(s.game.phase!=='playerAction'&&!(s.game.phase==='yearEnd'&&['sell','road'].includes(action)))throw new Error('目前不在季節行動階段，請先完成年度規劃；年末只能出貨與結算。');if(s.annual.inspectionPending&&!['inspectionMeasure','inspectionDone'].includes(action))throw new Error('請先完成巡檢結果的維護安排。');let message;if(action==='inspectionMeasure')message=inspectionMeasure(s,payload.id,payload.choice);else if(action==='inspectionDone')message=finishInspection(s);else if(action==='harvest')message=harvestPlot(s,payload.id);else if(action==='process')message=processTea(s,payload.process,payload.oxidation);else if(['pest','cover','inspect'].includes(action))message=manageFarm(s,action);else if(action==='develop')message=developProduct(s,payload.id);else if(action==='market')message=marketBrand(s);else if(action==='sell')message=sellTea(s,payload.id);else if(action==='road')message=repairRoad(s);else if(action==='rest'){adjustEcology(s,C.environment.restGain,'休養茶園');message='休養茶園，生態度增加10點，保留時間讓茶樹恢復。'}else throw new Error('未知行動。');addLog(s,message);if(!['sell','road','inspect','inspectionMeasure'].includes(action))consumeTurn(s);return message}


// js\land\landSystem.js




function modifyLand(s,id,action,option='ganzai'){if(s.game.phase!=='annualPlanning')throw new Error('土地改造只能在年度規劃進行。');const p=s.land[id-1];if(!p)throw new Error('找不到地塊。');if(s.annual.modifiedPlots.includes(id))throw new Error('同一塊地當年只能進行一次主要改造。');if(s.annual.modifiedPlots.length>=C.modificationLimit)throw new Error('今年已改造 3 塊地，請留待明年。');if(!['tea','forest','grass','terrace','flat','organic','pomelo','kumquat','repair'].includes(action))throw new Error('未知土地行動。');if(['organic','pomelo','kumquat','terrace','flat'].includes(action)&&p.landUse!=='tea')throw new Error('此項改造需要茶園土地。');if(action==='organic'&&p.organic||action==='forest'&&p.landUse==='forest'||action==='grass'&&p.grassCover||action===p.intercropping||action===p.engineering)throw new Error('此地已具備這項狀態，不必重複改造。');if(action==='repair'&&!p.disaster.landslide&&!p.disaster.debrisFlow&&p.topsoil>=90)throw new Error('目前無須復原。');spend(s,C.costs[action]);s.annual.modifiedPlots.push(id);if(action==='tea'){p.pestSeasonsUnmanaged=0;delete p.lastPestManaged;p.landUse='tea';p.tea={planted:true,cultivar:option==='oolong'?'oolong':'ganzai',plantYear:s.game.year,age:1,yieldStage:'low',growth:65,lastHarvest:null};p.intercropping=null;p.grassCover=false;p.newlyDeveloped=true;p.disaster.landslide=false;p.disaster.debrisFlow=false;unlock(s,'new')}if(action==='forest'){p.landUse='forest';p.tea.planted=false;p.intercropping=null;p.grassCover=true;p.engineering=null}if(action==='grass')p.grassCover=true;if(action==='organic')p.organic=true;if(['pomelo','kumquat'].includes(action))p.intercropping=action;if(['terrace','flat'].includes(action)){p.engineering=action;p.newlyDeveloped=true;unlock(s,'new')}if(action==='repair'){p.topsoil=Math.min(100,p.topsoil+C.disaster.repairSoil);p.disaster.landslide=false;p.disaster.debrisFlow=false;p.disaster.erosion=Math.max(0,p.disaster.erosion-C.disaster.repairSoil)}addLog(s,`地塊 ${String.fromCharCode(64+id)} 完成年度改造：${action}。`);syncEcoTourism(s);syncMilestones(s)}


// js\save\saveSystem.js


const SAVE_KEY='sanxia-tea-canonical-v1';
function migrateSave(input){
  if(!['1.0.0','1.1.0','1.2.0','1.3.0','1.4.0'].includes(input?.version))return input;
  const s=structuredClone(input);if(!s.game||!s.totals)throw new Error('舊存檔不完整。');
  const g=s.game,perYear=C.seasons.length*C.turnsPerSeason;
  if(input.version==='1.0.0'){
    if(['yearEnd','ending'].includes(g.phase))g.turn=C.turnsPerSeason;
    s.totals.turns=g.phase==='ending'||g.phase==='yearEnd'?g.year*perYear:(g.year-1)*perYear+(g.phase==='annualPlanning'?0:g.season*C.turnsPerSeason+g.turn-1);
  }
  // A finished five-year game continues at year six; never settle year five twice.
  if(g.phase==='ending'&&g.year<C.maxYear){
    s.previousEnding={ending:s.ending,achievements:s.achievements};
    g.year++;g.season=0;g.turn=1;g.phase='annualPlanning';
    s.annual={modifiedPlots:[],inspection:false,typhoonResolved:false,weather:null};
    s.land.forEach(p=>{p.newlyDeveloped=false;if(p.tea.planted){p.tea.age=g.year-p.tea.plantYear+1;p.tea.yieldStage='normal'}});
    s.ending=null;s.achievements=[];
  }
  g.turnsPerSeason=C.turnsPerSeason;g.maxYear=C.maxYear;
  s.inventory.processedMixedTea??={};s.inventory.processedQualityValue??={};s.labor??={year:s.game.year,mode:'none',workers:0,confirmed:false};s.totals.pestAttacks??=0;s.version=C.version;
  if(g.year>=C.labor.fatigueStartYear&&s.labor.year===g.year&&s.labor.confirmed){s.labor.season=g.season;s.labor.prepaidYear=g.year}
  s.annual.inspectionPending=false;
  syncMilestones(s);if(s.ending?.metrics){s.ending.metrics.teaVarieties=s.progress.madeTeas.length;s.ending.metrics.firefly=s.flags.fireflyAchievement?1:0;s.achievements=(s.achievements||[]).filter(id=>id!=='processing');if(s.flags.teaMasterAchievement)s.achievements.push('processing');if(s.flags.fireflyAchievement&&!s.achievements.includes('firefly'))s.achievements.push('firefly');s.ending.metrics.money=s.economy.money;const rich=s.economy.money>=C.initialMoney*1.5;s.achievements=(s.achievements||[]).filter(id=>id!=='income');if(rich)s.achievements.push('income');s.ending.achievements=s.achievements;if(s.ending.type!=='negative')s.ending.title=rich?'我是茶金王':'六年茶山成果'}
  s.logs=['規則更新：生態累積、月結算與期末本金1.5倍茶金門檻；六年經營、每季五回合；保留土地、資金及庫存。1.5巡檢改為幕後測試與自選維護，第三年起按季聘工；舊版已付年費保留到年底。',...(s.logs||[])].slice(0,100);
  return s;
}
function validateSave(input){const s=migrateSave(input);if(!s||s.version!==C.version||!s.game||!Array.isArray(s.land)||s.land.length!==8)throw new Error('不是這個版本的八地塊存檔。');const g=s.game;
if(!Number.isInteger(g.year)||g.year<1||g.year>C.maxYear||!Number.isInteger(g.season)||g.season<0||g.season>=C.seasons.length||!Number.isInteger(g.turn)||g.turn<1||g.turn>C.turnsPerSeason||g.turnsPerSeason!==C.turnsPerSeason||g.maxYear!==C.maxYear||!['annualPlanning','playerAction','yearEnd','ending'].includes(g.phase))throw new Error('存檔時間資料不正確。');
if(!Number.isFinite(s.economy?.money)||!Number.isFinite(s.economy?.brand)||!Number.isFinite(s.random)||!s.annual||!Array.isArray(s.annual.modifiedPlots)||s.annual.modifiedPlots.length>C.modificationLimit||new Set(s.annual.modifiedPlots).size!==s.annual.modifiedPlots.length||s.annual.modifiedPlots.some(id=>!Number.isInteger(id)||id<1||id>8))throw new Error('存檔資源資料不正確。');
for(const [i,p] of s.land.entries())if(p.id!==i+1||p.slope!==C.land.slopes[i]||!['tea','forest','grass'].includes(p.landUse)||!p.tea||!p.disaster||!Number.isFinite(p.topsoil)||p.topsoil<0||p.topsoil>100)throw new Error('存檔地塊資料不正確。');
if(!Array.isArray(s.logs)||s.logs.some(t=>typeof t!=='string')||!Array.isArray(s.history)||!Array.isArray(s.knowledge)||!s.inventory||!Array.isArray(s.inventory.freshTea)||!s.inventory.processedTea||!s.flags||!s.upgrades||!s.totals)throw new Error('存檔欄位不完整。');
if(g.phase==='playerAction'&&!C.disaster.weather.some(w=>w.id===s.annual.weather?.id))throw new Error('存檔缺少年度天氣。');for(const n of Object.values(s.inventory.processedTea))if(!Number.isFinite(n)||n<0)throw new Error('商品庫存不正確。');validateDetailed(s);return s}
function validateDetailed(s){const number=(v,min=0,max=Number.MAX_SAFE_INTEGER)=>Number.isFinite(v)&&v>=min&&v<=max;const total=C.maxYear*C.seasons.length*C.turnsPerSeason;const bad=()=>{throw new Error('存檔內容或遊戲階段不完整，請使用遊戲匯出的存檔。')};if(typeof s.seed!=='string'||s.seed.length>80||!number(s.economy.revenue)||!number(s.economy.costs)||!number(s.economy.brand,0,100)||!number(s.totals.turns,0,total)||!Number.isInteger(s.totals.turns)||!number(s.totals.harvested)||!number(s.totals.processed)||!number(s.totals.pesticide))bad();
if(s.progress&&(!Array.isArray(s.progress.madeTeas)||new Set(s.progress.madeTeas).size!==s.progress.madeTeas.length||s.progress.madeTeas.some(id=>!C.products.some(p=>p.id===id))))bad();for(const flag of ['teaMasterAchievement','fireflyAchievement'])if(s.flags[flag]!==undefined&&typeof s.flags[flag]!=='boolean')bad();
if(s.environment&&(!number(s.environment.ecology,0,100)))bad();if(s.flags.fireflyUnlocked!==undefined&&typeof s.flags.fireflyUnlocked!=='boolean')bad();if(s.economy.monthlySettlements&&(!Array.isArray(s.economy.monthlySettlements)||s.economy.monthlySettlements.length>24||new Set(s.economy.monthlySettlements).size!==s.economy.monthlySettlements.length||s.economy.monthlySettlements.some(key=>typeof key!=='string'||!/^([1-6])-[0-3]$/.test(key))))bad();for(const field of ['fireflyRevenue','operatingCosts'])if(s.economy[field]!==undefined&&!number(s.economy[field]))bad();
if(s.annual.inspectionPending!==undefined&&typeof s.annual.inspectionPending!=='boolean')bad();
if(s.annual.inspectionReport){const r=s.annual.inspectionReport;if(r.year!==s.game.year||!s.annual.inspection||!Array.isArray(r.risks)||r.risks.length!==8||new Set(r.risks.map(v=>v.id)).size!==8)bad();for(const v of r.risks)if(!Number.isInteger(v.id)||!number(v.id,1,8)||!number(v.chance,0,1)||!number(v.growth,0,100)||typeof v.danger!=='boolean'||![null,v.danger?'repair':'drainage'].includes(v.choice))bad()}
if(s.annual.inspectionPending&&(!s.annual.inspectionReport||s.game.phase!=='playerAction'))bad();
for(const p of s.land)for(const [yearKey,factorKey] of [['protectionYear','protectionFactor'],['drainageYear','drainageFactor']])if(p.disaster[yearKey]!==undefined&&(!Number.isInteger(p.disaster[yearKey])||!number(p.disaster[yearKey],1,s.game.year)||p.disaster[factorKey]!==.5))bad();
if(s.labor?.season!==undefined&&(!Number.isInteger(s.labor.season)||!number(s.labor.season,0,3)))bad();if(s.labor?.prepaidYear!==undefined&&s.labor.prepaidYear!==s.labor.year)bad();
if(s.annual.typhoonResolved!==undefined&&typeof s.annual.typhoonResolved!=='boolean')bad();
if(typeof s.flags.debrisFlow!=='boolean'||typeof s.flags.roadClosed!=='boolean'||typeof s.annual.inspection!=='boolean')bad();if(s.game.phase==='yearEnd'&&(s.game.season!==C.seasons.length-1||s.game.turn!==C.turnsPerSeason))bad();if(s.game.phase==='annualPlanning'&&(s.game.season!==0||s.game.turn!==1))bad();if(s.game.phase==='ending'&&(s.game.year!==C.maxYear||s.totals.turns!==total||!s.ending||!Array.isArray(s.ending.negative)||s.ending.negative.some(t=>typeof t!=='string')||!s.ending.metrics||C.achievements.some(a=>a.metric==='money'?!Number.isFinite(s.ending.metrics.money):!number(s.ending.metrics[a.metric]))||!Array.isArray(s.achievements)))bad();
for(const p of s.land)if(typeof p.newlyDeveloped!=='boolean'||typeof p.grassCover!=='boolean'||typeof p.organic!=='boolean'||typeof p.tea.planted!=='boolean'||!['ganzai','oolong'].includes(p.tea.cultivar)||!number(p.tea.age,1,C.maxYear+1)||!number(p.tea.plantYear,0,C.maxYear)||!['normal','low'].includes(p.tea.yieldStage)||!number(p.tea.growth,0,100)||!number(p.resistance,0,100)||!number(p.disaster.erosion,0,100)||typeof p.disaster.landslide!=='boolean'||typeof p.disaster.debrisFlow!=='boolean'||![null,'pomelo','kumquat'].includes(p.intercropping)||![null,'terrace','flat'].includes(p.engineering))bad();
for(const p of s.land){if(p.pestSeasonsUnmanaged!==undefined&&(!Number.isInteger(p.pestSeasonsUnmanaged)||!number(p.pestSeasonsUnmanaged,0,total)))bad();if(p.tea.harvestStreak!==undefined&&(!Number.isInteger(p.tea.harvestStreak)||!number(p.tea.harvestStreak,1,C.tea.harvestStreakCap)))bad();if(p.lastPestManaged!==undefined&&(typeof p.lastPestManaged!=='string'||!/^\d+-[0-3]$/.test(p.lastPestManaged)))bad()}
if(s.inventory.kumquat!==undefined&&!number(s.inventory.kumquat,0,100000))bad();
for(const b of s.inventory.freshTea)if(!number(b.amount,0,10000)||!['ganzai','oolong'].includes(b.cultivar)||typeof b.honeyEligible!=='boolean'||b.intercropAtHarvest!==undefined&&![null,'pomelo','kumquat'].includes(b.intercropAtHarvest)||b.organicAtHarvest!==undefined&&typeof b.organicAtHarvest!=='boolean'||!number(b.plotId,1,8))bad();if(s.labor&&(!Number.isInteger(s.labor.year)||s.labor.year<1||s.labor.year>s.game.year||!['none','worker','volunteer'].includes(s.labor.mode)||!Number.isInteger(s.labor.workers)||s.labor.workers<0||s.labor.workers>C.labor.maxWorkers||typeof s.labor.confirmed!=='boolean'||s.labor.mode==='worker'&&s.labor.workers<1||s.labor.mode!=='worker'&&s.labor.workers!==0))bad();for(const map of [s.inventory.processedQualityValue||{},s.inventory.processedMixedQualityValue||{}])for(const [id,qty] of Object.entries(map))if(!C.products.some(p=>p.id===id)||!number(qty,0,(s.inventory.processedTea[id]||0)+.00001))bad();for(const [id,qty] of Object.entries(s.inventory.processedMixedTea||{}))if(!C.products.some(p=>p.id===id)||!number(qty,0,(s.inventory.processedTea[id]||0)+.00001))bad();for(const id of Object.keys(s.inventory.processedTea))if(!C.products.some(p=>p.id===id))bad();for(const [id,v] of Object.entries(s.upgrades))if(!C.development.some(p=>p.id===id)||typeof v!=='boolean')bad();if(s.knowledge.some(id=>!C.knowledge.some(k=>k.id===id)))bad()}
function saveGame(s){localStorage.setItem(SAVE_KEY,JSON.stringify(validateSave(s)))}
function loadGame(){const text=localStorage.getItem(SAVE_KEY);if(!text)return null;const raw=JSON.parse(text),s=validateSave(raw);if(raw.version!==C.version&&!localStorage.getItem(SAVE_KEY+'-before-'+raw.version))localStorage.setItem(SAVE_KEY+'-before-'+raw.version,text);return s}
function exportGame(s){const url=URL.createObjectURL(new Blob([JSON.stringify(validateSave(s),null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`三峽茶園-第${s.game.year}年.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}

// js\ui\landLabels.js
function plotName(p){
  const damage=p.disaster.debrisFlow?'土石流受災的':p.disaster.landslide?'崩塌的':'';
  if(p.landUse!=='tea')return damage+(p.landUse==='forest'?'森林':'草地');
  return damage+(p.grassCover?'草皮覆蓋的':'')+(p.intercropping?(p.intercropping==='pomelo'?'柚花混作的':'金桔混作的'):'')+(p.organic?'有機':'')+(p.tea.cultivar==='oolong'?'青心烏龍':'青心柑仔')+(p.engineering==='terrace'?'梯田':'');
}
function plotLabel(p){return `${String.fromCharCode(64+p.id)}（${p.slope}°）${plotName(p)}`}
function healthLabel(p){return p.landUse==='tea'&&p.tea.planted?`健康度 ${Math.round(p.tea.growth)} / 100`:'健康度：不適用（非茶園）'}

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

// js\ui\mapUI.js




function mountMap(canvas,getState,getSelected,onSelect){
  const ctx=canvas.getContext('2d'),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coords=hillPositions();
  let nameVisible=false,nameLayoutKey=null,frame=0,last=0,hovered=0,pulseId=0,pulseStart=0,clock=0,lastSelected=getSelected(),cameraOffset=0,viewZoom=.76;
  const scales=Array.from({length:8},(_,i)=>hillPerspectiveScale(i+1)),art=createArt(()=>draw(performance.now()));
  function polygon(points,fill,stroke,line=2){ctx.beginPath();for(const [i,[x,y]] of points.entries())i?ctx.lineTo(x,y):ctx.moveTo(x,y);ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=line;ctx.stroke()}}
  function pixelRect(x,y,w,h){const k=3;ctx.beginPath();[[x+k,y],[x+w-k,y],[x+w-k,y+k],[x+w,y+k],[x+w,y+h-k],[x+w-k,y+h-k],[x+w-k,y+h],[x+k,y+h],[x+k,y+h-k],[x,y+h-k],[x,y+k],[x+k,y+k]].forEach(([px,py],i)=>i?ctx.lineTo(px,py):ctx.moveTo(px,py));ctx.closePath()}
  function label(text,x,y,color='#2f4a31'){ctx.font='bold 11px "Microsoft JhengHei"';const w=ctx.measureText(text).width+16;ctx.fillStyle='#fff3d3';ctx.strokeStyle='#86603a';ctx.lineWidth=2;pixelRect(x-w/2,y-12,w,22);ctx.fill();ctx.stroke();ctx.textAlign='center';ctx.fillStyle=color;ctx.fillText(text,x,y+3)}
  function drawTile(s,p,time){const [x,y]=coords[p.id-1],selected=p.id===getSelected(),hover=p.id===hovered;const pulsating=p.id===pulseId&&time-pulseStart<600;const pop=pulsating?Math.sin(Math.max(0,(time-pulseStart)/600)*Math.PI)*.055:0;const base=hillPerspectiveScale(p.id),target=base*(selected?1.045:hover?1.025:1);scales[p.id-1]=reduced?target:scales[p.id-1]+((target+pop*base)-scales[p.id-1])*.24;ctx.save();ctx.translate(x,y);ctx.scale(scales[p.id-1],scales[p.id-1]);ctx.translate(-x,-y);
    ctx.save();ctx.globalAlpha=.24;ctx.fillStyle='#194933';ctx.beginPath();ctx.ellipse(x,y+40,97,24,0,0,Math.PI*2);ctx.fill();ctx.restore();
    if(!art.paint(ctx,p,x,y,248,212,{highlight:selected?'selected':hover?'hover':null})){polygon([[x-95,y-20],[x,y-70],[x+95,y-20],[x,y+35]],p.landUse==='forest'?'#426f3e':'#87a859','#d2d99f');ctx.font='38px serif';ctx.textAlign='center';ctx.fillText(p.landUse==='forest'?'🌳':p.landUse==='tea'?'🍃':'🌿',x,y-20)}
    if(p.organic){ctx.fillStyle='#234d33';pixelRect(x+66,y-1,24,22);ctx.fill();ctx.fillStyle='#e3f7ad';ctx.font='bold 9px "Microsoft JhengHei"';ctx.textAlign='center';ctx.fillText('有機',x+78,y+13)}
    if(p.tea.planted){ctx.fillStyle=p.tea.cultivar==='oolong'?'#3e6577':'#557e3b';pixelRect(x-89,y-1,22,22);ctx.fill();ctx.fillStyle='#fff7d3';ctx.font='bold 10px "Microsoft JhengHei"';ctx.textAlign='center';ctx.fillText(p.tea.cultivar==='oolong'?'烏':'柑',x-78,y+14)}
    if(p.disaster.debrisFlow){ctx.save();ctx.globalAlpha=.7;for(let k=0;k<10;k++){const dx=x-28+k*7,dy=y-20+((time*.05+k*13)%45);ctx.fillStyle=k%2?'#725434':'#aa8250';ctx.fillRect(dx,dy,6,4)}ctx.restore()}
    const title=`${String.fromCharCode(64+p.id)}　${p.slope}°`;if(p.id>2)label(title,x,y+48,selected?'#204e2a':'#43321e');if(p.newlyDeveloped){label('新整地',x+65,y-73,'#a65a2d')}ctx.restore()
  }
  function updateName(s,height){
    const card=document.querySelector('#map-plot-name');if(!card)return;if(!nameVisible){card.hidden=true;return}
    const p=s.land[getSelected()-1],full=plotName(p),r=canvas.getBoundingClientRect(),parent=canvas.closest('.farm-card').getBoundingClientRect();
    const key=[p.id,full,r.width,r.height,viewZoom,height,parent.left,parent.top].join('|');if(nameLayoutKey===key)return;nameLayoutKey=key;
    const main=p.landUse==='tea'?(p.tea.cultivar==='oolong'?'青心烏龍':'青心柑仔')+(p.engineering==='terrace'?'梯田':''):p.landUse==='forest'?'森林':'草地';
    document.querySelector('#map-name-meta').textContent=`地塊 ${String.fromCharCode(64+p.id)}（${p.slope}°）`;
    document.querySelector('#map-name-prefix').textContent=full.slice(0,-main.length);document.querySelector('#map-name-crop').textContent=main;
    canvas.setAttribute('aria-label',`已選取 ${plotLabel(p)}；可點選土地或使用鍵盤 A 到 H 選取`);
    card.hidden=false;card.style.width=Math.min(242,r.width-24)+'px';
    const w=card.offsetWidth,h=card.offsetHeight,[x,y]=coords[p.id-1],left=r.left-parent.left,top=r.top-parent.top;
    const ax=left+(450+(x-450)*viewZoom)/900*r.width,ay=top+(310+(y-310)*viewZoom+cameraOffset)/height*r.height;
    const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
    const blocked=[...document.querySelectorAll('.phase-card,.world-tag,.view-controls,.utility')].map(el=>{const b=el.getBoundingClientRect();return {x:b.left-parent.left,y:b.top-parent.top,w:b.width,h:b.height}});
    const options=[[ax-w/2,ay-h-65],[ax+85,ay-h/2-30],[ax-w-85,ay-h/2-30],[ax-w/2,ay+45]].map(([px,py],index)=>{const x=clamp(px,left+12,left+r.width-w-12),y=clamp(py,top+12,top+r.height-h-12);const overlap=blocked.reduce((n,b)=>n+Math.max(0,Math.min(x+w,b.x+b.w)-Math.max(x,b.x))*Math.max(0,Math.min(y+h,b.y+b.h)-Math.max(y,b.y)),0);return {x,y,score:overlap*100+Math.abs(x-px)+Math.abs(y-py)+index*4}}).sort((a,b)=>a.score-b.score);
    card.style.left=Math.round(options[0].x)+'px';card.style.top=Math.round(options[0].y)+'px';
  }
  function draw(time=0){clock=time;const s=getState(),height=Math.max(520,Math.round(900*canvas.clientHeight/Math.max(1,canvas.clientWidth)));if(canvas.height!==height)canvas.height=height;cameraOffset=(height-620)/2-18;ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,900,height);const bg=art.images.world;if(bg.complete&&bg.naturalWidth){const scale=Math.max(900/bg.naturalWidth,height/bg.naturalHeight);ctx.drawImage(bg,(900-bg.naturalWidth*scale)/2,(height-bg.naturalHeight*scale)/2,bg.naturalWidth*scale,bg.naturalHeight*scale)}else{const g=ctx.createLinearGradient(0,0,0,height);g.addColorStop(0,'#93c6da');g.addColorStop(.4,'#95b977');g.addColorStop(1,'#507d48');ctx.fillStyle=g;ctx.fillRect(0,0,900,height)}ctx.save();ctx.translate(0,cameraOffset);
    if(s.game.season===1){const g=ctx.createLinearGradient(600,0,900,380);g.addColorStop(0,'#12385400');g.addColorStop(1,'#1b3b6288');ctx.fillStyle=g;ctx.fillRect(0,0,900,620)}
    ctx.save();ctx.translate(450,310);ctx.scale(viewZoom,viewZoom);ctx.translate(-450,-310);const order=hillDrawOrder(s.land);for(const p of order)drawTile(s,p,time);for(const p of s.land){const [x,y]=coords[p.id-1];label(`${String.fromCharCode(64+p.id)}　${p.slope}°`,x,p.id<=2?y-20:y+48,p.id===getSelected()?'#204e2a':'#43321e')}ctx.restore();
    if(s.flags.roadClosed){label('⚠ 道路中斷・茶品無法運出',660,559,'#8d3f21');ctx.fillStyle='#b35d37';ctx.fillRect(700,541,37,7);ctx.fillStyle='#ffdc8a';for(let k=0;k<4;k++)ctx.fillRect(702+k*10,541,4,7)}else{label('三峽聚落',105,542);label('三峽溪谷',760,581,'#1c6177')}
    if(s.game.season===1&&!reduced){ctx.save();ctx.strokeStyle='#e9f5ff88';ctx.lineWidth=1;for(let i=0;i<70;i++){const x=(i*83+time*.06)%960,y=(i*47+time*.3)%650;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x-7,y+18);ctx.stroke()}ctx.restore()}
    ctx.restore();art.preview(document.querySelector('#plot-preview'),s.land[getSelected()-1]);const modalPreview=document.querySelector('#action-preview');if(modalPreview)art.preview(modalPreview,s.land[getSelected()-1]);updateName(s,height);
  }
  function hit(e){const r=canvas.getBoundingClientRect(),x=((e.clientX-r.left)*900/r.width-450)/viewZoom+450,y=((e.clientY-r.top)*canvas.height/r.height-cameraOffset-310)/viewZoom+310;return hitHill(getState().land,x,y,scales)}
  let start=null;canvas.addEventListener('pointerdown',e=>{start={x:e.clientX,y:e.clientY,id:e.pointerId};canvas.setPointerCapture?.(e.pointerId)});canvas.addEventListener('pointerup',e=>{if(start&&Math.hypot(e.clientX-start.x,e.clientY-start.y)<14){const id=hit(e);if(id){pulseId=id;pulseStart=performance.now();onSelect(id);draw(pulseStart)}}start=null});canvas.addEventListener('pointercancel',()=>{start=null});canvas.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'){const h=hit(e);if(h!==hovered){hovered=h;canvas.style.cursor=h?'pointer':'default';if(reduced)draw(clock)}}});canvas.addEventListener('pointerleave',()=>{hovered=0;if(reduced)draw(clock)});
  function animate(t){if(t-last>30){draw(t);last=t}frame=requestAnimationFrame(animate)}if(!reduced)frame=requestAnimationFrame(animate);else draw();return {refresh:()=>{const selected=getSelected();if(selected!==lastSelected){pulseId=selected;pulseStart=performance.now();lastSelected=selected}draw(performance.now())},showName:()=>{nameVisible=true;nameLayoutKey=null;draw(performance.now())},zoomBy:delta=>{viewZoom=Math.max(.58,Math.min(1.1,viewZoom+delta));draw(performance.now());return viewZoom},zoomValue:()=>viewZoom,stop:()=>cancelAnimationFrame(frame),art}
}



// js\ui\flowSystem.js


function nextMove(s,selected){const fresh=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0),stock=Object.values(s.inventory.processedTea).reduce((n,v)=>n+v,0),g=s.game;
if(g.phase==='annualPlanning')return {step:0,label:'🛠 規劃所選土地',kind:'planning',title:'先規劃，再開啟新的一年。',description:`本年已改造 ${s.annual.modifiedPlots.length}/3 塊。不一定要用完額度，保留森林也是一種選擇。`};
if(g.phase==='ending')return {step:3,label:'🏆 查看六年成果',kind:'achievements',title:'六年茶山，留下哪些改變？',description:'回顧收益、土地與生態成果。'};
if(g.phase==='yearEnd')return stock>0?{step:3,label:'📦 年結前先出售茶品',kind:'workshop',title:'最後一批茶，記得出貨。',description:'出售不耗農務回合，之後再確認年度結算。'}:{step:3,label:'📜 確認年度結算',kind:'advance',title:'整理這一年的經營成果。',description:'年度維護費與混作收入將在確認後計算。'};
if(fresh>0)return {step:2,label:`🍵 將 ${fresh} kg 茶菁製茶`,kind:'workshop',title:g.turn===C.turnsPerSeason?'最後一回合，茶菁還沒加工！':'茶菁已備好，可以送進工坊。',description:g.turn===C.turnsPerSeason?'製茶需要 1 回合；若改做其他農務，這批茶菁季末會失效。':'也可再採一塊地後一起加工，記得留 1 回合。'};
if(stock>0)return {step:3,label:s.flags.roadClosed?'🛣 修復道路與出貨':'📦 出售庫存茶商品',kind:'workshop',title:'讓收成走進三峽市街。',description:'工坊可查看固定售價、出售茶品；出貨不另耗回合。'};
if(g.turn===C.turnsPerSeason)return {step:1,label:s.annual.inspection?'🌱 休養茶園，迎接下一季':'🔎 用最後一回合做巡檢',kind:s.annual.inspection?'rest':'inspect',title:'先照顧茶山，下一季再採茶。',description:'本季已無足夠時間完成採收與製茶；可先巡檢或休養。'};
const plot=s.land[selected-1];if(expectedYield(s,plot)>0)return {step:1,label:`🧺 採收 ${String.fromCharCode(64+selected)} 地塊`,kind:'harvest',id:selected,title:'選好茶園，就能開始採收。',description:'一次採收一塊茶園；茶菁還需要另外製成茶商品。'};
const available=s.land.find(p=>expectedYield(s,p)>0);if(available)return {step:1,label:`🍃 查看 ${String.fromCharCode(64+available.id)} 茶園`,kind:'select',id:available.id,title:'這格先休息，看看其他茶園。',description:'綠色茶園可採收，森林留作涵養與保護。'};
return {step:1,label:'🔎 安排全場巡檢',kind:'inspect',title:'照顧茶園，也是照顧未來。',description:'本季尚無可採茶園，可做病蟲管理、巡檢或休養。'};
}


// js\ui\panelUI.js










const landNames={tea:'茶園',forest:'森林',grass:'草地'},cropNames={ganzai:'青心柑仔',oolong:'青心烏龍'},engineeringNames={terrace:'梯田',flat:'平坦整地'};
function renderPanels(s,selected,onSelect){const q=x=>document.querySelector(x),p=s.land[selected-1],g=s.game,w=s.annual.weather||C.disaster.weather[0],flow=nextMove(s,selected);
q('#year').textContent=`📅 第 ${g.year} 年 / ${C.maxYear}`;q('#season').textContent=g.phase==='annualPlanning'?'年度規劃':g.phase==='yearEnd'?'年末出貨':g.phase==='ending'?'六年結算':`${['🌸','☀️','🍂','❄️'][g.season]} ${C.seasons[g.season]}季`;
q('#turns').innerHTML=g.phase==='playerAction'?`${Array.from({length:C.turnsPerSeason},(_,i)=>i+1).map(n=>`<i class="${n<g.turn?'done':n===g.turn?'current':''}"></i>`).join('')}　${g.turn} / 5 回合`:g.phase==='ending'?`${C.maxYear*C.seasons.length*C.turnsPerSeason} 回合完成`:g.phase==='yearEnd'?'先出貨，再結算':'規劃不耗回合';q('#money').textContent=s.economy.money.toLocaleString();const fresh=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0),processed=Object.values(s.inventory.processedTea).reduce((n,v)=>n+v,0);q('#inventory').textContent=`茶菁 ${fresh} kg、金桔 ${s.inventory.kumquat||0} kg，商品 ${Math.round(processed*10)/10} kg`;q('#brand').textContent=s.economy.brand;q('#ecology').textContent=ecology(s)+' / '+Math.round(s.land.reduce((n,p)=>n+p.topsoil,0)/8);q('#knowledge-count').textContent=s.knowledge.length;
q('#weather-title').textContent=`${w.name}${s.annual.typhoonResolved?'・本年已判定':g.season===1?'警戒中':'・年度預報'}`;q('#weather-copy').textContent=s.annual.typhoonResolved?'本年颱風已判定；逐季土壤流失仍照常累積。':g.season===1?'夏季第 5 回合後風雨結算，預留巡檢時間。':'觀察植被與坡度，做好年初規劃。';q('#weather-icon').textContent=w.id==='extremeRain'?'⛈️':'🌀';q('#map-caption').textContent=`第${g.year}年 ${C.seasons[g.season]}季`;
q('#plot-title').textContent=plotLabel(p);q('#plot-use').textContent=landNames[p.landUse];q('#plot-summary').textContent=healthLabel(p);q('#plot-assessment').textContent=p.disaster.debrisFlow?'土石流狀態待復原。':p.disaster.landslide?'土地已崩塌，年度規劃可修復。':p.organic&&p.grassCover?'草皮＋有機搭配：病蟲壓力降低80%。':p.organic?'有機但未鋪草皮：病蟲壓力增加25%。':'健康度、抗病蟲與表土都會影響採收量。';
const risk=riskFor(s,p,w)*100;const details=[['健康度（生長勢）',p.tea.planted?Math.round(p.tea.growth)+' / 100':'—',p.tea.planted?p.tea.growth:0,''],['未管理病蟲',`${p.pestSeasonsUnmanaged||0} 季`,null,''],['下次採收消耗',p.tea.planted?harvestGrowthCost(s,p)+' 健康度':'—',null,''],['抗病蟲',Math.round(p.resistance)+' / 100',p.resistance,'pest'],['流失等級',({none:'無明顯流失',light:'輕度流失',severe:'嚴重流失',collapsed:'已崩塌'})[soilSeverity(p)],null,''],['土壤產量倍率',soilYieldFactor(p).toFixed(2)+' 倍',null,''],['表土指數',Math.round(p.topsoil)+' / 100',p.topsoil,'soil'],['模擬崩塌率',risk.toFixed(1)+'%',risk,'risk'],['茶園年齡',p.tea.planted?`${p.tea.age} 年・${p.tea.yieldStage==='low'?'低產':'正常'}`:'無',null,''],['季末病蟲害率',(pestAttackChance(p)*100).toFixed(1)+'%',null,''],['有機管理',p.organic?'有機（與草生獨立）':'一般',null,''],['工程',engineeringNames[p.engineering]||'無',null,''],['混作占地',p.intercropping?'茶葉產量 ×0.8':'無',null,''],['預估茶菁',harvestComposition(s,p,expectedYield(s,p)).tea+' kg',null,''],['預估金桔',harvestComposition(s,p,expectedYield(s,p)).fruit+' kg',null,''],['本季採收',p.tea.lastHarvest===`${g.year}-${g.season}`?'已採收':'未採收',null,'']].filter(([label])=>!['健康度（生長勢）','抗病蟲','表土指數','模擬崩塌率'].includes(label));const rows=[['健康度',p.tea.planted?Math.round(p.tea.growth)+' / 100':'不適用',p.tea.planted?p.tea.growth:0,''],['抗病蟲能力',p.tea.planted?Math.round(p.resistance)+' / 100':'不適用',p.tea.planted?p.resistance:0,'pest'],['表土保持率',Math.round(p.topsoil)+'%',p.topsoil,'soil'],['崩塌率',risk.toFixed(1)+'%',risk,'risk']];q('#plot-details').innerHTML=rows.map(([a,b,value,type])=>`<div><span>${a}</span><strong>${b}</strong>${value===null?'':`<div class="meter ${type}" role="progressbar" aria-label="${a}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.max(0,Math.min(100,value))}"><i style="width:${Math.max(0,Math.min(100,value))}%"></i></div>`}</div>`).join('');q('#plot-extra-details').innerHTML=details.map(([label,value])=>`<div><span>${label}</span><b>${value}</b></div>`).join('');q('#eco-status').textContent='生態度 '+ecology(s)+' / 100｜'+(s.flags.fireflyUnlocked?(ecology(s)>C.environment.fireflyThreshold&&!s.flags.roadClosed?'螢火蟲觀光每月 $'+C.environment.fireflyMonthlyIncome:'螢火蟲觀光暫停（生態不足或道路中斷）'):'生態度高於50，開啟螢火蟲觀光')+'。月營業成本 $'+C.operations.monthlyCost+'，每季結算3個月。';q('#modifications').textContent=`本年度已改造 ${s.annual.modifiedPlots.length} / 3 塊`;q('#planning').disabled=g.phase!=='annualPlanning';
q('#phase-title').textContent=flow.title;q('#phase-copy').textContent=flow.description;q('#flow-steps').innerHTML=['規劃','採收','製茶','出貨'].map((t,i)=>`<span class="${i===flow.step?'active':i<flow.step?'done':''}">${t}</span>`).join('');q('#recommendation').textContent=flow.label;q('#recommendation').dataset.kind=flow.kind;q('#advance').textContent=g.phase==='annualPlanning'?'完成規劃・開始春季 →':g.phase==='yearEnd'?'確認年度結算 →':g.phase==='ending'?'查看六年成果 →':'休養茶園・用 1 回合 →';
document.querySelectorAll('[data-action]').forEach(b=>{b.disabled=g.phase!=='playerAction'||s.annual.inspectionPending&&b.dataset.action!=='inspect'||b.dataset.action==='inspect'&&s.annual.inspection&&!s.annual.inspectionPending;b.classList.toggle('suggested',b.dataset.action===flow.kind)});document.querySelectorAll('.action-bar [data-open]').forEach(b=>{b.classList.toggle('suggested',b.dataset.open===flow.kind);if(['products','planning'].includes(b.dataset.open))b.disabled=b.dataset.open==='planning'?g.phase!=='annualPlanning':g.phase!=='playerAction'});
q('#labor-summary').textContent=`${s.game.year>=3?'本季人力':'年度人力'}：已採 ${harvestedPlots(s)} / ${harvestCapacity(s)} 塊${s.game.year>=3?'・體力下降中':''}`;q('#labor-open').textContent=(laborPlan(s).mode==='volunteer'?'打工換宿':laborPlan(s).mode==='worker'?laborPlan(s).workers+' 名工人':'聘工／打工換宿');document.querySelectorAll('[data-action="harvest"]').forEach(b=>b.disabled=s.game.phase!=='playerAction'||remainingHarvestCapacity(s)<=0);
const harvestButton=q('#plot-harvest'),yieldNow=expectedYield(s,p);harvestButton.textContent=`採收 ${String.fromCharCode(64+selected)} 地塊・茶菁 ${harvestComposition(s,p,yieldNow).tea} kg${harvestComposition(s,p,yieldNow).fruit?'＋金桔 '+harvestComposition(s,p,yieldNow).fruit+' kg':''}`;harvestButton.disabled=g.phase!=='playerAction'||yieldNow<=0;harvestButton.hidden=g.phase==='annualPlanning';q('#planning').hidden=g.phase!=='annualPlanning';q('#modifications').hidden=g.phase!=='annualPlanning';
q('#inventory-slots').replaceChildren();const stock=[{icon:'🧺',name:'茶菁',amount:fresh},...((s.inventory.kumquat||0)>0?[{icon:'',name:'金桔',amount:s.inventory.kumquat}]:[]),...C.products.filter(t=>s.inventory.processedTea[t.id]>0).map(t=>({icon:t.id==='black'||t.id==='honey'?'🫙':'🍵',name:t.name,amount:s.inventory.processedTea[t.id]}))];while(stock.length<4)stock.push({icon:['🍵','🫙','🍵'][stock.length-1]||'🍵',name:['','碧螺春','紅茶','包種茶'][stock.length]||'茶商品',amount:0});stock.slice(0,4).forEach(t=>{const b=document.createElement('button');b.className='inventory-slot';b.setAttribute('aria-label',`${t.name} ${t.amount} 公斤，開啟工坊`);b.innerHTML=`<b>${t.icon}</b><span>${t.name}</span><strong>${t.amount} kg</strong>`;b.onclick=()=>document.querySelector('[data-open="workshop"]').click();q('#inventory-slots').append(b)});
}




// js\ui\inspectionUI.js

function inspectionMarkup(s){const report=s.annual.inspectionReport;if(!report)return '<p>今年沒有可檢視的巡檢紀錄。</p>';const pending=!!s.annual.inspectionPending;return `<p class="modal-sub">坡地健康檢查 · 第${report.year}年 · 巡檢基本費 $${C.costs.inspect} 已支付</p><div class="modal-notice"><b>依檢查結果選擇維護，也可以暫不施作。</b><p>危機地塊可修繕，當年後續崩塌率減半；未檢出危機的地塊可做排水維護，當年剩餘季節沖蝕率減半。不改變實際天氣，也不會因本次檢查造成災損。</p></div>${s.annual.typhoonResolved?'<div class="modal-notice">本年正式風雨已結算，不會再追加一次災害。危機修繕只降低本年風險，建議留待明年巡檢；排水維護仍影響當年剩餘季節。</div>':''}<div class="inspection-list">${report.risks.map(row=>{const p=s.land[row.id-1],cost=row.danger?C.disaster.inspectionLandslideRepairCost:C.disaster.inspectionErosionRepairCost,action=row.danger?'修繕':'排水維護';return `<article class="knowledge-card ${row.danger?'inspection-danger':''}"><h3>${String.fromCharCode(64+row.id)} 地塊（${p.slope}°）· ${row.danger?'發現崩塌危機':'未檢出崩塌危機'}</h3><p>${row.danger?'可先修繕降低後續崩塌風險；若原本已受災，土地仍須年度復原。':'仍需留意風雨，可做排水維護減少後續沖蝕。'}</p><button data-inspection-id="${row.id}" data-inspection-choice="${row.danger?'repair':'drainage'}" ${!pending||row.choice||s.economy.money<cost?'disabled':''}>${row.choice?'已完成'+action:action+' $'+cost.toLocaleString()}</button><small>${row.choice?'已扣款，不會重複收費或疊加。':s.economy.money<cost?'目前資金不足，可暫不施作。':'不另耗回合、不占土地開發額度。'}</small></article>`}).join('')}</div><div class="modal-footer"><button class="primary" id="inspection-done">${pending?'完成巡檢安排・使用1回合 →':'回到茶山 →'}</button></div>`}

// js\ui\parameterUI.js

function mechanismTables(){const pct=n=>Math.round(n*100)+'%';return [
  {title:'時間與採收',rows:[['固定梯田方向','H／D／B／A：中間往前；G／E：右往左前；F／C：左往右前；不得自動推算或覆寫'],['初始土地','A～G七塊裸露無梯田茶園，H森林；既有存檔不重設土地'],['年度崩塌基準','在初始配置下，不做修繕及排水維護，一年內至少一塊崩塌約50%；不是每塊50%'],['土地／時間',`8 塊・${C.maxYear} 年・四季・每季 ${C.turnsPerSeason} 回合`],['年度規劃',`最多 ${C.modificationLimit} 塊；同地每年一次主要改造`],['健康度',`生長勢 0～100，低於 ${C.tea.minimumGrowth} 不可採收`],['連續採收健康消耗',`${C.tea.harvestGrowthCost} → ${C.tea.harvestGrowthCost+C.tea.consecutiveHarvestExtraCost} → ${C.tea.harvestGrowthCost+2*C.tea.consecutiveHarvestExtraCost}；第三季起封頂，休採一季中斷`],['季末恢復',`健康度 +${C.tea.seasonRecovery}；當季未採再 +${C.tea.unharvestedRecovery}`]]},
  {title:'每季累積土壤流失',rows:[['春／秋／冬',`${pct(C.soil.seasonRateMin)}～${pct(C.soil.seasonRateMax)}，每地塊獨立擲骰`],['夏季',`${pct(C.soil.summerRateMin)}～${pct(C.soil.summerRateMax)}`],['計算基準','當季剩餘表土 × 擲骰比率 × 所有適用倍率'],['後期壓力',C.soil.lateYearFactors.map((v,i)=>'第'+(i+1)+'年×'+v).join('；')],['草生回復','草生覆蓋／草地於每季沖蝕後，表土保持率+1點（上限100）；未復原崩塌地不回復'],['排水維護','巡檢未檢出危機之地塊可選，每塊1000，本年剩餘季節沖蝕率×0.5'],['裸露茶園／初年開墾',`各 ×${C.soil.bareMultiplier}／×${C.soil.newLandMultiplier}，同時具備則相乘`],['梯田／草皮覆蓋',`各 ×${C.soil.terraceLossFactor}／×${C.soil.grassLossFactor}`],['混作／森林',`×${C.intercropping.soilLossFactor}／×${C.soil.forestLossFactor}`],['土壤影響產量','1 − (1 − 表土指數 ÷ 100) ÷ 2；表土80 → ×0.90；重大受災不能採收'],['與颱風的關係','夏季先結算本季流失，再判定崩塌；不重扣舊版颱風沖蝕量']]},
  {title:'病蟲與管理',rows:[['基準季末事件機率',`${pct(C.pests.baseAttackChance)} ×${C.pests.attackChanceMultiplier} = ${pct(C.pests.baseAttackChance*C.pests.attackChanceMultiplier)}`],['草皮單獨','病蟲壓力 ×1'],['有機但無草皮',`壓力 ×${C.ecoFarming.organicBarePestFactor}`],['有機＋草皮',`壓力 ×${C.ecoFarming.pestPressureFactor}`],['混作',`病蟲機率與持續抗性耗損 ×${C.intercropping.pestChanceFactor}；茶量 ×${C.balance.mixedTeaFraction}`],['連續兩季未管理',`從第 ${C.pests.unmanagedThreshold} 季開始壓力 ×${C.pests.unmanagedChanceFactor}，之後每季加 ${C.pests.unmanagedExtraPerSeason}，最高 ×${C.pests.unmanagedMaxFactor}`],['季末抗性下降',`基礎 ${C.balance.pestResistanceLoss}；兩季未管再加 ${C.pests.unmanagedResistanceLoss}，整體乘上述壓力倍率`],['病蟲事件損失',`抗性 −${C.pests.attackResistanceLoss}、健康 −${C.pests.attackGrowthLoss}`],['執行病蟲管理',`$${C.costs.pest}／1 回合，未管季數歸零；一般抗性 +${C.balance.conventionalResistanceRecovery}、有機 +${C.balance.organicResistanceRecovery}`]]},
  {title:'累積生態與月收支',rows:[['生態度','0～100點，百分比加減採百分點計算，初始46'],['休養',`每次 +${C.environment.restGain} 點`],['草皮／有機',`每季每塊草皮 +${C.environment.grassSeasonGain} 點、每塊有機茶園 +${C.environment.organicSeasonGain} 點，累積計算`],['病蟲管理',`每次 −${C.environment.pestManagementLoss} 點`],['螢火蟲觀光',`生態度嚴格高於${C.environment.fireflyThreshold}時自動開啟，每月${C.environment.fireflyMonthlyIncome}；生態不足或道路中斷暫停收入`],['營業成本',`每月${C.operations.monthlyCost}；每季按${C.operations.monthsPerSeason}個月結算，保留年度茶園／工程維護費`],['茶金門檻',`第六年結束剩餘資金≥${C.initialMoney*1.5}（初始本金1.5倍），不是累積營收`]]},
  {title:'特色製茶與售價',rows:[['蜜香紅茶',`採收時為有機即可；僅加工符合條件的茶菁；基價 ${C.products.find(p=>p.id==='honey').price}/kg`],['柚香綠茶',`只用柚花混作茶菁；基價 ${C.products.find(p=>p.id==='pomelo').price}/kg`],['金桔採收','金桔混作總產出一半茶菁、一半金桔；茶菁可一般製茶，金桔可跨季保存'],['金桔茶',`茶菁1kg＋金桔1kg → 成品0.5kg；依可配對材料量製作，基價 ${C.products.find(p=>p.id==='kumquat').price}/kg`],['加工費',`${C.costs.processingPerKg}/kg實際使用茶菁；每次1回合`],['混作固定年收入','已取消；改以實際採收、加工與販售取得收入，避免重複計算']]},
  {title:'圖鑑、收藏與人力規劃',rows:[['產品圖鑑','八種茶品＋六款創意商品，全項可閱讀；成功製茶／開發後收藏'],['製茶小達人','本輪八種茶各製作一次，即時取得；售出後仍保留種類紀錄'],['火金姑','本輪四塊實際茶園擁有草皮覆蓋或有機管理（同塊只算一次，尚未復原的崩塌／土石流不計），達成即收藏；與生態度>50的觀光收入機制分開'],['創意商品','冰淇淋、茶香金牛角、金桔茶果醬、蜜香康普紅茶、三角湧烏龍奶茶、養生碧螺春綠茶粉；用商品開發解鎖，不額外生產／扣庫存'],['年度人力','前兩年按年、第三年起每季首次採收前確認；每人季費1500／換宿750，不占改造額度、不耗回合'],['資料說明','圖鑑提供國小易讀短文、想一想、遊戲收藏方法及資料來源；同內容另有Markdown文件']]},
  {title:'防災巡檢與自選維護',rows:[['巡檢','基本費500，每年一次；幕後強颱壓力檢查，不改實際天氣、健康度、土地與災害歷史'],['危機修繕','檢出崩塌危機：自選每塊5000，當年後續崩塌率×0.5'],['排水維護','未檢出危機：自選每塊1000，當年剩餘季節沖蝕率×0.5'],['扣款與回合','只有玩家選擇才扣維護費；可不施作，不能重複疊加；全部安排完成才扣巡檢的1回合'],['實際風雨','夏季仍依原預報判定；第五回合巡檢亦可先維護再進入正式風雨結算'],['現有災損','巡檢維護只降低後續風險；已受災土地與道路仍須原復原功能，不清除災害歷史']]}
];}
function parameterMarkup(){return mechanismTables().map(group=>`<h3>${group.title}</h3><table><tbody>${group.rows.map(([label,value])=>`<tr><th scope="row">${label}</th><td>${value}</td></tr>`).join('')}</tbody></table>`).join('')+'<div class="modal-notice">土壤維持率＝目前表土指數 ÷ 100。產量倍率隨表土連續變化，正常介於0.5～1；崩塌或土石流仍不可採收。所有數值是遊戲教學參數。</div>'}

// js\ui\laborUI.js


function laborMarkup(s){const plan=laborPlan(s),seasonal=seasonalLabor(s),period=seasonal?'本季':'本年度',disabled=!canHireLabor(s),fee=seasonal?'季費':'年費';return `<p class="modal-sub">第 ${s.game.year} 年 ${C.seasons[s.game.season]}季 · 已採 ${harvestedPlots(s)} / ${harvestCapacity(s)} 塊</p><div class="modal-notice"><b>${seasonal?'每季':'年度'}人力決策：不占土地開發額度，不耗農務回合。</b><p>前兩年每年確認一次；第三年起每季重新確認，本人每季只能採1塊。可在本季首次採收前安排；下一季不自動續聘，也不自動扣費。</p></div><div class="modal-grid"><button class="option" data-hire="none" ${disabled?'disabled':''}><strong>不聘工，由本人照顧</strong><small>費用 $0；第三年起每季最多採1塊。</small></button><button class="option" data-hire="worker" data-count="1" ${disabled?'disabled':''}><strong>聘請1名工人</strong><small>每季額外可採2塊 · ${fee} $${laborCost(s,'worker',1)}<br>${period}採收批次售價×0.9。</small></button><button class="option" data-hire="worker" data-count="2" ${disabled?'disabled':''}><strong>聘請2名工人</strong><small>每季額外可採4塊 · ${fee} $${laborCost(s,'worker',2)}<br>最多兩名，售價仍×0.9，不重複折減。</small></button><button class="option" data-hire="volunteer" ${disabled?'disabled':''}><strong>打工換宿</strong><small>每季額外可採3塊 · 食宿${fee} $${laborCost(s,'volunteer')}<br>${period}採收產量×0.5，開放觀光體驗並收集圖卡。</small></button></div><p>每塊採收仍需一回合，也要預留製茶時間。品質差異代表新進人員的熟練度，與國籍無關。</p><p class="modal-sub">確認後本期間不更換；既有茶菁與成品保留採收時的產量、品質條件，不因下季換人而重算。</p><div class="modal-notice">${plan.prepaidYear===s.game.year?'舊存檔已付全年費用：保留原方案到年底，不重複收費。':plan.confirmed?period+'已確認：'+(plan.mode==='worker'?plan.workers+'名工人':plan.mode==='volunteer'?'打工換宿':'本人照顧'):period+'尚未確認；關閉後仍可在首次採收前回來安排。'}</div><div class="modal-footer"><button id="labor-back" class="primary">回到茶山 →</button>${s.flags.volunteerAchievement?'<button id="labor-card">閱讀打工換宿圖卡 →</button>':''}</div>`}

// js\ui\achievementUI.js

const COLLECTION_KEY='sanxia-achievement-album-v1';
let memory={earned:[],read:[]};
function achievementAlbum(s){
  let album=memory;
  try{const raw=JSON.parse(localStorage.getItem(COLLECTION_KEY)||'null');if(raw&&Array.isArray(raw.earned)&&Array.isArray(raw.read))album=raw}catch{}
  const valid=ids=>[...new Set(ids.filter(id=>C.achievements.some(a=>a.id===id)))];
  const earnedNow=s.game.phase==='ending'?s.achievements:[];
  album={earned:valid([...album.earned,...earnedNow,...(s.flags.volunteerAchievement?['volunteer']:[]),...(s.flags.teaMasterAchievement?['processing']:[]),...(s.flags.fireflyAchievement?['firefly']:[]),...(s.previousEnding?.achievements||[])]),read:valid(album.read)};
  memory=album;try{localStorage.setItem(COLLECTION_KEY,JSON.stringify(album))}catch{}
  return album;
}
function markAchievementRead(s,id){const album=achievementAlbum(s);if(!album.read.includes(id))album.read.push(id);memory=album;try{localStorage.setItem(COLLECTION_KEY,JSON.stringify(album))}catch{}return album}
function achievementGallery(s){
  const album=achievementAlbum(s),final=s.game.phase==='ending';
  return `<p class="album-summary">已收藏 ${album.earned.length} / ${C.achievements.length} 張 · 點圖卡閱讀故事與學習收穫</p><div class="achievement-gallery">${C.achievements.map(a=>{
    const collected=album.earned.includes(a.id),now=final&&s.achievements.includes(a.id)||a.id==='volunteer'&&s.flags.volunteerAchievement||a.id==='processing'&&s.flags.teaMasterAchievement||a.id==='firefly'&&s.flags.fireflyAchievement;
    return `<button class="achievement-card ${collected?'collected':'uncollected'}" data-achievement="${a.id}" aria-label="${a.cardTitle}，${now?'本次達成':collected?'已收藏':'尚未解鎖'}，閱讀圖卡"><span class="achievement-art art-${a.artCell}" role="img" aria-label="${a.cardTitle}像素插畫"></span><span class="card-status">${now?'★ 本次達成':collected?'★ 已收藏':'◇ 尚未解鎖'}</span><strong>${a.cardTitle}</strong><span class="card-category">${a.name}</span><small>${album.read.includes(a.id)?'已閱讀 · 再看一次':'點開閱讀 →'}</small></button>`;
  }).join('')}</div><p class="modal-sub">稱號與故事為討論草稿，可再調整。圖卡收藏保存在這個瀏覽器，新一輪遊戲仍可閱讀；匯出遊戲存檔不包含跨局收藏。</p>`;
}
function achievementStory(s,id){
  const a=C.achievements.find(a=>a.id===id);if(!a)return null;
  const album=markAchievementRead(s,id),collected=album.earned.includes(id);
  return {title:a.cardTitle,html:`<div class="achievement-story"><div class="achievement-art art-${a.artCell}" role="img" aria-label="${a.cardTitle}像素插畫"></div><p class="card-status">${collected?'★ 已收藏':'◇ 尚未解鎖 · 故事預覽'}</p><p class="card-story">${a.story}</p><div class="modal-notice"><b>我學到了什麼？</b><p>${a.lesson}</p></div><p class="modal-sub">收集條件：${a.name} · ${a.metric==='teaVarieties'?'本輪製作茶品種類數':a.metric==='firefly'?'四塊茶園有草地覆蓋或有機管理，成果標記':a.metric==='volunteer'?'打工換宿方案':a.metric==='money'?'六年期末剩餘資金':a.metric==='revenue'?'累計茶品收入':a.metric==='processed'?'累計製茶量（kg）':a.metric==='products'?'開發項目數':a.metric==='soil'?'平均表土指數':a.metric==='ecology'?'生態指數':'品牌指數'}達 ${a.threshold}。${['volunteer','processing','firefly'].includes(a.id)?'本輪達成條件時即可收集。':'第六年冬季結算時判定。'}</p></div><div class="modal-footer"><button class="primary" id="album-back">回到成果圖卡冊 →</button></div>`};
}

// js\ui\consequenceUI.js




function consequenceHints(s,p){const fresh=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0),left=C.turnsPerSeason-s.game.turn;
if(s.game.phase==='annualPlanning')return [
{title:'👥 安排人力',gain:'聘工每人每季多照顧2塊、最多兩人；打工換宿多照顧3塊，立即收集觀光圖卡。',trade:'第三年起，本人每季上限持續由3塊降為1塊。新進聘工茶售價×0.9；換宿產量×0.5，仍需每地一回合與前兩年年費，第三年起按季確認與付費。'},
{title:'🌿 改成草生覆蓋',gain:'土地會換成有草覆蓋的圖像，沖蝕量減半，每季表土保持率再回復1點，也降低模擬崩塌風險。',trade:`花費 $${C.costs.grass}、占本年一塊改造額度。和有機是兩個獨立狀態。`},
{title:'🦋 改為有機農法',gain:'地塊增加鳥、蝴蝶提示；若同時草生，病蟲壓力降低 '+Math.round((1-C.ecoFarming.pestPressureFactor)*100)+'%（教學設定）。',trade:`花費 $${C.costs.organic}，也占改造額度。有機不會自動鋪草皮；缺少草皮時，病蟲壓力反而增加25%。`},
{title:'🪜 改成階梯田',gain:'立即換成有高低落差、石牆階梯的素材；工程可降低模擬風險。',trade:`花費 $${C.costs.terrace}，還有年度維護費。新整地當年也會增加風險，並非保證安全。`},
{title:'🌧️ 留意土壤流失',gain:'保留草生、森林，搭配適地工程與巡檢，能減少後續模擬流失。',trade:'土壤產量倍率＝1−(1−表土指數÷100)÷2；例如表土80，產量倍率0.90。輕度與嚴重外觀會保留茶種、梯田及混作特徵。'},
{title:'🌳 保留／轉作森林',gain:'尤其高坡度土地，森林能降低模擬災害風險。',trade:'森林不會產茶；不是所有土地都要開墾。轉作森林仍有改造成本。'},
{title:'🌼 柚花／金桔混作',gain:'病蟲壓力 ×0.8、沖蝕量 ×0.75；混作茶出售時取得正常售價的 100%～120%。',trade:'混作總產出 ×0.8；金桔再對半拆成茶菁與果實。柚花茶菁能做高價柚香綠茶，金桔需配茶菁加工。還有混作成本。加價只按實際混作茶的比例計算，不會加到全場茶葉。'},
{title:'🌱 新植茶園',gain:'可增加之後可採收的土地。',trade:'第一年低產，且當年就有新整地風險；還要支付管理、採收與製茶的時間。'}];
return [
{title:'🧺 這回合採茶',gain:`所選 ${String.fromCharCode(64+p.id)} 地塊目前可採茶菁 ${harvestComposition(s,p,expectedYield(s,p)).tea} kg、金桔 ${harvestComposition(s,p,expectedYield(s,p)).fruit} kg；只採一塊。`,trade:`會用 1 回合，並消耗健康度；連續兩季以上採收會額外消耗，休採一季可中斷連採。之後還要製茶。${left<1?'現在採收將來不及在季末製茶！':`採完還有 ${left} 回合可安排。`}`},
{title:'🍵 把茶菁製成商品',gain:`目前有 ${fresh} kg 茶菁；依配方處理茶菁，商品之後可以出售；蜜香限有機、柚香限柚花混作，金桔茶需茶菁與金桔各一份。`,trade:`加工用 1 回合及約 $${Math.ceil(fresh*C.costs.processingPerKg)}。沒加工的茶菁季末失效；商品可跨季保存。`},
{title:'🐞 管理病蟲',gain:'全場茶園抗病蟲指數回升，未管理季數歸零，但生態度下降5點。有機茶園使用非農藥管理。',trade:`花費 $${C.costs.pest} 和 1 回合。草生＋有機的茶園，平時病蟲壓力已較低，但仍要觀察。連續兩季未管理，病蟲機率與抗性流失加劇，會降低產量。管理可清除未管理紀錄，季末仍會判定病蟲事件。`},
{title:'🌿 維護既有草生',gain:'維護全場茶園、恢復生長勢；不必一格一格重複操作。',trade:'不會把裸地直接變成草生地。首次改成草生覆蓋，要在年度規劃中安排。'},
{title:'🔎 災前巡檢',gain:'幕後壓力測試不改實際天氣；危機地塊付費修繕後，本年後續崩塌率減半；排水維護使當年剩餘季節沖蝕率減半。',trade:`花費 $${C.costs.inspect} 和 1 回合；檢出危機可自選修繕 $5000，未檢出危機可選排水維護 $1000，不會自動扣維護費。${s.annual.inspection?'今年已巡檢，不必為相同效果重複花時間。':''}`},
{title:'📦 出售／🌱 休養',gain:'出售商品可取得資金，不扣回合；休養使生態度增加10點；高於50時開啟螢火蟲月收入。',trade:'休養仍用 1 回合，逐季病蟲與流失、月營業成本仍結算。若還有茶菁沒加工，要留意季末失效。'}]}
function ecologicalProgress(s){const tea=s.land.filter(p=>p.landUse==='tea'&&p.tea.planted),ready=tea.filter(p=>p.grassCover&&p.organic&&!p.disaster.landslide&&!p.disaster.debrisFlow).length;return {total:tea.length,ready,eligible:ecoTourismReady(s),unlocked:!!s.flags.ecoTourismUnlocked}}

// js\ui\modalUI.js











function escapeText(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function createModal(getState,getSelected,callbacks){const dialog=document.querySelector('#modal'),body=document.querySelector('#modal-body');let current=null;const el=id=>body.querySelector(id);function close(){dialog.close();current=null}document.querySelector('#close-modal').onclick=close;dialog.addEventListener('cancel',()=>{current=null});function open(title,html){dialog.dataset.view=current||'custom';body.innerHTML=`<p class="eyebrow">SANXIA TEA STORY</p><h2 id="modal-title">${title}</h2>${html}<p id="modal-feedback" role="status" aria-live="polite"></p>`;dialog.scrollTop=0;if(!dialog.open)dialog.showModal()}function bind(selector,fn){body.querySelectorAll(selector).forEach(b=>b.onclick=()=>fn(b))}function show(name){current=name;const s=getState(),p=s.land[getSelected()-1];if(name==='guide'){open('歡迎來到三峽茶園。',`<p class="modal-sub">八塊相連坡地 · 六年 · 每季五回合</p><p>這不是比誰把茶園種得最多。你要在地方產業、土地安全與生態之間，找到合適的經營方式。</p><ol><li><b>年初規劃：</b>花資金改造土地，每年最多 3 塊，同一地塊一年一次。</li><li><b>季節行動：</b>採收一塊地用 1 回合，製茶再用 1 回合；第五回合也能製茶，完成後才結算。</li><li><b>加工與收入：</b>茶菁要製成商品才能出售；未加工茶菁於季末失效。茶價固定，品牌、商品開發與混作可增加收益。</li><li><b>夏季風雨：</b>第 5 回合後颱風結算。坡度、新整地、植被與工程共同影響災害。</li><li><b>六年成果：</b>正向成就可以並存，但土石流與入不敷出優先顯示負面結果。</li></ol><div class="modal-notice">先試試：查看 A 地塊 → 保留高坡度森林 → 完成規劃 → 採收 A、B → 製茶 → 在工坊出售。每季僅有 5 回合，要記得預留製茶時間。</div><div class="modal-footer"><button class="primary" id="begin">開始經營 →</button></div>`);el('#begin').onclick=close}
else if(name==='planning'){const names={tea:'新植／改植茶園',forest:'轉作森林',grass:'草生地表覆蓋',terrace:'建置梯田',flat:'平坦整地',organic:'改為有機管理',pomelo:'柚花混作',kumquat:'金桔混作',repair:'受災土地復原'};open(`年度規劃・${String.fromCharCode(64+p.id)} 地塊`,`${s.game.phase!=='annualPlanning'?'<div class="modal-notice danger">目前非年度規劃階段，不能改造土地。</div>':''}<p class="modal-sub">坡度 ${p.slope}° · 本年已改造 ${s.annual.modifiedPlots.length}/3 塊 · 每地塊只能選一次主要改造</p><div class="art-preview"><canvas id="action-preview" width="220" height="165" aria-label="年度規劃地塊即時預覽"></canvas><div><h3>目前地表：${p.grassCover?'草生覆蓋':'裸露地表'}</h3><p>${p.organic?'有機管理・保留鳥與蝴蝶':'一般管理'}${p.engineering==='terrace'?'・階梯田':''}</p><p>草生與有機可以並存；完成改造後，預覽會立即更新。</p></div></div>${s.annual.modifiedPlots.includes(p.id)?'<div class="modal-notice">這塊地今年已完成主要改造。另一項改造請在明年安排，目前的草生與有機狀態會保留。</div>':''}<label class="field">新植茶樹品種<select id="cultivar"><option value="ganzai">青心柑仔</option><option value="oolong">青心烏龍</option></select></label><div class="modal-grid">${Object.entries(names).map(([id,label])=>`<button class="option" data-modify="${id}" ${s.game.phase!=='annualPlanning'||s.annual.modifiedPlots.includes(p.id)||s.annual.modifiedPlots.length>=3?'disabled':''}><strong>${label}</strong><small>$ ${C.costs[id].toLocaleString()}${id==='tea'?' · 當年低產':id==='pomelo'||id==='kumquat'?' · 產量 ×0.8':id==='organic'?' · 與草生獨立':id==='terrace'||id==='flat'?' · 當年新整地風險':''}</small></button>`).join('')}</div><div class="modal-notice">土地改造計入本年 3 塊上限；人力決策不占土地開發額度、不耗農務回合；前兩年按年，第三年起按季確認與付費。新植與整地當年風險立即提高；森林不產茶，混作產量 ×0.8、病蟲害機率 ×0.8、沖蝕量 ×0.75；混作茶出售時價格為正常售價的 100%～120%。</div>`);bind('[data-modify]',b=>callbacks.modify(p.id,b.dataset.modify,el('#cultivar').value))}
else if(name==='inspection'){open('防災巡檢・坡地健康檢查',inspectionMarkup(s));bind('[data-inspection-id]',b=>callbacks.action('inspectionMeasure',{id:Number(b.dataset.inspectionId),choice:b.dataset.inspectionChoice}));if(el('#inspection-done'))el('#inspection-done').onclick=()=>s.annual.inspectionPending?callbacks.action('inspectionDone'):close()}
else if(name==='labor'){open('茶園人力安排',laborMarkup(s));bind('[data-hire]',b=>callbacks.hire(b.dataset.hire,Number(b.dataset.count||1)));el('#labor-back').onclick=close;if(el('#labor-card'))el('#labor-card').onclick=()=>show('achievements')}
else if(name==='workshop'){const fresh=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0);open('茶工坊・從茶菁到茶商品',`<p class="modal-sub">本季茶菁 ${fresh} kg · 依配方加工符合條件的茶菁 · 製茶耗 1 回合</p><label class="field">製茶方式<select id="process"><option value="green">綠茶 → 碧螺春</option><option value="white">白茶</option><option value="partial">部分氧化 → 包種茶／烏龍茶</option><option value="black">紅茶</option><option value="honey">蜜香紅茶（只加工有機茶菁）</option><option value="pomelo">柚香綠茶（只加工柚花混作茶菁）</option><option value="kumquat">金桔茶（茶菁＋金桔各一份）</option></select></label><label class="field" id="oxidation-field" hidden>氧化程度（教學簡化分類）<input id="oxidation" type="range" min="10" max="90" value="25"><span id="oxidation-label">25% · 預測包種茶</span></label><div class="modal-notice"><span id="process-batch-note">本次加工 ${fresh} kg，成本 NT$ ${Math.ceil(fresh*C.costs.processingPerKg)}。其中有機茶菁 ${honeyEligibleAmount(s)} kg 可做蜜香紅茶。柚花混作茶菁可做柚香綠茶；金桔庫存 ${s.inventory.kumquat||0} kg。特殊配方只用符合條件的份量，其餘保留。季末未加工茶菁仍失效。</span></div><button class="primary" id="process-tea" ${s.game.phase!=='playerAction'||!fresh?'disabled':''}>製茶・使用 1 回合 →</button><h3>商品庫存與出貨</h3>${C.products.map(t=>`<div class="product-row"><div><b>${t.name} · ${s.inventory.processedTea[t.id]||0} kg</b><small>固定基價 $${t.price}/kg · 本局售價 $${salePrice(s,t)}/kg</small></div><button data-sell="${t.id}" ${!s.inventory.processedTea[t.id]||!['playerAction','yearEnd'].includes(s.game.phase)||s.flags.roadClosed?'disabled':''}>出售</button></div>`).join('')}${s.flags.roadClosed?'<div class="modal-notice danger">道路中斷，無法出貨。歷史土石流仍影響結局。</div><button id="repair-road">修復道路 $'+C.disaster.repairCost+'</button>':''}<p class="modal-sub">出售與道路修復不另耗生產回合；年度規劃期間不能出貨，冬季結束後可先出貨再結算。</p>`);el('#process').onchange=()=>{el('#oxidation-field').hidden=el('#process').value!=='partial';const process=el('#process').value,plan=recipePlan(s,process);el('#process-batch-note').textContent='本次加工茶菁 '+Number(plan.tea.toFixed(3))+' kg'+(plan.fruit?'、金桔 '+Number(plan.fruit.toFixed(3))+' kg':'')+'，成本 $'+plan.cost+'，預計成品 '+plan.product+' kg。剩餘茶菁 '+Number((fresh-plan.tea).toFixed(3))+' kg、金桔 '+Number(((s.inventory.kumquat||0)-plan.fruit).toFixed(3))+' kg。蜜香限有機；柚香限柚花混作；金桔茶用茶菁與果實各一份。季末未加工茶菁失效，金桔可跨季保存。';el('#process-tea').disabled=s.game.phase!=='playerAction'||!plan.tea};el('#oxidation').oninput=()=>{const n=el('#oxidation').value;el('#oxidation-label').textContent=`${n}% · 預測${n<50?'包種茶':'烏龍茶'}`};el('#process-tea').onclick=()=>callbacks.action('process',{process:el('#process').value,oxidation:el('#oxidation').value});bind('[data-sell]',b=>callbacks.action('sell',{id:b.dataset.sell}));if(el('#repair-road'))el('#repair-road').onclick=()=>callbacks.action('road')}
else if(name==='products'){open('地方商品・永久開發',`<p class="modal-sub">從農業到加工與服務，把茶鄉特色帶進生活。六款創意商品開發後收錄圖鑑，採永久茶品售價加成，不另外生產或扣原料。</p>${C.development.map(d=>`<div class="product-row">${catalogEntries.find(e=>e.id===d.id)?productIcon(catalogEntries.find(e=>e.id===d.id)):''}<div><b>${d.name}</b><small>開發 $${d.cost.toLocaleString()} · 永久售價加成 ${Math.round(d.bonus*100)}%</small></div><button data-develop="${d.id}" ${s.upgrades[d.id]||s.game.phase!=='playerAction'?'disabled':''}>${s.upgrades[d.id]?'✓ 已解鎖':'開發・1回合'}</button></div>`).join('')}<p>成功開發後跨年保留，不用每年重新購買。</p>`);bind('[data-develop]',b=>callbacks.action('develop',{id:b.dataset.develop}))}
else if(name==='catalog'){open('茶鄉產品圖鑑',catalogMarkup(s));bind('[data-catalog]',b=>{const story=catalogStory(s,b.dataset.catalog);if(!story)return;current='catalogStory';open(story.title,story.html);el('#catalog-back').onclick=()=>show('catalog')})}
else if(name==='knowledge'){open('茶山知識卡',`<p class="modal-sub">已發現 ${s.knowledge.length} / ${C.knowledge.length} 張 · 隨行動與事件解鎖</p>${C.knowledge.map(k=>`<article class="knowledge-card ${s.knowledge.includes(k.id)?'':'locked'}"><h3>${s.knowledge.includes(k.id)?'🍃':'🔒'} ${k.title}</h3>${s.knowledge.includes(k.id)?`<p>${k.text}</p><a target="_blank" rel="noopener" href="${k.url}">延伸閱讀：${k.source} ↗</a>`:'<p>繼續經營，從相關事件中發現。</p>'}</article>`).join('')}`)}
else if(name==='achievements'){
  open(s.game.phase==='ending'?'六年茶山成果':'我的茶山成果圖卡冊',`${s.game.phase==='ending'?`<div class="modal-notice ${s.ending.type==='negative'?'danger':''}"><b>${s.ending.title}</b><p>${s.economy.money>=C.initialMoney*1.5?'財務成果：我是茶金王，期末資金達本金1.5倍。<br>':''}${s.ending.negative.length?s.ending.negative.map(escapeText).join('<br>'):'你完成了六年經營！看看你收集到了哪些成果，讀讀自己的茶山故事。'}</p></div>`:'<p class="modal-sub">一般成果在第六年冬季結算收集；打工換宿、製茶小達人與火金姑圖卡，達成條件即可提前取得。點開看看故事與收集條件。</p>'}${achievementGallery(s)}`);
  bind('[data-achievement]',b=>{const story=achievementStory(s,b.dataset.achievement);if(!story)return;current='achievementStory';open(story.title,story.html);el('#album-back').onclick=()=>show('achievements')});
}
else if(name==='save'){open('存檔與遊戲設定',`<p class="modal-sub">每次操作自動保存，也可匯出給下一堂課接續。</p><div class="modal-grid"><button id="manual-save">手動儲存目前進度</button><button id="manual-load">讀取本機進度</button><button id="export">匯出存檔 JSON</button><button id="import">匯入存檔 JSON</button></div><label class="field">目前種子<input readonly value="${escapeText(s.seed)}"></label><p>相同種子與相同行動會得到相同災害結果，適合小組比較。</p><label class="field">新遊戲種子<input id="new-seed" maxlength="80" value="${C.seed}"></label><button id="new-game" class="danger">重新開局（會取代目前進度）</button>`);el('#manual-save').onclick=callbacks.save;el('#manual-load').onclick=callbacks.load;el('#export').onclick=callbacks.export;el('#import').onclick=()=>document.querySelector('#import-save').click();el('#new-game').onclick=()=>{const seed=el('#new-seed').value||C.seed;open('確定重開這座茶山？','<p>目前本機進度會被取代。建議先匯出存檔。</p><div class="modal-footer"><button id="cancel-new">返回設定</button><button class="primary" id="confirm-new">確定重開</button></div>');el('#cancel-new').onclick=()=>show('save');el('#confirm-new').onclick=()=>callbacks.newGame(seed)}}
else if(name==='rules'){open('遊戲機制參數表',parameterMarkup())}
if(name==='planning'){const footer=document.createElement('div');footer.className='modal-footer';footer.innerHTML='<button id="planning-labor">人力安排（不占開發額度）</button><button id="planning-hints">💡 過關提示</button><button id="choose-next-land">返回地圖，選下一塊</button><button class="primary" id="finish-planning">完成規劃，開始春季 →</button>';body.append(footer);el('#planning-labor').onclick=()=>show('labor');el('#planning-hints').onclick=()=>show('hints');el('#choose-next-land').onclick=close;el('#finish-planning').disabled=s.game.phase!=='annualPlanning';el('#finish-planning').onclick=()=>{close();document.querySelector('#advance').click()}}
if(name==='journal'){open('茶山日誌・每一步都有足跡',`<p class="modal-sub">第 ${s.game.year} 年 · 已使用 ${s.totals.turns} / ${C.maxYear*C.seasons.length*C.turnsPerSeason} 個農務回合</p><ol class="journal-list">${s.logs.map(t=>'<li>'+escapeText(t)+'</li>').join('')}</ol>`)}
if(name==='cultivars'){open('認識你的茶樹',`<div class="modal-grid"><article class="knowledge-card"><div class="cultivar-swatch ganzai"></div><h3>青心柑仔</h3><p>素材以橢圓、略內折的葉形與鮮綠葉叢提示辨識；三峽碧螺春的代表茶種。</p><a href="https://www.tbrs.gov.tw/ws.php?id=4705" target="_blank" rel="noopener">茶改場品種介紹 ↗</a></article><article class="knowledge-card"><div class="cultivar-swatch oolong"></div><h3>青心烏龍</h3><p>素材呈現較狹長的濃綠葉、密集枝葉與略帶紫色的新芽。</p><a href="https://www.tbrs.gov.tw/ws.php?id=4699" target="_blank" rel="noopener">茶改場品種介紹 ↗</a></article></div><div class="modal-notice">金桔混作採金黃色小果；柚花混作以白色開花狀態呈現，供採取柚花。地塊上的「柑／烏」徽章提供穩定辨識；有機與草生徽章分開。插畫有美術簡化，不能作植物鑑定。</div>`)}
if(name==='hints'){const progress=ecologicalProgress(s);open('💡 過關提示・先想後果，再做選擇',`<p class="modal-sub">${s.game.phase==='annualPlanning'?'年初規劃':`第 ${s.game.year} 年 ${C.seasons[s.game.season]}季・第 ${s.game.turn}/${C.turnsPerSeason} 回合`} · 所選 ${String.fromCharCode(64+p.id)} 地塊 ${p.slope}°</p><p>每種選擇都有好處，也會用掉金錢、時間或土地。提示不會替你做決定。</p><div class="consequence-list">${consequenceHints(s,p).map(h=>`<article><h3>${h.title}</h3><p class="consequence-gain"><b>可能得到：</b>${h.gain}</p><p class="consequence-cost"><b>要想一想：</b>${h.trade}</p></article>`).join('')}</div><div class="modal-notice"><b>🦋 生態觀光進度：${progress.ready} / ${progress.total} 塊茶園符合草生＋有機</b><br>${progress.unlocked?'已永久解鎖生態茶園觀光品牌。':'全部茶園都符合，且沒有未復原的重大受災狀態時，解鎖觀光體驗與品牌加分。森林可保留，不必開發。'}<br>病蟲壓力降低幅度與災害機率都是遊戲教學參數，並非真實農業保證。</div><div class="modal-footer"><button id="hint-back" class="primary">回到茶山，我來決定 →</button></div>`);el('#hint-back').onclick=()=>callbacks.hintBack()}
if(name==='products'){el('#modal-title').insertAdjacentHTML('afterend',`<div class="modal-notice"><b>螢火蟲夜間觀光</b><p>生態度高於 ${C.environment.fireflyThreshold} 自動開啟；每月 ${C.environment.fireflyMonthlyIncome}。生態度不足或道路中斷時暫停。每季按三個月結算，另扣每月營業成本 ${C.operations.monthlyCost}。</p></div>`);const progress=ecologicalProgress(s);el('#modal-title').insertAdjacentHTML('afterend',`<div class="eco-brand-badge"><b>🦋 生態茶園觀光品牌</b><br>${progress.unlocked?'已解鎖：觀光體驗永久開放，品牌獎勵已領取。':`草生＋有機進度 ${progress.ready}/${progress.total} 塊茶園；全數達成時解鎖觀光體驗，品牌 +${C.ecoFarming.tourBrandBonus}。森林可保留。`}</div>`)}
if(el('#action-preview'))callbacks.preview?.(el('#action-preview'),p);return current}
function requestAction(action,payload={}){if(action==='inspect'&&getState().annual.inspectionPending)return show('inspection');const s=getState(),p=s.land[(payload.id||getSelected())-1],names={harvest:'採收所選茶園',pest:'全場病蟲管理',cover:'全場草生維護',inspect:'全場防災巡檢',market:'地方品牌行銷',rest:'讓茶園休養一回合'},amount=action==='harvest'?expectedYield(s,p):0,cost=action==='harvest'||action==='rest'?0:C.costs[action==='market'?'marketing':action]||0,fresh=s.inventory.freshTea.reduce((n,b)=>n+b.amount,0),warning=s.game.turn===C.turnsPerSeason&&(fresh>0||action==='harvest');current='action';open(names[action]||'農務行動',`<div class="art-preview"><canvas id="action-preview" width="160" height="125" aria-label="所選地塊"></canvas><div><h3>${action==='harvest'?String.fromCharCode(64+p.id)+' 地塊 · '+(p.tea.cultivar==='oolong'?'青心烏龍':'青心柑仔'):'本場 '+s.land.filter(l=>l.landUse==='tea').length+' 塊茶園'}</h3><p>${action==='harvest'?'本次可取得 '+amount+' kg 總採收物（其中茶菁 '+harvestComposition(s,p,amount).tea+' kg、金桔 '+harvestComposition(s,p,amount).fruit+' kg）；健康度將下降 '+harvestGrowthCost(s,p)+'。連季採收消耗會增加。採收後仍須製茶。':action==='rest'?'使用本回合，季末將恢復茶樹生長勢。':'一次作用於全場，不必逐塊重複操作。'}</p></div></div><div class="confirmation-facts"><span>⏳ 使用 1 回合</span><span>🪙 成本 $${cost.toLocaleString()}</span><span>本季第 ${s.game.turn} / 5 回合</span></div>${warning?'<div class="modal-notice danger">⚠ 本季最後一回合！這個行動結束後，未製茶茶菁會失效。請先確認是否改去製茶。</div>':''}${action==='rest'?'<div class="modal-notice">休養使生態度增加10點（上限100），使用一回合；季末仍會扣月營業成本並累積病蟲與流失。</div>':action==='pest'?'<div class="modal-notice">管理病蟲能恢復抗性及清除未管季數，同時使生態度下降5點。</div>':''}${action==='inspect'?'<div class="modal-notice danger">巡檢每年一次，只進行幕後壓力檢查，不造成實際災害。檢出危機可自選修繕 $5000，崩塌率減半；未檢出危機可選排水維護 $1000，當年剩餘季節沖蝕率減半。完成安排後才結算本回合。</div>':''}${action==='harvest'&&!amount?'<div class="modal-notice">這塊地目前不可採收。請換一塊茶園，或等待下一季。</div>':''}<div class="modal-footer"><button id="cancel-action">再想一下</button>${fresh?'<button id="go-process">前往製茶</button>':''}<button id="confirm-action" class="primary" ${s.game.phase!=='playerAction'||action==='harvest'&&!amount||action==='inspect'&&s.annual.inspection?'disabled':''}>確認${action==='harvest'?'採收':'執行'}・1 回合 →</button></div>`);callbacks.preview?.(el('#action-preview'),p);el('#cancel-action').onclick=close;if(el('#go-process'))el('#go-process').onclick=()=>show('workshop');el('#confirm-action').onclick=()=>callbacks.action(action,payload)}
return {show,close,requestAction,custom:(title,html,type='custom')=>{current=type;open(title,html)},current:()=>current,feedback:(text,error=false)=>{const n=el('#modal-feedback');if(n){n.textContent=text;n.className=error?'bad':''}},report:(title,text)=>{current='report';open(title,`<div class="modal-notice">${escapeText(text)}</div><div class="modal-footer"><button id="continue-report" class="primary">繼續經營 →</button></div>`);el('#continue-report').onclick=close}}
}





// js\ui\interactionUI.js
function mountInteractions({getState,getSelected,selectPlot,modal,advance,nextMove}){
  document.querySelector('#close-panel').onclick=()=>document.body.classList.remove('panel-open');
  document.querySelector('#recommendation').onclick=()=>{const move=nextMove(getState(),getSelected());if(move.kind==='advance'){advance();return}if(move.kind==='select'){selectPlot(move.id);return}if(['harvest','inspect','rest'].includes(move.kind))modal.requestAction(move.kind,{id:move.id||getSelected()});else modal.show(move.kind)};
  function effect(b,e){if(b.disabled)return;b.classList.remove('tap-flash');void b.offsetWidth;b.classList.add('tap-flash');setTimeout(()=>b.classList.remove('tap-flash'),360);if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const r=b.getBoundingClientRect(),dot=document.createElement('span');dot.className='ripple';dot.setAttribute('aria-hidden','true');dot.style.left=(e.clientX?r.width*(e.clientX-r.left)/r.width:r.width/2)+'px';dot.style.top=(e.clientY?e.clientY-r.top:r.height/2)+'px';b.append(dot);setTimeout(()=>dot.remove(),650)}
  document.addEventListener('pointerdown',e=>{const b=e.target.closest('button');if(b)effect(b,e)});document.addEventListener('click',e=>{const b=e.target.closest('button');if(b&&e.detail===0)effect(b,e)});
}

// js\ui\guidanceUI.js

function turnPromptKey(s){return s.game.phase==='playerAction'?`${s.game.year}-${s.game.season}-${s.game.turn}`:null}
function turnNextLabel(s){return `下一步（${s.game.turn}/${C.turnsPerSeason}）`}
function mountGuidance({getState,modal,onReturnToMap,beforeAsk}){
  let offeredKey=null,tutorialStep=0,tutorialActive=false;
  const tutorialKey='sanxia-tutorial-five-turns-v1';
  const lessons=[
    {icon:'🗺️',title:'這八塊地，由你照顧！',text:'點茶山上的地塊，或按下 A～H，就能看土地資料。上坡和下坡相連，陡坡開發要更小心。',hint:'你有六年時間，照顧茶園、環境與地方產業。'},
    {icon:'🛠️',title:'每年先想一想，要怎麼用地？',text:'年初可以植茶、鋪設草生、改用有機、建造梯田或保留森林。每年最多改造三塊地，同一塊地一年做一項主要改造。',hint:'年初規劃花錢，但不扣農務回合。'},
    {icon:'🖐️',title:'一季有五次行動機會。',text:'每回合只會提醒你「你要做什麼？」。回到茶山，點選要照顧的地塊，再從土地面板或下方工具列進行動作。採收一次只採一塊地，用一回合。',hint:'可以先採幾塊茶園，再把茶菁一起製茶。'},
    {icon:'🍵',title:'採到茶菁，還不是茶商品。',text:'記得進工坊製茶，另外用一回合；製好後再出售。出售不扣回合。季末沒製茶的茶菁會失效！',hint:'最後一回合有茶菁時，先想想要不要製茶。'},
    {icon:'👥',title:'照顧茶園，也要照顧自己。',text:'本人每季最多可採三塊田。從第三年起體力下降，持續少照顧兩塊。前兩年年初安排人力，第三年起每季都可在首次採收前重新安排聘工或打工換宿。',hint:'多了人手，每塊田仍需一回合採收；要把成本、產量與品質一起考慮。'},
    {icon:'🦋',title:'讓茶園成為有生命的地方。',text:'梯田看得到階梯，草生看得到綠色覆蓋。有機茶園會有鳥和蝴蝶提示。有機但無草皮時，病蟲壓力反而增加；草生搭配有機才大幅減輕壓力。連續兩季未管理會加劇病蟲；所有茶園都做到，就能解鎖生態觀光品牌。',hint:'還要留意夏季風雨，田間措施不能保證絕對安全。'}
  ];
  function finishTutorial(){tutorialActive=false;try{localStorage.setItem(tutorialKey,'seen')}catch{}modal.close();ask()}
  function teach(index=0){tutorialActive=true;tutorialStep=index;const item=lessons[index];modal.custom('小小茶農出發前',`<div class="tutorial-progress" aria-label="教學進度">${lessons.map((_,i)=>`<i class="${i<=index?'done':''}"></i>`).join('')}<span>${index+1} / ${lessons.length}</span></div><div class="tutorial-hero">${item.icon}</div><h3 class="tutorial-heading">${item.title}</h3><p class="tutorial-copy">${item.text}</p><div class="modal-notice">💡 ${item.hint}</div><div class="modal-footer"><button id="skip-tutorial">跳過教學</button>${index?'<button id="previous-tutorial">上一步</button>':''}<button id="next-tutorial" class="primary">${index===lessons.length-1?'開始遊戲 →':'下一步 →'}</button></div>`,'tutorial');const q=id=>document.querySelector(id);q('#skip-tutorial').onclick=finishTutorial;if(index)q('#previous-tutorial').onclick=()=>teach(index-1);q('#next-tutorial').onclick=()=>index===lessons.length-1?finishTutorial():teach(index+1)}
  function ask(force=false){
    const s=getState(),key=turnPromptKey(s);
    if(!key||tutorialActive||(!force&&key===offeredKey))return;
    if(modal.current()&&modal.current()!=='action'&&modal.current()!=='workshop')return;
    if(beforeAsk?.())return;
    offeredKey=key;
    modal.custom('你要做什麼？',`<div class="turn-prompt-mark" aria-hidden="true"><i></i><i></i><i></i></div><p class="modal-sub">回到茶山，點選土地決定這回合的行動。</p><div class="modal-footer"><button id="return-to-map" class="primary">${turnNextLabel(s)}</button></div>`,'turn');
    document.querySelector('#return-to-map').onclick=()=>{modal.close();onReturnToMap?.()};
  }
  document.querySelector('#modal').addEventListener('close',()=>{if(tutorialActive&&modal.current()===null){tutorialActive=false;try{localStorage.setItem(tutorialKey,'seen')}catch{}}setTimeout(()=>{if(!document.querySelector('#modal').open)ask()},0)});
  return {afterTurn:()=>ask(),start(force=false){offeredKey=null;let seen=false;try{seen=localStorage.getItem(tutorialKey)==='seen'}catch{}if(force||!seen)teach(0);else ask()},teach:()=>teach(0),ask:()=>ask(true)};
}



// js\main.js
















let state=createState(),selected=1,storageFailure=false,guidance;
try{const saved=loadGame();if(saved)state=saved}catch{storageFailure=true}
if(!state.annual.weather)forecastYear(state);syncEcoTourism(state);syncFirefly(state);
function message(text,error=false){document.querySelector('#message').textContent=text;modal.feedback(text,error)}
function selectPlot(id){selected=id;if(matchMedia('(max-width: 900px)').matches)document.body.classList.add('panel-open');render();map.showName()}
const map=mountMap(document.querySelector('#map'),()=>state,()=>selected,selectPlot);
function render(){syncMilestones(state);catalogCollection(state);renderPanels(state,selected,selectPlot);map.refresh();try{saveGame(state);document.querySelector('#save-status').textContent='✓ 本機進度已儲存'}catch{storageFailure=true;document.querySelector('#save-status').textContent='無法儲存，請匯出 JSON 備份'}}
function perform(action,payload={}){const previous=JSON.stringify(state),beforeHistory=state.history.length,opened=modal.current();try{const result=executeAction(state,action,payload);render();if(['inspect','inspectionMeasure'].includes(action))modal.show('inspection');else if(state.history.length>beforeHistory){const h=state.history.at(-1);modal.report(h.weather+'・茶山事件',h.events.length?h.events.join('；')+'；平均表土 '+h.soil+(action==='inspect'?'。已依巡檢規則修復；土石流與道路另修。':'，受災狀態會保留。'):'沒有發生崩塌，但平均表土降至 '+h.soil+'。防災投入與土地利用都會改變結果。')}else if(opened==='action'||action==='inspectionDone')modal.close();else if(opened&&opened!=='turn')modal.show(opened);message(result);guidance.afterTurn()}catch(e){state=JSON.parse(previous);message(e.message,true)}}
const modal=createModal(()=>state,()=>selected,{
  preview:(canvas,p)=>map.art.preview(canvas,p),
  action:perform,
  hire:(mode,count)=>{const before=JSON.stringify(state);try{const result=hireLabor(state,mode,count);render();modal.show('labor');message(result)}catch(e){state=JSON.parse(before);message(e.message,true)}},
  hintBack:()=>{modal.close();if(state.game.phase==='annualPlanning')modal.show('planning');else returnToMap()},
  modify:(id,a,o)=>{const before=JSON.stringify(state);try{const hadTour=!!state.flags.ecoTourismUnlocked;modifyLand(state,id,a,o);render();if(!hadTour&&state.flags.ecoTourismUnlocked)modal.report('🦋 生態茶園觀光品牌解鎖！','所有經營中的茶園都採草生＋有機；病蟲壓力大幅下降，茶園體驗永久解鎖，品牌 +'+C.ecoFarming.tourBrandBonus+'。保留下來的森林不必開墾。');else modal.show('planning');message('土地改造完成，已同步更新地塊外觀。剩餘 '+(C.modificationLimit-state.annual.modifiedPlots.length)+' 塊規劃額度。')}catch(e){state=JSON.parse(before);message(e.message,true)}},
  save:()=>{try{saveGame(state);message('已手動保存。')}catch{message('瀏覽器無法保存，請匯出 JSON。',true)}},
  load:()=>{try{const s=loadGame();if(!s)throw new Error('沒有本機存檔。');state=s;syncEcoTourism(state);syncFirefly(state);render();modal.close();message('已讀取本機進度。');guidance.start()}catch(e){message(e.message,true)}},
  export:()=>{exportGame(state);message('已匯出存檔 JSON。')},
  newGame:seed=>{state=createState(seed);forecastYear(state);selected=1;render();modal.close();message('新遊戲開始！先看教學，也可直接跳過。');guidance.start(true)}
});
function advance(){if(state.annual.inspectionPending){modal.show('inspection');return}if(state.game.phase==='annualPlanning'){startSeasons(state);render();message('開始春季！本季有 5 回合，記得預留製茶時間。');guidance.afterTurn()}else if(state.game.phase==='yearEnd'){finishYear(state);render();if(state.game.phase==='ending')modal.show('achievements');else if(!showHealthNotice())modal.report('年度結算',state.logs.slice(0,3).join('\n'))}else if(state.game.phase==='ending')modal.show('achievements');else modal.requestAction('rest')}
document.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>b.dataset.open==='guide'?guidance.teach():modal.show(b.dataset.open));
document.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>modal.requestAction(b.dataset.action,{id:selected}));document.querySelector('#planning').onclick=()=>modal.show('planning');document.querySelector('#advance').onclick=advance;
document.querySelector('#zoom-out').onclick=()=>document.querySelector('#zoom-level').textContent=Math.round(map.zoomBy(-.08)*100)+'%';document.querySelector('#zoom-in').onclick=()=>document.querySelector('#zoom-level').textContent=Math.round(map.zoomBy(.08)*100)+'%';
document.querySelector('#import-save').onchange=async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>2000000)throw new Error('存檔過大，請選擇遊戲匯出的 JSON。');state=validateSave(JSON.parse(await file.text()));syncEcoTourism(state);syncFirefly(state);render();modal.close();message('已匯入存檔，使用每季 5 回合規則。');guidance.start()}catch(err){message('匯入失敗：'+err.message,true)}e.target.value=''};
if(new URLSearchParams(location.search).get('debug')==='1'){const box=document.createElement('section');box.id='debug';box.innerHTML='<b>教師測試（先備份存檔）</b><div><button id="debug-money">資金 +100000</button><button id="debug-rain">極端豪雨</button><button id="debug-turn">一季休養</button></div>';document.querySelector('main').append(box);document.querySelector('#debug-money').onclick=()=>{state.economy.money+=100000;addLog(state,'教師模式調整資金。');render()};document.querySelector('#debug-rain').onclick=()=>{if(state.game.phase==='ending')return;state.annual.weather=C.disaster.weather[2];const report=resolveTyphoon(state);render();modal.report('教師模式・極端豪雨',report.events.join('；')||'未發生崩塌；表土狀態已變更。')};document.querySelector('#debug-turn').onclick=()=>{const season=state.game.season;for(let i=0;i<C.turnsPerSeason&&state.game.phase==='playerAction'&&state.game.season===season;i++)executeAction(state,'rest');render();guidance.afterTurn()}};
function showHealthNotice(){if(state.game.year<3||state.game.phase==='ending'||state.flags.healthEventShown||modal.current())return false;state.flags.healthEventShown=true;render();modal.custom('今年身體狀況不太好','<div class="modal-notice danger">從第三年起，體力不足，需要少照顧兩塊田。本人每季可採收的地塊由 3 塊減為 1 塊，持續到第六年。</div><p>第三年起每季都可以在首次採收前安排聘工或打工換宿。人手增加後，每塊田仍需要一回合採收。</p><div class="modal-footer"><button id="health-continue" class="primary">知道了，回到茶山 →</button></div>','health');document.querySelector('#health-continue').onclick=()=>{modal.close();returnToMap()};return true}
function returnToMap(){document.body.classList.remove('panel-open');document.querySelector('#map').focus({preventScroll:true});message('先點選茶山上的地塊，再從土地面板或下方工具列進行動作。')}
mountInteractions({getState:()=>state,getSelected:()=>selected,selectPlot,modal,advance,nextMove});guidance=mountGuidance({getState:()=>state,modal,onReturnToMap:returnToMap,beforeAsk:()=>{if(state.annual.inspectionPending){modal.show('inspection');return true}const key=state.game.year+'-'+state.game.season;if(seasonalLabor(state)&&state.game.phase==='playerAction'&&state.game.turn===1&&!laborPlan(state).confirmed&&state.flags.laborPromptKey!==key){state.flags.laborPromptKey=key;render();modal.show('labor');return true}return false}});render();message('歡迎回到茶山。每季 5 回合，每個回合都可以先看「過關提示」。');guidance.start();document.querySelector('#modal').addEventListener('close',()=>setTimeout(()=>{if(!document.querySelector('#modal').open)showHealthNotice()},0));showHealthNotice();if(storageFailure)document.querySelector('#save-status').textContent='存檔曾無法讀取，建議匯出 JSON 備份';

})();
