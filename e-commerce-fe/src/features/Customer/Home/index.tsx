import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Collection from './Collection'
import Layout from '../../../layout/Customer'
import ClothesSlider from '../../../features/Customer/ClothesSlider'
import { IProduct } from '../../../types'
import { getProductByCategory } from '../../../api/Customer/product'

function HomePage() {

    const [bestSeller, setBestSeller] = useState<IProduct []>() 
    const [newProduct, setNewProduct] = useState<IProduct []>() 
    const [recomendedForU, setRecomendedForU] = useState<IProduct []>() 

    useEffect(() =>{
        getBestSeller()
        getNewProduct()
        getRecomendedForU()
    },[])


    const getBestSeller = async () =>{
        const WomenId = "63eb12cf1781cbec3191c383"
        const res = await getProductByCategory(WomenId)
        setBestSeller(res?.data?.data)
    }
    const getNewProduct = async () =>{
        const menID ="63eb12ac1781cbec3191c381"
        const res = await getProductByCategory(menID)
        setNewProduct(res?.data?.data)
    }

    const getRecomendedForU = async () =>{
        const ChildId ="63eb133d1781cbec3191c385"
        const res = await getProductByCategory(ChildId)
        setRecomendedForU(res?.data?.data)
    }

  return (
    <Layout>
      <Banner/>
      <Collection/>
      <div className="title text-primary font-bold text-center py-5 text-3xl">
        Products
      </div>
      <ClothesSlider title="Best Seller" productArray={bestSeller} />
      <ClothesSlider title="New Products" productArray={newProduct}/>
      <ClothesSlider title="Recommended For You" productArray={recomendedForU}/>
    </Layout>
  )
}


export default HomePage