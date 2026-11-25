window.addEventListener('scroll', function() {
  const tepaQism = document.querySelector('.tepa-qism');
  
  if (window.scrollY > 50) {
    tepaQism.classList.add('qotgan');
  } else {
    tepaQism.classList.remove('qotgan');
  }
});


const sectionlar = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menyu-havola");


const kuzatuvchi = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);

            if(activeLink){
                activeLink.classList.add("active");
            }
        }
    });
}, {
    threshold: 0.5

});

sectionlar.forEach(section =>{
    kuzatuvchi.observe(section);
})



let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    if(window.scrollY > 50){
        navbar.classList.add("active");
    }else{
        navbar.classList.remove("active");
    }
});

let topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth", // <-- Qo'shtirnoq qo'shildi
    });
});




let raqam = document.getElementById("raqam");
let raqam2 = document.getElementById("raqam2");
let raqam3 = document.getElementById("raqam3");
let raqam4 = document.getElementById("raqam4");

let son = 1;

let vaqt = setInterval(function() {
    raqam.textContent = son;

    son++;

    if(son > 1132){
        clearInterval(vaqt);
    }
}, 2);


let vaqt2 = setInterval(function() {
    raqam2.textContent = son;

    son++;

    if(son > 1321){
        clearInterval(vaqt2);
    }
}, 2);

let vaqt3 = setInterval(function() {
    raqam3.textContent = son;

    son++;

    if(son > 1463){
        clearInterval(vaqt3);
    }
}, 2);

let vaqt4 = setInterval(function() {
    raqam4.textContent = son;

    son++;

    if(son > 1234){
        clearInterval(vaqt4);
    }
}, 2);

let filtrTugmalar = document.querySelectorAll(".filtr-tugma");
let portfolioKartalar = document.querySelectorAll(".portfolio-karta");

filtrTugmalar.forEach(function(tugma) {
    tugma.addEventListener("click", function() {
        filtrTugmalar.forEach(function(t) {
            t.classList.remove("faol-filtr");
        });
        tugma.classList.add("faol-filtr");

        let tanlanganTur = tugma.getAttribute("data-tur");

        portfolioKartalar.forEach(function(karta) {
            let kartaTuri = karta.getAttribute("data-kategoriya");
            if (tanlanganTur === "hammasi" || tanlanganTur === kartaTuri) {
                karta.style.display = "block";
            } else {
                karta.style.display = "none";
            }
        });
    });
});

let aloqaForma = document.getElementById("aloqaForma");
if (aloqaForma) {
    aloqaForma.addEventListener("submit", function(hodisa) {
        hodisa.preventDefault();
        alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada bog'lanamiz.");
        aloqaForma.reset();
    });
}