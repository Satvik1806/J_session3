for(var a=4;a<72;)
for(var b=1;b<72;)
for(var c=5;c<72;)
for(var d=2;d<72;)
for(var e=6;e<72;)
for(var f=3;f<72;)
for(var g=7;g<72;)
{
   var t=a+8;
    a=t;
    var te=b+8;
    b=te;
    var tem=c+8;
    c=tem;
    var temp=d+8;
    d=temp;
    var tempa=e+8;
    e=tempa;
    var tempab=f+8;
    f=tempab;
    var tempabc=g+8;
    g=tempabc;
    function seatno(sn)
    {
        if(sn==a)
        {
            return "Your seat is:lower seat"
        }
        else if(sn==b)
        {
            return "Your seat is:lower seat"
        }
        else if(sn==c)
        {
            return "Your seat is:middle seat"
        }
        else if(sn==d)
        {
            return "Your seat is:middle seat"
        }
        else if(sn==e)
        {
            return "Your seat is:upper seat"
        }
        else if(sn==f)
        {
            return "Your seat is:upper seat"
        }
        else if(sn%8==0)
        {
            return "Your seat is:side upper seat"
        }
        else if(sn==g)
        {
            return "Your seat is:side lower seat"
        }
    }
    console.log(seatno(55))
}