const leftGridItem = document.querySelector(".gridItem.left");
const centerGridItem = document.querySelector(".gridItem.center");
const rightGridItem = document.querySelector(".gridItem.right");

const leftGridChildren = leftGridItem.querySelectorAll(".card");
const centerGridChildren = centerGridItem.querySelectorAll(".card");
const rightGridChildren = rightGridItem.querySelectorAll(".card");

function fadeImages() {
    for(i=0;i < leftGridChildren.length;i++) {
        if(!leftGridChildren[i].classList.contains("hidden")) {
            leftGridChildren[i].classList.add("hidden");
        } else {
            leftGridChildren[i].classList.remove("hidden");
        }
    }

    for(i=0;i < centerGridChildren.length;i++) {
        if(!centerGridChildren[i].classList.contains("hidden")) {
            centerGridChildren[i].classList.add("hidden");
        } else {
            centerGridChildren[i].classList.remove("hidden");
        }
    }

    for(i=0;i < rightGridChildren.length;i++) {
        if(!rightGridChildren[i].classList.contains("hidden")) {
            rightGridChildren[i].classList.add("hidden");
        } else {
            rightGridChildren[i].classList.remove("hidden");
        }
    }
}

setInterval(fadeImages, 5000);