import products from '../models/data.js';

const allControllers = {
  home:(req, res) => { 
    const category = "all"
    const product = products
    res.render('list', { product, category
    })
  },

  legumes:(req, res) => { 
    const category = "legumes"
    const product = products.filter(product => product.category === 'legumes')
    res.render('list', { product, category
    });
  },

  fruits:(req, res) => { 
    const category = "fruits"
    const product = products.filter(product => product.category === 'fruits')
    res.render('list', { product, category
    });
  },

  about:(req, res) => { 
    const category = ""
     res.render('about', { category
     });
   },

  products:(req, res, next) => {
    const category = ""
    const slug = req.params.slug;
    const product = products.find(element => element.slug === slug);
    console.log(slug)
    if (product) {
        res.render('product', {product,category});
        console.log(product)
    }
    else {
        
        next();
    }
    },

    top:(req, res) => { 
      const category = ""
      const product = products.filter(product => product.grade === 5)
      console.log(product)
      res.render('list', { product, category
      });
    },
}



export default allControllers