const template = document.querySelector("#venueTemplate").content;
const main = document.querySelector("#venueList");
const baseLink = "http://angadesign.dk/KEA/huset/wp-json/wp/v2/artist";


//1. fetch content
function loadVenue(){
    fetch(baseLink).then(res=>res.json()).then(showVenue);
}

function showVenue(venue){
     // venue.forEach(elm=>{
      console.log(venue);
}
loadVenue();
  //, make a copy of the template
/*  const copy = template.cloneNode(true);
  copy.querySelector("h1").textContent = elm.title.rendered;
  copy.querySelector("p").textContent = elm.content.rendered;
  copy.querySelector("#venueText").textContent = elm.acf.model;
  copy.querySelector("#venueLocation").textContent = elm.acf.location;
  copy.querySelector("#venueCapacity").textContent = elm.acf.max_capacity;
  copy.querySelector("#venueTech").textContent = elm.acf.tech_specs;
  // console.log(elm.id);
  // here comes the link to show details
  //copy.querySelector("a").href= "details.html?carid="+elm.id;


  //find the image
  if(elm._embedded){
     copy.querySelector("img").src=elm._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url;
  } else {
     copy.querySelector("img").remove()
  }

  document.querySelector("main").appendChild(copy)
})};

showVenue();*/
