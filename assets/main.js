---
---
const leftGridItem = document.querySelector(".gridItem.left");
const centerGridItem = document.querySelector(".gridItem.center");
const rightGridItem = document.querySelector(".gridItem.right");

const leftGridChildren = leftGridItem.querySelectorAll(".card");
const centerGridChildren = centerGridItem.querySelectorAll(".card");
const rightGridChildren = rightGridItem.querySelectorAll(".card");

let gridIdx = 0;

function fadeImages() {
    if (leftGridChildren.length > 1) {
        for(i=0;i<leftGridChildren.length;i++) {
            if (leftGridChildren[i].index !== gridIdx) {
                leftGridChildren[i].classList.add("hidden");
            }
        }

        leftGridChildren[gridIdx].classList.remove("hidden");
    }

    if (centerGridChildren.length > 1) {
        for(i=0;i<centerGridChildren.length;i++) {
            if (centerGridChildren[i].index !== gridIdx) {
                centerGridChildren[i].classList.add("hidden");
            }
        }

        centerGridChildren[gridIdx].classList.remove("hidden");
    }

    if (rightGridChildren.length > 1) {
        for(i=0;i<rightGridChildren.length;i++) {
            if (rightGridChildren[i].index !== gridIdx) {
                rightGridChildren[i].classList.add("hidden");
            }
        }

        rightGridChildren[gridIdx].classList.remove("hidden");
    }

    if (gridIdx + 1 > {{ site.posts.size | limit: 3 }} - 1) {
        gridIdx = 0;
    } else {
        gridIdx += 1;
    }
}

if ({{ site.posts.size | limit: 3 }} > 1) {
    fadeImages();
    setInterval(fadeImages, 5000);
}