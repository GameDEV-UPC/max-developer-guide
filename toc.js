// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="setup/index.html"><strong aria-hidden="true">1.</strong> Setting up</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setup/getting_started/index.html"><strong aria-hidden="true">1.1.</strong> Getting started</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setup/getting_started/getting_max.html"><strong aria-hidden="true">1.1.1.</strong> Getting Max</a></li><li class="chapter-item expanded "><a href="setup/getting_started/toolchain_setup.html"><strong aria-hidden="true">1.1.2.</strong> Setting up the tool-chain</a></li></ol></li><li class="chapter-item expanded "><a href="setup/building/index.html"><strong aria-hidden="true">1.2.</strong> Building Max</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setup/building/debug.html"><strong aria-hidden="true">1.2.1.</strong> Debug build</a></li><li class="chapter-item expanded "><a href="setup/building/release/index.html"><strong aria-hidden="true">1.2.2.</strong> Release</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="setup/building/release/linux.html"><strong aria-hidden="true">1.2.2.1.</strong> Linux</a></li><li class="chapter-item expanded "><a href="setup/building/release/windows.html"><strong aria-hidden="true">1.2.2.2.</strong> Windows</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="contributing/index.html"><strong aria-hidden="true">2.</strong> Contributing</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contributing/style/index.html"><strong aria-hidden="true">2.1.</strong> Style guide</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contributing/style/format.html"><strong aria-hidden="true">2.1.1.</strong> Formatter</a></li><li class="chapter-item expanded "><a href="contributing/style/patterns.html"><strong aria-hidden="true">2.1.2.</strong> Patterns</a></li><li class="chapter-item expanded "><a href="contributing/style/smart_pointers.html"><strong aria-hidden="true">2.1.3.</strong> Smart pointers</a></li><li class="chapter-item expanded "><a href="contributing/style/documentation.html"><strong aria-hidden="true">2.1.4.</strong> Documentation</a></li></ol></li><li class="chapter-item expanded "><a href="contributing/git/index.html"><strong aria-hidden="true">2.2.</strong> Git</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contributing/git/basics.html"><strong aria-hidden="true">2.2.1.</strong> Git basics</a></li><li class="chapter-item expanded "><a href="contributing/git/merge_requests.html"><strong aria-hidden="true">2.2.2.</strong> Branches</a></li><li class="chapter-item expanded "><a href="contributing/git/review.html"><strong aria-hidden="true">2.2.3.</strong> Passing review</a></li></ol></li><li class="chapter-item expanded "><a href="contributing/legal/index.html"><strong aria-hidden="true">2.3.</strong> Legal guidelines</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="contributing/legal/libraries.html"><strong aria-hidden="true">2.3.1.</strong> Using libraries</a></li><li class="chapter-item expanded "><a href="contributing/legal/copying.html"><strong aria-hidden="true">2.3.2.</strong> Copying code</a></li><li class="chapter-item expanded "><a href="contributing/legal/llms.html"><strong aria-hidden="true">2.3.3.</strong> LLMs</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="architecture/index.html"><strong aria-hidden="true">3.</strong> Architecture</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="architecture/core.html"><strong aria-hidden="true">3.1.</strong> Core</a></li><li class="chapter-item expanded "><a href="architecture/ui.html"><strong aria-hidden="true">3.2.</strong> Ui</a></li><li class="chapter-item expanded "><a href="architecture/rendermanager.html"><strong aria-hidden="true">3.3.</strong> RenderManager</a></li><li class="chapter-item expanded "><a href="architecture/inputmanager.html"><strong aria-hidden="true">3.4.</strong> InputManager</a></li><li class="chapter-item expanded "><a href="architecture/physicsmanager.html"><strong aria-hidden="true">3.5.</strong> PhysicsManager</a></li><li class="chapter-item expanded "><a href="architecture/soundmanager.html"><strong aria-hidden="true">3.6.</strong> SoundManager</a></li><li class="chapter-item expanded "><a href="architecture/particlemanager.html"><strong aria-hidden="true">3.7.</strong> ParticleManager</a></li><li class="chapter-item expanded "><a href="architecture/assetmanager.html"><strong aria-hidden="true">3.8.</strong> AssetManager</a></li></ol></li><li class="chapter-item expanded "><a href="debugging/index.html"><strong aria-hidden="true">4.</strong> Debugging</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="debugging/macros.html"><strong aria-hidden="true">4.1.</strong> Debug macros</a></li><li class="chapter-item expanded "><a href="debugging/profiling.html"><strong aria-hidden="true">4.2.</strong> Profiling</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
