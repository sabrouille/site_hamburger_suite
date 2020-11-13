document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");
    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "avec du bacon", "au bacon", "avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À 'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ]

    var type = new URLSearchParams(window.location.search).get("type") || "pizza";
        //console.log(window.location.search);
        //console.log(new URLSearchParams(window.location.search));
        //console.log(new URLSearchParams(window.location.search).get("type"));
    var infoPage = informations.find(x => x.id === type);
    //console.log(infoPage);

    var title = document.querySelector(".main-title");
    title.innerHTML = infoPage.title;

    var slogan = document.querySelector(".sub-title");
    slogan.innerHTML = infoPage.slogan;

    var desc = document.querySelector(".sub-description p");
    desc.innerHTML = infoPage.description;

    var img = document.querySelector(".sub-image img");
    img.src = infoPage.image;

    var list = document.querySelector(".type-list");
    list.innerHTML = "";

    for(var i = 0; i < infoPage.type.length; i++){
        var li = document.createElement("li");
        li.innerHTML = infoPage.type[i];
        list.appendChild(li);
    }

    var gallery = document.querySelectorAll(".sub-gallery img");

    for(var i = 0; i<infoPage.gallery.length; i++){
        gallery[i].src = infoPage.gallery[i];
    }
});