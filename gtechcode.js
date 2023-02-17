function displaypopup(x){
    document.getElementById('popup'+x).style.display='block';
    document.getElementById('fade').style.display='block';
}

function goback(x){
    document.getElementById('popup'+x).style.display='none';
    document.getElementById('fade').style.display='none';
}


function addtocart(x){
	alert("Item has been added to the cart!");
    var itemstring = "";
    itemstring += document.getElementById('name'+x).innerHTML + "<br>";
    itemstring += document.getElementById('price'+x).innerHTML;
    document.getElementById("emptycart").style.display='none';
	document.getElementById("mycart").innerHTML+="<hr width='25%'><br>"+itemstring+"<br>";
    totalcostcalc(x);
}

let totalcost = 0;

function totalcostcalc(x){
    let coststring = document.getElementById('price'+x).innerHTML;
    console.log(coststring);
    coststring = coststring.match(/\d+/g);
    console.log(coststring[0]);
    let costint = parseInt(coststring[0]);
    console.log(costint);
    totalcost += costint;
    console.log(totalcost);
    let totalcoststring = totalcost.toString();

    document.getElementById("totalcost").innerHTML = "<hr width='25%'>Total cost is: $" + totalcoststring+"<br><br>";

}