#! /bin/bash

cd dev &&  sed -i'' -e 's/"\/assets/"\.\/assets/g' index.html 
cat index.html