<?php get_header(); ?>

    <div class='content'>
      <section class='home-slider'>
        <!-- Slider -->
        <ul class="bxslider">
          <li>
            <div class="hero-block">
              <div class="hero-content">
                <video autoplay poster="<?php echo get_template_directory_uri(); ?>/img/video_placeholder/1.jpg" id='vid1' class='video-bg slider-content'>
                  <source src="<?php echo get_template_directory_uri(); ?>/video/film.webm" type="video/webm">
                  <source src="<?php echo get_template_directory_uri(); ?>/video/film.mp4" type="video/mp4">
                  <source src="<?php echo get_template_directory_uri(); ?>/video/film.ogv" type="video/ogg">
                </video>
                <div class='overlay'></div>
                <div class='container'>
                  <div class='hero-text' data-0='opacity: 1; top: 20px;' data-_slider--500='opacity: 0; top: 250px;'>
                    <h3 class='slide-heading'>The Ukrainian Insurgent Army</h3>
                    <div class='subtext'>Coming Soon..</div>
                    <a class='btn btn-ghost modal-opener' iframe-modal-open iframe-src='https://player.vimeo.com/video/124858745?autoplay=1&color=c59c58&title=0&byline=0&portrait=0'><i class='i-play -with-text'></i> Watch Trailer</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <!-- <li>
            <div class="hero-block">
              <div class="hero-content">
                <img src="<?php echo get_template_directory_uri(); ?>/img/5.jpg" class='slider-content'>
                <div class='overlay'></div>
                <div class='container'>
                  <div class='hero-text' data-0='opacity: 1; top: 20px;' data-_slider--500='opacity: 0; top: 250px;'>
                    <h3 class='slide-heading'>Some Promo News</h3>
                    <div class='subtext'>No video here. This can be what ever text you like...</div>
                    <a class='btn btn-ghost'>Link anywhere</a>
                  </div>
                </div>
              </div>
            </div>
          </li> -->
        </ul>
        <!-- End Slider -->
        <a href="#about" class="arrow-down">
          <div></div>
          <div></div>
        </a>
      </section>
      <!-- Hero -->
      <section id='about' class='about'>
        <div class='container text-center'>
          <h1>Invert Pictures</h1>
          <h2>
            Culture shifts, technology evolves, aesthetics change
            <br> - great storytelling perseveres.
          </h2>
          <div class='buttons-holder'>
            <a class='btn -clean -lg' href="our-works/index.html">Our Works</a>
            <a class='btn -clean -lg' href="#">About Invert</a>
          </div>
        </div>
      </section>
      <!-- parallax -->
            <section class='home-parallax home-parallax-0'>
        <div class='paraContent'>
          <div class='parallax-layer'
               data-_para1top='background-position: 0% 0%'
               data-_para1bot='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene1_1.png")'></div>
          <div class='parallax-layer'
               data-_para1top='background-position: 0% 0%'
               data-_para1bot='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene1_2.png")'></div>
          <div class='parallax-layer'>
            <div class="parallax-layer--text text-center centered color-white"
                 data-_para1top='margin-top: 300px'
                 data-_para1bot='margin-top: 100px'>
                 Culture shifts, technology evolves, aesthetics change <br>- great storytelling perseveres.
            </div>
          </div>
        </div>
      </section>


      <section class='home-parallax home-parallax-1'>
        <div class='paraContent'>
          <div class='parallax-layer'
               data-_para2topbefore='background-position: 0% 0%'
               data-_para2bot='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene2_1.png")'>
          </div>
          <div class='parallax-layer'
               data-_para2topbefore='transform: translateX(2%); opacity:0.2'
               data-_para2mid='transform: translateX(0%); opacity:1'
               data-_para2bot='transform: translateX(-2%);'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/flare.png")'>
          </div>
          <div class='parallax-layer'
               data-_para2topbefore='background-position: 0% 0%'
               data-_para2bot='background-position: 0% 100%;'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene2_2.png")'>
          </div>
        </div>
      </section>


      <section class='home-parallax home-parallax-2'>
        <div class='paraContent'>
          <div class='parallax-layer parallax-layer-3'
               data-_para3topbefore='background-position: 0% 0%'
               data-_para3top='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene3_1.jpg")'>
          </div>
          <div class='parallax-layer parallax-layer-3'
               data-_para3topbefore='background-position: 0% 0%; margin-left: -70px'
               data-_para3top='background-position: 0% 100%; margin-left: 0px'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene3_3.png")'>
          </div>
          <div class='parallax-layer'
               data-_para3topbefore='background-position: 0% 0%'
               data-_para3top='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene3_2.png")'>
          </div>
          <div class='parallax-layer'>
            <div class="parallax-layer--text text-right centered color-white"
                 data-_para3topbefore='margin-top: 100px'
                 data-_para3top='margin-top: -50px'>
                 Culture shifts, technology evolves, aesthetics change <br>- great storytelling perseveres.
            </div>
          </div>
        </div>
      </section>

      <section class='home-parallax home-parallax-3'>
        <div class='paraContent'>
          <div class='parallax-layer parallax-layer-4'
               data-_para4topbefore='background-position: 0% 0%'
               data-_para4mid='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene4_1.png")'>
          </div>
          <div class='parallax-layer'
               data-_para4topbefore='background-position: 0% 0%'
               data-_para4mid='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene4_2.png")'>
          </div>
          <div class='parallax-layer'
               data-_para4topbefore='background-position: 0% 0%'
               data-_para4mid='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene4_4.png")'>
          </div>
          <div class='parallax-layer'
               data-_para4topbefore='background-position: 0% 0%'
               data-_para4mid='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene4_3.png")'>
          </div>
          <div class='parallax-layer'>
            <div class="parallax-layer--text text-center centered color-white"
                 data-_para4topbefore='margin-top: 100px'
                 data-_para4mid='margin-top: -100px'>
                 Culture shifts, technology evolves, aesthetics change <br>- great storytelling perseveres.
            </div>
          </div>
        </div>
      </section>

      <section class='home-parallax home-parallax-4'>
        <div class='paraContent'>
          <div class='parallax-layer'
               data-_para5topbefore='background-position: 0% 0%'
               data-_para5top='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene5_1.png")'>
          </div>
          <div class='parallax-layer'
               data-_para5topbefore='background-position: 0% 0%'
               data-_para5top='background-position: 0% 100%'
               style='background-image: url("<?php echo get_template_directory_uri(); ?>/img/parallax/scene5_2.png")'>
          </div>
          <div class="parallax-layer--text text-center centered color-white"
               data-_para5topbefore='margin-top: 250px; opacity: 0.5'
               data-_para5top='margin-top: 150px; opacity: 1'>
               <img src="<?php echo get_template_directory_uri(); ?>/img/logo_w.svg" class='bottom-logo'>
          </div>
        </div>
      </section>

      <!-- <div style="height: 1000px; background: #030307"></div> -->
    </div>
    <!-- * -->
<?php get_footer(); ?>