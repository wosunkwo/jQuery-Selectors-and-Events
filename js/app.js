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
    $('select').on('change', function(){
      $('#datajson').empty();
      for(let i=0; i<allPhotoGallery.length; i++){
        if(allPhotoGallery[i].keyword === $(this).val()){
          $('#datajson').append(template(allPhotoGallery[i]));
        }
      }
    });
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
    $('select').on('change', function(){
      $('#datajson').empty();
      for(let i=0; i<allPhotoGallery.length; i++){
        if(allPhotoGallery[i].keyword === $(this).val()){
          $('#datajson').append(template(allPhotoGallery[i]));
        }
      }
    });
  });
}

page1();
$('#page1').on('click', page1);

$('#page2').on('click', page2);
