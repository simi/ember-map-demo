#!/usr/bin/env bash

set -e

# Make sure we're in a good state.
git checkout master
git pull
rm -rf dist
ember build --environment production

# Move to the "release" branch and make everything work.
git checkout gh-pages
git pull
ls -1 | grep -v -E '^dist$' | xargs rm -rf
mv dist/* ./
mv dist/.* ./
rm -rf dist

# Add everything and push it.
git commit -am "Update."
git push
git checkout master
git pull
npm install
bower install
