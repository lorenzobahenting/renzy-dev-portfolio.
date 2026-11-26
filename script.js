
// =====================================
// RENZY DEV - PORTFOLIO JAVASCRIPT
// =====================================


// 1. PROJECT DATA

const projects = [

    {
        name: "Elise Handmade Hair Accessories",
        description: "An online storefront for a handmade hair accessories business, featuring products and an ordering interface.",
        status: "COMPLETED PROJECT",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "images/elise-preview.png"
    },

    {
        name: "Friend Quiz",
        description: "An interactive quiz application with multiple-choice questions, automatic scoring, and personalized results.",
        status: "COMPLETED PROJECT",
        tags: ["HTML", "CSS", "JavaScript"],
        image: "images/friend-quiz-preview.png"
    }

];


// 2. DISPLAY PROJECTS

const projectsGrid = document.getElementById("projectsGrid");

function displayProjects() {

    projectsGrid.innerHTML = projects.map(project => {

        return `
            <div class="project-card">

                <div class="project-preview">

                    <img
                        src="${project.image}"
                        alt="${project.name} website preview"
                        loading="lazy"
                    >

                </div>

                <div class="project-info">

                    <span class="project-status">
                        ${project.status}
                    </span>

                    <h3>${project.name}</h3>

                    <p>${project.description}</p>

                    <div class="project-tags">

                        ${project.tags.map(tag => `
                            <span>${tag}</span>
                        `).join("")}

                    </div>

                </div>

            </div>
        `;

    }).join("");

}


// 3. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// 4. CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.textContent = "☰";

    });

});


// 5. FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 6. INITIALIZE

displayProjects();

console.log("Renzy Dev Portfolio Loaded Successfully!");
