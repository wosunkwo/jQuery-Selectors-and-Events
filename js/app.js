'use strict';
var allPhotoGallery = [];
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

function page1(){
  allPhotoGallery = [];
  $('#datajson').empty();
  $('select').empty();
  keywordVal = [];
  
  $.get('data/page-1.json', data =>{
    data.forEach((element, index )=> {
      new PhotoGallery(element.image_url, element.title, element.description, element.keyword, element.horns);
      $('#datajson').append(template(allPhotoGallery[index]));
    });

    let select = $('select');
    for(let i=0; i<allPhotoGallery.length; i++){
      if(!keywordVal.includes(allPhotoGallery[i].keyword)){
        keywordVal.push(allPhotoGallery[i].keyword);
        select.append(`<option>${allPhotoGallery[i].keyword}</option>`);
      }
    }

    $('#sorttitle').on('change', function(e) {
      console.log(e.target);
      console.log(allPhotoGallery);
      allPhotoGallery.sort((a, b) => {
        if(a.title < b.title){
          console.log(a < b);
          return -1;
        } else if (a.title > b.title){
          return 1;
        } else{
          return 0;
        }
      });
      $('#datajson').empty();
      for(let i=0; i<allPhotoGallery.length; i++){
        $('#datajson').append(template(allPhotoGallery[i]));
      }
   
      $('select').on('change', function(){
        $('#datajson').empty();
        for(let i=0; i<allPhotoGallery.length; i++){
          if(allPhotoGallery[i].keyword === $(this).val()){
            $('#datajson').append(template(allPhotoGallery[i]));
          }
        }
      });
    });
    console.log(allPhotoGallery);
    return allPhotoGallery;
  });
}


function page2(){
  allPhotoGallery = [];
  $('#datajson').empty();
  $('select').empty();
  keywordVal = [];

  $.get('data/page-2.json', data =>{
    data.forEach((element, index )=> {
      new PhotoGallery(element.image_url, element.title, element.description, element.keyword, element.horns);
      $('#datajson').append(template(allPhotoGallery[index]));
    });
    let select = $('select');
    for(let i=0; i<allPhotoGallery.length; i++){
      if(!keywordVal.includes(allPhotoGallery[i].keyword)){
        keywordVal.push(allPhotoGallery[i].keyword);
        select.append(`<option>${allPhotoGallery[i].keyword}</option>`);
      }
    }

    $('#sorthorns').on('change', function(e) {
      allPhotoGallery.sort((a, b) => {
        if(a.horns < b.horns){
          console.log(a < b);
          return -1;
        } else if (a.horns > b.horns){
          return 1;
        } else{
          return 0;
        }
      });
      $('#datajson').empty();
      for(let i=0; i<allPhotoGallery.length; i++){
        $('#datajson').append(template(allPhotoGallery[i]));
      }

      $('select').on('change', function(){
        $('#datajson').empty();
        for(let i=0; i<allPhotoGallery.length; i++){
          if(allPhotoGallery[i].keyword === $(this).val()){
            $('#datajson').append(template(allPhotoGallery[i]));
          }
        }
      });
    });
  });
}
// const sortHorns = (allPhotoGallery) => {
//   allPhotoGallery.sort((a,b) => {a.horns-b.horns});
//   return arr;
// };

// const sortTitle = (allPhotoGallery) => {
//   allPhotoGallery.sort((a,b) => {a.title-b.title});
//   return arr;
// };


page1();
$('#page1').on('click', page1);

$('#page2').on('click', page2);