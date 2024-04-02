document.addEventListener("DOMContentLoaded", function () {
  // Get all the navigation items
  const navItems = document.querySelectorAll(".nav-right ul li");

  // Add click event listener to each navigation item
  navItems.forEach(function (navItem) {
    navItem.addEventListener("click", function () {
      // Remove active class from all navigation items
      navItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the clicked navigation item
      this.classList.add("active");
    });
  });

  // Get all the side navigation items
  const sideNavItems = document.querySelectorAll(".sidenav ul li");

  // Add click event listener to each side navigation item
  sideNavItems.forEach(function (sideNavItem) {
    sideNavItem.addEventListener("click", function () {
      // Remove active class from all side navigation items
      sideNavItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add active class to the clicked side navigation item
      this.classList.add("active");
    });
  });
});
