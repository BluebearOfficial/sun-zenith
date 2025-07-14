
        let newyear = 1735660800000;//暂时取元旦节
        function update(){
            let a = new Date();
            let date = ((a.getTime() - newyear) / 86400000)+1;
            //console.log(date);
           let latitude=(Math.sin(0.01720279*date+4.884417))*1406/60;
            let degree = parseInt(latitude);
            let minute =parseInt( (latitude-parseInt(latitude))*60);
            let second = (((latitude-parseInt(latitude))*60-parseInt((latitude-parseInt(latitude))*60))*60).toFixed(2);
           
          let speed=(-1864.424043*(Math.cos(0.01720279*date+4.884417)) ).toFixed(3)+"m/h或"+(-1864.424043/3.6*(Math.cos(0.01720279*date+4.884417)) ).toFixed(3)+"mm/s";//速度（米每小时）
           let acceleration=(1.3363873*(Math.sin(0.01720279*date+118.029))).toFixed(4)+"m/h²或" +(1.3363873/3.6/3.6*(Math.sin(0.01720279*date+118.029))).toFixed(4)+"μm/s²";//加速度（米每平方小时）
          
       //莫忘了求导后换算单位（系数乘）
        
           
          // let degree = parseInt(latitude);
           // let minute =parseInt( (latitude-parseInt(latitude))*60);
           // let second = (((latitude-parseInt(latitude))*60-parseInt((latitude-parseInt(latitude))*60))*60).toFixed(2);//接近夏至和冬至的话就暂时从保留2位变成5位
           
          let realzen = degree + ' 度 ' + minute + ' 分 ' + second + ' 秒 '  ;
          let zen=(111000*(1406/60-latitude)).toFixed(1)+"m";
          let percent= ((111000*(1406/60-latitude))/2603704*100).toFixed(2)+"%";
         document.getElementById('zenith').innerHTML = zen;
           document.getElementById('realzen').innerHTML = realzen;
          document.getElementById('percent').innerHTML = percent;
          document.getElementById('speed').innerHTML = speed;
          document.getElementById('acceleration').innerHTML = acceleration;
           
             
                
                
            
            }

               let b = new Date();//弄时间戳的全局变量
           let day = ((b.getTime() - newyear) / 86400000)+1;
           let dayofyearq=day%365;
            
           let lat=(Math.sin(0.01720279*day+4.884417))*1406/60;//(Math.sin(0.01720279*date+4.884417))*1406/60;
           let movement=111000*(1406/60-lat);

            const sunlightEl =document.getElementById('sunlight');
           //const position = 222;
            const position = 222-12000/1406*lat;//222对应赤道，22对应北回归线，422对应南回归线


          sunlightEl.style.top = `${position}px`;
       
           

          // let b = new Date();
           // let bear=b.getTime()-1750819650850; //实验

          

          function changeColorzenith(){
          if(movement>4000&&movement<6300)
        { zenith.style.color= "#FF3300";}
        else if(movement<22500)
        {zenith.style.color="#FF6600";}
         else if(movement<30000)
        {zenith.style.color="#FF9900";}
         else if(movement<50000)
        {zenith.style.color="#FFCC00";}
         else if(movement<97000)
        {zenith.style.color="#FFFF00";}
         else if(movement<115000)
        {zenith.style.color="#CCFF00";}
         else if(movement<130000)
        {zenith.style.color="#99FF00";}
         else if(movement<150000)
        {zenith.style.color="#66FF00";}
         else if(movement<180000)
        {zenith.style.color="#33FF00";}
         else if(movement<200000)
        {zenith.style.color="#00FF00";}
         else if(movement<250000)
        {zenith.style.color="#00FF33";}
         else if(movement<280000)
        {zenith.style.color="#00FF66";}
         else if(movement<340000)
        {zenith.style.color="#00FF99";}
         else if(movement<380000)
        {zenith.style.color="#00FFCC";}
         else if(movement<430000)
        {zenith.style.color="#00FFFF";}
         else if(movement<580000)
        {zenith.style.color="#00CCFF";}
         else if(movement<800000)
        {zenith.style.color="#0099FF";}
         else if(movement<1500000)
        {zenith.style.color="#0066FF";}
         else if(movement<2160000)
        {zenith.style.color="#0033FF";}
         else 
        {zenith.style.color="#0000FF";}
          }  

