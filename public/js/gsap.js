//animate the CD on scroll
gsap.to('#CD', {
    scrollTrigger: {
    trigger: "#news-section",
    start: "top 90%",
    end: "top 0%",
    toggleActions: "restart pause reverse pause",
    scrub: true,
    },
    scale: 3,
    borderRadius: 0,
    opacity: 0.1
});

//fade out the hero text on scroll
gsap.to('#herotext', {
    scrollTrigger: {
    trigger: "#news-section",
    start: "top 90%",
    end: "top 80%",
    toggleActions: "restart pause reverse pause",
    scrub: true,
    },
    opacity: 0
});

//introduce the brand logos
gsap.from('.brandlogo',{duration: 1.5, opacity: 0, y: 150, stagger: 0.25});