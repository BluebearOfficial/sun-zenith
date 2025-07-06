
       


    

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

               let b = new Date();
           let day = ((b.getTime() - newyear) / 86400000)+1;
            
           let lat=(Math.sin(0.01720279*day+4.884417))*1406/60;//(Math.sin(0.01720279*date+4.884417))*1406/60;
           let movement=111000*(1406/60-lat);

            const sunlightEl =document.getElementById('sunlight');
          //const position = 222;
            const position = 222-12000/1406*lat;//222对应赤道，22对应北回归线，422对应南回归线


          sunlightEl.style.top = `${position}px`;
       
           

          // let b = new Date();
           // let bear=b.getTime()-1750819650850; //实验

          

          function changeColor(){
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


function t1(){
    document.getElementById("tab1").className="tab"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab4").className="hidden"
}
function t2(){
    document.getElementById("tab2").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab3").className="hidden"
    document.getElementById("tab4").className="hidden"
}
function t3(){
    document.getElementById("tab3").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab4").className="hidden"
}
function t4(){
    document.getElementById("tab4").className="tab"
    document.getElementById("tab1").className="hidden"
    document.getElementById("tab2").className="hidden"
    document.getElementById("tab3").className="hidden"
}
function t(a){
    for(var i=1;i<=4;i++){
        document.getElementById("tab"+i).className=((i==a)?"tab":"hidden");
    }
}



        setInterval(update,1000)
        //setInterval(changeColor,3000)
        changeColor()
        setInterval(shuaxin,300000)
        setInterval(compare,1000)


        
//const NEWSLENGTH=20
function updatenews(){
    let news=[
        ["已经立秋了，但是秋老虎仍然恼火",movement>800000&&movement<2000000],//["新闻内容",显示条件]

        ["一场秋雨一场寒，十场秋雨可DC",true],
        ["汗流浃背了吧，沙坪坝的你",movement>0&&movement<2603704],
        ["关注直射点的南移，是每年暑假的固定节目",true],
        ["2024年沙坪坝居然顶着南半球的直射点刷37.7、日均温33.3、夜温32.5",true],
        ["你有没有体会到什么叫南刮",true],
        ["直射点南移的hopeful时间段有接近一半都是酷暑的，然而直射点北移的hopeless时间段却有接近三分之一是寒冷优秀DC的",true],
        ["以前以为2022烫夏是意外，现在才发现2023凉夏才是意外",true],
        ["越热，越容易得热射病；只有足够的冷，才能体验更优秀的捂！",true],
        ["还有"+(2603.704-movement/1000).toFixed(0)+"km才能到达赤道",movement>0&&movement<2603704],
        ["一到了4月就容易入夏，先热半年再说",true],
        ["还没有入伏呢，你就热得受不了了吗？",movement>0&&movement<270000],
        ["真想日地距离立马变成2天文单位",true],
        ["1近快，7远慢",true],
        ["立冬晴一冬凌,立冬阴一冬温。",true],
        ["2013年和2022年都是加速变热的转折点，活下去，气象爱好者，witness 21世纪无尽的热纪录！",true],
        ["大陆高压持续时间短，为高温发展阶段，高温强度弱、相对湿度大、气温日较差大；副热带高压持续时间长，为高温强盛阶段，高温极端性强，干热特征显著、夜间升温明显。",true],
        ["但凉爽的9月这一情况在2021年那个热9月之后，又被按下了暂停键",true],
        ["华西秋雨，我爱你啊，一天一场，没烦恼啊。告别emo，小情绪啊，下完入秋，心情好啊！",movement>1200000],
        ["dew超过20就很闷热了，超过24极为闷热，接近28则命是空调给的了",true]
            ]
  let num=Math.floor(Math.random()*20);
       if(news[num][1])
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



       


