'use strict';
const allPhotoGallery = [];
var keywordVal = [];
var source   = document.getElementById('entry-template').innerHTML;
var template = Handlebars.compile(source);
console.log(template);
function PhotoGallery(image_url, title, description,keyword,horns){
  this.image_url = image_url;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  allPhotoGallery.push(this);
}


$.get('data/page-1.json', data =>{
  data.forEach((element, index )=> {
    new PhotoGallery(element.image_url, element.title, element.description, element.keyword, element.horns);
    $('#datajson').append(template(allPhotoGallery[index]));
  });
  // let section = $('#photo-template');
  // let select = $('select');

  for(let i=0; i<allPhotoGallery.length; i++){
    if(!keywordVal.includes(allPhotoGallery[i].keyword)){
      keywordVal.push(allPhotoGallery[i].keyword);
      // template(select.append(`<option>${allPhotoGallery[i]}</option>`));
    }
  }

  // for(let i=0; i<allPhotoGallery.length; i++){

  //   template(section.append(`<img src="${allPhotoGallery[i].image_url}" alt = "${allPhotoGallery[i].keyword}" class= "animal${i}">`));
  //   console.log('TEST' +template.data);
  // }

  // $('select').on('change', function(){
  //   $('section').empty();
  //   for(let i=0; i<allPhotoGallery.length; i++){
  //     if(allPhotoGallery[i].keyword === $(this).val()){
  //       template(section.append(`<img src="${allPhotoGallery[i].image_url}" alt = "${allPhotoGallery[i].keyword}" class= "animal${i}">`));
  //     }
  //   }
  //   console.log($(this).val());
  // });
});

// fjdjkfljakfjdlsjla
