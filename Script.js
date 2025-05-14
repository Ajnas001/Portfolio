const projects = [
    {
        title: "Music Fest Poster",
        category: "posters",
        imageUrl: "placeholder_poster1.jpg",
        description: "A vibrant poster design for a music festival.",
    },
    {
        title: "Cityscape Poster",
        category: "posters",
        imageUrl: "placeholder_poster2.jpg",
        description: "A minimalist poster design showcasing a cityscape.",
    },
    {
        title: "Abstract Art Poster",
        category: "posters",
        imageUrl: "placeholder_poster3.jpg",
        description: "An abstract poster design with bold colors and shapes.",
    },
    {
        title: "EcoBloom Logo",
        category: "logos",
        imageUrl: "placeholder_logo1.jpg",
        description: "A logo for a sustainable gardening startup.",
    },
    {
        title: "TechWave Logo",
        category: "logos",
        imageUrl: "placeholder_logo2.jpg",
        description: "A modern logo for a technology company.",
    },
    {
        title: "CreativeSpark Logo",
        category: "logos",
        imageUrl: "placeholder_logo3.jpg",
        description: "A dynamic logo for a creative agency.",
    },
    {
        title: "2024 Wall Calendar",
        category: "calendars",
        imageUrl: "placeholder_calendar1.jpg",
        description: "A minimalist wall calendar design for 2024.",
    },
    {
        title: "Nature Photography Calendar",
        category: "calendars",
        imageUrl: "placeholder_calendar2.jpg",
        description: "A calendar featuring stunning nature photographs.",
    },
     {
        title: "Desktop Calendar",
        category: "calendars",
        imageUrl: "placeholder_calendar3.jpg",
        description: "A modern desktop calendar design.",
    },
    {
        title: "Fashion Magazine",
        category: "magazines",
        imageUrl: "placeholder_magazine1.jpg",
        description: "A high-fashion magazine layout.",
    },
    {
        title: "Travel Magazine",
        category: "magazines",
        imageUrl: "placeholder_magazine2.jpg",
        description: "A vibrant travel magazine design.",
    },
    {
        title: "Art & Culture Magazine",
        category: "magazines",
        imageUrl: "placeholder_magazine3.jpg",
        description: "An art and culture magazine layout.",
    },
];

const projectContainer = document.getElementById("project-container");
const categoryButtons = document.querySelectorAll(".category-button");
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const messageSent = document.getElementById('message-sent');


function createProjectCard(project) {
    const card = document.createElement("div");
    card.classList.add("project-card");
    card.dataset.category = project.category;

    const image = document.createElement("img");
    image.src = project.imageUrl;
    image.alt = project.title;
    image.classList.add("w-full", "h-48", "object-cover", "rounded-t-md");

    const content = document.createElement("div");
    content.classList.add("p-6", "bg-white", "rounded-b-md");

    const title = document.createElement("h3");
    title.classList.add("text-xl", "font-semibold", "mb-2", "text-gray-800");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.classList.add("text-gray-600", "text-base");
    description.textContent = project.description;

    content.appendChild(title);
    content.appendChild(description);
    card.appendChild(image);
    card.appendChild(content);

    return card;
}

function displayProjects(category) {
    projectContainer.innerHTML = "";
    projects.forEach((project) => {
        if (category === "all" || project.category === category) {
            const card = createProjectCard(project);
            projectContainer.appendChild(card);
       }
    });
}

categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
        categoryButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");
        const category = this.dataset.category;
        displayProjects(category);
    });
});