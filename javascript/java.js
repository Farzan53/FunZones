const testimonials = [
    {
      name: "Elsa keven",
      title: "Thrill Seeker",
      text: `"I loved the roller coasters. Can't wait to visit again!"`
    },
    {
      name: "Petter Garcia",
      title: "Family Visitor",
      text: `"My kids enjoyed every bit! The dolphin show was adorable."`
    },
    {
      name: "Anna Wills",
      title: "Photographer",
      text: `"Such a visually stunning place! Great for photos."`
    },
    {
      name: "Harry McCoy",
      title: "Artist",
      text: `"Absolutely stunning! The Halloween event was the best I’ve been to. The maze was spooky fun, and the team was amazing!"`
    },
    {
      name: "Nina Ercel",
      title: "Travel Blogger",
      text: `"Best day of the year. The water rides are a must!"`
    },
    {
      name: "Dafne Lee",
      title: "Adventurer",
      text: `"The ghost train was terrifying and fun at the same time!"`
    }
  ];
  let currentIndex = 3;
  
  function updateTestimonial(index) {
    const testimonial = testimonials[index];
    document.getElementById("customer-name").innerText = testimonial.name;
    document.getElementById("customer-title").innerText = testimonial.title;
    document.getElementById("customer-feedback").innerText = testimonial.text;
  
    document.querySelectorAll(".profile-img").forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }
  
  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  }
  
  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }
  
  
  document.querySelectorAll(".profile-img").forEach((img) => {
    img.addEventListener("click", () => {
      currentIndex = parseInt(img.dataset.index);
      updateTestimonial(currentIndex);
    });
  });
  
    function notifyMe() {
      const icon = document.querySelector('.notify-icon');
      icon.classList.add('clicked');
      alert("We’ll notify you when these exciting attractions go live! 🎉");
      
      // Remove class after animation so it can be clicked again
      setTimeout(() => icon.classList.remove('clicked'), 500);
    }
    