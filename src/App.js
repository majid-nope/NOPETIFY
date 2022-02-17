import { useEffect} from 'react';
import './App.css';
import Login from './Components/Login/Login';
import { responseUrl } from './config/spotify';
import SpotifyWebApi from 'spotify-web-api-node'
import {useDataLayerValue} from './config/DataLayer'
import Player from './Components/Player/Player';

 function App() {

  var spotify = new SpotifyWebApi()

 
 

  const [{user, token} , dispatch]= useDataLayerValue()
  
  

  useEffect(() => {
    const hash = responseUrl()
    window.location.hash = ""
    const _token = hash.access_token
    if (_token) {
      dispatch({
        type : "SET_TOKEN",
        token : _token
      })
      spotify.setAccessToken(_token)
      spotify.getMe().then((usr) => {
        dispatch({
          type:"SET_USER",
          user:usr

        })
        console.log(usr)
        
        



      })
      spotify.getUserPlaylists().then((playlists)=>(
        dispatch({
          type:"SET_PLAYLIST",
          playlists:playlists
          
        })

        
      ))
      spotify.getMe().then((images)=>(
        dispatch({
          type:"SET_DP",
          user_dp:images.body.images[0].url
        })
      ))
      spotify.getMe().then((followers)=>(
        dispatch({
          type:"SET_FOLLOWERS",
          followers:followers.body.followers.total
        })
        
      ))
      spotify.getFollowedArtists().then((following)=>(
        dispatch({
          type:"SET_FOLLOWING",
          following:following.body.artists.total
        })
        
        
      ))
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS_NO",
          playlists:playlists.body.total


        })
        

      })

        
        
    
  
      
      
      



      

      
       
      
      
    }

    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
 
   
  
  
   
  return (
    <div className="App">
      {token?<Player details={user}/>:<Login/>}
    </div>
  );
}

export default App;
