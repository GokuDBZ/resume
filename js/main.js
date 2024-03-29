
/**
 * Code below just invokes particles and typed js methods.
 */
  (function(){
    function loadParticles(){
      try{
        particlesJS("particles-js", {
          particles: {
            number: { value: 70, density: { enable: true, value_area: 300 } },
            color: { value: "#ff99cc" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 80, height: 90 }
            },
            opacity: {
              value: 0.3,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
            },
            line_linked: {
              enable: true,
              distance: 120,
              color: "#33ccff",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
          },
          interactivity: {
            detect_on: "section",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 }
            }
          },
          retina_detect: true
        });
      }catch(e){
        console.log("loading paricle js failed")
      }
    }
    function loadTyped(){
      try{
        var options = {
          strings: ['Hello, I am Suraj Yadav', 'and I am a Full Stack Developer'],
          typeSpeed: 40,
          loop: true
        };
        var typed = new Typed('.typed-js', options);
      }
      catch(e){
        
        console.log("loading typed js failed")
      }
    }

    function slider(){
      console.log("starting slider")
      const paths = ["https://iamsuraj.s3.ap-south-1.amazonaws.com/gravatar.jpeg", "https://iamsuraj.s3.ap-south-1.amazonaws.com/photo_2021-01-22+12.18.31.jpeg", "https://iamsuraj.s3.ap-south-1.amazonaws.com/photo_2021-01-22+12.14.49.jpeg"]
      var index = 0;
      var interval = setInterval(function(){
        if(index == paths.length){ index = 0 }
        console.log(index);
        //document.getElementsByClassName("srj-image").src = paths[index];
        $(".srj-image").attr('src',  paths[index])
      
        console.log("changed path")
        index = index + 1
        
      }, 1500)
    }

    loadParticles();
    loadTyped();
    //slider();


  }())
