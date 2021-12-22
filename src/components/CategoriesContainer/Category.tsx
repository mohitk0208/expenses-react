import { category } from "../../types/category.types"

interface CategoryProp {
  category: category
}

const Category: React.FC<CategoryProp> = ({ category }) => {
  return (
    <div className=" h-52 relative rounded-md" >
      <img className="w-full h-full object-cover" src={category.imageUrl} alt="" />
      <p className="absolute left-0 right-0 py-3 px-2 text-center font-bold text-lg text-amber-300 bottom-0 bg-black/20 " >{category.categoryName}</p>
    </div>
  )
}

export default Category