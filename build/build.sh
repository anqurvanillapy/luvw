mkdir -p dist

cp index.js _index.js

case "$1" in
    "js")
        package="new Luvw()"
        ;;
    "test")
        package="export default Luvw"
        ;;
    *)
        echo "invalid build option"
        exit 1
esac

echo $package >> _index.js
npm run "build:$1"

rm _index.js
