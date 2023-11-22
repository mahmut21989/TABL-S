const tabs = document.querySelectorAll(".tablist_btn");
const all_content = document.querySelectorAll(".content");
const line = document.querySelector(".line");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    // Hareketli çizgiyi tıklanan sekmeye uygun bir şekilde konumlandırmak için sol pozisyonu ve genişliği güncelliyoruz
    const tabOffset = e.target.getBoundingClientRect();
    const lineLeft = tabOffset.left - line.parentElement.getBoundingClientRect().left;
    line.style.width = tabOffset.width + "px";
    line.style.left = lineLeft + "px";

    all_content.forEach((content) => {
      content.style.display = "none";
    });

    all_content[index].style.display = "block";
  });
});