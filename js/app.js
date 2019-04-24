'use strict';
//let sectionH1 = section.children('h1');
var allPhotoGallery = [];

function PhotoGallery(image_url, title, description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allPhotoGallery.push(this);
}


$.get('../data/page-1.json', data =>{
  data.forEach(element => (
    new PhotoGallery(element.image_url, element.title, element.description, element.keyword, element.horns)));
}) ;
console.log(allPhotoGallery);
let section = $('#photo-template');
allPhotoGallery.forEach(element =>
  section.append(`<h2> ${element.title}</h2>`)
);

// for(let i=0; i<allPhotoGallery.length; i++){
//   console.log(allPhotoGallery[i]);
// }
