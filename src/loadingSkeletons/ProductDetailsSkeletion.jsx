const ProductDetailsSkeletion = () => {
  return (
    <div>
      {/* <h1>{slug}</h1> */}
      <div className="container mx-auto flex flex-col md:flex-row py-10 px-4 md:px-0">
        <div className="basis-1/2 px-24">
          <PhotoView src={product.product.image}>
            <img
              className="lg:h-[50vh] mx-auto cursor-pointer"
              src={product.product.image}
              alt=""
            />
          </PhotoView>
        </div>
        <div className="basis-1/2">
          <h3 className="text-2xl font-semibold">{product.product.name}</h3>

          <div className="flex items-center gap-2 my-3">
            <Badge size="lg">
              Price: $<span className="font-bold">{product.product.price}</span>
            </Badge>
            <Badge size="lg">
              Category:{' '}
              <span className="font-bold">{product.product.category.name}</span>
            </Badge>
            <Badge size="lg">
              Brand:{' '}
              <span className="font-bold">{product.product.brand.name}</span>
            </Badge>
            <Badge size="lg">
              Status:{' '}
              <span className="font-bold">{product.product.status}</span>
            </Badge>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Key features</h3>
            <div className="[&>*:first-child]:list-disc [&>*:first-child]:ml-[18px]">
              {parse(product.product.shortDescription)}
            </div>
          </div>
          <Button
            color="purple"
            size="xs"
            className="mt-3"
            onClick={() => dispatch(addToCart(product.product))}
          >
            <BsCartPlus className="mr-2 h-5 w-5" />
            Add to cart
          </Button>
        </div>
      </div>
      <ProductDescription
        title={product.product.name}
        description={product.product.description}
      />
    </div>
  );
};

export default ProductDetailsSkeletion;
