'use strict';
//let sectionH1 = section.children('h1');
const allPhotoGallery = [];

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

  let section = $('#photo-template');

  for(let i=0; i<allPhotoGallery.length; i++){
    section.append(`<h2> ${allPhotoGallery[i].title}</h2>`);
    section.append(`<img src="${allPhotoGallery[i].image_url}" alt = "${allPhotoGallery[i].keyword}">`);
    /* section.append(`<p> ${allPhotoGallery[i].description}</p>`);*/
  }
  /*
  allPhotoGallery.forEach(element =>
    section.append(`<h2> ${element.title}</h2>`)
  );*/
});
