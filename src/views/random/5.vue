<template>
  <div class="detailPage">
    <nav>
      <div class="topNavbar">
        <router-link to="/" class="bookshopLogo">
          <h3 class="logo"><i class="fas fa-book"></i> BOOKSHOP</h3>
        </router-link>
        <form>
          <input
            type="search"
            class="empty"
            id="iconified"
            placeholder="Zoek voor boek titels ..."
          />
        </form>
        <div class="navbarBTN">
          <router-link to="/" class="cart"
            ><i class="fas fa-shopping-cart"></i
          ></router-link>
          <router-link to="/" class="profile"
            ><i class="fas fa-user"></i
          ></router-link>
        </div>
      </div>
    </nav>
    <div class="bookDetails">
      <div class="fotoBoek">
        <img src="https://s1.nyt.com/du/books/images/9781538728574.jpg" alt="THE RETURN" />
      </div>
      <div class="boekInfo">
        <h1>THE RETURN</h1>
        <h5>Nicholas Sparks</h5>
        <h2><span class="prijsKlein">Prijs:</span><br />$0,-</h2>
        <h3><a href="https://www.amazon.com/dp/1538728575?tag=NYTBSREV-20&tag=NYTBS-20" target="_blank">In Winkelmand</a></h3>
        <p>
          <i class="fas fa-truck"></i> Op werkdagen voor 23:00 besteld, volgende
          dag in huis
        </p>
        <div class="line"></div>
        <h6>A doctor serving in the Navy in Afghanistan goes back to North Carolina where two women change his life.</h6>
      </div>
    </div>
    <div class="aanbevolen">
      <h2>AANBEVOLEN BOEKEN:</h2>
      <div class="aanbevolenBoeken">
      <div class="boek1">
                <router-link to="/random/6">

        <img src="https://s1.nyt.com/du/books/images/9780399179686.jpg" alt="ALL THAT GLITTERS">
                </router-link >

      </div>
      
      <div class="boek2">
                <router-link to="/random/11">

        <img src="https://s1.nyt.com/du/books/images/9781982135607.jpg" alt="I WOULD LEAVE ME IF I COULD">
                </router-link>

      </div>
      <div class="boek3">
        <router-link to="/random/14">
        <img src="https://s1.nyt.com/du/books/images/9781501160837.jpg" alt="ANXIOUS PEOPLE">
        </router-link>
      </div>
      </div>
    </div>
    <div class="specialKorting">
      <h2>
        SCHRIJF JE IN VOOR EEN SPECIALE AANBIEDING
      </h2>
      <form>
        <input type="email" placeholder="Typ hier uw email addres ..." />
        <button type="submit">BEVESTIG</button>
      </form>
    </div>
    <footer>
      <div class="footer">
        <div class="bookshop">
          <h3><i class="fas fa-book"></i> Bookshop</h3>
          <p>
            Dit is een project die ik in mijn vrije tijd maak dus neem niet
            serieus wat ik er allemaal op heb staan. Ik wilde mezelf vueJS leren
            en dit is het resultaat
          </p>
        </div>
        <div class="service">
          <h3><i class="fas fa-thumbtack"></i> LOCATIE</h3>
          <p>
            Dit is een project die ik in mijn vrije tijd maak dus neem niet
            serieus wat ik er allemaal op heb staan. Dus de locatie is niet van
            toepassing
          </p>
        </div>
        <div class="socials">
          <h3><i class="fas fa-link"></i> HEEFT U EEN VRAAG?</h3>
          <p>
            <a
              href="https://www.facebook.com/profile.php?id=100013200469419"
              target="_blank"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a
              href="https://www.instagram.com/rubencali_/?hl=nl"
              target="_blank"
              ><i class="fab fa-instagram"></i> Instagram
            </a>
          </p>
          <p>
            <a href="https://github.com/RubenCali" target="_blank"
              ><i class="fab fa-github"></i> Github
            </a>
          </p>
          <p>
            <a href="mailTo:contact@rubencali.nl" target="_blank"
              ><i class="fas fa-envelope"></i> Email</a
            >
          </p>
        </div>
        <div class="informatie">
          <h3><i class="fas fa-info-circle"></i> INFORMATIE</h3>
          <div class="informatie__sub">
            <p><a href="#">Over ons</a></p>
            <p><a href="#">Algemene voorwaarde</a></p>
            <p><a href="#">Contact</a></p>
            <p><a href="#">Mijn account</a></p>
            <p><a href="#">faQ</a></p>
            <p><a href="#">Sitemap</a></p>
          </div>
        </div>
      </div>
    </footer>
    <div class="copyright">
      <p>&copy; 2020 Bookshop</p>
    </div>
  </div>
</template>
<script scoped>
import axios from 'axios';
export default {
  data() {
    return {
      destinationId: this.$route.params.id,
      books: [],
      errors: []
    };
  },
  created() {
    

    axios
      .get(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Osarq66VatXTw3JRwb0B1kLrc0vAiFDg`
      )
      .then(response => {
        this.books = response.data.results.books;
        console.log(this.books);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  computed: {
    destination() {
      return this.books.rank.find(
        destination => destinationId === this.destination.id
      );
    }
  },
  props: {
    title: String,
    author: String,
    image: String,
    price: Number,
    description: String,
    buy: String
  }
};
</script>
<style scoped src="@/assets/css/bookDetails.css"></style>
<style scoped src="@/assets/css/bootstrap.min.css"></style>