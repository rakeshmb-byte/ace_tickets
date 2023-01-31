function myFunction(x) {
  x.classList.toggle("change");
}

 let tabLinks = document.querySelectorAll('.tab-link');

        tabLinks.forEach(link => {
          link.addEventListener('click', function() {
            let tabId = this.dataset.tab;
            let tabContent = document.getElementById(tabId);
        
            document.querySelectorAll('.tab-content').forEach(content => {
              content.style.display = 'none';
            });
        
            tabContent.style.display = 'block';
          });
        });
        
        
//Retrive all the buttons
var tabButtons=document.querySelectorAll(".tabContainer .tabs button");
       
//Retrive all the panel data
var tabPanels=document.querySelectorAll(".tabContainer .tabContent");

function showPanel(panelIndex){
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
   tabPanels[panelIndex].style.display="block";
 }
