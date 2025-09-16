// Dark mode toggle for SJA Nigeria website
    (function() {
        function setDarkModeByPreference() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }
        setDarkModeByPreference();
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setDarkModeByPreference);
        var toggleBtn = document.getElementById('darkModeToggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
            });
        }
    })();