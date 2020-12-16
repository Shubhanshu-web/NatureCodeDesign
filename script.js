gsap.from("nav", {duration: 1, y: -100});
gsap.from("#main #left", {duration: 1, x: -100});
gsap.from("#main #left h1", {delay:1,duration: 3, opacity:0});
gsap.from("#main #left p", {delay:1.5,duration: 3, opacity:0});
gsap.from("#main #left h3", {delay:2,duration: 3, opacity:0});
gsap.from("#main #mid", {delay:2,duration: 1, x: -100,scaleX:0,opacity: 0, ease: "expo.inOut",});
gsap.from("#main #right #rbox #r1", {delay:2.5,duration: 1, y:-50,opacity:0,expo:"ease.inOut"});
gsap.from("#main #right #rbox #r2", {delay:3.2,duration: 1, y:-50,opacity:0,expo:"ease.inOut"});
gsap.from("#main #right #rlinks", {delay:3.8,duration: 1, y:-50,opacity:0,expo:"ease.inOut"});