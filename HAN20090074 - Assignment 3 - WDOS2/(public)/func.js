//json
let HouseEspresso = document.getElementsByClassName('HouseEspresso');
let GuestEspresso = document.getElementsByClassName("GuestEspresso");
let SingleOrigin = document.getElementsByClassName("SingleOrigin");
let HouseBlend = document.getElementsByClassName("HouseBlend");
let NoExtra = document.getElementsByClassName("NoExtra");
let ColdMilk = document.getElementsByClassName("ColdMilk");
let HotMilk = document.getElementsByClassName("HotMilk");
let ChocoDusting = document.getElementsByClassName("ChocoDusting");
let Marshmallow = document.getElementsByClassName("Marshmallow");
let WhippedCream = document.getElementsByClassName("WhippedCream");
let i;

function GetInfo(){
    fetch("./data.json")
        .then(function(response){ 
            return response.json();
        })
        .then(function(data){
            for (i = 0; i < HouseEspresso.length; i++){
                HouseEspresso[i].innerHTML = data.Coffees[0]
            }
            for (i = 0; i < GuestEspresso.length; i++){
                GuestEspresso[i].innerHTML = data.Coffees[1]
            }
            for (i = 0; i < SingleOrigin.length; i++){
                SingleOrigin[i].innerHTML = data.Coffees[2]
            }
            for (i = 0; i < HouseBlend.length; i++){
                HouseBlend[i].innerHTML = data.Coffees[3]
            }
            for (i = 0; i < NoExtra.length; i++){
                NoExtra[i].innerHTML = data.Extras[0]
            }
            for (i = 0; i < ColdMilk.length; i++){
                ColdMilk[i].innerHTML = data.Extras[1]
            }
            for (i = 0; i < HotMilk.length; i++){
                HotMilk[i].innerHTML = data.Extras[2]                
            }
            for (i = 0; i < ChocoDusting.length; i++){
                ChocoDusting[i].innerHTML = data.Extras[3]                
            }
            for (i = 0; i < Marshmallow.length; i++){
                Marshmallow[i].innerHTML = data.Extras[4]                
            }
            for (i = 0; i < WhippedCream.length; i++){
                WhippedCream[i].innerHTML = data.Extras[5]                
            }
        })
}
//All Things JavaScript, LLC (2019) 'JavaScript Tip: Using fetch to Load a JSON File'. Available at: https://www.youtube.com/watch?v=1tVCwv_BX2M&t=256s&ab_channel=AllThingsJavaScript%2CLLC (Accessed: 10 September 2021)
//ĐẠI PHỐ WEB & HOSTING (No date) 'Javascript: phương thức getElementsByClassName()'. Available at: https://www.daipho.com/blog/javascript-phuong-thuc-getelementsbyclassname/ (Accessed: 10 September 2021)

//showing details button
function EspressoDetails(){
    let detail = document.getElementById("espresso_details");
    if (detail.style.display === "block"){
        detail.style.display = "none"
    }
    else{
        detail.style.display = "block";
    }
}
function CappuccinoDetails(){
    let detail = document.getElementById("cappuccino_details");
    if (detail.style.display === "block"){
        detail.style.display = "none"
    }
    else{
        detail.style.display = "block";
    }
}
function AmericanoDetails(){
    let detail = document.getElementById("americano_details");
    if (detail.style.display === "block"){
        detail.style.display = "none"
    }
    else{
        detail.style.display = "block";
    }
}
function PourOverDetails(){
    let detail = document.getElementById("pour_over_details");
    if (detail.style.display === "block"){
        detail.style.display = "none"
    }
    else{
        detail.style.display = "block";
    }
}
function ChemexDetails(){
    let detail = document.getElementById("chemex_details");
    if (detail.style.display === "block"){
        detail.style.display = "none"
    }
    else{
        detail.style.display = "block";
    }
}

document.getElementById("espresso_button").addEventListener("click", EspressoDetails);
document.getElementById("cappuccino_button").addEventListener("click", CappuccinoDetails);
document.getElementById("americano_button").addEventListener("click", AmericanoDetails);
document.getElementById("pour_over_button").addEventListener("click", PourOverDetails);
document.getElementById("chemex_button").addEventListener("click", ChemexDetails);
//Citation: W3School (No date) 'Style display Property'. Available at: https://www.w3schools.com/jsref/prop_style_display.asp (Accessed: 10 September 2021)
//The used sample code: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_display_toggle

