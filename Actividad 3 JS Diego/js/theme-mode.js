function mode() {
    const mode = localStorage.getItem("mode");

    if (mode == 'night') {
        document.getElementById('checkbox').setAttribute('checked', true)
        document.getElementById('dark-label').classList.add('text-light')
        document.getElementById('moves-table').classList.add('text-light')

        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else
    {
        document.getElementById('checkbox').removeAttribute('checked')
        document.getElementById('dark-label').classList.add('text-dark')
        document.getElementById('moves-table').classList.add('text-dark')

        document.documentElement.setAttribute('data-theme', 'light');
    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById('dark-label').classList.remove('text-dark')
        document.getElementById('dark-label').classList.add('text-light')
        document.getElementById('moves-table').classList.remove('text-dark')
        document.getElementById('moves-table').classList.add('text-light')
        localStorage.setItem('mode', 'night');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById('dark-label').classList.remove('text-light')
        document.getElementById('dark-label').classList.add('text-dark')
        document.getElementById('moves-table').classList.remove('text-light')
        document.getElementById('moves-table').classList.add('text-dark')
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);