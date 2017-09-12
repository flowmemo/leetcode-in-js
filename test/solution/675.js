// 675. Cut Off Trees for Golf Event
const data = [
  {
    input: [
      [[1, 2, 3],
        [0, 0, 4],
        [7, 6, 5]]
    ],
    ans: 6
  },
  {
    input: [[[49131, 27484, 37079, 5112, 82512, 77522, 0, 0, 84740, 46730, 42986, 25440, 90350, 97211, 55002, 0, 0, 2213, 72085, 0, 36010, 27828, 29392, 3048, 52147, 25009, 16038, 60927, 76634, 60050, 59564, 86787, 13469, 0, 13521, 73690, 88332, 73069, 50836],
      [39465, 15069, 0, 14196, 26313, 13307, 85182, 46131, 94818, 67696, 65746, 11613, 20200, 4453, 37454, 2306, 37090, 99459, 2053, 0, 5612, 77130, 17718, 19870, 19971, 58239, 41199, 21584, 69691, 41963, 53805, 81773, 38838, 50612, 32089, 60095, 70997, 53700, 83832],
      [65872, 99179, 467, 48443, 73039, 97051, 17035, 86315, 63848, 17689, 37535, 20831, 51383, 96663, 97898, 71217, 80606, 42209, 69262, 86849, 0, 84531, 63092, 24168, 0, 42882, 33301, 30283, 54216, 80343, 8437, 7247, 68805, 28948, 0, 53850, 62034, 33203, 73499],
      [43189, 35233, 36860, 78878, 94155, 54711, 62170, 42727, 28309, 88408, 79195, 0, 83939, 45671, 55250, 84054, 52656, 24650, 47924, 47339, 0, 75272, 65385, 63344, 0, 78515, 36242, 43408, 98376, 90981, 38763, 29668, 97659, 50396, 0, 53281, 95161, 16347, 47561],
      [47045, 23815, 55056, 99846, 83840, 9275, 57731, 36457, 91239, 8547, 15021, 41135, 90046, 75909, 96464, 39377, 80514, 8031, 51794, 56326, 12264, 19566, 0, 50726, 13829, 3055, 12837, 20362, 45072, 38821, 1825, 1542, 15518, 77914, 94237, 24912, 23710, 0, 61137],
      [23329, 58600, 55093, 75794, 45994, 44073, 21902, 59620, 67068, 83634, 4141, 90863, 0, 39854, 41813, 2596, 32510, 72826, 39767, 40644, 71762, 82641, 62187, 96954, 55151, 80354, 49069, 83870, 56915, 62867, 19441, 41487, 43067, 75182, 43988, 16488, 5054, 0, 49238],
      [40854, 50136, 21930, 63014, 50657, 95315, 35876, 67562, 27367, 60643, 28017, 52960, 10048, 0, 78676, 85682, 76821, 3684, 10838, 96789, 35705, 47200, 4228, 13125, 65058, 70194, 58889, 49511, 84746, 74874, 19855, 0, 99663, 41826, 90705, 74630, 14258, 68986, 131],
      [52683, 80656, 24345, 1680, 68513, 0, 23764, 84910, 15319, 35388, 38238, 78543, 0, 38211, 35371, 6417, 77490, 43196, 4943, 0, 27547, 96237, 45430, 22246, 27127, 64973, 0, 0, 21948, 91410, 0, 53708, 0, 57138, 82476, 41911, 67543, 42140, 91808],
      [91941, 35006, 29446, 34062, 61640, 28807, 4363, 51400, 13534, 41914, 87400, 12872, 95381, 0, 34685, 69692, 31688, 32842, 42354, 1813, 23320, 32444, 72251, 89754, 53993, 0, 822, 46234, 86206, 70962, 86198, 27503, 95051, 66114, 73187, 0, 82682, 14456, 20830],
      [12249, 0, 0, 55889, 11365, 41624, 0, 4215, 63798, 67495, 22793, 19327, 77569, 8774, 55994, 6320, 83574, 99686, 885, 30672, 0, 8819, 0, 4265, 0, 70149, 43594, 98724, 93483, 82402, 4432, 79239, 63297, 0, 58188, 7079, 65479, 35447, 63466],
      [21847, 65491, 68272, 0, 663, 20796, 62467, 40118, 59941, 66992, 10893, 33034, 85655, 39688, 22828, 55404, 13980, 35702, 19030, 80244, 91075, 9387, 64581, 48878, 34075, 83686, 19268, 93758, 36732, 85159, 1124, 41075, 47732, 86234, 85918, 45543, 32111, 77764, 48744],
      [8008, 66194, 85641, 42438, 25432, 21965, 0, 68181, 44609, 26281, 7606, 29076, 10563, 29167, 18823, 25851, 9878, 77495, 92039, 70416, 1348, 71483, 62713, 74997, 84995, 37174, 84622, 64708, 21574, 96738, 14433, 6212, 26799, 73632, 16293, 13533, 82062, 68702, 42245],
      [79251, 32544, 79754, 11444, 62438, 29036, 41886, 0, 65107, 98899, 23335, 42108, 71522, 0, 79018, 35499, 81950, 0, 54911, 21462, 77637, 6835, 78075, 50685, 71982, 5262, 60986, 62383, 4940, 30623, 82421, 5922, 79972, 18387, 6031, 50119, 68258, 0, 79801],
      [0, 12463, 0, 73312, 4847, 67163, 4246, 0, 33576, 21727, 66271, 72451, 7572, 13397, 60106, 59091, 39365, 87892, 12211, 0, 78987, 57580, 38401, 8432, 7588, 16640, 17926, 27346, 9912, 65881, 82424, 93915, 0, 50568, 95077, 12215, 25729, 9781, 66889],
      [22393, 36549, 32702, 62908, 71625, 51196, 0, 16883, 81389, 89862, 28316, 48135, 46900, 0, 0, 94458, 82102, 74435, 89518, 42328, 23592, 57626, 3293, 51438, 37894, 9891, 6333, 11222, 26767, 87178, 29772, 0, 0, 2939, 26011, 23040, 75793, 7228, 91819],
      [25619, 75288, 84718, 14153, 46269, 12231, 53129, 95581, 16602, 2704, 54943, 6962, 28044, 0, 61406, 7230, 89127, 51270, 1168, 91263, 12625, 9242, 31887, 88669, 6977, 12044, 79560, 58495, 71034, 14291, 52043, 12103, 50830, 55629, 96744, 0, 0, 91897, 81493],
      [35769, 18813, 97316, 34450, 4551, 40919, 11449, 14664, 0, 5528, 0, 0, 72926, 16525, 0, 43526, 46541, 7931, 59160, 12393, 24689, 2861, 86051, 15351, 0, 6664, 13528, 19055, 46471, 1868, 67815, 2214, 0, 39527, 3785, 57426, 32036, 68827, 16435],
      [3446, 79885, 0, 94895, 19996, 35833, 73596, 37384, 0, 26218, 90263, 0, 39006, 86797, 0, 0, 14016, 772, 0, 54857, 6770, 14940, 36121, 58279, 67144, 24001, 57628, 22672, 0, 75027, 15357, 34195, 98889, 26897, 0, 38493, 96431, 42998, 82708],
      [64920, 16206, 36974, 88238, 79205, 75343, 20743, 60634, 35735, 49609, 0, 57011, 75844, 56129, 14660, 29885, 19487, 79572, 33335, 35631, 71914, 84691, 82362, 7399, 210, 5547, 83382, 69063, 66146, 0, 75517, 97090, 0, 86944, 39497, 29290, 65975, 4147, 12569],
      [1704, 76913, 8662, 0, 47427, 24711, 96405, 62473, 52811, 20813, 74190, 0, 7689, 63281, 57038, 6180, 16278, 95357, 0, 18561, 58682, 30667, 32524, 73001, 76305, 37695, 14384, 26340, 71350, 94917, 18699, 99486, 14854, 12236, 27441, 27664, 76108, 12161, 45550],
      [87214, 34550, 44850, 2926, 24243, 85303, 59588, 17869, 75203, 3919, 2303, 29816, 58055, 22162, 2979, 15600, 86287, 21267, 94195, 55338, 26077, 47718, 60117, 31931, 23808, 22491, 7724, 64941, 47005, 95932, 79791, 28038, 29046, 59408, 57810, 69723, 20069, 79918, 29738],
      [60175, 20438, 0, 0, 89228, 81820, 43766, 14559, 68394, 70976, 2699, 29371, 18920, 77261, 42989, 55362, 3697, 83830, 87612, 19486, 41994, 96207, 6649, 12472, 58473, 0, 98752, 35978, 88204, 38538, 0, 3345, 79199, 0, 76391, 20315, 53814, 19936, 23801],
      [41789, 70658, 0, 33205, 11175, 30180, 69081, 10953, 32509, 71050, 78984, 21745, 77920, 0, 96710, 0, 90077, 6329, 82257, 82710, 89404, 31033, 94424, 49163, 0, 91301, 40438, 63564, 17854, 0, 0, 35761, 63331, 48897, 0, 25001, 17845, 66619, 59479],
      [0, 24662, 80269, 81056, 59862, 70814, 30475, 51987, 40917, 16492, 7998, 99397, 24850, 7770, 28721, 48459, 93081, 54687, 95194, 26864, 2856, 0, 75525, 31798, 83660, 16404, 39177, 0, 277, 87586, 5117, 17703, 46413, 24269, 0, 15099, 4318, 93360, 13227],
      [98607, 95857, 40815, 95516, 83898, 27206, 48324, 73196, 7649, 86187, 12098, 17187, 14062, 4891, 51238, 91404, 1621, 40464, 38104, 29224, 2148, 32157, 34879, 36490, 0, 59118, 35201, 34332, 40798, 79744, 0, 34193, 19510, 4815, 3382, 11211, 19655, 57005, 64644],
      [0, 11829, 74727, 45214, 95455, 47598, 74782, 92656, 38675, 60461, 0, 72169, 21313, 86178, 73353, 77631, 52335, 32293, 86500, 9514, 5463, 81500, 50471, 67726, 54815, 95407, 48171, 52509, 85049, 0, 83863, 92145, 43426, 0, 99597, 18925, 75135, 5685, 6805],
      [0, 41682, 55669, 28951, 16424, 43118, 88778, 82681, 99032, 81999, 30218, 25759, 80308, 0, 0, 70594, 40799, 92309, 84988, 24664, 29378, 36290, 0, 0, 58442, 95993, 80946, 10604, 0, 18165, 23476, 51631, 17010, 46086, 0, 0, 62321, 91326, 93106],
      [26378, 24575, 9803, 90465, 68117, 8468, 98790, 84462, 37628, 52903, 25648, 41777, 278, 50698, 65690, 38919, 3276, 79786, 30591, 44235, 2407, 31725, 27071, 17715, 51021, 61353, 0, 24111, 56056, 18855, 26072, 92245, 89894, 12949, 16351, 84202, 77044, 0, 99990],
      [90076, 48527, 53368, 23944, 45532, 91511, 11443, 41597, 58064, 50564, 56806, 23028, 58583, 56935, 44929, 53813, 28431, 47280, 29410, 41210, 77298, 42226, 27074, 0, 39539, 21932, 0, 52567, 7108, 33232, 24184, 13236, 0, 0, 25466, 73218, 11657, 43112, 656],
      [1253, 30528, 60620, 24811, 88617, 34227, 12035, 18663, 97618, 0, 16107, 58666, 87883, 64538, 68908, 97721, 94800, 0, 4249, 0, 0, 97280, 77953, 0, 99107, 0, 78893, 73572, 89549, 74006, 73331, 93971, 27028, 66358, 34084, 50299, 42578, 99191, 1366],
      [85032, 54000, 91316, 70320, 13489, 0, 21781, 37603, 855, 69666, 6782, 66851, 3358, 65603, 77183, 14255, 38868, 0, 32815, 10640, 56395, 50506, 11531, 56483, 95195, 38273, 0, 53212, 82739, 0, 0, 547, 54762, 49677, 7978, 97529, 52362, 9306, 42584],
      [12588, 63359, 69215, 74356, 40077, 76268, 408, 7357, 93185, 0, 99796, 70845, 56381, 53125, 27014, 24078, 12190, 48969, 0, 12993, 47279, 53089, 33444, 92316, 0, 28368, 9444, 44230, 84869, 81200, 37598, 12937, 29478, 0, 18032, 85880, 51411, 44686, 42892],
      [75407, 90307, 51085, 66615, 4272, 31921, 56566, 35335, 44493, 56287, 40280, 39374, 91342, 97186, 33063, 71538, 67105, 37340, 25101, 72348, 79604, 67943, 9419, 22519, 83119, 10361, 16014, 13772, 66866, 7006, 93143, 13644, 39355, 49995, 0, 37914, 40414, 52658, 66075],
      [96501, 4536, 27049, 71257, 99939, 72003, 41187, 0, 71708, 0, 31927, 46175, 5786, 25284, 55934, 30621, 20398, 58858, 27908, 75313, 28153, 39461, 12738, 32988, 36889, 0, 8710, 93276, 89201, 0, 57064, 17014, 38713, 56466, 15129, 56629, 53188, 32312, 90690],
      [93787, 98624, 10749, 61088, 54334, 83364, 75076, 73492, 9591, 71987, 43121, 86762, 80533, 15578, 75153, 6338, 33045, 53223, 14612, 72431, 0, 79584, 23850, 51949, 41435, 36292, 51229, 12413, 30900, 44498, 83338, 96630, 14976, 62268, 66175, 34813, 71567, 92411, 30576],
      [0, 0, 51099, 58582, 75410, 13209, 14158, 88419, 93095, 22084, 22289, 62741, 60977, 83995, 66022, 2662, 60226, 18580, 92927, 70304, 32223, 42908, 45573, 86484, 50297, 77245, 37749, 25319, 76662, 23878, 53596, 87794, 89570, 55524, 84550, 63392, 16446, 87690, 34646],
      [12456, 4405, 80575, 44852, 50584, 49364, 0, 84957, 1985, 70009, 22125, 68617, 31362, 391, 0, 91605, 74932, 10619, 49715, 97363, 40335, 16989, 34273, 45641, 46955, 77834, 72261, 45033, 18653, 49269, 47207, 60528, 9277, 99860, 37141, 86874, 22226, 78877, 51913],
      [61926, 98641, 7067, 43340, 59231, 37116, 20874, 75887, 20614, 0, 88117, 49253, 48432, 47115, 25967, 77196, 0, 39784, 73183, 20235, 37301, 55120, 38192, 61495, 20388, 128, 2108, 4334, 78037, 83815, 91425, 66404, 0, 0, 60406, 55138, 89742, 86413, 30899],
      [0, 0, 16539, 62770, 98148, 75492, 42687, 77792, 3022, 80207, 1312, 69581, 25694, 0, 0, 68940, 96047, 10493, 4759, 77314, 55689, 42267, 22502, 15542, 73211, 8228, 93749, 32422, 2477, 24518, 62996, 30948, 18755, 96545, 7625, 40181, 59890, 77060, 92009]]],
    ans: 37483
  },
  {
    input: [[[78286, 75182, 56288, 96996, 42333, 13203, 74081, 74151, 16154, 18229, 0, 22253, 52847, 40861, 21393, 38736, 50472, 55793, 61871, 47951, 0, 44737, 46989, 2803, 66270, 94807, 95378, 1120, 28431, 30593, 16481, 35574, 59747, 17538, 60254, 47527],
      [83842, 52564, 14434, 50711, 86441, 0, 36252, 7907, 74121, 39890, 92460, 0, 0, 29908, 40579, 89539, 0, 21630, 36577, 42183, 54220, 68214, 9298, 17550, 61911, 92627, 8916, 74444, 33633, 31991, 99608, 54985, 41179, 75697, 98512, 0],
      [13265, 69519, 16387, 51517, 25564, 14781, 21568, 13771, 1702, 0, 69089, 30014, 1276, 0, 65598, 86904, 25515, 49369, 29994, 85707, 5087, 41937, 34521, 9734, 72779, 71990, 56739, 1793, 19130, 68970, 94533, 3771, 87196, 57304, 93156, 40213],
      [0, 89157, 12247, 95535, 40939, 54509, 17363, 76328, 22509, 68437, 64824, 48335, 98358, 68041, 88179, 949, 15213, 13938, 26617, 79975, 6352, 0, 95071, 67770, 79274, 59181, 20295, 12942, 8725, 18158, 77211, 64768, 0, 0, 6587, 41108],
      [55255, 59724, 96323, 234, 8336, 25035, 71754, 62063, 0, 38949, 38895, 0, 45243, 98637, 43987, 55466, 65307, 34169, 19567, 15523, 89633, 36035, 86783, 46066, 21660, 96813, 3068, 63504, 81029, 7136, 23674, 10131, 51302, 36649, 72826, 24004],
      [0, 53502, 78737, 21082, 16874, 49118, 21250, 10214, 85955, 38219, 58089, 75339, 72828, 11207, 0, 8756, 28492, 72922, 67057, 15288, 63374, 37461, 98840, 11437, 89000, 68006, 59954, 4398, 40380, 7036, 9091, 3391, 42556, 0, 40126, 88928],
      [41294, 33060, 91856, 43317, 32659, 37057, 53659, 45147, 53013, 68624, 3732, 15847, 35570, 73155, 57833, 24065, 16867, 54177, 27303, 0, 0, 33468, 82275, 31482, 47526, 82925, 69610, 48628, 22263, 40867, 82603, 97729, 43609, 4666, 3888, 27241],
      [39844, 35948, 66125, 61443, 85908, 36271, 97772, 67468, 42394, 42585, 49074, 62694, 64801, 88632, 92046, 88377, 2332, 30778, 36301, 0, 17344, 37866, 92506, 44747, 30873, 49812, 51556, 62301, 52272, 85191, 33634, 43248, 0, 95403, 11639, 42617],
      [79854, 56239, 78226, 39538, 18733, 55955, 0, 46764, 16986, 33025, 90012, 95070, 81876, 0, 52584, 57447, 93284, 15331, 134, 62295, 84550, 65795, 19418, 0, 0, 58984, 89362, 12429, 86740, 76298, 94199, 86430, 53395, 96560, 41430, 12281],
      [33285, 731, 35838, 12095, 43677, 28517, 95440, 32575, 58496, 0, 0, 35874, 17790, 0, 1249, 31640, 6235, 28724, 36196, 0, 18133, 51417, 88503, 0, 66813, 56733, 54017, 0, 41418, 75079, 61391, 39372, 84962, 36321, 63252, 0],
      [85338, 0, 40334, 45126, 94920, 0, 67908, 43603, 11546, 37521, 34907, 41049, 47102, 66021, 22422, 62540, 73252, 0, 76051, 28742, 17190, 43007, 96062, 4769, 89589, 96073, 36723, 78703, 65021, 0, 63393, 1282, 1895, 75214, 14214, 78267],
      [30048, 50762, 93675, 98718, 58675, 48923, 32800, 46013, 96180, 17576, 50402, 4550, 7732, 25276, 31420, 22785, 98326, 58978, 0, 0, 0, 95054, 6354, 14569, 63117, 78665, 0, 46010, 88437, 43867, 64806, 29001, 1975, 7840, 88155, 93799],
      [72284, 94656, 62600, 40512, 69583, 79084, 91426, 0, 42508, 46990, 0, 7614, 26476, 57328, 0, 37933, 15306, 70200, 59042, 92573, 0, 2990, 13188, 77543, 33111, 69980, 0, 669, 65957, 79366, 56274, 88007, 0, 15580, 77606, 42847],
      [0, 53808, 45093, 68460, 70131, 13023, 45348, 44476, 0, 49897, 0, 91247, 44085, 7292, 22412, 23880, 0, 86957, 73380, 9891, 23510, 50019, 19210, 21105, 95948, 0, 90449, 76933, 83183, 83690, 39555, 50306, 31697, 55681, 79907, 74096],
      [0, 0, 52270, 65870, 8219, 0, 75003, 62167, 30765, 25308, 13181, 55724, 50434, 83519, 27576, 11084, 80222, 7594, 66728, 51896, 48338, 0, 4568, 66933, 56745, 45627, 99346, 40375, 30136, 95878, 0, 27464, 55677, 92236, 3019, 75713],
      [0, 51066, 99890, 55638, 18340, 81124, 74639, 20102, 49046, 21892, 51619, 53170, 59984, 11186, 53818, 8089, 53604, 17079, 47965, 0, 22338, 54762, 52481, 57690, 52400, 6517, 42334, 33058, 93082, 5853, 91947, 99845, 12349, 35090, 0, 4755],
      [63070, 43592, 79029, 77695, 0, 54373, 77414, 72618, 62286, 0, 51525, 86657, 0, 0, 59921, 82203, 90187, 6704, 91881, 15113, 33539, 22710, 11749, 95857, 78807, 4907, 69206, 0, 98146, 64939, 41007, 46155, 46178, 14860, 37857, 80015],
      [14982, 11686, 34531, 34407, 64333, 24034, 59908, 98289, 87772, 94114, 37399, 14985, 22167, 27666, 26544, 4078, 0, 0, 28877, 86725, 6928, 21620, 84358, 89614, 82904, 25160, 28489, 50774, 10314, 27510, 2170, 94041, 22567, 42424, 41326, 14927],
      [16172, 0, 31462, 40500, 26731, 88764, 86254, 50629, 26956, 12234, 45673, 80785, 69426, 2714, 88379, 0, 25925, 59098, 77776, 9690, 8172, 61411, 40221, 97207, 23140, 36115, 45293, 27885, 84661, 65139, 95030, 0, 35748, 17545, 0, 0],
      [52314, 0, 38429, 1538, 64592, 18080, 70368, 17863, 59163, 94120, 16227, 20606, 26223, 0, 65138, 38434, 18640, 0, 87874, 99682, 57020, 72007, 43588, 87919, 98448, 53889, 0, 9768, 73290, 8843, 81723, 31498, 21850, 0, 17904, 7982],
      [62569, 93819, 5972, 54645, 51142, 13427, 85848, 80080, 88619, 74515, 56022, 67867, 21162, 94933, 3149, 5620, 7507, 97553, 22725, 2925, 7505, 14513, 0, 28256, 10251, 17517, 58573, 82848, 41539, 94267, 82148, 23633, 80569, 82391, 44835, 45620],
      [0, 44167, 95855, 9145, 4262, 2017, 36462, 62805, 489, 64165, 53698, 58604, 88833, 88944, 68536, 97069, 85774, 86647, 55373, 24348, 88297, 28408, 65323, 28934, 3309, 91599, 85718, 91398, 10445, 34034, 20880, 53692, 47458, 81834, 36888, 54290],
      [14604, 27441, 78556, 69080, 39419, 30453, 15760, 26727, 81584, 87703, 5387, 26588, 0, 74944, 26521, 63559, 77847, 56380, 99291, 57023, 93989, 74178, 0, 89973, 79640, 66052, 21580, 25838, 36268, 56816, 55642, 89992, 81483, 79948, 60651, 74938],
      [38339, 0, 57504, 23231, 0, 82690, 88665, 12346, 0, 50558, 54421, 8853, 45034, 75764, 3458, 0, 0, 61050, 76503, 81878, 92186, 0, 73079, 65352, 58849, 39485, 27106, 78999, 28859, 48300, 88487, 45894, 65860, 32507, 56532, 47136],
      [41118, 73506, 10748, 52760, 0, 83939, 86088, 18274, 0, 57339, 74543, 53088, 79407, 63811, 4184, 94664, 6357, 32105, 78264, 96267, 82271, 65843, 76447, 11988, 41327, 67640, 36724, 7603, 14640, 68598, 94618, 26046, 83404, 21148, 0, 12066],
      [82990, 63008, 82776, 80677, 68171, 12806, 74542, 89236, 58803, 0, 76311, 23958, 11547, 17435, 54100, 75578, 77979, 24031, 59321, 84034, 64754, 4341, 35923, 29456, 65588, 90143, 80987, 94212, 19513, 87418, 47778, 97191, 0, 21337, 22658, 9668],
      [0, 55412, 30558, 93036, 83748, 1110, 55654, 56981, 9745, 6892, 40946, 33996, 66583, 0, 1982, 79151, 82277, 41016, 88963, 2917, 0, 83236, 98543, 0, 80929, 27955, 36343, 0, 17071, 47478, 47810, 96805, 17199, 55644, 78295, 0],
      [0, 50345, 56766, 26039, 42826, 68719, 17779, 27760, 95139, 0, 33958, 74382, 29210, 77560, 21613, 0, 51281, 49888, 80087, 45526, 21004, 77987, 78988, 59193, 0, 80108, 90041, 81625, 112, 0, 19454, 1759, 22761, 51604, 36326, 95319],
      [13577, 0, 40130, 10781, 73646, 65923, 12802, 60109, 0, 52090, 75970, 85408, 0, 11656, 20747, 30208, 51885, 63197, 44160, 0, 45882, 52730, 58073, 66309, 63010, 87329, 65777, 60685, 80843, 47592, 47417, 1508, 65272, 0, 42380, 87370],
      [88214, 91470, 5128, 44177, 61788, 86401, 87040, 96851, 67185, 56656, 52457, 7765, 10272, 89691, 18850, 5443, 76425, 9899, 0, 84608, 73688, 55639, 19391, 63576, 35451, 95993, 0, 62249, 65134, 9053, 29790, 71578, 24785, 66664, 69072, 0],
      [7741, 62900, 21537, 58824, 99737, 35279, 81283, 0, 9450, 21697, 50176, 56785, 23100, 56718, 93248, 54336, 35654, 45552, 36405, 5295, 43045, 74969, 88897, 23570, 82530, 53403, 93067, 0, 20566, 86572, 0, 53207, 0, 74449, 38328, 21334],
      [2930, 84499, 49780, 6249, 22841, 46583, 79603, 98334, 91840, 85599, 46434, 77811, 79866, 30077, 41256, 72884, 0, 51106, 35784, 49652, 95732, 3445, 20737, 53222, 8622, 36291, 84132, 17913, 93639, 83229, 65556, 0, 50032, 46830, 40065, 27718],
      [74438, 66971, 23733, 70531, 50905, 81568, 17457, 749, 15851, 85428, 71062, 1726, 29764, 72275, 0, 31566, 78532, 74953, 30124, 48266, 53295, 65782, 40128, 75683, 23667, 63711, 87731, 54214, 36694, 39536, 91105, 4674, 56917, 13906, 0, 93793],
      [36490, 14761, 65349, 36382, 21439, 10934, 91228, 9635, 32165, 80580, 80088, 56198, 61281, 51815, 89835, 98880, 0, 83806, 19145, 12419, 26873, 45908, 98874, 0, 31584, 44088, 0, 86545, 62433, 54425, 5832, 91790, 56550, 45740, 81074, 51164],
      [15201, 0, 12099, 41437, 86199, 76065, 55523, 94854, 82280, 24435, 5014, 42376, 38211, 0, 25765, 82355, 82154, 38291, 58929, 17251, 0, 0, 0, 6911, 97177, 68801, 67213, 512, 82220, 70342, 51123, 24552, 41098, 96929, 25747, 64060],
      [19699, 46914, 42229, 58899, 37845, 65732, 80807, 14812, 89688, 4019, 95895, 95691, 373, 20237, 5628, 0, 89515, 83237, 67380, 0, 10541, 0, 81895, 47911, 49173, 51836, 17498, 42099, 73218, 93404, 54379, 57122, 16925, 84184, 62680, 0],
      [83759, 7303, 73222, 49883, 49149, 9558, 49666, 27866, 2614, 61594, 37179, 0, 2937, 41363, 20169, 0, 37091, 66739, 81382, 93998, 67812, 0, 83574, 3610, 96511, 89815, 34356, 52381, 28048, 52163, 56496, 78534, 33359, 89895, 64657, 6606],
      [68286, 36263, 61740, 63501, 0, 92379, 79309, 84154, 12039, 24654, 91239, 61713, 17173, 68026, 74147, 53138, 67312, 46174, 47425, 27864, 82344, 38477, 98696, 0, 8498, 28648, 10146, 1893, 82144, 0, 64849, 64517, 41038, 63733, 44240, 69736],
      [45895, 0, 9398, 59675, 27485, 26911, 79051, 55933, 2187, 74354, 42350, 23521, 58570, 56600, 35252, 90136, 5797, 73893, 64028, 0, 37768, 63721, 0, 95729, 92130, 12811, 99181, 18374, 29679, 91480, 31586, 25200, 57058, 63157, 2178, 36086],
      [69535, 45983, 49520, 63346, 96546, 63370, 94777, 24390, 3404, 18351, 73487, 64731, 79818, 38501, 69039, 3325, 97380, 19459, 48195, 38053, 11531, 10765, 41080, 8408, 76886, 54510, 4301, 64329, 31940, 0, 60135, 90358, 91615, 26633, 3825, 49232],
      [84696, 0, 19751, 0, 0, 21124, 27839, 3221, 62637, 0, 49716, 55117, 0, 20488, 0, 15342, 71082, 0, 0, 9678, 45391, 82922, 28384, 60830, 9798, 73980, 65113, 30713, 75009, 22111, 91376, 14243, 68789, 33731, 92279, 75640],
      [54570, 53618, 75676, 10949, 44247, 37493, 99877, 28239, 0, 73792, 0, 48151, 92330, 53124, 63502, 90216, 29639, 38874, 45252, 50983, 69589, 47457, 24431, 61410, 51796, 20183, 17775, 66834, 0, 41980, 86322, 79585, 98349, 54238, 19784, 37975],
      [27822, 96710, 49305, 26520, 70576, 20190, 56951, 28054, 94896, 91032, 7659, 70964, 56920, 39286, 0, 52300, 94615, 35253, 0, 27830, 0, 36113, 99701, 47724, 85851, 6793, 8677, 90617, 1152, 14181, 15993, 78368, 97223, 51404, 21803, 46896],
      [10073, 0, 72595, 21692, 2811, 72448, 24948, 0, 44520, 0, 38970, 0, 36620, 90729, 90534, 50976, 8868, 98900, 28481, 52045, 49890, 51257, 96051, 81582, 34406, 57712, 47970, 66808, 98160, 10612, 14470, 63160, 42865, 29038, 43215, 92065],
      [81729, 32082, 91405, 58111, 30723, 53083, 0, 57944, 19441, 17228, 42244, 63328, 30516, 33819, 1790, 18697, 11545, 26207, 5261, 44832, 23162, 49672, 36879, 60916, 73460, 3678, 33127, 8352, 72587, 77922, 1150, 61149, 38584, 61016, 14391, 0],
      [3619, 59055, 38482, 11116, 0, 58683, 0, 56180, 87474, 87650, 25047, 0, 26694, 41580, 1691, 59684, 78934, 38798, 49479, 3516, 85992, 0, 58255, 86278, 62239, 63503, 21624, 53729, 63603, 89822, 37594, 12553, 78183, 50016, 67217, 98423],
      [98076, 16988, 52766, 46048, 8715, 10780, 52448, 1515, 77766, 10104, 88493, 98414, 68021, 17911, 82419, 96436, 20341, 45310, 63109, 81401, 80628, 15028, 0, 40563, 95923, 51199, 42118, 84860, 44248, 38300, 89273, 8887, 27858, 23326, 89506, 99894],
      [3270, 70718, 7801, 67547, 36937, 4536, 47853, 8759, 25649, 19600, 95120, 16225, 0, 21546, 9927, 45725, 11500, 16546, 1396, 31430, 83047, 79946, 488, 68403, 86958, 54695, 415, 22235, 96016, 82184, 649, 95375, 5239, 7900, 4326, 32716],
      [9747, 47603, 60637, 16614, 96410, 84194, 90071, 34204, 58936, 34185, 39129, 91409, 94932, 16821, 96686, 72208, 13750, 99561, 80671, 66018, 68791, 76308, 13425, 18072, 68296, 64652, 84700, 69221, 0, 14223, 43918, 66455, 349, 14868, 66032, 61379]]],
    ans: 46041
  }
]
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
