// Универсальная функция, которая может использоваться во всех редюсерах. 
// Пробегаться по объекту (по массиву), искать совпадения и менять в этом объекте что то. 
// Нужна что бы быстренько менять какие то объекты внутри массива

export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObjProps };
        }
        return u;
    })
}

