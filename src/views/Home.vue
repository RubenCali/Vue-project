<template>
<div>
     
 <div class="topNavbar">
 <router-link to="/" class="bookshopLogo">
     <h3 class="logo"><i class="fas fa-book"></i> BOOKSHOP</h3>
 </router-link>
  <form>
      <input type="search" placeholder="Zoek voor boek titels ..." v-model="search" id="search">
  </form>
  <div class="navbarBTN">
      <router-link to="/" class="cart"><i class="fas fa-shopping-cart"></i></router-link>
      <router-link to="/" class="profile"><i class="fas fa-user"></i></router-link>
  </div>

</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
              <router-link :to="randomLink()" class="nav-link">Random boek</router-link>
          </li>
          <li class="nav-item">
              <router-link to="/" class="nav-link">Aanbieding</router-link>
          </li>
          <li class="nav-item">
                 <button v-on:click="random" class="nav-link sorteer">Sorteer random</button>
          </li>

         <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Catogoriën
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item">Alles</a>
          <a class="dropdown-item" >Comedy</a>
          <a class="dropdown-item">Actie</a>

        </div>
      </li>

      </ul>

  </div>
</nav>

    <div class="sale">
        <h2>TIJDELIJKE AANBIEDING</h2>
        <div class="timer">
            <div class="dagen"><h4 id="dagen"></h4><h5>DAGEN</h5></div>
            <div class="uren" ><h4 id="uren"></h4><h5>UREN</h5></div>
            <div class="min" ><h4 id="min"></h4><h5>MINUTEN</h5></div>
            <div class="sec" ><h4 id="sec"></h4><h5>SECONDEN</h5></div>
        </div>
    </div>
<section id="books">      
    <div id="app">
        

       
       
        <transition-group class="boeken">
        <div v-for="(book, index) in buscarUsuarios" :key="index" >
                          <router-link :to="{name: 'DestinationDetails', params: {id: book.rank, title: book.title, author: book.author, image: book.book_image, price: book.price , description: book.description, buy: book.amazon_product_url, }}">
                <div class="korting">
                    <h4>100% KORTING</h4>
                </div>
                <img :src="book.book_image" :alt="book.title">
                
                <h2 class="book__title">{{book.title}}</h2>
                <h6 class="book__autheur">{{book.author}}</h6>
                <p class="price">${{book.price}}</p>
         </router-link>
        </div>
    </transition-group>

</div>
</section>  

<div class="specialKorting">
    <h2>
        SCHRIJF JE IN VOOR EEN SPECIALE AANBIEDING
    </h2>
    <form>
        <input type="email" placeholder="Typ hier uw email addres ...">
        <button type="submit">BEVESTIG</button>
    </form>
</div>
<footer>
    <div class="footer">
    <div class="bookshop">
        <h3><i class="fas fa-book"></i> Bookshop</h3>
        <p>Dit is een project die ik in mijn vrije tijd maak dus neem niet serieus wat ik er allemaal op heb staan. Ik wilde mezelf vueJS leren en dit is het resultaat</p>
    </div>
    <div class="service">
        <h3><i class="fas fa-thumbtack"></i> LOCATIE</h3>
        <p>Dit is een project die ik in mijn vrije tijd maak dus neem niet serieus wat ik er allemaal op heb staan. Dus de locatie is niet van toepassing</p>
    </div>
    <div class="socials">
        <h3>
            <i class="fas fa-link"></i> HEEFT U EEN VRAAG?
        </h3>
        <p><a href="https://www.facebook.com/profile.php?id=100013200469419" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></p>
        <p><a href="https://www.instagram.com/rubencali_/?hl=nl" target="_blank"><i class="fab fa-instagram"></i> Instagram </a></p>
        <p><a href="https://github.com/RubenCali" target="_blank"><i class="fab fa-github"></i> Github </a></p>
        <p> <a href="mailTo:contact@rubencali.nl" target="_blank"><i class="fas fa-envelope"></i> Email</a></p>
    </div>
    <div class="informatie">
        <h3><i class="fas fa-info-circle"></i> INFORMATIE</h3>
        <div class="informatie__sub">
            <p><a href="#">Over ons</a></p>
            <p><a href="#">Algemene voorwaarde</a></p>
            <p><a href="#">Contact</a></p>
            <p><a href="#">Mijn account</a></p>
            <p><a href="#">faQ</a></p>
            <p><a href="http://stepinin.nl/bookshop/sitemap.xml" target="_blank">Sitemap</a></p>
        </div>
    </div>
</div>

</footer>
<div class="copyright">
    <p>&copy; 2020 Bookshop </p>
</div>
</div>

  
</template>



<script scoped>
import axios from 'axios';
export default{
    data(){ 
        return {
            books: [],
            errors: [],
           search: '',
            selectedImage: ''

           


            
        }
       
    
},

created(){
    
      let fontAwesomeScript = document.createElement('script')
      fontAwesomeScript.setAttribute('src', 'https://kit.fontawesome.com/f28585beb5.js')
      document.head.appendChild(fontAwesomeScript)

      let axiosScript = document.createElement('script')
      axiosScript.setAttribute('src', 'https://unpkg.com/axios/dist/axios.min.js')
      document.head.appendChild(axiosScript)

       let jqueryScript = document.createElement('script')
      jqueryScript.setAttribute('src', 'https://code.jquery.com/jquery-3.5.1.min.js')
      document.head.appendChild(jqueryScript)

    let bootstrapScript = document.createElement('script')
      bootstrapScript.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js')
      document.head.appendChild(bootstrapScript)

  
    


    axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Osarq66VatXTw3JRwb0B1kLrc0vAiFDg`).then(response => {
        this.books = response.data.results.books 
        console.log(this.books)
    }).catch(e => {
        this.errors.push(e)
    })
    
    const idx = Math.floor(Math.random() * this.books.length);
    this.selectedImage = this.images[idx]
   
},

 methods: {
    setFilter: function(filter) {
      this.currentFilter = filter;
    },
 randomLink(){
          let nr=Math.floor(Math.random() * this.books.length) + 1;
          return '/random/'+nr;
            
 },
 random: function() {
      this.books.sort( function(a,b) { return 0.5 - Math.random()} )
    
  }

  },
 computed: {
    buscarUsuarios() {
      return this.books.filter((books) => {
        return books.title.includes(this.search);
      })

    }
    
    
    },
    



}

// Set the date we're counting down to
let countDownDate = new Date("May 16, 2021 15:40:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"

  document.getElementById("dagen").innerHTML = days ;
  document.getElementById("uren").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes ;
  document.getElementById("sec").innerHTML = seconds ;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
</script>
<style scoped src="@/assets/css/style.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>



