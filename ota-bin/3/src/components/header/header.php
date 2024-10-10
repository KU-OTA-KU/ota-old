<!-- header Start -->
<header>
    <div class="header-inner">
        <div class="header-tit">
            <div class="header-log-and-nav">
                <div class="header-logo" onclick="window.location.href = '<?php echo 'http://' . $_SERVER['HTTP_HOST']; ?>/index.php';">
                    <img src="<?php echo 'http://' . $_SERVER['HTTP_HOST']; ?>/assets/images/ota-ku.webp" alt="" id="logo"/>
                </div>
                <nav class="header-navigation">
                    <a href="catalog.php" class="nav-button">КАТАЛОГ</a>
                    <a href="javascript:void(0)" class="nav-button" onclick="scrollToAnchor('main-content')">ТОП</a>
                </nav>
                <div class="header-search">
                    <form action="catalog.php" method="GET">
                        <button type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                        <input type="text" required placeholder="Что будем искать в мире аниме?" class="search-input-fa"
                               name="search" autocomplete="off" value="<?php if(isset($_GET['search'])){echo $_GET['search'];} ?>">
                    </form>
                </div>
            </div>
<!--            <div class="header-login">-->
<!--                <div class="user-is-reg-1" style="display: none">-->
<!--                    <div class="user">-->
<!--                        <div class="user-cont">-->
<!--                            <p class="user-name">Esudesu</p>-->
<!--                            <span class="user-email">w33bv.gl@gmail.com</span>-->
<!--                        </div>-->
<!--                        <div class="user-img" onclick="userProfile();">-->
<!--                            <img src="assets/images/user.jpg" alt="userimg"/>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="user-is-reg-2" style="display: none">-->
<!--                    <button onclick="">-->
<!--                        Войти-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
        </div>
    </div>
</header>
<!-- header End -->

<!-- search Start media 630px -->
<section class="search">
    <div class="search-inner">
        <div class="search-tit">
            <div class="header-search spm-search">
                <form action="catalog.php" method="GET">
                    <button type="submit">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input type="text" required placeholder="Что будем искать в мире аниме?" class="search-input-fa"
                           name="search" autocomplete= "off" value="<?php if(isset($_GET['search'])){echo $_GET['search'];} ?>">
                </form>
            </div>
        </div>
    </div>
</section>
<!-- search End media 630px -->