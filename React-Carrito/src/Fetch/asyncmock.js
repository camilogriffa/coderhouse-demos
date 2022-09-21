

export const productos =
    [
        {
            "id": "1",
            "title": "Campera Desmontable Dama",
            "price": 120000,
            "img": "/Images/campera.jpg",
            "stock": 10,
            "category": "mujeres",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "2",
            "title": "Campera Tornado",
            "price": 150000,
            "img": "/Images/campera1.jpg",
            "stock": 10,
            "category": "hombres",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "3",
            "title": "Campera Dama Frizado",
            "price": 170000,
            "img": "/Images/campera2.jpg",
            "stock": 10,
            "category": "mujeres",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "4",
            "title": "CAMPERA OCTANE FOREST",
            "price": 77000,
            "img": "/Images/CAMPERA OCTANE FOREST.jpg",
            "stock": 10,
            "category": "hombres",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "5",
            "title": "CAMPERA CUERO OCTANE CRAKER",
            "price": 185000,
            "img": "/Images/CAMPERA CUERO OCTANE CRAKER.jpg",
            "stock": 10,
            "category": "hombres",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "8",
            "title": "CASCO ARAI TOUR X4 MATT BLACK",
            "price": 285000,
            "img": "/Images/CASCO ARAI TOUR X4 MATT BLACK.jpg",
            "stock": 10,
            "category": "accesorios",
            "description": "Aqui veremos la descripcion del producto"
        },
        {
            "id": "9",
            "title": "CASCO LS2 MX437JUNIOR FAST EVO STRONG",
            "price": 60000,
            "img": "/Images/CASCO LS2 MX437JUNIOR FAST EVO STRONG.jpg",
            "stock": 10,
            "category": "accesorios",
            "description": "Aqui veremos la descripcion del producto"
        }
    ]


export const getProductos = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(product => product.category === categoryId))
        }, 2000)
    })
}


export const getProductosByTitle = (titleId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(product => product.title === titleId))
        }, 2000)
    })
}

export const getProductosById = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos.find(product => product.id === id))
        }, 2000)
    })
}

