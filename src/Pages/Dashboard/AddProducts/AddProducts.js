import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import ButtonBlack from "../../Shared/Button/ButtonBlack";


const AddProducts = () => {
    const {user} = useContext(AuthContext)

    const time = new Date().toLocaleTimeString();

    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || "/dashboard/myproduct";

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const sellerName = form.sellerName.value;
        const name = form.productName.value;
        const location = form.location.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.originalPrice.value;
        const purchase = form.purchase.value;
        const used = form.used.value;
        const phone = form.phone.value;
        const category = form.category.value
        const categoryId = form.categoryId.value
        const condition = form.condition.value;
        const description = form.description.value;
        const image = form.image.files[0];

        const formData = new FormData();
        formData.append("image", image);
        
        const url = `https://api.imgbb.com/1/upload?key=4655ebc89a3bf6ba2197737e71a73ff3`;
        
        fetch(url, {
          method: "POST",
          body: formData,
        })
        .then(res => res.json())
        .then(imageData => {
          const product = {
            name, 
            email, 
            sellerName, 
            location, 
            originalPrice, 
            resalePrice, 
            purchase,
            used, 
            category,  
            categoryId, 
            phone, 
            condition,
            description, 
            image: imageData.data.display_url,
            isAdvertise: false,
            isSellerVerified: false,
            isReported: false,
            postTime:time,
          }
          addProduct(product)

          console.log(imageData.data.display_url)
        })

        const addProduct = product => {
          fetch('https://luxury-wheel-server.vercel.app/addproduct', {
          method: 'POST',
          headers: {
            'content-type' : 'application/json'
          },
          body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged === true){
            toast.success('Product Add Successful')
            navigate(from, { replace: true })
          }else{
            toast.error(data.message)
            form.reset()
          }
        })
        }
        

    }
  return (
    <div>
      <div>
        <section class="max-w-4xl p-6 mx-auto bg-gray-600 rounded-md shadow-md dark:bg-gray-800 mt-10">
          <h1 class="text-2xl text-center font-bold text-white capitalize dark:text-white">
          Add a New Product
          </h1>
          <form onSubmit={handleAddProduct}> 
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-white dark:text-gray-200" for="emailAddress">
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  name='email'
                  defaultValue={user?.email}
                  disabled
                  type="email"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="sellerName">
                  Seller Name
                </label>
                <input
                    name='sellerName'
                  id="sellerName"
                  type="text"
                  defaultValue={user?.displayName}
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="productName">
                  Product Name
                </label>
                <input
                    name='productName'
                  id="productName"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="location">
                    Location
                </label>
                <input
                name="location"
                  id="location"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="originalPrice">
                    Original Price $
                </label>
                <input
                name="originalPrice"
                  id="price"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label class="text-white dark:text-gray-200" for="price">
                    Resale Price
                </label>
                <input
                name="resalePrice"
                  id="price"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="purchase"
                >
                  Years Of Purchase
                </label>
                <input
                name="purchase"
                  id="purchase"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="mobileNumber"
                >
                  Mobile Number
                </label>
                <input
                name="phone"
                  id="mobileNumber"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="mobileNumber"
                >
                  Category
                </label>
                <select name="category" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>BMW</option>
                  <option>Mercedes-Benz</option>
                  <option>Audi</option>
                </select>
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="mobileNumber"
                >
                  Category ID
                </label>
                <select name="categoryId" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="condition"
                >
                  Condition Type
                </label>
                <select name="condition" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="itemDetails"
                >
                  Years Of Used
                </label>
                <input
                name="used"
                  id="mobileNumber"
                  type="text"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  class="text-white dark:text-gray-200"
                  for="description"
                >
                  Description
                </label>
                <textarea
                name="description"
                  id="textarea"
                  type="textarea"
                  class="block w-full px-4  mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                ></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-white">
                  Image
                </label>
                <div class="mt-1 flex mx-auto justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div class="space-y-1    text-center">
                    <svg
                      class="mx-auto h-12 w-12 text-white"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label
                        for="file-upload"
                        class="relative cursor-pointer bg-white rounded-md font-medium text-black hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span class="">Upload a file</span>
                        <input
                          id="file-upload"
                          name="image"
                          type="file"
                          class="sr-only"
                        />
                      </label>
                      <p class="pl-1 text-white">or drag and drop</p>
                    </div>
                    <p class="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex justify-end mt-6">
              <ButtonBlack
                type="submit"
                className="w-full px-8 py-3 text-white font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white"
              >
                Submit Product
              </ButtonBlack>
            </div>
          </form>
        </section>

        
      </div>
    </div>
  );
};

export default AddProducts;
