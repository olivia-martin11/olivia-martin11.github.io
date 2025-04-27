function populatePapers(jsonList, containerID, showDate) {
    const yourName = "Olivia Martin";
    const papersList = document.getElementById(containerID);
    if (!papersList) {
      console.error(`Container element with ID "${containerID}" not found`);
      return;
    }
    papersList.innerHTML = '';
  
    jsonList.forEach((paper) => {
      paper.id = paper.title.replace(/\s+/g, '-').toLowerCase();
  
      // Filter out your own name
      const coauthors = paper.authors.filter(a => a.name !== yourName);
  
      // Build coauthor display: link only if URL present
      let authorsHTML = '';
      if (coauthors.length > 0) {
        const authorElems = coauthors.map(a =>
          a.link
            ? `<a href="${a.link}" class="coauthor-name" target="_blank" rel="noopener noreferrer">${a.name}</a>`
            : `${a.name}`
        );
  
        if (authorElems.length === 1) {
          authorsHTML = `(with ${authorElems[0]})`;
        } else if (authorElems.length === 2) {
          authorsHTML = `(with ${authorElems[0]} and ${authorElems[1]})`;
        } else {
          const last = authorElems.pop();
          authorsHTML = `(with ${authorElems.join(', ')}, and ${last})`;
        }
      }
  
      // Title (no quotes)
      let html = `
        <p class="paper-title-container">
          ${paper.pdf
            ? `<a href="${paper.pdf}" class="paper-title" target="_blank" rel="noopener noreferrer">${paper.title}</a>`
            : `<span class="paper-title">${paper.title}</span>`}
        </p>
      `;
  
      if (authorsHTML) {
        html += `
          <p class="paper-authors">
            ${authorsHTML}
          </p>
        `;
      }
  
      // Appended text: journals in small caps
      if (paper.appendedText) {
        const formatted = paper.appendedText.replace(/<em>([^<]+)<\/em>/g,
          '<span style="font-variant:small-caps">$1</span>'
        );
        html += `
          <p class="paper-appended-text">
            ${formatted}
          </p>
        `;
      }
  
      // Only show date for actual 'Working Papers'
      if (showDate && paper.date) {
        html += `
          <p class="paper-date">
            Last updated: ${paper.date}
          </p>
        `;
      }
  
      // Build links line: show Abstract link only if abstract text exists
      const linkParts = [];
      if (paper.abstract && paper.abstract.trim() !== '') {
        linkParts.push(`<a href="#" data-id="${paper.id}" onclick="toggleAbstract('${paper.id}'); return false;">Abstract</a>`);
      }
      if (paper.extraLinks) {
        paper.extraLinks.forEach(link => {
          linkParts.push(`<a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.text}</a>`);
        });
      }
      if (linkParts.length > 0) {
        html += `
          <p class="paper-links">
            [ ${linkParts.join(' | ')} ]
          </p>
        `;
      }
  
      // Abstract container (initially hidden via CSS)
      if (paper.abstract && paper.abstract.trim() !== '') {
        html += `
          <div id="abstract-${paper.id}" class="abstract-content" style="display:none;">
            <small>${paper.abstract}</small><br/><br/>
          </div>
        `;
      }
  
      papersList.innerHTML += `<div class="paper-entry">${html}</div>`;
    });
  }
  
  // Toggle function remains the same
  function toggleAbstract(id) {
    const el = document.getElementById(`abstract-${id}`);
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
  }
  
  // On DOM load, fetch and populate with correct showDate flags
  document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Content Loaded");
    fetch('pub.json')
      .then(r => r.json())
      .then(papers => populatePapers(papers, 'pubList', false))
      .catch(e => console.error("Error loading pub.json:", e));
  
    fetch('wp.json')
      .then(response => {
        console.log("wp.json response received:", response);
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(papers => {
        console.log("wp.json papers:", papers);
        populatePapers(papers, 'wpList', true);
      })
      .catch(error => {
        console.error("Fetch error for wp.json:", error);
      });
  
    fetch('wip.json')
      .then(r => r.json())
      .then(papers => populatePapers(papers, 'wipList', false))
      .catch(e => console.error("Error loading wip.json:", e));
  });
  