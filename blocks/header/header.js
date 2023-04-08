/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navPath = '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    block.innerHTML = html;
    const classes = ['logo', 'marquee'];
    block.querySelectorAll('p').forEach((p, i) => {
      p.classList.add(classes[i]);
    });
  }
}
