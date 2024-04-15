function toggleMode(wasClicked) {
    if (wasClicked || document.cookie.includes("lightMode")) {
        console.log(wasClicked)
        if (wasClicked) {
            if (document.cookie.includes("lightMode")) {
                document.cookie = "darkMode";
            } else {
                document.cookie = "lightMode"    
            }
        }

        if (document.body.className.includes("about")) {
            element = document.getElementsByClassName("paragraphs")
            for(let i = 0; i < element.length; i++) {
                element[i].classList.toggle("paragraphs__dark-mode");
            }

            element = document.getElementsByClassName("heading")
            for(let i = 0; i < element.length; i++) {
                element[i].classList.toggle("heading__dark-mode");
            }
        } else {
            element = document.getElementsByClassName("article")
            for(let i = 0; i < element.length; i++) {
                element[i].classList.toggle("article__dark-mode");
            }
        }

        var element = document.body;
        element.classList.toggle("body__dark-mode");

        element = document.getElementsByClassName("menu")
        for(let i = 0; i < element.length; i++) {
            element[i].classList.toggle("menu__dark-mode");
        }

        element = document.getElementsByClassName("blankspace")
        for(let i = 0; i < element.length; i++) {
            element[i].classList.toggle("blankspace__dark-mode");
        }

        element = document.getElementsByClassName("item")
        for(let i = 0; i < element.length; i++) {
            element[i].classList.toggle("item__dark-mode");
        }

        element = document.getElementsByClassName("item-logo")
        for(let i = 0; i < element.length; i++) {
            element[i].classList.toggle("item-logo__dark-mode");
        }

        element = document.getElementsByClassName("footer")
        element[0].classList.toggle("footer__dark-mode");
    }
}