//retrieve the values from the inputs
let EspSize = document.getElementsByName("esp_size");
let EspCoffee = document.getElementsByName("esp_coffee");
let EspExtra = document.getElementsByName("esp_extra");
let CapSize = document.getElementsByName("cap_size");
let CapCoffee = document.getElementsByName("cap_coffee");
let CapExtra = document.getElementsByName("cap_extra");
let AmeSize = document.getElementsByName("ame_size");
let AmeCoffee = document.getElementsByName("ame_coffee");
let AmeExtra = document.getElementsByName("ame_extra");
let POSize = document.getElementsByName("po_size");
let POCoffee = document.getElementsByName("po_coffee");
let POExtra = document.getElementsByName("po_extra");
let ChxSize = document.getElementsByName("chx_size");
let ChxCoffee = document.getElementsByName("chx_coffee");
let ChxExtra = document.getElementsByName("chx_extra");

//get espresso's values
function EspressoSize(){
    let size1;
    for (i=0; i<EspSize.length; i++){
        if (EspSize[i].checked){
            size1 = EspSize[i].value;
        }
    }
    return size1;
}
function EspressoCoffee(){
    let coffee1;
    for (i=0; i<EspCoffee.length; i++){
        if (EspCoffee[i].checked){
            coffee1 = EspCoffee[i].value;
        }     
    }
    return coffee1;
}
function EspressoExtra(){
    let extra1;
    for (i=0; i<EspExtra.length; i++){
        if (EspExtra[i].checked){
            extra1 = EspExtra[i].value;
        }     
    }
    return extra1;
}

//get cappuccino's values
function CappuccinoSize(){
    let size2;
    for (i=0; i<CapSize.length; i++){
        if (CapSize[i].checked){
            size2 = CapSize[i].value;
        }
    }
    return size2;
}
function CappuccinoCoffee(){
    let coffee2;
    for (i=0; i<CapCoffee.length; i++){
        if (CapCoffee[i].checked){
            coffee2 = CapCoffee[i].value;
        }     
    }
    return coffee2;
}
function CappuccinoExtra(){
    let extra2; 
    for (i=0; i<CapExtra.length; i++){
        if (CapExtra[i].checked){
            extra2 = CapExtra[i].value;
        }     
    }
    return extra2;
}

//get americano's values
function AmericanoSize(){
    let size3;
    for (i=0; i<AmeSize.length; i++){
        if (AmeSize[i].checked){
            size3 = AmeSize[i].value;
        }
    }
    return size3;
}
function AmericanoCoffee(){
    let coffee3;
    for (i=0; i<AmeCoffee.length; i++){
        if (AmeCoffee[i].checked){
            coffee3 = AmeCoffee[i].value;
        }     
    }
    return coffee3;
}
function AmericanoExtra(){
    let extra3;
    for (i=0; i<AmeExtra.length; i++){
        if (AmeExtra[i].checked){
            extra3 = AmeExtra[i].value;
        }     
    }
    return extra3;
}

//get pour over's values
function PourOverSize(){
    let size4;
    for (i=0; i<POSize.length; i++){
        if (POSize[i].checked){
            size4 = POSize[i].value;
        }
    }
    return size4;
}
function PourOverCoffee(){
    let coffee4;
    for (i=0; i<POCoffee.length; i++){
        if (POCoffee[i].checked){
            coffee4 = POCoffee[i].value;
        }     
    }
    return coffee4;
}
function PourOverExtra(){
    let extra4;
    for (i=0; i<POExtra.length; i++){
        if (POExtra[i].checked){
            extra4 = POExtra[i].value;
        }     
    }
    return extra4;
}

//get chemex's values
function ChemexSize(){
    let size5;
    for (i=0; i<ChxSize.length; i++){
        if (ChxSize[i].checked){
            size5 = ChxSize[i].value;
        }
    }
    return size5;
}
function ChemexCoffee(){
    let coffee5;
    for (i=0; i<ChxCoffee.length; i++){
        if (ChxCoffee[i].checked){
            coffee5 = ChxCoffee[i].value;
        }     
    }
    return coffee5;
}
function ChemexExtra(){
    let extra5;
    for (i=0; i<ChxExtra.length; i++){
        if (ChxExtra[i].checked){
            extra5 = ChxExtra[i].value;
        }     
    }
    return extra5;
}
//Citation: W3School (No date) 'Input Radio checked Property'. Available at: https://www.w3schools.com/jsref/prop_radio_checked.asp (Accessed: 10 September 2021)
//The used sample code: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_radio_checked4

