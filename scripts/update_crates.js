const fs = require('fs');
const path = require('path');

async function run() {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    'User-Agent': 'emo-bon-updater',
    'Accept': 'application/vnd.github.v3+json'
  };
  if (token) {
    headers['Authorization'] = `token ${token}`;
  }

  console.log("Fetching repositories from EMO BON organization...");
  let repos = [];
  let page = 1;
  while (true) {
    const url = `https://api.github.com/orgs/emo-bon/repos?per_page=100&page=${page}`;
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch repos: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (!Array.isArray(data) || data.length === 0) break;
    repos.push(...data);
    if (data.length < 100) break;
    page++;
  }

  console.log(`Fetched ${repos.length} repositories in total.`);

  // Filter repos starting with observatory- and ending with -crate
  const observatoryCrates = repos.filter(repo => 
    repo.name.startsWith('observatory-') && 
    repo.name.endsWith('-crate')
  );

  console.log(`Found ${observatoryCrates.length} observatory-*-crate repositories.`);

  // Load project_crates.json
  const filePath = path.join(__dirname, '../data/project_crates.json');
  if (!fs.existsSync(filePath)) {
    throw new Error(`project_crates.json not found at ${filePath}`);
  }
  const projectCrates = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Get existing URLs for duplication check
  const existingUrls = new Set(projectCrates.map(crate => crate.url.trim().toLowerCase()));

  let updated = false;
  for (const repo of observatoryCrates) {
    const repoUrl = repo.html_url || `https://github.com/emo-bon/${repo.name}`;
    const normalizedUrl = repoUrl.trim().toLowerCase();

    if (!existingUrls.has(normalizedUrl)) {
      // Extract ID from repo name, e.g. "aaot" from "observatory-aaot-crate"
      const idMatch = repo.name.match(/^observatory-(.+)-crate$/);
      const id = idMatch ? idMatch[1] : repo.name;
      const capitalizedId = id.toUpperCase();

      const newCrate = {
        icon: "fa fa-archive",
        name: capitalizedId,
        crateurl: `/${repo.name}/#./`,
        lodurl: `/${repo.name}/`,
        url: repoUrl,
        description: repo.description || `Sampling logsheets from the ${capitalizedId} observatory.`,
        text: "Sampling Logsheets",
        keyword: "observatory"
      };

      projectCrates.push(newCrate);
      existingUrls.add(normalizedUrl);
      console.log(`Adding new observatory: ${capitalizedId} (${repoUrl})`);
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(filePath, JSON.stringify(projectCrates, null, 4) + '\n', 'utf8');
    console.log("Updated project_crates.json successfully.");
  } else {
    console.log("No new observatory crates to add.");
  }
}

run().catch(err => {
  console.error("Error during execution:", err);
  process.exit(1);
});
