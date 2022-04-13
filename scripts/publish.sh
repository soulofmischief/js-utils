#!/bin/sh

yarn test && \
yarn build && \
yarn version -i "$1" && \
cp -f package.json lib && \
cd lib && \
npm publish --access public
