var productcontainer = document.getElementById("products")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue = event.target.value.toUpperCase()
    for(c=0;c<productlist.clientHeight;c=c+1)
    {
        var productname = productlist[c].querySelector("p").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[c].style.display = "none"
        }
        else
        {
            productlist[c].style.display = "block"
        }
    }
})