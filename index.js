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
    s=1;
    if(s==1)
    {
        stopwatch();
    }
}
function stop()
{
    s=0;
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