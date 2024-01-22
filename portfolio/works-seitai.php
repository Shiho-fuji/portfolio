<?php get_header();?>
    <!-- /header -->

    <main class="content">

      <article class="article">
        <div class="article-container">
          <h2 class="article-title">整体院のHP</h2>
          <div class="article-body">
            <p>
              <img src="<?php echo get_template_directory_uri(); ?>/img/works-mymake/seitai.png" alt="整体院のHPスクショ">
            </p>
            <p>
              整体院のHPとなります。
            </p>
            <h3>URL</h3>
            <p>
              <a href="https://samusei.com/" target="_blank" rel="noopener">https://samusei.com/</a>
              <br>ユーザー名:viewer
              <br>パスワード:viewer
            </p>
            <h3>担当</h3>
            <p>WordPress構築・コーディング</p>
            <h3>サイトの目的</h3>
            <p>整体院のHP</p>
            <h3>使用技術</h3>
            <p>HTML/CSS/JavaScript/WordPress/PHP/レスポンシブ対応</p>
            <h3>コーディングについて</h3>
            <p>
              オンラインスクールよりデザインを提供して頂き、それを参考にコーディングさせて頂きました。
              <br>Figmaで配布して頂いたデザインを元にHTML/CSSを作成し、wordpress化またPHP化しています。
              <br>ニュースを投稿機能を使用し作成、お客様のお声を「Custom Post Type UI」というプラグインを使用し作成しています。またお問い合わせページを「MW WP Form」というプラグインを使用し作成しています。
              <br>それぞれのページを固定ページを使用し表示できるようにしています。
            </p>
          </div>
          <div class="home-link">
            <a href="index.html#works">Works一覧へ</a>
          </div>
        </div>
      </article>

      <div class="page-top" id="js-page-top">
        <span class="material-icons-outlined">expand_less</span>
      </div>
    </main>

    <!-- footer -->
    <?php wp_footer(); ?>