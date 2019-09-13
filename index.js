function calculate()
{
    var v=document.getElementById('rs').value;
    var p=document.getElementById('per').value;
     
    var o=v*p/100;
    
    var m=document.getElementById('show').innerHTML=o;
}