//assigning the price
//espresso's price
let EspressoPrice = 25000;
let EspressoPrice2;
let EspressoPrice3;

function EspressoSizePrice(){
    if (EspressoSize() == "single"){
        return EspressoPrice;
    }
    else{
        EspressoPrice2 = EspressoPrice * 2;
        return EspressoPrice2;
    }
}
function EspressoExtraPrice(){
    if (EspressoExtra() != "no extra"){
        EspressoPrice3 = EspressoSizePrice() + 10000;
        return EspressoPrice3;
    }
    else{
        return EspressoSizePrice();
    }
}

//cappuccino's price
let CappuccinoPrice = 30000;
let CappuccinoPrice2;
let CappuccinoPrice3;

function CappuccinoSizePrice(){
    if (CappuccinoSize() == "medium"){
        CappuccinoPrice2 = CappuccinoPrice * 1.5;
        return CappuccinoPrice2;
    }
    else if (CappuccinoSize() == "large"){
        CappuccinoPrice2 = CappuccinoPrice * 2.25;
        return CappuccinoPrice2;
    }
    else{
        return CappuccinoPrice;
    }
}
function CappuccinoExtraPrice(){
    if (CappuccinoExtra() != "no extra"){
        CappuccinoPrice3 = CappuccinoSizePrice() + 10000;
        return CappuccinoPrice3;
    }
    else{
        return CappuccinoSizePrice();
    }
}

//americano's price
let AmericanoPrice = 30000;
let AmericanoPrice2;
let AmericanoPrice3;

function AmericanoSizePrice(){
    if (AmericanoSize() == "medium"){
        AmericanoPrice2 = AmericanoPrice * 1.5;
        return AmericanoPrice2;
    }
    else if (AmericanoSize() == "large"){
        AmericanoPrice2 = AmericanoPrice * 2.25;
        return AmericanoPrice2;
    }
    else{
        return AmericanoPrice;
    }
}
function AmericanoExtraPrice(){
    if (AmericanoExtra() != "no extra"){
        AmericanoPrice3 = AmericanoSizePrice() + 10000;
        return AmericanoPrice3;
    }
    else{
        return AmericanoSizePrice();
    }
}

//pour over's price
let PourOverPrice = 40000;
let PourOverPrice2;
let PourOverPrice3;

function PourOverSizePrice(){
    if (PourOverSize() == "medium"){
        PourOverPrice2 = PourOverPrice * 1.5;
        return PourOverPrice2;
    }
    else if (PourOverSize() == "large"){
        PourOverPrice2 = PourOverPrice * 2.25;
        return PourOverPrice2;
    }
    else{
        return PourOverPrice;
    }
}
function PourOverExtraPrice(){
    if (PourOverExtra() != "no extra"){
        PourOverPrice3 = PourOverSizePrice() + 10000;
        return PourOverPrice3;
    }
    else{
        return PourOverSizePrice();
    }
}

//chemex's price
let ChemexPrice = 80000;
let ChemexPrice2;

function ChemexSizePrice(){
    if (ChemexSize() == "fixed"){
        return ChemexPrice;
    }
}
function ChemexExtraPrice(){
    if (ChemexExtra() != "no extra"){
        ChemexPrice2 = ChemexSizePrice() + 10000;
        return ChemexPrice2;
    }
    else{
        return ChemexSizePrice();
    }
}

//currency style
const type = {style: "currency", currency: "VND"}
function EspressoCurrency(){
    let EspressoCurrency = EspressoExtraPrice().toLocaleString("vi", type);
    return EspressoCurrency;
}
function CappuccinoCurrency(){
    let CappuccinoCurrency = CappuccinoExtraPrice().toLocaleString("vi", type);
    return CappuccinoCurrency;
}
function AmericanoCurrency(){
    let AmericanoCurrency = AmericanoExtraPrice().toLocaleString("vi", type);
    return AmericanoCurrency;
}
function PourOverCurrency(){
    let PourOverCurrency = PourOverExtraPrice().toLocaleString("vi", type);
    return PourOverCurrency;
}
function ChemexCurrency(){
    let ChemexCurrency = ChemexExtraPrice().toLocaleString("vi", type);
    return ChemexCurrency;
}
//Jad Joubran (2019) 'Quicktip ✨Format currencies with toLocaleString'. Available at: https://www.youtube.com/watch?app=desktop&v=T_Se_Z8Ui5I&ab_channel=JadJoubran (Accessed: 10 September 2021)


