function slugify(title) { 
    // const slugLowerCase = title.toLowerCase();
    // const slugSplit = slugLowerCase.split(" ");
    // const slug = slugSplit.join("-")
    // return slug;
    return title.toLowerCase().split(" ").join("-"); 
};
 
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"
