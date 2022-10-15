console.log('输出')

function greet (next, prev) {
    console.warn(`${next}--${prev}_haha`)
}
greet(2,1)