//confirm current drink
//espresso
let EspFavShow = document.getElementById("esp_save_fav");
let EspConfirm = document.getElementById("esp_confirm");
let EspPrice = document.getElementById("esp_price");
let EspDrink = document.getElementById("esp_drink");

function EspressoDrink(){
    let EspressoDrink = "Espresso, " + EspressoSize() + ", " + EspressoCoffee() + ", " + EspressoExtra();
    return EspressoDrink;
}
function EspressoOrder(){
    EspPrice.innerHTML = "Price: " + EspressoCurrency();
    EspDrink.innerHTML = EspressoDrink();
    EspFavShow.style.display = "block"
}
EspConfirm.addEventListener("click", EspressoOrder);

//cappuccino
let CapFavShow = document.getElementById("cap_save_fav");
let CapConfirm = document.getElementById("cap_confirm");
let CapPrice = document.getElementById("cap_price");
let CapDrink = document.getElementById("cap_drink");

function CappuccinoDrink(){
    let CappuccinoDrink = "Cappuccino, " + CappuccinoSize() + ", " + CappuccinoCoffee() + ", " + CappuccinoExtra();
    return CappuccinoDrink;
}
function CappuccinoOrder(){
    CapPrice.innerHTML = "Price: " + CappuccinoCurrency();
    CapDrink.innerHTML = CappuccinoDrink();
    CapFavShow.style.display = "block"
}
CapConfirm.addEventListener("click", CappuccinoOrder);

//americano
let AmeFavShow = document.getElementById("ame_save_fav");
let AmeConfirm = document.getElementById("ame_confirm");
let AmePrice = document.getElementById("ame_price");
let AmeDrink = document.getElementById("ame_drink");

function AmericanoDrink(){
    let AmericanoDrink = "Americano, " + AmericanoSize() + ", " + AmericanoCoffee() + ", " + AmericanoExtra();
    return AmericanoDrink;
}
function AmericanoOrder(){
    AmePrice.innerHTML = "Price: " + AmericanoCurrency();
    AmeDrink.innerHTML = AmericanoDrink();
    AmeFavShow.style.display = "block"
}
AmeConfirm.addEventListener("click", AmericanoOrder);

//pour over
let POFavShow = document.getElementById("po_save_fav");
let POConfirm = document.getElementById("po_confirm");
let POPrice = document.getElementById("po_price");
let PODrink = document.getElementById("po_drink");

function PourOverDrink(){
    let PourOverDrink = "Pour Over, " + PourOverSize() + ", " + PourOverCoffee() + ", " + PourOverExtra();
    return PourOverDrink;
}
function PourOverOrder(){
    POPrice.innerHTML = "Price: " + PourOverCurrency();
    PODrink.innerHTML = PourOverDrink();
    POFavShow.style.display = "block"
}
POConfirm.addEventListener("click", PourOverOrder);

//chemex
let ChxFavShow = document.getElementById("chx_save_fav");
let ChxConfirm = document.getElementById("chx_confirm");
let ChxPrice = document.getElementById("chx_price");
let ChxDrink = document.getElementById("chx_drink");

function ChemexDrink(){
    let ChemexDrink = "Chemex, " + ChemexSize() + ", " + ChemexCoffee() + ", " + ChemexExtra();
    return ChemexDrink;
}
function ChemexOrder(){
    ChxPrice.innerHTML = "Price: " + ChemexCurrency();
    ChxDrink.innerHTML = ChemexDrink();
    ChxFavShow.style.display = "block"
}
ChxConfirm.addEventListener("click", ChemexOrder);

//total price
let CartPrice = document.getElementById("total_price");
let InitialPrice = 0;

