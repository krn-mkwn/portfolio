    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

const projects = [
    {
        title: "OmKaran Furniture",
        description: "This is a modern and visually appealing website designed to showcase furniture collections. Built using HTML, CSS, and JavaScriptfor front-end and node.js, mysql for backend. the website provides a seamless user experience with responsive design, intuitive navigation, and interactive elements.",
        image: "photos/swing.jpg"
    },
    {
        title: "Qr code based food order system",
        description: "This is a modern and visually appealing website designed to food order from scanning qr code. Built using HTML, CSS, and JavaScript for front-end and node.js, mysql for backend. the website provides a seamless user experience with responsive design, payment system, and food ordering system.",
        image: "photos/order.jpg"
    },
    {
        title: "Blog-Platform",
        description: "I developed a full-featured blogging platform using the MERN stack. It includes JWT-based user authentication, blog creation with a rich text editor, comments and likes system, search and category filters, user profiles, and an admin dashboard. Technologies used: React, Redux, Node.js, Express, MongoDB, Tailwind CSS, Cloudinary, and Postman.",
        image: "photos/blogging.jpg"
    },
    {
        title: "Excel analysis platform",
        description: "A powerful MERN-stack platform for uploading Excel files (.xls/.xlsx), analyzing data, and generating interactive 2D/3D charts. Users can select X/Y axes, choose chart types, and download graphs. Upload and analysis history is saved in user dashboards. Admins can manage users and data usage. Optional AI integration offers smart insights and summary reports.",
        image: "photos/excell.png"
    },
    {
        title: "chess game",
        description: "This is a fully functional chess game developed using EJS, JavaScript, and Node.js. The application combines a sleek user interface with robust back-end logic, providing an engaging and seamless chess-playing experience.",
        image: "photos/chess.png"
    },
    {
        title: "this portfolio",
        description: "This is a professional and interactive portfolio website developed using HTML, CSS, JavaScript, and Node.js. The platform is designed to highlight your skills, showcase your projects, and serve as a central hub for potential clients, employers, or collaborators to learn more about you.",
        image: "photos/portfolio.jpg"
    },
    {
        title: "real-time tracker",
        description: "This is a powerful and efficient real-time tracker application developed using EJS and Node.js. The project is designed to monitor and display data updates dynamically, making it ideal for tracking events, locations, or statuses in real-time.",
        image: "photos/location.jpg"
    },
    {
        title: "hospital management system",
        description: "This is a foundational hospital management system developed using HTML, CSS, JavaScript, and Node.js. The application is designed to streamline basic administrative tasks and enhance efficiency in managing hospital operations",
        image: "photos/HSM.jpg"
    },
    {
        title: "simon game",
        description: "his is a fun and interactive Simon Game developed to test and improve memory skills. Built using HTML, CSS, and JavaScript, the game offers a visually appealing and responsive interface with engaging gameplay mechanics.   ",
        image: "photos/simon.png"
    },
];

// Function to Dynamically Create Project Cards
function loadProjects() {
    const container = document.getElementById("projects-container");

    projects.forEach((project, index) => {
        // Create the card element
        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-4", "mb-4");

        projectCard.innerHTML = `
            <div class="card project-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                </div>
            </div>
        `;

        // Append the card to the container
        container.appendChild(projectCard);
    });
}

// Call the function to load projects on page load
window.onload = loadProjects;

document.addEventListener("DOMContentLoaded", () => {
    const backToHeroButton = document.querySelector(".back-to-hero");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) { // Show after scrolling 200px
            backToHeroButton.style.display = "block";
        } else {
            backToHeroButton.style.display = "none";
        }
    });

    // Smooth scroll to the hero section
    backToHeroButton.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#hero").scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

