import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { userProfile } from '../../redux/actions/user.actions.js'; 
import UserAccount from '../../components/UserAccount/UserAccount.jsx'; 
import AccountData from '../../data/AccountData.json'; 
import EditUsername from '../../components/Username/Username.jsx'; 


function Profile() {
  
  const token = useSelector((state) => state.auth.token);

  const dispatch = useDispatch(); 

  useEffect(() => {
    if (!token) return; 

    
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          console.error("Erreur lors de la récupération du profil");
          return;
        }

        const { body } = await response.json();

        
        const userData = {
          createdAt: body.createdAt,
          updatedAt: body.updatedAt,
          id: body.id,
          email: body.email,
          firstname: body.firstName,
          lastname: body.lastName,
          username: body.userName,
        };

        
        dispatch(userProfile(userData));
      } catch (error) {
        console.error("Erreur réseau ou serveur :", error);
      }
    };

    fetchUserData(); 
  }, [token, dispatch]); 

  return (
    <div className='profile-page'>
      <main className='bg-dark'>
       
        <EditUsername />
        
        
        {AccountData.map((data) => (
          <UserAccount 
            key={data.id} 
            title={data.title} 
            amount={data.amount} 
            description={data.description} 
          />
        ))}
      </main>
    </div>
  );
}

export default Profile; 