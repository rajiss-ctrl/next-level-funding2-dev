cd next-level-funding2-dev
git pull
yarn install
yarn run build
pm2 stop all
pm2 del all
pm2 start "yarn run start" --name "next-level-funding-2.0"
