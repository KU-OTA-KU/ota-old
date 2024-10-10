<!DOCTYPE html>
<html lang="ru">

<head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XKSYJXXKPB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-XKSYJXXKPB');
    </script>
    <!-- Yandex.RTB -->
    <script>window.yaContextCb=window.yaContextCb||[]</script>
    <script src="https://yandex.ru/ads/system/context.js" async></script>
    <link rel="stylesheet" href="css/flickity.min.css">
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>OTA-KU Каталог</title>
    <link rel="shortcut icon" href="assets/images/Ota-ku-logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="src/_root/root.css"/>
    <link rel="stylesheet" href="css/palette/dark_1.css"/>
    <link rel="stylesheet" href="css/scrollbar.css">
    <link rel="stylesheet" href="css/main.css"/>

    <link rel="stylesheet" href="src/components/header/header.css"/>
    <link rel="stylesheet" href="src/components/genres/genres.css"/>
    <link rel="stylesheet" href="src/components/banners/banners.css"/>
    <link rel="stylesheet" href="src/components/filter/filter.css"/>
    <link rel="stylesheet" href="src/components/content/content.css"/>
    <link rel="stylesheet" href="src/components/footer/footer.css"/>

    <link rel="stylesheet" href="src/_root/catalog.css"/>
</head>

<body>
<!-- anime header Init Start -->
<?php include_once 'src/components/header/header.php'; ?>
<!-- anime header Init End -->
<!-- all genres Init Start -->
<?php include_once 'src/components/genres/genres.php'; ?>
<!-- all genres Init End -->
<!--  banner init start-->
<section class="ban_1-container">
    <div class="ban_1-container-inner">
        <div class="ban_1-container-tit">
            <!-- Yandex.RTB R-A-7609325-3 -->
            <div id="yandex_rtb_R-A-7609325-3"></div>
            <script>
                window.yaContextCb.push(()=>{
                    Ya.Context.AdvManager.render({
                        "blockId": "R-A-7609325-3",
                        "renderTo": "yandex_rtb_R-A-7609325-3"
                    })
                })
            </script>
        </div>
    </div>
</section>
<!--  banner init end -->
<!-- main Start -->
<main class="main">
    <div class="main-inner">
        <div class="main-tit">
            <!-- filter Init Start -->
          <?php include_once 'src/components/filter/filter.php'; ?>
            <!-- filter Init End -->
            <!-- content Start -->
          <?php include_once 'src/components/content/content.php'; ?>
            <!-- content End -->
        </div>
    </div>
</main>
<!-- main End -->
<!-- footer Init Start -->
<?php include_once 'src/components/footer/footer.php'; ?>
<!-- footer Init End -->

<!-- scripts-->
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<script src="https://kit.fontawesome.com/36abf4b57f.js" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"
        integrity="sha512-aNMyYYxdIxIaot0Y1/PLuEu3eipGCmsEUBrUq+7aVyPGMFH8z0eTP0tkqAvv34fzN6z+201d3T8HPb1svWSKHQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script src="js/flickity/genres.js"></script>

<script defer src="js/_BLACKLIST.js"></script>
<script defer src="js/other/delay.js"></script>
<script defer src="js/other/shuffleArray.js"></script>

<script defer src="js/filter/filter.js"></script>
<script defer src="js/catalog.js"></script>

<script defer>
    async function __INIT__() {
        triggerScrollUntilScrollAppears();
    }

    window.addEventListener('load', async () => {
        console.log("%cНачинаю Выполнение запросов...", "color: aqua");
        await __INIT__()
    });
</script>
</body>
</html>