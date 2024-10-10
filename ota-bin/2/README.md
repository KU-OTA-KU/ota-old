composer create-project laravel/laravel ota-ku
composer require laravel/ui
php artisan ui vue --auth
npm install && npm run dev
npm install flickity
npm install vue-routernpm
npm install moment
npm install vue-cookies
npm install vue-lazyload --save
composer require laravel/breeze --dev
composer install
chmod 777 -R storage
php artisan key:generate
npm i @vueuse/head

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
# download and install Node.js
nvm install 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.13.0`
# verifies the right NPM version is in the environment
npm -v # should print `10.5.2`

rewrite {
    regexp .*
    to /index.php
}
