// 当调用方法时，入参类型必须一致， 注：Date 为ts的标注，而入参的Date会报错，应使用new Date传入时间
function greet (next: string, prev: Date) {
    console.warn(`${next}--${prev}_haha`)
}
greet('下一个',new Date())

// 隐式类型：当声明一个变量时，未赋予类型，则可以修改为同类型，而修改为其他类型则会报错
let msg = 'asd'
msg = '123'
// msg = 0