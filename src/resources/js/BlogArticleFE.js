//-------------------------------------------------------
//                    Blog Article
//-------------------------------------------------------
//
// Purpose: Adjust the progress bar based on scroll
//
//-------------------------------------------------------
//

export var FEBlogArticle =
{
    "Init": () => {
        if (document.getElementById("js-blog-article-content")) {
            FEBlogArticle.UpdateProgressBar();

        }
    },
    "UpdateProgressBar": () => {
        let scrollableContent = document.getElementById("js-blog-article-content");
        let progressBar = document.getElementById("js-blog-article-progress-bar");

        // only trigger progress bar JS if the browser supports the progress element
        if ("max" in document.createElement("progress")) {
            // the height of the content we want to track - window height + the content offset from the top
            scrollableContent = scrollableContent.offsetHeight - window.innerHeight + scrollableContent.offsetTop;
            // set the max attribute equal to the height of what is scrollable on the page
            progressBar.setAttribute('max', scrollableContent);

            

            document.addEventListener("scroll", () => {
                let scrollableContent = document.getElementById("js-blog-article-content");
                // if the scrollable height of the page has changed, update the max value (this might happen through 3rd party async JS loading in content e.g. tweet embed)
                if (scrollableContent !== scrollableContent.offsetHeight - window.innerHeight + scrollableContent.offsetTop) {
                    scrollableContent = scrollableContent.offsetHeight - window.innerHeight + scrollableContent.offsetTop;
                    progressBar.setAttribute('max', scrollableContent);
                }

                // on scroll update progress bar value to euqal scroll top position
                progressBar.setAttribute('value', window.scrollY);
            });

            window.addEventListener('resize', () => {
                // on resize, the max value and scroll value needs updating (as the window height has changed)
                progressBar.setAttribute('max', window.scrollableContent);
                progressBar.setAttribute('value', window.scrollY);
            });
        }
    }
};