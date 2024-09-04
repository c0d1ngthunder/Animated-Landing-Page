function p1animation() {
    let tl = gsap.timeline()

    tl.from("nav>h1,nav h4,nav button", {
        y: -40,
        duration: .5,
        opacity: 0,
        delay: 1,
        stagger: 0.1
    })

    tl.from(".nav-part2 i",{
        y: -40,
        duration: .5,
        opacity: 0
    })

    tl.from("#hero-section h1,#hero-section p", {
        opacity: 0,
        x: -200,
        duration: 0.5,
        stagger: 0.2
    })

    tl.from("#hero-section button", {
        opacity: 0,
        duration: 0.5
    })

    tl.from("#right img", {
        opacity: 0,
        duration: .3
    }, "-=1")


    gsap.from("#brands img", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#brands img",
            scroller: "body",
            start: "top 85%"
        }
    })

}

function p2animation() {

    let tll = gsap.timeline({
        scrollTrigger: {
            trigger: "#services",
            scroller: "body",
            start: "top 50%",
            end: "top -10%",
            scrub: 2
        }
    })

    tll.from(".services", {
        y: 40,
        opacity: 0,
        duration: 0.2,
    })

    tll.from("#l1", {
        x: -100,
        opacity: 0,
        duration: .5
    }, "lin1")

    tll.from("#r1", {
        x: 100,
        opacity: 0,
        duration: .5
    }, "lin1")

    tll.from("#l2", {
        x: -100,
        opacity: 0,
        duration: .5
    }, "lin2")


    tll.from("#r2", {
        x: 100,
        opacity: 0,
        duration: .5
    }, "lin2")
}

function btneffect(){
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
    
            this.style.setProperty('--x', `${x}px`);
            this.style.setProperty('--y', `${y}px`);
        });
    
        button.addEventListener('mouseleave', function(e) {
            this.style.removeProperty('--x');
            this.style.removeProperty('--y');
        });
    });
    
    
}

p1animation()
p2animation()
btneffect()