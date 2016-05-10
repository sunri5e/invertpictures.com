    <footer class='footer'>
      <div class='container'>
        <div class='cf'>
          <div class='two-third -info'>
            <span class='phone-number'>+38 067 322 23 32</span>
            <span class='phone-number'>+38 050 677 29 81</span>
            <a href="mailto:info@invert-pictures.com">info@invert-pictures.com</a>
          </div>
          <div class='one-third text-right social-icons'>
            <a target="_blank" href="https://vimeo.com/invertpictures"><i class="soc-icon -vimeo"></i></a>
            <a target="_blank" href="https://www.youtube.com/user/InvertPictures"><i class="soc-icon -youtube"></i></a>
            <a target="_blank" href="https://www.facebook.com/taras.khymych.9"><i class="soc-icon -facebook"></i></a>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- Preloader -->  
  <div class='preloader'></div>
  <!-- Pop-Ups -->
  <div id='contactUsPopup' class='pop-up contact-us'>
    <div close-popup class='pop-up--bg'></div>
    <div class='pop-up--content'>
      <div class='container'>
        <div class='abs-center'>
          <h2>Contact Us</h2>
          <?php echo do_shortcode( '[contact-form-7 id="7" title="Contact form"]' ) ?>
        </div>
      </div>
    </div>
    <div close-popup class='close'></div>
  </div>
  <!-- iframe  -->
  <div class='pop-up iframe-popup'>
    <div close-popup class='pop-up--bg'></div>
    <div close-popup class='close'></div>
    <div class='pop-up--content'>
      <iframe src="" width="1820" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
  <!-- Scripts -->
  <script src='<?php echo get_template_directory_uri(); ?>/js/jquery-1.11.3.min.js'></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/skrollr.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.bxslider.min.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/jquery.scrollSpeed.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/home-parallax.js"></script>
  <script src="<?php echo get_template_directory_uri(); ?>/js/scripts.js"></script>
  <!-- Top Parallax -->
  <script src="<?php echo get_template_directory_uri(); ?>/js/TweenLite.min.js"></script>
  <!-- <script src="<?php echo get_template_directory_uri(); ?>/js/parallax.js"></script> -->
</body>
</html>