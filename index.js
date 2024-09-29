document.getElementById("hrs").innerHTML="0";
document.getElementById("min").innerHTML="0";
document.getElementById("sec").innerHTML="0";
document.getElementById("mili").innerHTML="0";
let hrs=document.getElementById("hrs").textContent;
let min=document.getElementById("min").textContent;
let sec=document.getElementById("sec").textContent;
let mili=document.getElementById("mili").textContent;
let s=0;
let i=0;
function start()
{
    if(s==0)
    {
        s=1; 
        document.getElementById("b2").innerHTML="Stop";
        stopwatch();
    }
    else{
        s=0;
        document.getElementById("b2").innerHTML="Start";
    }
    
}
function reset()
{
    s=0;
    document.getElementById("o3").innerHTML=" ";
    hrs=0;
    min=0;
    sec=0;
    mili=0;
    i=0;
    document.getElementById("hrs").innerHTML="0";
    document.getElementById("min").innerHTML="0";
    document.getElementById("sec").innerHTML="0";
    document.getElementById("mili").innerHTML="0";
}
function lap()
{
    i++;
    val=document.getElementById("watch").textContent;

    const node = document.createElement("p");
    const textnode = document.createTextNode("Lap :" + i +" "+ val);
    node.appendChild(textnode);
    document.getElementById("o3").appendChild(node);
    
}
function stopwatch()
{
    if(s==1)
    {
        mili++;
        if(mili==100)
        {
            sec++;
            mili=0;
        }
        if(sec==60)
        {
            min++;
            sec=0;
        }
        if(min==60)
        {
            hrs++;
            min=0;
        }
        document.getElementById("hrs").innerHTML=hrs;
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("mili").innerHTML=mili;
        setTimeout(stopwatch,10);
    }
}
