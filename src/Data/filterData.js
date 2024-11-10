export default function targetData(category, data = [], current =''){
    return category === 'products' ? data : data.filter(item => item.category === category && item.title !== current)
    //item.title used on ProductInfoPage. The currently viewed item shouldn't show in related items.
}