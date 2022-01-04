function abc()
{
    let Fname = document.getElementById('name1').value.toUpperCase();
 
    let Sname = document.getElementById('name2').value.toUpperCase();

    var lovecount=0;  
        for(var i=0;i<Fname.length;i++)  
        {  
            var L1=Fname.substring(i,i+1);  
            if(L1=='A') lovecount +=3;  
            if(L1=='E') lovecount +=3;  
            if(L1=='I') lovecount +=3;  
            if(L1=='O') lovecount +=3;  
            if(L1=='U') lovecount +=4;  
            if(L1=='L') lovecount +=1;          
            if(L1=='V') lovecount +=4;            
        }  
   
            for (var count = 0; count<Sname.length;count++)  
            {  
               var L2 = Sname.substring(count, count + 1);  
                if(L2=='A') lovecount +=3;  
                if(L2=='E') lovecount +=3;  
                if(L2=='I') lovecount +=3;  
                if(L2=='L') lovecount +=3;  
                if(L2=='O') lovecount +=4;  
                if(L2=='V') lovecount +=1;          
                if(L2=='E') lovecount +=4;  
            }  
            var Total = 0;  
            if (lovecount > 0) Total = 5 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 2) Total = 10 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 4) Total = 20 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 6) Total = 30 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 8) Total = 40 - ((Fname.length + Sname.length) / 2)  
   
            if (lovecount > 10) Total = 50 - ((Fname.length + Sname.length) / 2)  
   
            if (lovecount > 12) Total = 60 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 14) Total = 70 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 16) Total = 80 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 18) Total = 90 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 20) Total = 100 - ((Fname.length + Sname.length) / 2)  
            if (lovecount > 22) Total = 110 - ((Fname.length + Sname.length) / 2)  
            if (Fname.length == 0 || Sname.length == 0)  
                Total = "0";  
            if (Total < 0) Total = 0;  
            if (Total > 99) Total = 99;

            var txtresult = document.getElementById("result"); 
            var res= Math.floor(Total).toString();
            txtresult.style="margin-top:5%";
            txtresult.style="text-align:center";
            txtresult.innerHTML =`<h2>${res}%</h2>`;
}