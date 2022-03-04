import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

const DataProvider = (props) => {

    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Maroon Patterned Top",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/kj7gwi80-0/top/b/l/g/l-117tkr2636-selvia-original-imafytvnzca5cyrd.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kj7gwi80-0/top/l/o/9/l-117tkr2636-selvia-original-imafytvngb4xkauh.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kj7gwi80-0/top/m/s/f/l-117tkr2636-selvia-original-imafytvnfngs8r85.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kj7gwi80-0/top/w/z/4/l-117tkr2636-selvia-original-imafytvnmgzf7bza.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1,
        },
        {
            "_id": "2",
            "title": "Pride Colored Top",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/kihqz680/top/z/k/k/s-jb-tsh-gl33-anthra-juneberry-original-imafy9qy4nb2ezk7.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kihqz680/top/z/k/k/m-jb-tsh-gl33-anthra-juneberry-original-imafy9qyffn9sccw.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kihqz680/top/z/k/k/m-jb-tsh-gl33-anthra-juneberry-original-imafy9qyummwdke9.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kflftzk0/top/q/z/w/l-jb-tsh-54-rsb-juneberry-original-imafwyzfghgcgqpe.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1,

        },
        {
            "_id": "3",
            "title": "Blue Patterned Top",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/kbi9h8w0/top/a/w/k/m-tttp003711-tokyo-talkies-original-imafsugxdgd8bhfv.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kbi9h8w0/top/a/w/k/s-tttp003711-tokyo-talkies-original-imafsugxhmtxtgsw.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kbi9h8w0/top/a/w/k/m-tttp003711-tokyo-talkies-original-imafsugxs8ent75n.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/kbi9h8w0/top/a/w/k/xl-tttp003711-tokyo-talkies-original-imafsugx2wgtcymp.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1,
        },
        {
            "_id": "4",
            "title": "Yellow Cotton Chudidar ",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/r/w/g/2xl-ya7077-aks-original-imafgkegudfjvyd8.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/r/w/g/2xl-ya7077-aks-original-imafgkemtpg6qv7k.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/r/w/g/2xl-ya7077-aks-original-imafgkembcycwpwp.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/r/w/g/2xl-ya7077-aks-original-imafgkengrdjrbvz.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1,
        },
        {
            "_id": "5",
            "title": "Baby Pink Cotton Chudidar",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbemvsxf2g.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tb2qwxqfxj.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbeg5tyj4b.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbmyhpvhhv.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1,
        },
        {
            "_id": "6",
            "title": "Punjabi Patiala (Indigo)",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k7gikcw0/kurta/q/3/x/xl-8072mj-blue-libas-original-imafpz7gqjhf8thg.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k7gikcw0/kurta/q/3/x/xs-8072mj-blue-libas-original-imafpz7gfcwmrusa.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k7gikcw0/kurta/q/3/x/xl-8072mj-blue-libas-original-imafpz7gswhmfgpd.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k7gikcw0/kurta/q/3/x/s-8072mj-blue-libas-original-imafpz7ggaghwbqv.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1,
        },
        {
            "_id": "7",
            "title": "Baby Pink Cotton Chudidar",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbemvsxf2g.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tb2qwxqfxj.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbeg5tyj4b.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbmyhpvhhv.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1,
        },
        {
            "_id": "8",
            "title": "Baby Pink Cotton Chudidar",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbemvsxf2g.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tb2qwxqfxj.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbeg5tyj4b.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbmyhpvhhv.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1,
        },
        {
            "_id": "9",
            "title": "Baby Pink Cotton Chudidar",
            "images": [
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbemvsxf2g.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tb2qwxqfxj.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbeg5tyj4b.jpeg?q=50",
                "https://rukminim1.flixcart.com/image/800/960/k3xcdjk0pkrrdj/kurta/z/f/g/s-ya5970-aks-original-imafk9tbmyhpvhhv.jpeg?q=50",
            ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "BeMyStyle Exclusive",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1,
        },
    ])

    const [cart,setCart] = useState([])



    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id 
        })
        if(check){
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("This product has already been added to cart.")
        }
    }


    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])
    
    const value = {
        products: [products, setProducts],
        cart: [cart,setCart],
        addCart: addCart
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider
