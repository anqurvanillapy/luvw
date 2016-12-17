mkdir -p dist

cp index.js _index.js

build_js () {
    echo "new Luvw()" >> _index.js
    npm run build:js
}

build_test () {
    echo "export default Luvw" >> _index.js
    npm run test:js
}

case "$1" in
    "js")
        build_js
        ;;
    "test")
        build_test
        ;;
    *)
        echo "invalid build option"
        exit 1
esac

rm _index.js
