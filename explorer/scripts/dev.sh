#!/bin/bash

DIR="./site-config/$1/images/favicons/"
# init

cp ./site-config/$1/dev/.env .env.development

# look for empty directory
if [ -d "$DIR" ]
then
	if [ "$(ls $DIR)" ]; then
     cp ./site-config/$1/images/favicons/* ./public/favicons/
	fi
else
	echo "Directory $DIR not found."
fi