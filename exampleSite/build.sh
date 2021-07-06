#!/bin/bash

if [ ! -d "themes/port-hugo" ] ; then
    git clone "https://github.com/tylerjlawson/port-hugo" "themes/port-hugo"
fi
yarn build