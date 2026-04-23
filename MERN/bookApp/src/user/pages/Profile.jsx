import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { FaUserCircle } from 'react-icons/fa'
import Edit from '../components/Edit'
import { FaPlus } from 'react-icons/fa6'
import { Bounce, ToastContainer, toast } from 'react-toastify'
import { addBookAPI, getUserProfileBooksAPI, getUserPurchasedAPI, removeBooksAPI } from '../../services/allAPI'
import { server_url } from '../../services/server_url'

function Profile() {

  const [username, setUsername] = useState("")
  const [dp, setDp] = useState("")
  const [userBooks, setUserBooks] = useState([])
  const [purchaseBooks, setPurchaseBooks] = useState([])

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUsername(user?.username)
      setDp(user?.picture)
    }
    getUserBooks()
    getUserPurchaseBooks()
  }, [])

  const [sellBookStatus, setSellBookStatus] = useState(true);
  const [bookStatus, setBookStatus] = useState(false);
  const [purchaseStatus, setPurchaseStatus] = useState(false);

  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", pages: "", imageUrl: "", price: "", discountPrice: "",
    abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImg: []
  })

  const [preview, setPreview] = useState("")
  // console.log(bookDetails);

  const [previewList, setPreviewList] = useState([])

  const handleImageUpload = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    const uploadArray = bookDetails.uploadImg
    uploadArray.push(file)
    setBookDetails({ ...bookDetails, uploadImg: uploadArray })
    const url = URL.createObjectURL(file)
    setPreview(url)
    const demoPreviewList = previewList
    demoPreviewList.push(url)
    setPreviewList(demoPreviewList)
  }

  const handleUploadBooks = async () => {
    const { title, author, pages, imageUrl, price, discountPrice,
      abstract, publisher, language, isbn, category, uploadImg } = bookDetails
    if (!title || !author || !pages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !language || !isbn || !category || uploadImg.length == 0) {
      toast.info("Please fill missing fields...")
    }
    else {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Authorization": `Bearer ${token}`
        }
        const reqBody = new FormData();
        for (let key in bookDetails) {
          if (key != 'uploadImg') {
            reqBody.append(key, bookDetails[key])
          }
          else {
            bookDetails.uploadImg.forEach(item => {
              reqBody.append('uploadImg', item)
            })
          }
        }
        const result = await addBookAPI(reqBody, reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success("Book added")
        }
        else if (result.status == 409) {
          toast.warning(result.response.data)
        }
        else {
          toast.error("Something went wrong")
        }
        handleResetForms()
      }
    }
  }

  const handleResetForms = () => {
    setBookDetails({
      title: "", author: "", pages: "", imageUrl: "", price: "", discountPrice: "",
      abstract: "", publisher: "", language: "", isbn: "", category: "", uploadImg: []
    })
    setPreview("")
    setPreviewList([])
  }

  const getUserBooks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserProfileBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      }
      else {
        console.log(result);
      }
    }
    else {
      console.log("Error");
    }
  }

  const getUserPurchaseBooks = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await getUserPurchasedAPI(reqHeader)
      if (result.status == 200) {
        setPurchaseBooks(result.data)
      }
      else {
        console.log(result);
      }
    }
    else {
      console.log("Error");
    }
  }
  
  const removeBooks = async(id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      const result = await removeBooksAPI(id, reqHeader)
      if (result.status == 200) {
        toast.success("Book details deleted")
        getUserBooks()
      }
      else {
        console.log(result);
      }
    }
  }

  return (
    <div>
      <Header />
      <div style={{ height: '200px' }} className='bg-black'></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3'>
        <img src={dp == "" ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : dp.startsWith('https://lh3.googleusercontent.com/') ? dp : `${server_url}/uploads/${dp}`} alt="profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </div>
      <div className='md:flex justify-between px-20 mt-5'>
        <div className='flex items-center'>
          <h1 className='font-bold md:text-3xl text-2xl'>{username}</h1>
          <FaUserCircle className='text-blue-400 ms-3' />
        </div>
        <Edit />
      </div>
      {/* paragraph */}
      <p className='md:px-20 px-5 my-5 text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptate quibusdam aliquid doloremque quae a temporibus
        assumenda dolorum, fuga nostrum officiis, iure ut mollitia. Tempore a eligendi et cupiditate provident.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptas, ut dicta explicabo labore in suscipit animi
        commodi magni assumenda accusamus. Debitis, fugiat. Dolorum quas asperiores laboriosam perferendis sunt aliquid.
      </p>
      {/* tabs */}
      <div className='md:px-40'>
        <div className='flex justify-center items-center my-8 font-medium text-lg m-3'>
          <p onClick={() => { setSellBookStatus(true); setBookStatus(false); setPurchaseStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
          <p onClick={() => { setBookStatus(true); setSellBookStatus(false); setPurchaseStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Book Status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' :
            'p-4 border-b border-gray-200 cursor-pointer'}>Purchase Book History</p>
        </div>
      </div>

      {/* sell book status */}

      {
        sellBookStatus &&
        <div>
          <div className='p-10 my-20 mx-5 bg-gray-200'>
            <div className='text-center text-3xl font-medium'>Book Details</div>
            <div className='md:grid grid-cols-2 mt-10 w-full'>
              <div className='px-3'>
                <div className='mb-3'>
                  <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='Title' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.pages} onChange={e => setBookDetails({ ...bookDetails, pages: e.target.value })} type="text" placeholder='No. of Pages' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.imageUrl} onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder='Image URL' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Price' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} placeholder='Abstract' name="" id="" rows={'5'} className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' >
                  </textarea>
                </div>
              </div>
              <div className='px-3'>
                <div className='mb-3'>
                  <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.language} onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" placeholder='Language' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3'>
                  <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='w-full p-2 rounded placeholder-gray-400 text-black bg-white' />
                </div>
                <div className='mb-3 flex justify-center items-center mt-10'>
                  <label htmlFor="bookImage">
                    <input onChange={e => handleImageUpload(e)} type="file" name='' id='bookImage' className='hidden' />
                    <img src={preview ? preview : "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"} width={'200px'} height={'200px'} alt="book" />
                  </label>
                </div>
                {preview && <div className='flex items-center justify-center'>
                  {
                    previewList?.map((bookImgUrl, index) => (
                      <img key={index} src={bookImgUrl} width={'70px'} height={'70px'} alt="book-img" />
                    ))
                  }
                  {
                    previewList.length < 3 && <label htmlFor='bookUpload'>
                      <input onChange={e => handleImageUpload(e)} type="file" name='' id='bookUpload' className='hidden' />
                      <FaPlus className='ms-2' />
                    </label>
                  }
                </div>}
              </div>
            </div>
            {/* footer */}
            <div className='p-3 w-full flex md:justify-end justify-center mt-8'>
              <button onClick={handleResetForms} className='py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:border hover:text-black'>Reset</button>
              <button onClick={handleUploadBooks} className='py-2 px-3 rounded bg-blue-900 text-white ms-3 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600'>Submit</button>
            </div>
          </div>
        </div>
      }

      {/* book status */}

      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          {userBooks.length > 0 ? userBooks.map(book => (
            <div key={book?._id} className='p-5 rounded mt-4 bg-gray-100'>
              <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                  <h1 className='text-2xl'>{book?.title}</h1>
                  <h2 className='text-xl'>{book?.author}</h2>
                  <h3 className='text-lg text-blue-500'>${book?.discountPrice}</h3>
                  <p className='text-justify'>{book?.abstract}</p>
                  <div className='flex mt-3'>
                    {book?.status == 'pending' ? <img width={'80px'} height={'80px'} src='https://t3.ftcdn.net/jpg/01/71/60/84/360_F_171608484_figMqbjvhS7T8uCpPZDErlLI4HeWklYG.jpg' alt='pending' />
                      : book?.status == 'approved' ?
                        <img width={'80px'} height={'80px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" /> :
                        <img width={'120px'} height={'120px'} src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" alt="sold icon" />
                    }
                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                  <img src={book.imageUrl} alt="book" className='w-full' />
                  <div className='mt-4 flex justify-end'>
                    <button onClick={() => removeBooks(book?._id)} className='py-2 px-3 rounded bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600'>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )) :
            <p>No Books Added Yet.....</p>
          }
        </div>
      }

      {/* purchase history */}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
          {/* duplicate div according to book */}
          {purchaseBooks?.length > 0 ? purchaseBooks?.map(book => (
            <div className='p-5 rounded mt-4 bg-gray-100'>
              <div className='md:grid grid-cols-[3fr_1fr]'>
                <div className='px-4'>
                  <h1 className='text-2xl'>{book.title}</h1>
                  <h2 className='text-xl'>{book.author}</h2>
                  <h3 className='text-lg text-blue-500'>$ {book.discountPrice}</h3>
                  <p className='text-justify'>{book.abstract}</p>
                  <div className='flex mt-3'>
                    <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/023/629/698/non_2x/web-button-icon-purchase-button-free-png.png" alt="purchase" />
                  </div>
                </div>
                <div className='px-4 mt-4 md:mt-0'>
                  <img src={book.imageUrl} alt="book" className='w-full' />
                </div>
              </div>
            </div>
          )) :
            <p>No books purchased yet</p>
          }
        </div>
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default Profile
