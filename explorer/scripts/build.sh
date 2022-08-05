#!/bin/bash

DIR="./site-config/$1/images/favicons/"
# init

cp ./site-config/$1/prod/.env .env.production

# look for empty directory
if [ -d "$DIR" ]
then
	if [ "$(ls $DIR)" ]; then
     cp ./site-config/$1/images/favicons/* ./public/favicons/
	 cp ./scripts/browserconfig.xml ./public/favicons/
	 cp ./scripts/site.webmanifest ./public/favicons/
	fi
else
	echo "Directory $DIR not found."
fi