var Bird_Image,Cow_Image,Food_Image,Lion_closed_mouth_Image;
var Lion_Open_mouth_Image,Monkey_Image,Monkey_Laughing_Image,Precious_Stone_Image;
var Snake_Image,Spider_Image,Stick_figure_man,green_background_Image;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10;
var line11,line12,line13,line14,line15,line16,line17,line17_1,line18,line19,line20;
var line21,line22,line23,line24,line25,line26,line27,line28,line29,line30;
var line31,line32,line33,line34,line35,line36,line37,line38,line39,line40;
var line41,line42,line43,line44,line45,line46,line47,line48,line49,line50;
var line51,line52,line53,line54,line55,line56,line57,line58,line59,line60;
var line61,line62,line63,line64,line65,line66,line67,line68,line69,line70;
var line71,line72,line73,line74,line75,line76,line77,line78,line79,line80;
var line81,line82,line83,line84,line85,line86,line87,line88,line89,line90;
var line91,line92,line93,line94,line95,line96,line97,line98,line99,line100;
var line101,line102,line103,line104,line105,line106,line107,line108,line109,line110;
var line111,line112,line113,line114,line115,line116,line117,line118,line119,line120;
var line121,line122,line123,line124,line125,line126,line127,line128,line129,line130;
var line131,line132,line133,line134,line135,line136,line137,line138,line139,line140;
var line141,line142,line143,line144,line145,line146,line147,line148,line149,line150;
var line151,line152,line153,line154,line155,line156,line157,line158,line159,line160;
var line161,line162,line163,line164,line165,line166,line167,line168,line169,line170;
var line171,line172,line173,line174,line175,line176,line177,line178,line179,line180;
var line181,line182,line183,line184,line185,line186,line187,line188,line189,line190;
var line191,line192,line193,line194,line195,line196,line197,line198,line199,line200;


function preload(){
   Bird_Image=loadImage("Images/Bird_Image.png");
   Cow_Image=loadImage("Images/Cow_Image.png");
   Food_Image=loadImage("Images/Food_Image.png");
   Lion_closed_mouth_Image=loadImage("Images/Lion_closed_mouth_Image.png");
   Lion_Open_mouth_Image=loadImage("Images/Lion_Open_mouth_Image.png");
   Monkey_Image=loadImage("Images/Monkey_Image.png");
   Monkey_Laughing_Image=loadImage("Images/Monkey_Laughing_Image.png");
   Precious_Stone_Image=loadImage("Images/Precious_Stone_Image.png");
   Snake_Image=loadImage("Images/Snake_Image.png");
   Spider_Image=loadImage("Images/Spider_Image.png");
   Stick_figure_man=loadImage("Images/Stick-figure-man.png");
   green_background_Image=loadImage("Images/green background.jpg");
}

