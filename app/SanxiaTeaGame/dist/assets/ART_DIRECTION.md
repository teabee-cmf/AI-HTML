# 茶山互動素材

使用內建 image_gen 工具製作。原始透明 PNG 保留，未以程式抹底或修圖。兩張 3×2 圖集由 Canvas 讀取各格，不另產生裁切圖片。

terrain-healthy.png：青心柑仔裸地／草生、青心烏龍裸地／草生、森林、草地。

terrain-states.png：幼苗、梯田、柚混作、金桔混作、表土流失、崩塌。土石流以崩塌底圖搭配程式土砂效果，植被與有機仍依獨立狀態顯示。

mountain-world.png：山景、聚落與河川背景，不含遊戲地塊或文字。

茶樹外觀參考茶改場青心烏龍介紹 https://www.tbrs.gov.tw/ws.php?id=4699 與柑仔介紹 https://www.tbrs.gov.tw/ws.php?id=4705 。青心烏龍以濃綠、較狹長葉及略紫新芽示意；青心柑仔以橢圓、略內折葉形示意。遊戲小尺寸素材作為品種辨識提示，不能作植物鑑定。資料顯示標籤仍是辨識茶種的主要依據。

## 完整生成提示

## 1
+
Use case: stylized-concept. Asset type: production terrain sprite atlas for a Taiwanese tea farming educational game, rich polished 16-bit pixel art like a high quality classic isometric farming RPG, jewel greens, warm soil and stone retaining walls, sunlight from upper left. Create ONE transparent PNG sprite sheet, precisely 3 columns by 2 rows, six equal square cells with absolutely no borders, text, lettering, icons, interface, or labels. Landscape sheet aspect ratio 3:2, ideally 1536x1024. Each cell contains ONE isolated same-size isometric diamond land platform, all same camera, footprint and alignment. Actual transparent background, never a checkerboard. Wide clean transparent padding between cells. Diamond footprint about 80% of cell width, its bottom point at 85% of cell height. Nothing crosses cell boundaries. TOP ROW left to right: (1) mature Qingxin Ganzai tea planted in orderly bush rows on exposed warm brown soil, oval slightly upcurled green leaves and bright buds; (2) same Ganzai rows with dense low grass between rows; (3) mature Qingxin Oolong tea rows on exposed brown soil, dense small spreading shrubs, narrower elongated glossy deep-green leaves with subtle purplish young bud accents. BOTTOM ROW left to right: (4) same Oolong rows with low grass between rows; (5) lush native broadleaf evergreen forest with several diverse tree canopies, ferns and layered trunks on identical diamond land platform; (6) natural grassy unplanted slope with small grasses, tiny white wildflowers and low shrubs on identical diamond platform. Detailed appealing pixel textures, crisp pixel clusters, convincing dimensional stone platform edges. Tea plants are tea shrubs, not fruit trees; no oranges on tea. Keep cultivar visual differences subtle botanical cues, not unrealistic colored varieties. These six cells will be individually drawn by code; strict regular grid alignment is essential.
+
## 2
+
Use case: stylized-concept. Input image is a STYLE AND ALIGNMENT reference, not a background. Create the companion INTERACTIVE STATE sprite atlas for the same Taiwanese tea educational game. Preserve the EXACT 3-column 2-row grid, canvas dimensions, cell centers, camera angle, diamond footprint, lighting, pixel detail and stone platform edges of the reference. Transparent background with alpha, no labels or text. SIX cells must be isolated and never cross boundaries. Replace contents in row-major order: 1 TOP LEFT: newly planted young tea seedlings with clear exposed soil between small sparse shrubs, subtle tiny bamboo supports; 2 TOP MIDDLE: established tea growing on three visible narrow stone terraced steps with healthy rows, clearly show engineered retaining walls; 3 TOP RIGHT: tea with POMELO mixed cropping, two taller citrus trees with LARGE pale yellow-green ROUND pomelos, fruit trees occupy part of the diamond and displace some tea rows; 4 BOTTOM LEFT: tea with KUMQUAT mixed cropping, two compact citrus trees with MANY SMALL bright orange OVAL kumquats, displacing tea rows; 5 BOTTOM MIDDLE: tea plot with mild surface soil erosion, brown rills and washed-away topsoil between remaining tea shrubs, still recognizable farm; 6 BOTTOM RIGHT: severe landslide plot, broken retaining wall, broad bare brown slide scar, exposed earth and rock debris, few damaged plants, no people. Match footprint and transparency. Detailed crisp 16-bit pixel artwork, polished warm approachable educational RPG art. Do not depict oranges growing on tea bushes. Do not add UI or diagrams. Grid cells and bottoms must match reference for in-game sprite switching.
+
## 3
+
Use case: stylized-concept. Asset type: panoramic background layer for a Taiwanese Sanxia tea mountain educational game. Wide 3:2 landscape, polished lush 16-bit pixel art, same saturated detailed classic isometric farming RPG style as reference. Scenic distant layered emerald mountains, blue sky with soft puffy clouds, densely forested mountain edges on left and right, a small traditional Taiwanese hillside village of tiled-roof white houses at lower left, a vivid turquoise stream meandering down the far LEFT edge into a broad river across the very bottom, little stone bridge and mountain road near bottom. Center 65 percent of the composition is OPEN, GENTLY TEXTURED green rolling hillside with soft contour shading, reserved for separately rendered interactive terrain tiles; absolutely NO pre-drawn farms, tea rows, isolated diamond platforms, labels, UI or characters in that center. Horizon at upper 22 percent. Bright daylight, gentle depth haze, precise small pixel clusters, appealing intricate forest and village details. No text, logos, lettering, borders, or interfaces. This must be a scenery-only game background, not a screenshot of a game UI.
+

現用修正版：terrain-states-v2.png 與 terrain-cultivars-v2.png，柚為白色柚花、金桔改為金黃成熟果色。舊圖保留為版本參照，不由遊戲載入。完整補充提示見 GENERATION_PROMPTS.md。
