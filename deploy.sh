# deploy.sh

#!/usr/bin/env sh

set -e

npm run build


cd dist
cp ../README.md .
git init
git add .
git commit -m 'deploy'

git push -f git@github.com:suwenyu/suwenyu.github.io.git master:master
