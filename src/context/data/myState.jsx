{/* import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDB } from '../../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { deleteDoc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

function MyState(props) {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') //if its in light mode change it to dark mode
    {
      setMode('dark');//set to dark mode
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }



  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })
  //
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData()
      closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);
  //
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);



  //update
  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    //setProducts("")
  }

  //delete
  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  //order
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      //console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()

  }, []);

  //user
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
      setUser(usersArray);
      console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }




  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

  //filter
  const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')




  //contact
  const [contacts, setContacts] = useState({
    name: null,
    email: null,
    message: null,
    time: Timestamp.now()

  })
  const addContact = async () => {
    if (contacts.name == null || contacts.email == null || contacts.message == null) {
      return toast.error('Please fill all fields')
    }
    const contactRef = collection(fireDB, "contacts")
    setLoading(true)
    try {
      await addDoc(contactRef, contacts)
      toast.success("Contact Add successfully")
      setTimeout(() => {
        window.location.href = '/'
      }, 800);
      getContactData()
      closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setContacts("")
  }
  //get contact
  const [contact, setContact] = useState([]);
  const getContactData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "contacts"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let contactsArray = [];
        QuerySnapshot.forEach((doc) => {
          contactsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(contactsArray)
        console.log(contactsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getContactData();
  }, []);
//location reload
const location1=async=>{
  location.reload();
}


  //
  return (
    <MyContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      products, setProducts,addProduct, product, edithandle, updateProduct, deleteProduct,contact,setContact, searchkey, filterPrice, setFilterPrice, setSearchkey, filterType, setFilterType,  order, user, contacts, setContacts, addContact, location1
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState*/}


import React, { useEffect, useState } from 'react'
import MyContext from './myContext';
import { fireDB } from '../../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { deleteDoc } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

function MyState(props) {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') //if its in light mode change it to dark mode
    {
      setMode('dark');//set to dark mode
      document.body.style.backgroundColor = 'rgb(17, 24, 39)';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }



  const [loading, setLoading] = useState(false);
  //
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })
  //
  const addProduct = async () => {
    if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
      return toast.error('Please fill all fields')
    }
    const productRef = collection(fireDB, "products")
    setLoading(true)
    try {
      await addDoc(productRef, products)
      toast.success("Product Add successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData()
      closeModal()
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
    setProducts("")
  }

  const [product, setProduct] = useState([]);
  //
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductData();
  }, []);



  //update
  const edithandle = (item) => {
    setProducts(item)
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      setTimeout(() => {
        window.location.href = '/dashboard'
      }, 800);
      getProductData();
      setLoading(false)

    } catch (error) {
      setLoading(false)
      console.log(error)
    }
    //setProducts("")
  }

  //delete
  const deleteProduct = async (item) => {

    try {
      setLoading(true)
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      // toast.success('Product Deleted Falied')
      setLoading(false)
    }
  }

  //order
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "orders"))
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
        setLoading(false)
      });
      setOrder(ordersArray);
      //console.log(ordersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }


  useEffect(() => {
    getProductData();
    getOrderData()

  }, []);

  //user
  const [user, setUser] = useState([]);

  const getUserData = async () => {
    setLoading(true)
    try {
      const result = await getDocs(collection(fireDB, "users"))
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setLoading(false)
      });
     
      setUser(usersArray);
      //console.log(usersArray)
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }




  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
  }, []);

//filter
const [searchkey, setSearchkey] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterPrice, setFilterPrice] = useState('')
///////////////////////////////////////////////////////////////////

//contact
const [contacts, setContacts] = useState({
  name: null,
  email: null,
  message: null,
  time: Timestamp.now()

})
const addContact = async () => {
  if (contacts.name == null || contacts.email == null || contacts.message == null) {
    return toast.error('Please fill all fields')
  }
  const contactRef = collection(fireDB, "contacts")
 setLoading(true)
  try {
    await addDoc(contactRef, contacts)
    toast.success("Feedback Received successfully")
    setTimeout(() => {
      window.location.href = '/'
    }, 800);
    getContactData()
    closeModal()
    setLoading(false)
  } catch (error) {
    console.log(error)
   setLoading(false)
  }
  setContacts("")
}
//get contact
const [contact, setContact] = useState([]);
const getContactData = async () => {
  setLoading(true)
  try {
    const q = query(
      collection(fireDB, "contacts"),
      orderBy("time"),
  
    );
    const data1 = onSnapshot(q, (QuerySnapshot) => {
      let contactsArray = [];
      QuerySnapshot.forEach((doc) => {
        contactsArray.push({ ...doc.data1(), id: doc.id });
      });
      setProduct(contactsArray)
      console.log(contactsArray)
      setLoading(false);
    });
    return () => data1;
  } catch (error) {
    console.log(error)
   setLoading(false)
  }
}

useEffect(() => {
  getContactData();
}, []);

//location reload
const location1=async=>{
  location.reload();
}




  return (
    <MyContext.Provider value={{
      mode, toggleMode, loading, setLoading,
      products, setProducts, searchkey,filterPrice, setFilterPrice, setSearchkey,filterType, setFilterType,addProduct, product, edithandle, updateProduct, deleteProduct, order,user,location1,addContact,contact,contacts,setContact,setContacts
    }}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState