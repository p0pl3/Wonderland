<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__info">
        <div class="footer__info-link">
          <div class="footer__client">
            <ul>
              <li>
                <a href="#">About shop</a>
              </li>
              <li>
                <a href="#">Address shops</a>
              </li>
              <li>
                <a href="#">Sale and promo</a>
              </li>
              <li>
                <a href="#">For legal entities</a>
              </li>
              <li>
                <a href="#">How delivery</a>
              </li>
              <li>
                <a href="#">Disput</a>
              </li>
            </ul>
          </div>
          <div class="footer__shop">
            <ul>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Personal Area</a>
              </li>
              <li>
                <a href="#">My orders</a>
              </li>
              <li>
                <a href="#">Q/A</a>
              </li>
              <li>
                <a href="#">How delivery</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__social">
            <h4>Contacts</h4>
            <div class="footer__social-ico">
              <img src="@/assets/vk.svg">
              <img src="@/assets/tg.svg">
              <img src="@/assets/youtube.svg">
            </div>
          </div>
          <a href="tel:+73412051050">+7(341)205-10-50</a>
          <div class="full_name">
            <p>Поплавский Михаил Андреевич</p>
            <p>ИКБО-01-21</p>
          </div>
        </div>
      </div>
      <div class="footer__terms">
        <div class="footer__logo">
          <h2> Wonderland</h2>
        </div>
        <div class="footer__payment">
          <img src="@/assets/mc.svg" style="width: 30px; height: 30px; margin-right: 10px">
          <img src="@/assets/mir.svg" style="width: 30px; height: 30px;">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterBar",
  data(){

  }
}
</script>

<style scoped lang="scss">
$base-background: rgb(116, 0, 190);
$base-background-white: rgb(155, 0, 255);
$base-grey: rgba(75, 75, 75, 0.9);

.footer__contact {
  padding: 15px 0 0 10px;
}

.footer__info-link {
  display: flex;
  flex-wrap: wrap;
}

.footer__terms {
  margin-top: 10px;
  border-top: 1px solid $base-background-white;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  h2 {
    color: white;
  }
}

.footer__social {
  h4 {
    margin: 0;
    color: white;
  }

  &-ico {
    display: flex;

    img {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
  }
}

.footer__info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}

.footer {
  background: $base-background;
  width: 100%;

  ul {
    list-style-type: none;
    margin: 0;
    padding: 15px 0 0 10px;
  }

  li {
    padding: 5px;
    font-size: 16px;
  }

  a {
    color: white;
    text-decoration: none;
  }
}

.full_name{
  color:white;
  margin-top: 25px;
  p{
    margin: 10px 0;
  }
}
</style>