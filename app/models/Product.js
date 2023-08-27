//import * as slugify from 'slugify';

let i = 1;
class Product {
    id;
    title;
    slug;
    description;
    grade;
    category;

    constructor(title, slug, description, grade, category) {
        this.id = i
        this.title = title
        this.slug = slug
        this.description = description
        this.grade = grade
        this.category = category
        i++
    }
}

export default Product