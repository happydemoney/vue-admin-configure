#!/bin/bash
git checkout master
git pull
yarn install
yarn build
# clear dist.tar
rm dist.tar
# compree dist.tar
tar czvf dist.tar dist/
git checkout gh-pages
# clear gh-pages files
rm -rf css/
rm -rf fonts/
rm -rf js/
rm index.html
rm favicon.ico
# uncompress dist.tar
tar zxvf dist.tar
# copy dist files to root
cp -r ./dist/* ./
rm -rf dist/
rm dist.tar