function changeColornow(){
          if(dayofyearq>=158&&dayofyearq<=188)//突然发现dayofyearq判定条件应该全部+1
        { solartermnow.style.color= "#FF5500";}
        else if((dayofyearq>=143&&dayofyearq<=158)||(dayofyearq>=188&&dayofyearq<=203))


        {solartermnow.style.color="#FFAA00";}
         else if((dayofyearq>=128&&dayofyearq<=143)||(dayofyearq>=203&&dayofyearq<=218))
        {solartermnow.style.color="#FFFF00";}
         else if((dayofyearq>=113&&dayofyearq<=128)||(dayofyearq>=218&&dayofyearq<=233))
        {solartermnow.style.color="#AAFF00";}
         else if((dayofyearq>=98&&dayofyearq<=113)||(dayofyearq>=233&&dayofyearq<=248))
        {solartermnow.style.color="#55FF00";}
         else if((dayofyearq>=83&&dayofyearq<=98)||(dayofyearq>=248&&dayofyearq<=263))
        {solartermnow.style.color="#00FF00";}
         else if((dayofyearq>=68&&dayofyearq<=83)||(dayofyearq>=263&&dayofyearq<=278))
        {solartermnow.style.color="#00FF55";}
         else if((dayofyearq>=53&&dayofyearq<=68)||(dayofyearq>=278&&dayofyearq<=293))
        {solartermnow.style.color="#00FFAA";}
         else if((dayofyearq>=38&&dayofyearq<=53)||(dayofyearq>=293&&dayofyearq<=308))
        {solartermnow.style.color="#00FFFF";}
         else if((dayofyearq>=23&&dayofyearq<=38)||(dayofyearq>=308&&dayofyearq<=323))
        {solartermnow.style.color="#00AAFF";}
         else if((dayofyearq>=8&&dayofyearq<=23)||(dayofyearq>=323&&dayofyearq<=338))
        {solartermnow.style.color="#0055FF";}
     
         else 
        {solartermnow.style.color="#0000FF";}
          }  

          function changeColorzen(){

  if(dayofyearq>=158&&dayofyearq<=188)
        { solartermzen.style.color= "#FF5500";}
        else if((dayofyearq>=143&&dayofyearq<=158)||(dayofyearq>=188&&dayofyearq<=203))


        {solartermzen.style.color="#FFAA00";}
         else if((dayofyearq>=128&&dayofyearq<=143)||(dayofyearq>=203&&dayofyearq<=218))
        {solartermzen.style.color="#FFFF00";}
         else if((dayofyearq>=113&&dayofyearq<=128)||(dayofyearq>=218&&dayofyearq<=233))
        {solartermzen.style.color="#AAFF00";}
         else if((dayofyearq>=98&&dayofyearq<=113)||(dayofyearq>=233&&dayofyearq<=248))
        {solartermzen.style.color="#55FF00";}
         else if((dayofyearq>=83&&dayofyearq<=98)||(dayofyearq>=248&&dayofyearq<=263))
        {solartermzen.style.color="#00FF00";}
         else if((dayofyearq>=68&&dayofyearq<=83)||(dayofyearq>=263&&dayofyearq<=278))
        {solartermzen.style.color="#00FF55";}
         else if((dayofyearq>=53&&dayofyearq<=68)||(dayofyearq>=278&&dayofyearq<=293))
        {solartermzen.style.color="#00FFAA";}
         else if((dayofyearq>=38&&dayofyearq<=53)||(dayofyearq>=293&&dayofyearq<=308))
        {solartermzen.style.color="#00FFFF";}
         else if((dayofyearq>=23&&dayofyearq<=38)||(dayofyearq>=308&&dayofyearq<=323))
        {solartermzen.style.color="#00AAFF";}
         else if((dayofyearq>=8&&dayofyearq<=23)||(dayofyearq>=323&&dayofyearq<=338))
        {solartermzen.style.color="#0055FF";}
     
         else 
        {solartermzen.style.color="#0000FF";}


          }

          function changeColortemp(){

 if(dayofyearq>=198&&dayofyearq<=228)//7下半对8上半
        { solartermtemp.style.color= "#FF5500";}
        else if((dayofyearq>=182&&dayofyearq<=198)||(dayofyearq>=228&&dayofyearq<=244))//7上半对8下半


        {solartermtemp.style.color="#FFAA00";}
         else if((dayofyearq>=167&&dayofyearq<=182)||(dayofyearq>=244&&dayofyearq<=251))//6下半对9第一周

        {solartermtemp.style.color="#FFFF00";}
         else if((dayofyearq>=151&&dayofyearq<=167)||(dayofyearq>=251&&dayofyearq<=259))//6上半对9第二周

        {solartermtemp.style.color="#AAFF00";}
         else if((dayofyearq>=136&&dayofyearq<=151)||(dayofyearq>=259&&dayofyearq<=266))//5下半对9第三周

        {solartermtemp.style.color="#55FF00";}
         else if((dayofyearq>=121&&dayofyearq<=136)||(dayofyearq>=266&&dayofyearq<=274))//5上半对9第四周

        {solartermtemp.style.color="#00FF00";}
         else if((dayofyearq>=106&&dayofyearq<=121)||(dayofyearq>=274&&dayofyearq<=289))//4下半对10上半

        {solartermtemp.style.color="#00FF55";}
         else if((dayofyearq>=91&&dayofyearq<=106)||(dayofyearq>=289&&dayofyearq<=305))//4上半对10下半

        {solartermtemp.style.color="#00FFAA";}
         else if((dayofyearq>=76&&dayofyearq<=91)||(dayofyearq>=305&&dayofyearq<=320))//3下半对11上半

        {solartermtemp.style.color="#00FFFF";}
         else if((dayofyearq>=60&&dayofyearq<=76)||(dayofyearq>=320&&dayofyearq<=335))//3上半对11下半

        {solartermtemp.style.color="#00AAFF";}
         else if((dayofyearq>=40&&dayofyearq<=60)||(dayofyearq>=335&&dayofyearq<=355))//2中下对12上中

        {solartermtemp.style.color="#0055FF";}
     
         else //最冷的12下到2上
        {solartermtemp.style.color="#0000FF";}




          }

         function changeColorseason(){
if(dayofyearq<=38)//年初的冬季
{
    season.style.color="#00B0F0";

}
else if(dayofyearq<=87)//初春
{
  season.style.color="#92D050";

}
else if(dayofyearq<=118)//暮春
{
    season.style.color="#00B050";
}
else if(dayofyearq<=189)//初夏
{
   season.style.color="#FF0000";
}
else if(dayofyearq<=239)//盛夏
{
    season.style.color="#C00000";
}
else if(dayofyearq<=275)//暮夏
{
    season.style.color="#FF8000";

}
else if(dayofyearq<=315)//初秋
{
season.style.color="#FFFF00";

}
else if(dayofyearq<=345)//深秋
{
 season.style.color="#FFC000";
}
else//年底的冬季
{season.style.color="#00B0F0";


}



          }



          function changeColor(){
changeColorzenith();
changeColornow();
changeColorzen();
changeColortemp();
changeColorseason();

          }

          function shuaxin(){
         location.reload();



          }



          function compare(){


            
        if(movement<5000)
        { 
        comparison="人步行"+(movement/80).toFixed(2)+"分钟";}
        else if(movement<20000)
        {comparison=(movement/1120).toFixed(2)+"座重庆长江大桥";}
        else if(movement<233000)

        {comparison=(movement/5000).toFixed(2)+"分钟高铁不停";}
        else if(movement<1000000)

        { comparison=(movement/67090).toFixed(2)+"个重庆三号线长度";}
        else if(movement<1700000)
        {comparison=(movement/297000).toFixed(2)+"倍南京到上海路程，差不多立秋了吧";}
        else
        {
            comparison=(movement/1500000).toFixed(2)+"倍重庆到常州路程，差不多优秀了！";
        }


  document.getElementById('comparison').innerHTML = comparison;





          }



