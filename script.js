let Name = document.querySelector('#name');
let num = document.querySelector('#num');
let num2 = document.querySelector('#i1')

let weblogo = document.querySelector('#i2')
let web = document.querySelector('#web')

let mail2 = document.querySelector('.i3')
let mail = document.querySelector('#email')

let address = document.querySelector('#address')


let hidfile = document.querySelector('#hid')
let img = document.querySelector('#img2')

Name.addEventListener('click',()=>{
    var name = prompt("Enter Your Nmae & SurNmae: ")
      if(name.length>0){
        Name.innerHTML=name
      }
})

num.addEventListener('click',()=>{
    var phone = prompt("Enter Your Mobile-Number: ")
    if(phone.length>0){
        num.innerHTML='+91 '+phone;
    }
})

num2.addEventListener('click',()=>{
   var phone= prompt("Enter Your Mobile-Number: ")
    if(phone.length>0){
        num.innerHTML='+91 '+phone;
    }
})


web.addEventListener('click',()=>{
    var webs = prompt("Enter Your website: ")
    
    if(webs.length>0){
        web.innerHTML=webs;
    }
})

weblogo.addEventListener('click',()=>{
    var webs = prompt("Enter Your website: ")
    if(webs.length>0){
        web.innerHTML=webs;
    }
})

mail.addEventListener('click',()=>{
    var usermail = prompt("Enter Your E-mail Addres: ")
    if(usermail.length>0){
        mail.innerHTML=usermail;
    }
})
mail2.addEventListener("click",function(){
    var usermail = prompt("Enter Your E-mail Addres: ")
    if(usermail.length>0){
        mail.innerHTML=usermail;
    }
})

address.addEventListener('click',()=>{
    let udd = prompt("Enter the Addres: ")
    if(udd.length>0){
        address.innerHTML=udd
    }
})

let btn1 = document.querySelector('#Uploadimg');
let inpu = document.querySelector('#uploadInput')

btn1.addEventListener('click',()=>{
    inpu.click()
   })

function previewImage() {
    var preview = document.getElementById('preview');
    var fileInput = document.getElementById('uploadInput');
    var file = fileInput.files[0];
    
    if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}



function convertAndDownload() {
    
    var element = document.getElementById('card');

    html2canvas(element).then(function (canvas) {

      var imgData = canvas.toDataURL('image/jpeg');
      var img = new Image();
      img.src = imgData;

      var link = document.createElement('a');
      link.href = imgData;
      link.download = 'downloaded_image.jpg';

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
    });
  }



