// ... vue instance
  methods: {
    hoverCard(selectedIndex) {
      this.selectedCard = selectedIndex
    },
    isSelected (cardIndex) {
      return this.selectedCard === cardIndex
    }
  }
  
  const cards = [
  {title: 'Gooey PBJ Brownies', author: 'John Walibur', image: 'https://placeimg.com/640/480/nature'},
  {title: 'Crisp Spanish Tortilla Matzo Brei', author: 'Colman Andrews', image: 'https://placeimg.com/640/480/animals'},
  {title: 'Grilled Shrimp with Lemon and Garlic', author: 'Celeste Mills', image: 'https://placeimg.com/640/480/arch'}
]


new Vue({
  el: '#app',
  data: {
    cards: cards,
    selectedCard: -1
  }
})

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("coda");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(function() {
  
    
    $('#pop').modal();
    
    $('#myModal').on('shown', function(){
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh')
            })
        $('#navbarExample1').scrollspy();
    });
    
    
    $('#myModal').mCustomScrollbar({
        theme : 'dark-thick'
    });
});