function calsolartermnow(){


 if(dayofyearq<5.5||dayofyearq>355.5)

        { 
        solartermnow="冬至";}
        else if(dayofyearq<20.5)
        {solartermnow="小寒";}
        else if(dayofyearq<35.5)
        {solartermnow="大寒";}
        else if(dayofyearq<50.5)
        {solartermnow="立春";}
        else if(dayofyearq<64.5)
        {solartermnow="雨水";}
        else if(dayofyearq<79.5)
        {solartermnow="惊蛰";}
        else if(dayofyearq<94.5)
        {solartermnow="春分";}
        else if(dayofyearq<110.5)
        {solartermnow="清明";}
        else if(dayofyearq<125.5)
        {solartermnow="谷雨";}
        else if(dayofyearq<141.5)
{solartermnow="立夏";}
else if(dayofyearq<156.5)
{solartermnow="小满";}
else if(dayofyearq<172.5)
{solartermnow="芒种";}
else if(dayofyearq<188.5)
{solartermnow="夏至";}
else if(dayofyearq<203.5)
{solartermnow="小暑";}
else if(dayofyearq<219.5)
{solartermnow="大暑";}
else if(dayofyearq<235.5)
{solartermnow="立秋";}
else if(dayofyearq<250.5)
{solartermnow="处暑";}
else if(dayofyearq<266.5)
{solartermnow="白露";}
else if(dayofyearq<281.5)
{solartermnow="秋分";}
else if(dayofyearq<296.5)
{solartermnow="寒露";}
else if(dayofyearq<311.5)
{solartermnow="霜降";}
else if(dayofyearq<326.5)
{solartermnow="立冬";}
else if(dayofyearq<341.5)
{solartermnow="小雪";}

       
        else
        {
           solartermnow="大雪";
        }


}

