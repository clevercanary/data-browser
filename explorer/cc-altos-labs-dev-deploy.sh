#!/usr/bin/env bash

export GATSBY_GTM_ID=GTM-M2J5NTJ
export GATSBY_GTM_AUTH=CzDpc0__fhyqfREDehPK8Q
export GATSBY_ENV_NAME=env-83


echo \"Deleting ./out/\"
rm -rf ./out

echo \"Deleting ./build/\"
rm -rf ./build

n 16.15.1
npm ci

#./insert-gtm-snippet.sh


mkdir -p build/explore/altos-labs-catalog

# Build Altos
rm -rf ./out
npm run build:altos-labs-catalog
mv out/explore/* build/explore/altos-labs-catalog

export BUCKET=s3://altoslabs-databrowser.dev.clevercanry.com/
export SRCDIR=build/

aws s3 sync --acl public-read $SRCDIR $BUCKET --delete --profile excira
aws cloudfront create-invalidation --distribution-id E1J9AGOUZICHBM --paths "/*" --profile excira