// animations.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitTextJS from 'split-text-js';
import splitType from 'split-type';
import SplitType from 'split-type'


gsap.registerPlugin(ScrollTrigger);

export const animateWhatWeDo = () => {
  gsap.fromTo(
    "#whatwedo h3",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#whatwedo",
        start: "top 60%",
        end: "top 40%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
    }
  );

};

export const animateWhoWeAre = () => {
  gsap.fromTo(
    "#whoWeAre h3",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#whoWeAre",
        start: "top 60%",
        end: "top 40%",
        scrub: true,
        toggleActions: "play none none none",
        markers: false,
      },
    }
  );

};


export const animateServiceText = () => {
  gsap.fromTo(
    '#serviceText h3',
    {
      opacity: 0,
      y: 0,
    },
    {
      opacity: 1, 
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '#serviceText', 
        start: 'top 60%', 
        end: 'top 40%', 
        scrub: false, 
        toggleActions: 'play play reverse reverse'
      },
    }
  );
};


export const animateHeadings = () => {
  // Select all elements with the class `animate-heading`
  const headingElements = document.querySelectorAll('.animate-heading');

  headingElements.forEach((heading) => {
    // Restore the original text content if it has already been split
    if (heading.dataset.split === 'true') {
      heading.innerHTML = heading.textContent; // Revert to original text
    }

    // Split the text into characters
    const splitText = new SplitType(heading, { types: 'chars' });

    // Assign a unique class for this heading's characters
    const uniqueClass = `char-${heading.id}`;
    splitText.chars.forEach((char) => char.classList.add(uniqueClass));

    // Mark this heading as split to avoid redundant splitting
    heading.dataset.split = 'true';

    // GSAP Animation
    gsap.fromTo(
      `.${uniqueClass}`,
      {
        opacity: 0,
        x: -50, 
      },
      {
        opacity: 1,
        x: 0, // Return to original position
        duration: 1,
        stagger: 0.05, // Staggered animation for each character
        scrollTrigger: {
          trigger: heading, // Trigger animation when the heading comes into view
          start: 'top 80%', // Adjust start point
          end: '+=200', 
          scrub: true, // Smooth scrolling
        },
      }
    );
  });
};

export const animateAgile = () => {
  const headingElements = document.querySelectorAll('#div1 h2');

  headingElements.forEach((heading) => {
    // Check if already split
    if (heading.dataset.split === 'true') {
      heading.innerHTML = heading.textContent; 
    }

    // Apply SplitTextJS and create a unique class
    const splitText = new SplitTextJS(heading); // Assuming SplitTextJS creates `SplitTextJS-char`
    const uniqueClass = `agile-char`;

    // Assign the unique class to each split character
    splitText.chars.forEach((char) => char.classList.add(uniqueClass));

    // GSAP Animation using the unique class
    gsap.fromTo(
      `.${uniqueClass}`,
      {
        opacity: 0,
        x: -50, // Start position
      },
      {
        opacity: 1,
        x: 0, // Final position
        duration: 3,
        stagger: 0.5, // Staggered animation for each character
        scrollTrigger: {
          trigger: heading, // Trigger animation when the heading comes into view
          start: 'top 70%', // Adjust start point
          end: '+=200',
          scrub: true, // Smooth scrolling
        },
      }
    );

    // Clean up by marking the heading as split
    heading.dataset.split = 'true';
  });
};

export const animateInnovative = () => {
  const headingElements = document.querySelectorAll('#div2 h2');

  headingElements.forEach((heading) => {
    // Check if already split
    if (heading.dataset.split === 'true') {
      heading.innerHTML = heading.textContent; 
    }

    // Apply SplitTextJS and create a unique class
    const splitText = new SplitTextJS(heading); // Assuming SplitTextJS creates `SplitTextJS-char`
    const uniqueClass = `innovative-char`;

    // Assign the unique class to each split character
    splitText.chars.forEach((char) => char.classList.add(uniqueClass));

    // GSAP Animation using the unique class
    gsap.fromTo(
      `.${uniqueClass}`,
      {
        opacity: 0,
        x: -50, // Start position
      },
      {
        opacity: 1,
        x: 0, // Final position
        duration: 3,
        stagger: 0.5, // Staggered animation for each character
        scrollTrigger: {
          trigger: heading, // Trigger animation when the heading comes into view
          start: 'top 70%', // Adjust start point
          end: '+=200',
          scrub: true, // Smooth scrolling
        },
      }
    );

    // Clean up by marking the heading as split
    heading.dataset.split = 'true';
  });
};

export const animateCultured = () => {
  const headingElements = document.querySelectorAll('#div3 h2');

  headingElements.forEach((heading) => {
    // Check if already split
    if (heading.dataset.split === 'true') {
      heading.innerHTML = heading.textContent; 
    }

    // Apply SplitTextJS and create a unique class
    const splitText = new SplitTextJS(heading); // Assuming SplitTextJS creates `SplitTextJS-char`
    const uniqueClass = `cultured-char`;

    // Assign the unique class to each split character
    splitText.chars.forEach((char) => char.classList.add(uniqueClass));

    // GSAP Animation using the unique class
    gsap.fromTo(
      `.${uniqueClass}`,
      {
        opacity: 0,
        x: -50, // Start position
      },
      {
        opacity: 1,
        x: 0, // Final position
        duration: 3,
        stagger: 0.5, // Staggered animation for each character
        scrollTrigger: {
          trigger: heading, // Trigger animation when the heading comes into view
          start: 'top 70%', // Adjust start point
          end: '+=200',
          scrub: true, // Smooth scrolling
        },
      }
    );

    // Clean up by marking the heading as split
    heading.dataset.split = 'true';
  });
};