function EspressoTotal(){
    let EspressoInitialPrice = 0;
    EspressoInitialPrice += EspressoExtraPrice();
    InitialPrice += EspressoInitialPrice;
    return InitialPrice;
}
function CappuccinoTotal(){
    let CappuccinoInitialPrice = 0;
    CappuccinoInitialPrice += CappuccinoExtraPrice();
    InitialPrice += CappuccinoInitialPrice;
    return InitialPrice;
}
function AmericanoTotal(){
    let AmericanoInitialPrice = 0;
    AmericanoInitialPrice += AmericanoExtraPrice();
    InitialPrice += AmericanoInitialPrice;
    return InitialPrice;
}
function PourOverTotal(){
    let PourOverInitialPrice = 0;
    PourOverInitialPrice += PourOverExtraPrice();
    InitialPrice += PourOverInitialPrice;
    return InitialPrice;
}
function ChemexTotal(){
    let ChemexInitialPrice = 0;
    ChemexInitialPrice += ChemexExtraPrice();
    InitialPrice += ChemexInitialPrice;
    return InitialPrice;
}

//add current drink to cart
let CartDrinks = document.getElementById("cart_drinks");
//espresso
let EspToCart = document.getElementById("esp_add_to_cart");

function EspressoToCart(){
    let NewLine = document.createElement("p");
    let EspressoTotalCurency = EspressoTotal().toLocaleString("vi", type);
    let EspressoNewText = document.createTextNode("Drink: " + EspressoDrink() + "." + "\xa0\xa0\xa0" + "Price: " + (EspressoCurrency()));
    CartPrice.innerHTML = "Total Price: " + EspressoTotalCurency;
    NewLine.appendChild(EspressoNewText);
    CartDrinks.appendChild(NewLine);
}
EspToCart.addEventListener("click", EspressoToCart);

//cappuccino
let CapToCart = document.getElementById("cap_add_to_cart");

function CappuccinoToCart(){
    let NewLine = document.createElement("p");
    let CappuccinoTotalCurency = CappuccinoTotal().toLocaleString("vi", type);
    let CappuccinoNewText = document.createTextNode("Drink: " + CappuccinoDrink() + "." + "\xa0\xa0\xa0" + "Price: " + CappuccinoCurrency());
    CartPrice.innerHTML = "Total Price: " + CappuccinoTotalCurency;
    NewLine.appendChild(CappuccinoNewText);
    CartDrinks.appendChild(NewLine);
}
CapToCart.addEventListener("click", CappuccinoToCart);

//americano
let AmeToCart = document.getElementById("ame_add_to_cart");

function AmericanoToCart(){
    let NewLine = document.createElement("p");
    let AmericanoTotalCurency = AmericanoTotal().toLocaleString("vi", type);
    let AmericanoNewText = document.createTextNode("Drink: " + AmericanoDrink() + "." + "\xa0\xa0\xa0" + "Price: " + AmericanoCurrency());
    CartPrice.innerHTML = "Total Price: " + AmericanoTotalCurency;
    NewLine.appendChild(AmericanoNewText);
    CartDrinks.appendChild(NewLine);
}
AmeToCart.addEventListener("click", AmericanoToCart);

//pour over
let POToCart = document.getElementById("po_add_to_cart");

function PourOverToCart(){
    let NewLine = document.createElement("p");
    let PourOverTotalCurency = PourOverTotal().toLocaleString("vi", type);
    let PourOverNewText = document.createTextNode("Drink: " + PourOverDrink() + "." + "\xa0\xa0\xa0" + "Price: " + PourOverCurrency());
    CartPrice.innerHTML = "Total Price: " + PourOverTotalCurency;
    NewLine.appendChild(PourOverNewText);
    CartDrinks.appendChild(NewLine);
}
POToCart.addEventListener("click", PourOverToCart);

//chemex
let ChxToCart = document.getElementById("chx_add_to_cart");

function ChemexToCart(){
    let NewLine = document.createElement("p");
    let ChemexTotalCurency = ChemexTotal().toLocaleString("vi", type);
    let ChemexNewText = document.createTextNode("Drink: " + ChemexDrink() + "." + "\xa0\xa0\xa0" + "Price: " + ChemexCurrency());
    CartPrice.innerHTML = "Total Price: " + ChemexTotalCurency;
    NewLine.appendChild(ChemexNewText);
    CartDrinks.appendChild(NewLine);
}
ChxToCart.addEventListener("click", ChemexToCart);
//W3School (No date) 'JavaScript HTML DOM Elements (Nodes)'. Available at: https://www.w3schools.com/js/js_htmldom_nodes.asp (Accessed: 10 September 2021)

