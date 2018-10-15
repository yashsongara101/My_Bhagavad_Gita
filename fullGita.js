// fullGita.js
// This file holds the entire dictionary representation of the Bhagavad Gita
// @author Hindu YUVA UIUC:
// @author Vivek Bhookya
// @author
//
// Format: A dictionary of dictionaries
// BHAGAVAD_GITA = {
//   "1" : {"1" : "blah blah", "2" : "blah blah", "3" : "blah blah", "4" : "blah blah"},
//   "2" : {},
//   "3" : {}
// }
//
// BHAGAVAD_GITA => The Gita
// BHAGAVAD_GITA["1"] => Chapter 1 of the Gita
// BHAGAVAD_GITA["1"]["3"] => Verse 3 from chapter 1 of the Gita

// Use this command in the Chrome console for easier dict creation!
// var v = <Copy paste the verses from the textfile as a list>
// str = ""
// for (let i = 1; i <= v.length; i++) {
//  var s = "\t\t\"" + i + "\" : " + JSON.stringify(v[i-1]) +  ",\n";
//  str += s;
// }
// console.log(str)

BHAGAVAD_GITA = {
  "1" : {
    "1" : "dhrtarastra uvaca\ndharma-ksetre kuru-ksetre samaveta yuyutsavah\nmamakah pandavas caiva kim akurvata sanjaya (1.1)",
    "2" : "sanjaya uvaca\ndrstva tu pandavanikam vyudham duryodhanas tada\nacaryam upasangamya raja vacanam abravit (1.2)",
    "3" : "pasyaitam pandu-putranam acarya mahatim camum\nvyudham drupada-putrena tava sisyena dhimata (1.3)",
    "4" : "atra sura mahesv-asa bhimarjuna-sama yudhi\nyuyudhano viratas ca drupadas ca maha-rathah (1.4)",
    "5" : "dhrstaketus cekitanah kasirajas ca viryavan\npurujit kuntibhojas ca saibyas ca nara-pungavah (1.5)",
    "6" : "yudhamanyus ca vikranta uttamaujas ca viryavan\nsaubhadro draupadeyas ca sarva eva maha-rathah (1.6)",
    "7" : "asmakam tu visista ye tan nibodha dvijottama\nnayaka mama sainyasya samjnartham tan bravimi te (1.7)",
    "8" : "bhavan bhismas ca karnas ca krpas ca samitim-jayah\nasvatthama vikarnas ca saumadattis tathaiva ca (1.8)",
    "9" : "anye ca bahavah sura mad-arthe tyakta-jivitah\nnana-sastra-praharanah sarve yuddha-visaradah (1.9)",
    "10" : "aparyaptam tad asmakam balam bhismabhiraksitam\nparyaptam tv idam etesam balam bhimabhiraksitam (1.10)",
    "11" : "ayanesu ca sarvesu yatha-bhagam avasthitah\nbhismam evabhiraksantu bhavantah sarva eva hi (1.11)",
    "12" : "tasya sanjanayan harsam kuru-vrddhah pitamahah\nsimha-nadam vinadyoccaih sankham dadhmau pratapavan (1.12)",
    "13" : "tatah sankhas ca bheryas ca panavanaka-gomukhah\nsahasaivabhyahanyanta sa sabdas tumulo 'bhavat (1.13)",
    "14" : "tatah svetair hay air yukta mahati syandane sthitau\nmadhavah pandavas caiva divyau sankhau pradadhmatuh (1.14)",
    "15" : "pancajanyam hrsikeso devadattam dhananjayah\npaundram dadhmau maha-sankham bhima-karma vrkodarah (1.15)",
    "16" : "anantavijayam raja kunti-putro yudhisthirah\nnakulah sahadevas ca sughosa-manipuspakau (1.16)",
    "17" : "kasyas ca paramesv-asah sikhandi ca maha-rathah\ndhrstadyumno viratas ca satyakis caparajitah (1.17)",
    "18" : "drupado draupadeyas ca sarvasah prthivi-pate\nsaubhadras ca maha-bahuh sankhan dadhmuh prthak prthak (1.18)",
    "19" : "sa ghoso dhartarastranam hrdayani vyadarayat\nnabhas caprthivim caiva tumulo bh/vyanunadayan (1.19)",
    "20" : "atha vyavasthitan drstva dhartarastran kapi dvajah\npravrtte sastra-sampate dhanur udyamya pandavah\nhrsikesam tada vakyam idam aha mahi-pate (1.20)",
    "21" : "arjuna uvaca\nsenayor ubhayor madhye ratham sthapaya me 'cyuta\nyavad etan nirikse 'ham yod dhu-kaman avasthitan\nkair may a saha yoddhavyam asmin rana-samudyame (1.21, 1.22)",
    "22" : "arjuna uvaca\nsenayor ubhayor madhye ratham sthapaya me 'cyuta\nyavad etan nirikse 'ham yod dhu-kaman avasthitan\nkair may a saha yoddhavyam asmin rana-samudyame (1.21, 1.22)",
    	"23" : "yotsyamanan avekse 'ham ya ete 'tra samagatah\ndhartarastrasya durbuddher yuddhe priya-cikirsavah (1.23)",
    "24" : "sanjaya uvaca\nevam ukto hrsikeso gudakesena bharata\nsenayor ubhayor madhye sthapayitva rathottamam (1.24)",
    "25" : "bhisma-drona-pramukhatah sarvesam ca mahi-ksitam\nuvaca partha pasyaitan samavetan kurun iti (1.25)",
    "26" : "tatrapasyat sthitan parthah pitrn atha pitamahan\nacaryan matulan bhratrn putran pautran sakhims tatha\nsvasuran suhrdas caiva nayor ubhayor api (1.26)",
    "27" : "tan samiksya sa kaunteyah sarvan bandhun avasthitan\nkrpaya parayavisto visidann idam abravit (1.27)",
    "28" : "arjuna uvaca\ndrstvemam sva janam krsna yuyutsum samupasthitam\nsidanti mama gatrani mukham ca parisusyati (1.28)",
    "29" : "vepathus ca sarire me roma harsas ca jayate\ngandivam sramsate hastat tvak caiva paridahyate (1.29)",
    "30" : "na ca saknomy avasthatum bhramativa ca me manah\nnimittani ca pasyami viparitani kesava (1.30)",
    "31" : "na ca sreyo 'nupasyami hatva sva-janam ahave\nna kankse vijayam krsna na ca rajyam sukhani ca (1.31)",
    "32" : "kim no rajyena govinda kim bhogair jivitena va\nyesam arthe kanksitam no rajyam bhogah sukhani ca (1.32)",
    "33" : "ta ime 'vasthita yuddhe pranams tyaktva dhanani ca\nacaryah pitarah putras tathaiva ca pitamahah (1.33)",
    "34" : "matulah svasurah pautrah syalah sambandhinas tatha\netan na hantum icchami ghnato 'pi madhusudana (1.34)",
    "35" : "api trailokya-rajyasya hetoh kim nu mahi-krte\nnihatya dhartarastran nah ka pritih syaj janardana (1.35)",
    "36" : "papam evasrayed asman hatvaitan atatayinah\ntasman narha vayam hantum dhartarastran sa bandhavan\nsva janam hi katham hatva sukhinah syama madhava (1.36)",
    "37" : "yady apy ete na pasyanti lobhopahata-cetasah\nkula-ksaya-krtam dosam mitra-drohe ca patakam (1.37)",
    "38" : "katham na jneyam asmabhih papad asman nivartitum\nkula ksaya krtam dosam prapasyadbhir janardana (1.38)",
    "39" : "kula-ksaye pranasyanti kula-dharmah sanatanah\ndharme naste kulam krtsnam adharmo 'bhibhavaty uta (1.39)",
    "40" : "adharmabhibhavat krsna pradusyanti kula striyah\nsttisu dustasu varsneya jayate varna-sankarah (1.40)",
    "41" : "sankaro narakayaiva kula-ghnanam kulasya ca\npatanti pitaro hy esam lupta-pindodaka-kriyah (1.41)",
    "42" : "dosair etaih kula-ghnanam varna-sankara-karakaih\nutsadyante jati-dharmah kula-dharmas ca sasvatah (1.42)",
    "43" : "utsanna-kula-dharmanam manusyanam janardana\nnarake niyatam vaso bhavatity anususruma (1.43)",
    "44" : "aho bata mahat papam kartum vyavasita vayam\nyad rajya-sukha-lobhena hantum sva-janam udyatah (1.44)",
    "45" : "yadi mam apratikaram asastram sastra-panayah\ndhartarastra rane hanyus tan me ksemataram bhavet (1.45)",
    "46" : "sanjaya uvaca\nevam uktvarjunah sankhye rathopastha upavisat\nvisrjya sa-saram capam soka-samvigna-manasah (1.46)"
  },
  "2" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : "",
		"43" : "",
		"44" : "",
		"45" : "",
		"46" : "",
		"47" : "",
		"48" : "",
		"49" : "",
		"50" : "",
		"51" : "",
		"52" : "",
		"53" : "",
		"54" : "",
		"55" : "",
		"56" : "",
		"57" : "",
		"58" : "",
		"59" : "",
		"60" : "",
		"61" : "",
		"62" : "",
		"63" : "",
		"64" : "",
		"65" : "",
		"66" : "",
		"67" : "",
		"68" : "",
		"69" : "",
		"70" : "",
		"71" : "",
		"72" : ""
  },
  "3" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : "",
		"43" : ""
  },
  "4" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : ""
  },
  "5" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : ""
  },
  "6" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : "",
		"43" : "",
		"44" : "",
		"45" : "",
		"46" : "",
		"47" : ""
  },
  "7" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : ""
  },
  "8" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : ""
  },
  "9" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : ""
  },
  "10" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : ""
  },
  "11" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : "",
		"43" : "",
		"44" : "",
		"45" : "",
		"46" : "",
		"47" : "",
		"48" : "",
		"49" : "",
		"50" : "",
		"51" : "",
		"52" : "",
		"53" : "",
		"54" : "",
		"55" : ""
  },
  "12" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : ""
  },
  "13" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : ""
  },
  "14" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : ""
  },
  "15" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : ""
  },
  "16" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : ""
  },
  "17" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : ""
  },
  "18" : {
    "1" : "",
		"2" : "",
		"3" : "",
		"4" : "",
		"5" : "",
		"6" : "",
		"7" : "",
		"8" : "",
		"9" : "",
		"10" : "",
		"11" : "",
		"12" : "",
		"13" : "",
		"14" : "",
		"15" : "",
		"16" : "",
		"17" : "",
		"18" : "",
		"19" : "",
		"20" : "",
		"21" : "",
		"22" : "",
		"23" : "",
		"24" : "",
		"25" : "",
		"26" : "",
		"27" : "",
		"28" : "",
		"29" : "",
		"30" : "",
		"31" : "",
		"32" : "",
		"33" : "",
		"34" : "",
		"35" : "",
		"36" : "",
		"37" : "",
		"38" : "",
		"39" : "",
		"40" : "",
		"41" : "",
		"42" : "",
		"43" : "",
		"44" : "",
		"45" : "",
		"46" : "",
		"47" : "",
		"48" : "",
		"49" : "",
		"50" : "",
		"51" : "",
		"52" : "",
		"53" : "",
		"54" : "",
		"55" : "",
		"56" : "",
		"57" : "",
		"58" : "",
		"59" : "",
		"60" : "",
		"61" : "",
		"62" : "",
		"63" : "",
		"64" : "",
		"65" : "",
		"66" : "",
		"67" : "",
		"68" : "",
		"69" : "",
		"70" : "",
		"71" : "",
		"72" : "",
		"73" : "",
		"74" : "",
		"75" : "",
		"76" : "",
		"77" : "",
		"78" : ""
  },
}