function setup(){
  createCanvas(1360,600);
  //for letters PAC-FOR
  line1=createSprite(217,239,20,200);
  line1.shapeColor="Green";
  line2=createSprite(267,151,100,20);
  line2.shapeColor="Green";
  line3=createSprite(308,182,20,60);
  line3.shapeColor="Green";
  line4=createSprite(271,216,85,20);
  line4.shapeColor="Green";
  line5=createSprite(368,269,20,130);
  line5.shapeColor="Green";
  line6=createSprite(401,209,100,20);
  line6.shapeColor="Green";
  line7=createSprite(451,266,20,130);
  line7.shapeColor="Green";
  line8=createSprite(409,264,70,20);
  line8.shapeColor="Green";
  line9=createSprite(508,266,20,130);
  line9.shapeColor="Green";
  line10=createSprite(559,209,100,20);
  line10.shapeColor="Green";
  line11=createSprite(549,320,100,20);
  line11.shapeColor="Green";
  line12=createSprite(646,262,40,20);
  line12.shapeColor="Green";
  line13=createSprite(719,260,20,130);
  line13.shapeColor="Green";
  line14=createSprite(759,204,100,20);
  line14.shapeColor="Green";
  line15=createSprite(742,249,50,20);
  line15.shapeColor="Green";
  line16=createSprite(844,262,20,130);
  line16.shapeColor="Green";
  line17=createSprite(862,206,20,20);
  line17.shapeColor="Green";
  line17_1=createSprite(904,204,20,20);
  line17_1.shapeColor="Green";
  line18=createSprite(930,260,20,130);
  line18.shapeColor="Green";
  line19=createSprite(888,322,100,20);
  line19.shapeColor="Green";
  line20=createSprite(994,260,20,140);
  line20.shapeColor="Green";
  line21=createSprite(1034,194,100,20);
  line21.shapeColor="Green";
  line22=createSprite(1078,224,20,75);
  line22.shapeColor="Green";
  line23=createSprite(1040,255,80,20);
  line23.shapeColor="Green";
  line24=createSprite(1058,291,20,70);
  line24.shapeColor="Green";

//for MAZE

//Right side😊
line25=createSprite(877,585,10,50);
line26=createSprite(820,562,110,10);
line27=createSprite(762,544,10,50);
line28=createSprite(718,532,10,80);
line29=createSprite(776,490,130,10);
line30=createSprite(807,516,95,10);
line31=createSprite(918,582,10,50);
line32=createSprite(844,474,10,40);
line33=createSprite(877,474,10,40);
line34=createSprite(980,490,200,10);
line35=createSprite(922,515,75,10);
line36=createSprite(944,555,50,10);
line37=createSprite(961,531,10,40);
line38=createSprite(922,515,75,10);
line39=createSprite(982,556,50,10);
line40=createSprite(1003,534,10,40);
line40=createSprite(1042,515,70,10);
line41=createSprite(1077,535,10,30);
line42=createSprite(1107,534,10,30);
line43=createSprite(1132,514,70,10);
line44=createSprite(1166,531,10,25);
line45=createSprite(1175,540,25,10);
line46=createSprite(1186,554,10,25);
line47=createSprite(1197,563,25,10);
line48=createSprite(1208,585,10,50);
line49=createSprite(679,520,10,120);
line50=createSprite(781,456,125,10);
line51=createSprite(1081,469,10,40);
line52=createSprite(1111,469,10,40);
line53=createSprite(1156,484,100,10);
line54=createSprite(1203,520,10,80);
line55=createSprite(720,430,10,50);
line56=createSprite(737,405,45,10);
line57=createSprite(755,414,10,15);
line58=createSprite(653,535,55,10);
line59=createSprite(595,537,10,70);
line60=createSprite(618,500,45,10);
line61=createSprite(520,566,75,10);
line62=createSprite(554,550,10,30);
line63=createSprite(481,538,10,50);
line64=createSprite(1240,572,75,10);
line65=createSprite(1320,530,115,10);
line66=createSprite(1325,546,10,30);
line67=createSprite(1247,486,105,10);
line68=createSprite(1245,498,10,25);
line69=createSprite(798,420,90,10);
line70=createSprite(1058,449,45,10);
line71=createSprite(1036,441,10,25);
line72=createSprite(975,430,120,10);
line73=createSprite(915,420,10,30);
line74=createSprite(963,400,110,10);
line75=createSprite(917,444,10,40);
line76=createSprite(931,446,10,20);
line76.velocityX=5;
line77=createSprite(954,475,10,25);
line78=createSprite(1040,470,80,10);
line79=createSprite(1014,334,10,137);
line80=createSprite(937,375,10,45);
line81=createSprite(953,350,30,10);
line82=createSprite(963,363,10,25);
line83=createSprite(1000,361,25,10);
line84=createSprite(1192,308,250,10);
line85=createSprite(1146,354,10,100);
line86=createSprite(1124,348,40,10);
line87=createSprite(1164,368,40,10);
line88=createSprite(1202,336,10,50);
line89=createSprite(1089,333,10,60);
line90=createSprite(1110,390,80,10);
line91=createSprite(1195,400,100,10);
line92=createSprite(1228,376,10,40);
line93=createSprite(1268,328,10,45);
line94=createSprite(1315,353,10,100);
line95=createSprite(1293,400,40,10);
line96=createSprite(1290,370,40,10);
line97=createSprite(1038,352,45,10);
line98=createSprite(1290,370,40,10);
line99=createSprite(1075,380,10,10);
line100=createSprite(1185,449,150,10);
line101=createSprite(1075,399,10,10);
line102=createSprite(1123,435,10,30);
line103=createSprite(1137,421,25,10);
line104=createSprite(1177,413,10,25);
line105=createSprite(1243,411,10,30);
line106=createSprite(1141,476,10,10);
line107=createSprite(1168,455,10,10);
line108=createSprite(1194,477,10,10);
line109=createSprite(1229,455,10,10);
line110=createSprite(1316,434,10,70);
line111=createSprite(1275,411,10,30);
line112=createSprite(1337,504,10,50);
line113=createSprite(1326,342,20,10);
line114=createSprite(1355,384,20,10);
line115=createSprite(1325,426,20,10);
line116=createSprite(1355,460,10,10);
line117=createSprite(839,377,10,90);
line118=createSprite(874,364,10,63);
line119=createSprite(912,372,10,50);
line120=createSprite(854,390,8,8);
line120.velocityX=0.5;
line121=createSprite(902,363,15,10);
line122=createSprite(861,415,40,10);
line123=createSprite(856,425,10,25);

//Left side😊
line124=createSprite(50,517,100,10);
line125=createSprite(98,533,10,30);
line126=createSprite(111,542,20,10);
line127=createSprite(124,557,10,35);
line128=createSprite(135,570,20,10);
line129=createSprite(145,585,10,30);
line130=createSprite(45,530,100,25);
line130.shapeColor="Brown";
line131=createSprite(55,557,130,30);
line131.shapeColor="Brown";
line132=createSprite(70,586,150,30);
line132.shapeColor="Brown";
line133=createSprite(189,569,90,10);
line134=createSprite(230,573,10,20);
line135=createSprite(184,564,10,45);
line136=createSprite(124,520,10,40);
line137=createSprite(162,519,70,10);
line138=createSprite(150,560,10,20);
line139=createSprite(230,536,10,70);
line140=createSprite(319,513,170,10);
line141=createSprite(253,525,10,20);
line142=createSprite(255,553,60,10);
line143=createSprite(278,540,10,20);
line144=createSprite(298,535,50,10);
line145=createSprite(305,560,10,50);
line146=createSprite(290,579,60,10);
line147=createSprite(343,526,10,20);
line148=createSprite(402,540,10,80);
line149=createSprite(377,544,40,10);
line150=createSprite(355,560,10,40);
line151=createSprite(330,555,20,10);
line151.velocityX=3;
line152=createSprite(430,536,50,10);
line153=createSprite(455,564,55,10);
line154=createSprite(448,525,10,20);
line155=createSprite(434,570,10,20);
line156=createSprite(448,427,550,10);
line157=createSprite(174,473,10,90);
line158=createSprite(223,469,90,25);
line158.shapeColor="Brown";
line159=createSprite(315,469,25,80);
line159.shapeColor="Brown";
line160=createSprite(293,492,20,10);
line161=createSprite(292,448,20,10);
line162=createSprite(483,468,350,25);
line162.shapeColor="Brown";
line163=createSprite(514,523,10,93);
line164=createSprite(86,150,170,10);
line165=createSprite(163,238,10,300);
line166=createSprite(100,325,135,10);
line167=createSprite(33,254,10,140);
line168=createSprite(80,183,100,10);
line169=createSprite(126,236,10,120);
line170=createSprite(90,291,65,10);
line171=createSprite(60,253,10,88);
line172=createSprite(77,208,40,10);
line173=createSprite(97,235,10,65);
line174=createSprite(90,263,20,10);
line175=createSprite(0,248,10,530);
line176=createSprite(91,381,50,10);
line176.velocityX=7;
line177=createSprite(505,371,675,10);
line178=createSprite(99,475,10,120);
line179=createSprite(278,320,10,150);
line180=createSprite(370,420,10,50);
line181=createSprite(414,355,10,90);
line182=createSprite(628,340,10,130);
line183=createSprite(581,285,90,10);


//Top :The entire top-😊
line183=createSprite(680,20,1360,40);
line183.shapeColor="Brown";
line184=createSprite(46,86,40,120);
line184.shapeColor="Brown";
line185=createSprite(266,82,40,120);
line185.shapeColor="Brown";
line186=createSprite(400,120,40,160);
line186.shapeColor="Brown";
line187=createSprite(544,119,40,160);
line187.shapeColor="Brown";
line188=createSprite(743,115,40,160);
line188.shapeColor="Brown";
line189=createSprite(1023,105,40,160);
line189.shapeColor="Brown";
line190=createSprite(475,255,10,300);
line191=createSprite(99,58,70,10);



















line17.velocityX=2; 
line17_1.velocityX=2;
}

function draw(){
   background(green_background_Image);
   fill("Red");
   
   line17.bounceOff(line16);
   line17.bounceOff(line18);
   line17.bounce(line17_1);
   line17_1.bounceOff(line16);
   line17_1.bounceOff(line18);
   line17_1.bounce(line17);

   line176.bounceOff(line175);
   line176.bounceOff(line165);

   line120.bounceOff(line117);
   line120.bounceOff(line118);

   line151.bounceOff(line145);
   line151.bounceOff(line150);

   
   line76.bounceOff(line75);
   line76.bounceOff(line71);
   
   text(mouseX+", "+mouseY,mouseX,mouseY);

   if(frameCount%20===0){
     // console.log(line17.velocityX);
      if(line17.velocityX>0){
         //line17.destroy();
         line17.velocityX=line17.velocityX-0.3;
         if(line17.velocityX<0){
            line17.x=840;
            line17.y=200;
         }
      }
      if(line17_1.velocityX>0){
         //line17_1.destroy();
         line17_1.velocityX=line17.velocity-0.3;
         if(line17_1.velocityX<0){
            line17_1.x=804;
            line17_1.y=104;
         }

      }
   }
   
   drawSprites();

   
}