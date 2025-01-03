let numbers1
let numbers2

beforeEach(() => {
    numbers1 = [1, 2, 11, 8, 10]
    numbers2 = [1, 11, 2]
})

test('It should remove all values from list a, which are present in list b keeping their order', () => {

    
    function arrayDiff(a,b) {
        let filteredArray
        for(let i=0; i<b.length; i++){
            filteredArray = a.filter(e=>e !==b[i])
        }
        return filteredArray
    }

    expect(arrayDiff(numbers1, numbers2)).toEqual([8,10])
})