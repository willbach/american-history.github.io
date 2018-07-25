echo $1

if [ $# -eq 0 ]
  then
    echo "Please supply a commit message"
fi

git pull upstream master && git add . && git commit -m "$1" && git push upstream master && git push origin master
