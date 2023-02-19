
const table = document.getElementById('areaTable')

// area calculation function
const getArea = (shape, options) => {

    // grab the values from the input fields
    const optionsA = document.getElementById(options.input1).value
    const optionsB = document.getElementById(options.input2).value

    if (optionsA == '' || optionsB == '') {
        console.log({ optionsA, optionsB });
        alert('Check input fields')
        return;
    }

    const value1 = parseInt(optionsA)
    const value2 = parseInt(optionsB)

    // calculate the area

    const calculateArea = () => {
        switch (shape) {
            case 'triangle':
                return (value1 * value2) * 0.5
            case 'rectangle':
                return value1 * value2
            case 'circle':
                return Math.PI * (value1 * value1)
            case 'rhombus':
                return (value1 * value2) * 0.5
            case 'pentagon':
                return (value1 * value2) * 0.5
            case 'ellipse':
                return Math.PI * (value1 * value2)
            case 'parallelogram':
                return value1 * value2
            default:
                return 'Not a valid shape'
        }
    }

    const area = calculateArea();

    // display the area

    const row = table.insertRow(0);
    row.innerHTML = `<tr>
        <td style="text-transform: capitalize">${shape}</td>
        <td id="${options.areaId}">${area} cm²</td>
        <td><button id="convertBtn">Convert m<sup>2</sup></button></td>
        </tr>`;
}

// triangle
const triangleBtn = document.getElementById('triangleBtn')
triangleBtn.addEventListener('click', () => {
    getArea('triangle', { input1: "triangleH", input2: "triangleB", areaId: 'triangleArea' })
})

// rectangle
const rectangleBtn = document.getElementById('rectangleBtn')
rectangleBtn.addEventListener('click', () => {
    getArea('rectangle', { input1: "rectangleH", input2: "rectangleB", areaId: 'rectangleArea' })
})

// parallelogram
const parallelogramBtn = document.getElementById('parallelogramBtn')
parallelogramBtn.addEventListener('click', () => {
    getArea('parallelogram', { input1: "parallelogramH", input2: "parallelogramB", areaId: 'parallelogramArea' })
})

// rhombus
const rhombusBtn = document.getElementById('rhombusBtn')
rhombusBtn.addEventListener('click', () => {
    getArea('rhombus', { input1: "rhombusD1", input2: "rhombusD2", areaId: "rhombusArea" })
})
// ellipse
const ellipseBtn = document.getElementById('ellipseBtn')
ellipseBtn.addEventListener('click', () => {
    getArea('ellipse', { input1: "ellipseA", input2: "ellipseB", areaId: "ellipseArea" })
})
// pentagon
const pentagonBtn = document.getElementById('pentagonBtn')
pentagonBtn.addEventListener('click', () => {
    getArea('pentagon', { input1: "pentagonP", input2: "pentagonB", areaId: "pentagonArea" })
})
