document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hall of Fame data
    const achievements = [
        {
            name: 'NASA',
            logo: 'https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg',
            url: 'https://bugcrowd.com/engagements/nasa-vdp/hall_of_fames'
        },
        {
            name: 'UNESCO',
            logo: 'https://iili.io/3nRhFEX.png',
            url: 'https://www.unesco.org/en/vulnerability-disclosure'
        },
        {
            name: 'WHO',
            logo: 'https://www.who.int/images/default-source/infographics/who-emblem.png',
            url: 'https://www.who.int/about/cybersecurity/vulnerability-hall-of-fame/ethical-hacker-list'
        },
        {
            name: 'Bayer',
            logo: 'https://www.bayer.com/themes/custom/bayer_cpa/logo.svg',
            url: 'https://www.bayer.com/en/cybersecurity-hall-of-fame'
        },
        {
            name: 'BASF',
            logo: 'https://iili.io/3nAdvRe.png',
            url: 'https://www.basf.com/global/en/legal/responsible-disclosure-statement'
        }
        
    ];

    const allAchievements = [
        ...achievements,
     
        {
            name: 'GEA',
            logo: 'https://iili.io/3nA6yJV.png',
            url: 'https://www.gea.com/en/company/about-us/information-security/products/responsible-disclosure-of-security-issues/hall-of-fame/'
        },
        {
            name: 'Tazapay',
            logo: 'https://iili.io/3nRks9e.png',
            url: 'https://tazapay.com/responsible-disclosure'
        },
        {
            name: 'Marel',
            logo: 'https://iili.io/3nAJha1.png',
            url: 'https://marel.com/en/responsible-disclosure/'
        },
        {
            name: 'CIN7',
            logo: 'https://iili.io/3nAT3Gt.png',
            url: 'https://www.cin7.com/responsible-disclosure-statement/'
        },
        {
            name: 'Nordnet',
            logo: 'https://iili.io/3nASTzJ.png',
            url: 'https://www.nordnet.se/security-disclosure/hall-of-fame'
        },
        {
            name: 'Justcall',
            logo: 'https://iili.io/3nAgyJI.png',
            url: 'https://justcall.io/security/hall-of-fame/'
        },
        {
            name: 'Shippit',
            logo: 'https://iili.io/3nAUrjs.png',
            url: 'https://www.shippit.com/responsible-security-disclosure'
        },
        {
            name: 'NTUC Enterprise',
            logo: 'https://iili.io/3nALYrJ.png',
            url: 'https://www.ntucenterprise.sg/contactus/vulnerability-disclosure-programme/'
        },
        {
            name: 'CYSO',
            logo: 'https://iili.io/3nA20qQ.png',
            url: 'https://cyso.com/en/legal/responsible-disclosure/'
        },
        {
            name: 'Utrecht University',
            logo: 'https://iili.io/3nAs7Hl.png',
            url: 'https://www.uu.nl/en/organisation/information-and-technology-services-its/hall-of-fame-responsible-disclosure'
        },
        {
            name: 'Australian Cricket',
            logo: 'https://iili.io/3n7fg2f.jpg',
            url: 'https://www.cricket.com.au/vulnerability-disclosure-program/'
        },
        {
            name: 'Drexel University',
            logo: 'https://iili.io/3nA4nEv.png',
            url: 'https://drexel.edu/it/security/services-processes/bug-bounty/'
        },
        {
            name: 'SILFO',
            logo: 'https://iili.io/3n7obef.png',
            url: 'https://www.silfo.nl/responsible-disclosure-2/'
        },
        {
            name: 'Life.Church',
            logo: 'https://iili.io/3nRjDOv.jpg',
            url: 'https://www.life.church/vulnerability-disclosure-program/'
        },
        {
            name: 'Sensfrx',
            logo: 'https://iili.io/fRPb5Pe.png',
            url: 'https://sensfrx.ai/hall-of-fame'
        }
        
    ];

    // Populate achievements grid with featured achievements
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        card.setAttribute('data-aos', 'fade-up');
        
        card.innerHTML = `
            <a href="${achievement.url}" target="_blank" rel="noopener noreferrer">
                <img src="${achievement.logo}" alt="${achievement.name} logo">
                <h3>${achievement.name}</h3>
            </a>
        `;
        
        achievementsGrid.appendChild(card);
    });

    // Modal functionality
    const modal = document.getElementById('achievementsModal');
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const closeModal = document.querySelector('.close-modal');
    const modalGrid = document.getElementById('modalGrid');

    // Populate modal grid with all achievements
    allAchievements.forEach(achievement => {
        const card = document.createElement('div');
        card.className = 'achievement-card';
        
        card.innerHTML = `
            <a href="${achievement.url}" target="_blank" rel="noopener noreferrer">
                <img src="${achievement.logo}" alt="${achievement.name} logo">
                <h3>${achievement.name}</h3>
            </a>
        `;
        
        modalGrid.appendChild(card);
    });

    viewMoreBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});