function calsolartermzen(){

if(dayofyearq<=172)

{zendate=172+Math.abs(dayofyearq-172);}
else{zendate=172-Math.abs(dayofyearq-172);}

zenmonth=parseInt(zendate/30)+1;//姑且把每个月都当作30天，忽略大月小月
zenday=parseInt(zendate%30);

 if(dayofyearq<5.5||dayofyearq>355.5)//冬至对大雪，例如12.24对12.18

        { 
        solartermzen="大雪，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<20.5)//小寒对小雪，例如1.8对12.4
        {solartermzen="小雪，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<35.5)//大寒对立冬，例如1.24对11.18
        {solartermzen="立冬，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<50.5)//立春对霜降，例如2.6对11.5
        {solartermzen="霜降，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<64.5)//雨水对寒露，例如2.23对10.19
        {solartermzen="寒露，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<79.5)//惊蛰对秋分，例如3.7对10.6
        {solartermzen="秋分，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<94.5)//春分对白露，例如3.24对9.19
        {solartermzen="白露，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<110.5)//清明对处暑，例如4.6对9.5
        {solartermzen="处暑，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<125.5)//谷雨对立秋，例如4.22对8.21
        {solartermzen="立秋，"+zenmonth+"月"+zenday+"日";}
        else if(dayofyearq<141.5)//立夏对大暑，例如5.7对8.5
{solartermzen="大暑，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<156.5)//小满对小暑，例如5.23对7.20
{solartermzen="小暑，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<172.5)//芒种对夏至，例如6.7对7.5
{solartermzen="夏至，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<188.5)
{solartermzen="芒种，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<203.5)
{solartermzen="小满，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<219.5)
{solartermzen="立夏，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<235.5)
{solartermzen="谷雨，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<250.5)
{solartermzen="清明，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<266.5)
{solartermzen="春分，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<281.5)
{solartermzen="惊蛰，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<296.5)
{solartermzen="雨水，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<311.5)
{solartermzen="立春，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<326.5)
{solartermzen="大寒，"+zenmonth+"月"+zenday+"日";}
else if(dayofyearq<341.5)
{solartermzen="小寒，"+zenmonth+"月"+zenday+"日";}

       
        else
        {
           solartermzen="冬至，"+zenmonth+"月"+zenday+"日";
        }

}

function calsolartermtemp(){


if(dayofyearq>=182&&dayofyearq<=213)//7月对8月

{tempdate=212+Math.abs(dayofyearq-212);}
else if(dayofyearq>=213&&dayofyearq<=244)//8月对7月
{tempdate=212-Math.abs(dayofyearq-212);}
else if(dayofyearq>=121&&dayofyearq<=182)//5和6月对9月
{tempdate=243+(Math.abs(dayofyearq-182))*0.5;}
else if(dayofyearq>=244&&dayofyearq<=274)//9月对5和6月
{tempdate=182-(Math.abs(dayofyearq-244))*2;}
else if(dayofyearq>=60&&dayofyearq<=121)//3和4月对10和11月
{tempdate=274+Math.abs(dayofyearq-121);}
else if(dayofyearq>=274&&dayofyearq<=335)//10和11月对3和4月
{tempdate=121-Math.abs(dayofyearq-274);}
else if(dayofyearq>=335)//1.15为冷中心，（年底）前冬对后冬
{tempdate=16+15+Math.abs(dayofyearq-365);}
else if(dayofyearq<=16)//1.15为冷中心，（年初）前冬对后冬
{tempdate=15+Math.abs(dayofyearq-15);}
else if(dayofyearq>=16&&dayofyearq<=31)//1.15为冷中心，后冬对(年初)前冬
{tempdate=16-Math.abs(dayofyearq-15);}
else//只剩下2月份的后冬对年底的前冬对应的31~59这个分支了！
{tempdate=365-Math.abs(dayofyearq-30);}







tempmonth=parseInt(tempdate/30)+1;//姑且把每个月都当作30天，忽略大月小月
tempday=parseInt(tempdate%30);

 if(dayofyearq>=40&&dayofyearq<=56)//2.8~2.23

        { 
        solartermtemp="大雪，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=56&&dayofyearq<=68)//2.24~3.7
        {solartermtemp="小雪，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=68&&dayofyearq<=83)//3.8~3.23
        {solartermtemp="立冬，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=83&&dayofyearq<=99)//3.24~4.7
        {solartermtemp="霜降，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=99&&dayofyearq<=115)//4.8~4.23

        {solartermtemp="寒露，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=115&&dayofyearq<=137)//4.24~5.15
        {solartermtemp="秋分，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=137&&dayofyearq<=168)//5.16~6.15
        {solartermtemp="白露，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=168&&dayofyearq<=192)//6.16~7.9
        {solartermtemp="处暑，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=192&&dayofyearq<=207)//7.10~7.24
        {solartermtemp="立秋，"+tempmonth+"月"+tempday+"日";}
        else if(dayofyearq>=207&&dayofyearq<=220)//7.25~8.6

{solartermtemp="大暑，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=220&&dayofyearq<=236)//8.7~8.22
{solartermtemp="小暑，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=236&&dayofyearq<=248)//8.23~9.3
{solartermtemp="夏至，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=248&&dayofyearq<=257)//9.4~9.12
{solartermtemp="芒种，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=257&&dayofyearq<=265)//9.13~9.20
{solartermtemp="小满，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=265&&dayofyearq<=273)//9.21~9.28

{solartermtemp="立夏，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=273&&dayofyearq<=282)//9.29~10.7
{solartermtemp="谷雨，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=282&&dayofyearq<=298)//10.8~10.23

{solartermtemp="清明，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=298&&dayofyearq<=313)//10.24~11.7
{solartermtemp="春分，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=313&&dayofyearq<=329)//11.8~11.23
{solartermtemp="惊蛰，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=329&&dayofyearq<=343)//11.24~12.7
{solartermtemp="雨水，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=343&&dayofyearq<=359)//12.8~12.23
{solartermtemp="立春，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=359||dayofyearq<=9)//12.24~12.31和1.1~1.7

{solartermtemp="大寒，"+tempmonth+"月"+tempday+"日";}
else if(dayofyearq>=9&&dayofyearq<=24)//1.8~1.23
{solartermtemp="小寒，"+tempmonth+"月"+tempday+"日";}

       
        else//1.24~2.7
        {
           solartermtemp="冬至，"+tempmonth+"月"+tempday+"日";
        }

}

function calseason(){

if(dayofyearq<=38){
    season="冬季的第"+parseInt(dayofyearq+21)+"/58天";

}
else if(dayofyearq<=87){
    season="初春的第"+parseInt(dayofyearq-37)+"/49天";

}
else if(dayofyearq<=118){
    season="暮春的第"+parseInt(dayofyearq-86)+"/32天";




}
else if(dayofyearq<=189){
    season="初夏的第"+parseInt(dayofyearq-117)+"/70天";
}
else if(dayofyearq<=239){
    season="盛夏的第"+parseInt(dayofyearq-188)+"/50天";
}
else if(dayofyearq<=275){
    season="暮夏的第"+parseInt(dayofyearq-238)+"/36天";

}
else if(dayofyearq<=315){
season="初秋的第"+parseInt(dayofyearq-274)+"/40天";}
else if(dayofyearq<=345){
    season="深秋的第"+parseInt(dayofyearq-314)+"/30天";
}
else{season="冬季的第"+parseInt(dayofyearq-344)+"/58天";}



}

          function calsolarterm(){


            calsolartermnow();
            calsolartermzen();
            calsolartermtemp();
            calseason();
 document.getElementById('solartermnow').innerHTML = solartermnow;
 document.getElementById('solartermzen').innerHTML = solartermzen;
 document.getElementById('solartermtemp').innerHTML = solartermtemp;
 document.getElementById('season').innerHTML = season;




          }


function t1(){
    document.getElementById("tab1").className="tab"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab4").className="hidden"
    document.getElementById("tab5").className="hidden"
}
function t2(){
    document.getElementById("tab2").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab4").className="hidden"
    document.getElementById("tab5").className="hidden"
}
function t3(){
    document.getElementById("tab3").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab4").className="hidden"
    document.getElementById("tab5").className="hidden"
}
function t4(){
    document.getElementById("tab4").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab5").className="hidden"
}
function t5(){
    document.getElementById("tab5").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab4").className="hidden"
}
function t(a){
    for(var i=1;i<=5;i++){
        document.getElementById("tab"+i).className=((i==a)?"tab":"hidden");
    }
}



        setInterval(update,1000)
        //setInterval(changeColor,3000)
        changeColor()
        setInterval(shuaxin,300000)
        setInterval(compare,1000)
        setInterval(calsolarterm,1000)


        
//const NEWSLENGTH=20
function updatenews(){
    let news=[
        ["已经立秋了，但是秋老虎仍然恼火",movement>800000&&movement<2000000&&dayofyearq>182],//["新闻内容",显示条件]

        ["一场秋雨一场寒，十场秋雨可DC",true],
        ["汗流浃背了吧，沙坪坝的你",movement>0&&movement<2603704],
        ["关注直射点的南移，是每年暑假的固定节目",true],
        ["2024年沙坪坝居然顶着南半球的直射点刷37.7、日均温33.3、夜温32.5",true],
        ["你有没有体会到什么叫南刮",true],
        ["直射点南移的hopeful时间段有接近一半都是酷暑的，然而直射点北移的hopeless时间段却有接近三分之一是寒冷优秀DC的",true],
        ["以前以为2022烫夏是意外，现在才发现2023凉夏才是意外",true],
        ["越热，越容易得热射病；只有足够的冷，才能体验更优秀的捂！",true],
        ["还有"+(2603.704-movement/1000).toFixed(0)+"km才能到达赤道",movement>0&&movement<2603704&&dayofyearq>171],
        ["一到了4月就容易入夏，先热半年再说",true],
        ["还没有入伏呢，你就热得受不了了吗？",movement>0&&movement<270000],
        ["真想日地距离立马变成2天文单位",true],
        ["1近快，7远慢",true],
        ["立冬晴一冬凌,立冬阴一冬温。",true],
        ["2013年和2022年都是加速变热的转折点，活下去，气象爱好者，witness 21世纪无尽的热纪录！",true],
        ["大陆高压持续时间短，为高温发展阶段，高温强度弱、相对湿度大、气温日较差大；副热带高压持续时间长，为高温强盛阶段，高温极端性强，干热特征显著、夜间升温明显。",true],
        ["但凉爽的9月这一情况在2021年那个热9月之后，又被按下了暂停键",true],
        ["华西秋雨，我爱你啊，一天一场，没烦恼啊。告别emo，小情绪啊，下完入秋，心情好啊！",movement>1200000&&dayofyearq>233],
        ["dew超过20就很闷热了，超过24极为闷热，接近28则命是空调给的了",true],//第20条

        ["1上常年旬均温8 极高16.9 极高日均温13.2",dayofyearq<11],
        ["1中常年旬均温8 极高18.7 极高日均温14.9",dayofyearq>11&&dayofyearq<21],
        ["1下常年旬均温8.1 极高18.8 极高日均温13.4",dayofyearq>21&&dayofyearq<32],
        ["2上常年旬均温9.4 极高21.5 极高日均温16.1",dayofyearq>32&&dayofyearq<42],
        ["2中常年旬均温10.4 极高24.3 极高日均温18.9",dayofyearq>42&&dayofyearq<52],
        ["2下常年旬均温11.5 极高27.6 极高日均温20.1",dayofyearq>52&&dayofyearq<60],
        ["3上常年旬均温13 极高30 极高日均温22.9",dayofyearq>60&&dayofyearq<70],
        ["3中常年旬均温14.6 极高33.3 极高日均温26.1",dayofyearq>70&&dayofyearq<80],
        ["3下常年旬均温15.7 极高34.3 极高日均温26.6",dayofyearq>80&&dayofyearq<91],
        ["4上常年旬均温17.7 极高36.5 极高日均温28.5",dayofyearq>91&&dayofyearq<101],
        ["4中常年旬均温19.2 极高36.4 极高日均温29.6",dayofyearq>101&&dayofyearq<111],
        ["4下常年旬均温20.8 极高36.4 极高日均温30.2",dayofyearq>111&&dayofyearq<121],
        ["5上常年旬均温22.3 极高38.9 极高日均温32.3",dayofyearq>121&&dayofyearq<131],
        ["5中常年旬均温22.6 极高37.9 极高日均温30.9",dayofyearq>131&&dayofyearq<141],
        ["5下常年旬均温22.9 极高38.9 极高日均温31.9",dayofyearq>141&&dayofyearq<152],
        ["6上常年旬均温24.4 极高37.9 极高日均温31.7",dayofyearq>152&&dayofyearq<162],
        ["6中常年旬均温25.6 极高39.8 极高日均温34.1",dayofyearq>162&&dayofyearq<172],
        ["6下常年旬均温26.4 极高39.1 极高日均温33.8",dayofyearq>172&&dayofyearq<182],
        ["7上常年旬均温27.6 极高40 极高日均温35.8",dayofyearq>182&&dayofyearq<192],
        ["7中常年旬均温28.8 极高41.3 极高日均温37",dayofyearq>192&&dayofyearq<202],
        ["7下常年旬均温30.2 极高42 极高日均温36.5",dayofyearq>202&&dayofyearq<213],
        ["8上常年旬均温29.8 极高41.7 极高日均温36.9",dayofyearq>213&&dayofyearq<223],
        ["8中常年旬均温29.2 极高43.7 极高日均温38.9",dayofyearq>223&&dayofyearq<233],
        ["8下常年旬均温28 极高43.3 极高日均温38.5",dayofyearq>233&&dayofyearq<244],
        ["9上常年旬均温25.9 极高42 极高日均温37",dayofyearq>244&&dayofyearq<254],
        ["9中常年旬均温24.3 极高39.8 极高日均温35",dayofyearq>254&&dayofyearq<264],
        ["9下常年旬均温22.7 极高38.1 极高日均温33.3",dayofyearq>264&&dayofyearq<274],
        ["10上常年旬均温20.6 极高37.4 极高日均温32",dayofyearq>274&&dayofyearq<284],
        ["10中常年旬均温18.7 极高32.7 极高日均温25.7",dayofyearq>284&&dayofyearq<294],
        ["10下常年旬均温17.5 极高30.1 极高日均温24.8",dayofyearq>294&&dayofyearq<305],
        ["11上常年旬均温16.4 极高29.6 极高日均温22.2",dayofyearq>305&&dayofyearq<315],
        ["11中常年旬均温14.4 极高26.7 极高日均温21.8",dayofyearq>315&&dayofyearq<325],
        ["11下常年旬均温12.4 极高24.1 极高日均温19.8",dayofyearq>325&&dayofyearq<335],
        ["12上常年旬均温10.9 极高21.5 极高日均温16.9",dayofyearq>335&&dayofyearq<345],
        ["12中常年旬均温9.3 极高19.1 极高日均温16.1",dayofyearq>345&&dayofyearq<355],
        ["12下常年旬均温8.4 极高16.7 极高日均温13.1",dayofyearq>355&&dayofyearq<365],//第56条
["连续预报3天高温38+，才有可能刷高温假",movement>0&&movement<2603704&&dayofyearq>171],
["忘不了2024年的极端烫9月，月均温高达32℃，竟然超过了7月份",true],
["一定要珍惜华西秋雨，不要不喜欢阴雨天气,宁可连阴雨无日照，也别光照增温",true],
["2018年9月初高温假后立马入秋，前冬也比较冷，可谓是典范了",true]//第60条
["日高温35+的天气就是难闻的，居然有人喜欢",true],
["假如1均-10,4均10均刚刚零上，7均8均15左右，那我也会喜欢夏天",true],
["我真的喜欢最热月也冷的冰原苔原气候",true],
["以前的热夏挑战还没有现在的凉夏挑战热，真是令人忍俊不禁",true],
["我最恨副热带高压了，但是沙坪坝的高温不依靠位势，夏天稍微放晴一点就必猛暑",true],
["所谓南刮，就是处暑以前，不仅太阳直射点南移后几乎没有降温效果，直射点本身的移动也非常慢，令人着急",true],
["秋老虎真是太可恶了，暴热了好几个月，直射点终于南移了很多，但是气温却还是居高不下",dayofyearq>233&&dayofyearq<270],
["天生我站必有霘，紫波三二七零零",true],
["01~25标，居然6.28入盛夏，令人发指！",true],
["以前盼拉尼娜，误以为可以冷冬；现在盼厄尔尼诺，因为烫夏更要命",true],//第70条

 ["（deepseek）当850hPa温度超过20℃，地表高温就进入危险区间",true],
 ["（deepseek）夜温30+比昼温40+更可怕，因为连喘息的机会都没有",true],
   ["（deepseek）当EC和GFS同时预报有强冷空气南下，那就是蓝熊的春节",dayofyearq>300],
    ["（deepseek）重庆的夏天：早上8点30℃，下午4点42℃，晚上10点38℃",movement>0&&movement<2603704],
   ["（deepseek）当预报的850hPa温度跌破0℃，冬日DC就稳了",dayofyearq<90||dayofyearq>300],
 ["（deepseek）重庆夏季的三大法宝：高温、高湿、低风速",movement>0&&movement<2603704],
   ["（deepseek）当EC把降温过程调强又调弱再调强，就是考验心脏的时候了",dayofyearq>300],
    ["（deepseek）重庆的天气哲学：没有最热，只有更热；没有最短，只有更短（指冬季）",true],
    ["（deepseek）当看到850hPa温度预报出现24℃+，就知道地表要突破40℃了",dayofyearq>150&&dayofyearq<250],
 ["（deepseek）最令人绝望的预报用语：'副热带高压持续偏强偏西'",true]//第80条









            ]
  let num=Math.floor(Math.random()*80);
       if(news[num][1])//["新闻内容",显示条件]的实现
        document.getElementById("news").innerHTML=news[num][0];
    else
        updatenews()
    
}
setInterval(updatenews,5000)
updatenews()


	
		function  importSave(){
var Save=prompt("一年中的第几天？")
game=(Math.sin(0.01720279*Save+4.884417))*1406/60;
		gamedegree = parseInt(game);
         gameminute =parseInt( (game-parseInt(game))*60);
			realgame=gamedegree + ' 度 ' + gameminute + ' 分 ' ;
   document.getElementById('game').innerHTML = realgame;
       
		}