//save favourite drink
let FavStringify;
//espresso
let EspressoSaveFav = document.getElementById("esp_save_fav");
let FavEspressoDrink;

function FavEspresso(){
    FavEspressoDrink = {
        nameOfDrink: EspressoDrink(),
        priceOfDrink: EspressoExtraPrice()
    }
    console.log(FavEspressoDrink)
    FavStringify = JSON.stringify(FavEspressoDrink);
    localStorage.setItem("Drink", FavStringify);
    alert("Favourite Drink Saved!");
}
EspressoSaveFav.addEventListener("click", FavEspresso);

//cappuccino
let CappuccinoSaveFav = document.getElementById("cap_save_fav");
let FavCappuccinoDrink;

function FavCappuccino(){
    FavCappuccinoDrink = {
        nameOfDrink: CappuccinoDrink(),
        priceOfDrink: CappuccinoExtraPrice()
    }
    FavStringify = JSON.stringify(FavCappuccinoDrink);
    localStorage.setItem("Drink", FavStringify);
    alert("Favourite Drink Saved!");
}
CappuccinoSaveFav.addEventListener("click", FavCappuccino);

//americano
let AmericanoSaveFav = document.getElementById("ame_save_fav");
let FavAmericanoDrink;

function FavAmericano(){
    FavAmericanoDrink = {
        nameOfDrink: AmericanoDrink(),
        priceOfDrink: AmericanoExtraPrice()
    }
    FavStringify = JSON.stringify(FavAmericanoDrink);
    localStorage.setItem("Drink", FavStringify);
    alert("Favourite Drink Saved!");
}
AmericanoSaveFav.addEventListener("click", FavAmericano);

//pour over
let PourOverSaveFav = document.getElementById("po_save_fav");
let FavPourOverDrink;

function FavPourOver(){
    FavPourOverDrink = {
        nameOfDrink: PourOverDrink(),
        priceOfDrink: PourOverExtraPrice()
    }
    FavStringify = JSON.stringify(FavPourOverDrink);
    localStorage.setItem("Drink", FavStringify);
    alert("Favourite Drink Saved!");
}
PourOverSaveFav.addEventListener("click", FavPourOver);

//chemex
let ChemexSaveFav = document.getElementById("chx_save_fav");
let FavChemexDrink;

function FavChemex(){
    FavChemexDrink = {
        nameOfDrink: ChemexDrink(),
        priceOfDrink: ChemexExtraPrice()
    }
    FavStringify = JSON.stringify(FavChemexDrink);
    localStorage.setItem("Drink", FavStringify);
    alert("Favourite Drink Saved!");
}
ChemexSaveFav.addEventListener("click", FavChemex);

//order favourite drink\
let OrderFav = document.getElementById("ord_fav_btn");

function OrderFavourite(){
    const DrinkToJSON = JSON.parse(localStorage.getItem("Drink"));
    const FavouriteDrink = DrinkToJSON.nameOfDrink;
    const FavouritePrice = DrinkToJSON.priceOfDrink;
    let FavouriteCurrency = FavouritePrice.toLocaleString("vi", type);
    let NewLine = document.createElement("p");
    let FavNewText = document.createTextNode("Favourite Drink: " + FavouriteDrink + "." + "\xa0\xa0\xa0" + "Price: " + FavouriteCurrency)
    NewLine.appendChild(FavNewText);
    CartDrinks.appendChild(NewLine);

    //total price (with favourite drinks)
    function FavouriteTotal(){
        let FavouriteInitialPrice = 0;
        FavouriteInitialPrice += FavouritePrice;
        InitialPrice += FavouriteInitialPrice;
        return InitialPrice;
    }
    function FavouriteTotalCurrency(){
        let FavTotalCurrency = FavouriteTotal().toLocaleString("vi", type);
        return FavTotalCurrency;
    }
    CartPrice.innerHTML = "Total Price: " + FavouriteTotalCurrency();
}
OrderFav.addEventListener("click", OrderFavourite);
//Hitesh Choudhary (2018) 'Parsing JSON and stringify'. Available at: https://www.youtube.com/watch?app=desktop&v=2NsfIgUBxDI&ab_channel=HiteshChoudhary (Accessed: 10 September 2021)

//submit the order
let Submit = document.getElementById("submit_ord_btn");

function SubmitOrder(){
    alert("Order Submitted!");
    location.reload();
}
Submit.addEventListener("click", SubmitOrder);