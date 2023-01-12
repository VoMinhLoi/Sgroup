function ShowingProfileClick(){
    var logo = document.querySelector(".profile__content-slide-nav-list-item-link-logo")
    var border = document.querySelector(".profile__content-slide-nav-list-item-link-border")
    var name = document.querySelector(".profile__content-slide-nav-list-item-link-name")
    var dots = document.querySelector(".profile__content-slide-nav-list-item-link-dots")
    logo.classList.toggle("profile__content-slide-nav-list-item-link-logo--clicked")
    border.classList.toggle("profile__content-slide-nav-list-item-link-border--clicked")
    name.classList.toggle("profile__content-slide-nav-list-item-link-name--clicked")
    dots.classList.toggle("profile__content-slide-nav-list-item-link-dots--clicked")

}

function SwitchMode(){
    var button2 = document.querySelector(".modes__content-news-wrapper-right-item:nth-child(2)")
    var label = button2.querySelector(".modes__content-news-wrapper-right-item-label")
    var rectangle = button2.querySelector(".modes__content-news-wrapper-right-item-rectangle")
    var image = button2.querySelector(".modes__content-news-wrapper-right-item-wrapper")
    label.classList.toggle("profile__content-slide-nav-list-item-link-logo--clicked")
    rectangle.classList.toggle("modes__content-news-wrapper-right-item-rectangle--clicked")
    image.classList.toggle("modes__content-news-wrapper-right-item-wrapper--clicked")
}