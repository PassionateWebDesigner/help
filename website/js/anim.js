const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")
const appearOptions = {
    threshold : 0,
    rootMargin : "0px 0px -250px 0px"
};
const appearonscroll=new IntersectionObserver(function
    (entries,appearonscroll){
        entries.forEach(entry =>{
          if(!entry.isIntersecting){
            return;
          }else{
            entry.target.classList.add("appear");
            appearonscroll.unobserve(entry.target);
          }
        })
      },appearOptions);

      faders.forEach(fader => {
        appearonscroll.observe(fader);
      })

      sliders.forEach(slider =>{
        appearonscroll.observe(slider);
      })