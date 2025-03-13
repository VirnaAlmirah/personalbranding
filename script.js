import {renderHTML,onClick,setInner} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";

renderHTML('card', 'content/index.html')

onClick("instagram",myInstagram);
   function myInstagram() {
       window.open('https://www.instagram.com/virnaalll?igsh=bnRua2llb2UzZzZ0', '_blank');
   }
onClick("github",myGithub);
   function myGithub() {
       window.open('https://github.com/VirnaAlmirah', '_blank');
   }
onClick("whatsApp",myWhatsApp);
   function myWhatsApp() {
       window.open('https://wa.me/6282116301579', '_blank');
   }

setInner("text", "Kontak Saya");