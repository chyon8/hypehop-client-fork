import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import EditReview from '../components/EditReview';


function EditPage() {

  const {id} = useParams();

  const [data, setData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true)


  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await fetch(`/album/api/review/edit/${id}`);
        const result = await response.json();
        setData(result);

       
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsAuthenticated(false);
   
      }
    };

    fetchData();
  }, []);

  if (!isAuthenticated) {
   

  }
  
  return (
    <div className="Edit-review">
     <h3>EditPage.jsx</h3>
     <h4>작업중..</h4>

<EditReview data={data} id={id}/>

    </div>

  );
}

export default EditPage;
