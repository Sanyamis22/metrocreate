$(document).ready(function () {
    const toggleButton = document.querySelector(".hamburger-toggle-button");
    const navDrawer = document.querySelector(".nav-drawer");
    const closeButton = document.querySelector(".close-button");
    const arrowButton = document.querySelector(".arrow");
    const treeviewContainer = document.querySelector(".treeview");
    const closeIcon = $(".close-button-icon");
  
    toggleButton.addEventListener("click", () => {
      toggleNavDrawer();
    });
  
    closeButton.addEventListener("click", () => {
      closeNavDrawer();
    });
  
    closeButton.addEventListener("mouseenter", handleMouseEnter);
    closeButton.addEventListener("mouseleave", handleMouseLeave);
    closeButton.addEventListener("touchstart", handleTouchStart, {
      passive: true
    });
    closeButton.addEventListener("touchend", handleTouchEnd, { passive: true });
  
    $("body").on("click", handleBodyClick);
  
    treeviewContainer.addEventListener("click", () => {
      treeview_controller(arrowButton, treeviewContainer);
    });
  
    function toggleNavDrawer() {
      setTimeout(function () {
        navDrawer.classList.toggle("active");
        navDrawer.classList.remove("inactive");
      }, 250);
    }
  
    function closeNavDrawer() {
      setTimeout(function () {
        navDrawer.classList.remove("active");
        navDrawer.classList.add("inactive");
      }, 250);
    }
  
    function handleMouseEnter() {
      closeIcon.addClass("close-button-icon-hovered");
    }
  
    function handleMouseLeave() {
      closeIcon.removeClass("close-button-icon-hovered");
    }
  
    function handleTouchStart() {
      closeIcon.addClass("close-button-icon-hovered");
    }
  
    function handleTouchEnd() {
      closeIcon.removeClass("close-button-icon-hovered");
    }
  
    function handleBodyClick(event) {
      if (
        navDrawer.classList.contains("active") &&
        !$(event.target).closest(".nav-drawer, .hamburger-toggle-button").length
      ) {
        closeNavDrawer();
      } else {
        event.stopPropagation();
      }
    }
  
    function treeview_controller(arrowButton, treeviewContainer) {
      const nested = document.querySelector(".treeview > .nested");
      const nestedItem = document.querySelector(".nested-item");
      /*const isDisplayed = nested.style.display === 'block';
          nested.style.display = isDisplayed ? 'none' : 'block';
          arrowButton.classList.toggle('arrow-down', !isDisplayed);
          arrowButton.classList.toggle('arrow-right', isDisplayed);*/
      if (treeviewContainer.classList.contains("disabled")) {
        arrowButton.classList.toggle("arrow-down");
        arrowButton.classList.toggle("arrow-right");
        treeviewContainer.classList.toggle("disabled");
        treeviewContainer.classList.toggle("active");
        //nestedItem.classList.toggle('treeview-collapse');
        //nestedItem.classList.toggle('treeview-expand');
      } else {
        arrowButton.classList.toggle("arrow-right");
        arrowButton.classList.toggle("arrow-down");
        treeviewContainer.classList.toggle("active");
        treeviewContainer.classList.toggle("disabled");
        //nestedItem.classList.toggle('treeview-expand');
        //nestedItem.classList.toggle('treeview-collapse');
      }
    }
  });
  