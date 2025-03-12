async function fetchGitHubRepos() {
    const response = await fetch('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
    const repos = await response.json();
    const container = document.getElementById('github-projects');
    
    repos.forEach(repo => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || 'No description available'}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        container.appendChild(projectCard);
    });
}

fetchGitHubRepos();
