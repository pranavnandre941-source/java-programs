const grid = document.getElementById("programGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function renderPrograms() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;

  const filtered = programs.filter(program => {
    const matchesCategory = category === "all" || program.category === category;
    const searchable = `${program.experiment} ${program.program} ${program.title} ${program.category} ${program.description}`.toLowerCase();
    return matchesCategory && searchable.includes(query);
  });

  resultCount.textContent = `${filtered.length} of ${programs.length} practical programs`;
  emptyState.hidden = filtered.length !== 0;

  grid.innerHTML = filtered.map((program, index) => `
    <article class="program-card">
      <div class="card-top">
        <div>
          <p class="program-number">${escapeHtml(program.experiment)} · ${escapeHtml(program.program)}</p>
          <h3>${escapeHtml(program.title)}</h3>
        </div>
        <span class="category">${escapeHtml(program.category)}</span>
      </div>
      <p class="description">${escapeHtml(program.description)}</p>
      <div class="code-label">Java source code</div>
      <pre><code>${escapeHtml(program.code)}</code></pre>
      <div class="code-label">Expected output</div>
      <div class="output">${escapeHtml(program.output)}</div>
      <div class="card-actions">
        <button class="copy-btn" type="button" data-index="${index}">Copy code</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", async () => {
      const program = filtered[Number(button.dataset.index)];
      try {
        await navigator.clipboard.writeText(program.code);
        button.textContent = "Copied!";
        setTimeout(() => button.textContent = "Copy code", 1400);
      } catch {
        button.textContent = "Copy unavailable";
      }
    });
  });
}

searchInput.addEventListener("input", renderPrograms);
categoryFilter.addEventListener("change", renderPrograms);
renderPrograms();
