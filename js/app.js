'use strict';
//let sectionH1 = section.children('h1');
const allPhotoGallery = [];
var keywordVal = [];

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
  let select = $('select');

  for(let i=0; i<allPhotoGallery.length; i++){
    if(!keywordVal.includes(allPhotoGallery[i].keyword)){
      keywordVal.push(allPhotoGallery[i].keyword);
      select.append(`<option>${allPhotoGallery[i].keyword}</option>`);
    }
  }

  for(let i=0; i<allPhotoGallery.length; i++){
    section.append(`<img src="${allPhotoGallery[i].image_url}" alt = "${allPhotoGallery[i].keyword}" class= "animal${i}">`);
  }

  $('select').on('change', function(){
    $('section').empty();
    for(let i=0; i<allPhotoGallery.length; i++){
      if(allPhotoGallery[i].keyword === $(this).val()){
        section.append(`<img src="${allPhotoGallery[i].image_url}" alt = "${allPhotoGallery[i].keyword}" class= "animal${i}">`);
      }
    }
    console.log($(this).val());
  });
});

// fjdjkfljakfjdlsjla
