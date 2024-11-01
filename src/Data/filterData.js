export default function targetData(category, data = []){

    return category === 'products' ? data : data.filter(item => item.category === category)
}