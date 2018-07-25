#!/bin/bash

if [ $# -eq 0 ]
  then
    echo "Please supply a commit message"
    exit 0
fi

echo "Commit Message: $1"

git pull upstream master && git add . && git commit -m "$1" && git push git@github.com:american-history/american-history.github.io.git master && git push origin master
